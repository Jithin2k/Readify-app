import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// ADD PROCUCT

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestseller } = req.body;

    const image = req.file ? req.file : null;

    let imageUrl = null;

    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Product Added Successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error.message,
    });
  }
};

// LIST PRODUCT

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error.message,
    });
  }
};

// REMOVE PROCUCT

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(200).json({success:true,message:"Product Removed"})
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error.message,
    });
  }
};

//  SINGLE PRODUCT

const singleProduct = async (req, res) => {
  try {
    const {productId} = req.body;

    const product = await productModel.findById(productId);

    res.status(200).json({success:true,product})
  } catch (error) {
      return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };

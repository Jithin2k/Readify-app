// ADD TO CART

import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Added To Cart" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

console.log(cartItems);

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    cartData[itemId] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Quantity Updated", cartData: cartData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const removeFromCart = async (req, res) => {
 try {
   const userId = req.userId;
  const { itemId } = req.body;

  const user = await userModel.findById(userId);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  delete user.cartData[itemId];
   user.markModified("cartData");
  await user.save();

  res.status(200).json({ success: true, message: "Item removed from cart" });
 } catch (error) {
   res.status(400).json({ success: false, message: error.message });
 }

};

const getUserCart = async (req, res) => {
  try {
    const userId = req.userId;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    const cartItems = await Promise.all(
      Object.entries(cartData).map(async ([bookId, quantity]) => {
        const book = await productModel.findById(bookId);
        if (!book) return null;

        return {
          id: book._id,
          name: book.name,
          image: book.image,
          price: book.price,
          quantity,
        };
      })
    );

    res
      .status(200)
      .json({ success: true, cartItems: cartItems.filter(Boolean) });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart, removeFromCart };

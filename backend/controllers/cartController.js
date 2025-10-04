// ADD TO CART

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

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    cartData[itemId] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ success: true, message: "Quantity Updated" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    res.status(200).json({ success: true, cartData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };

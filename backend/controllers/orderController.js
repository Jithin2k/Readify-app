import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// placing order using COD

const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res
      .status(200)
      .json({ success: true, message: "Order Placed", order: newOrder });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Stripe
const placeOrderStripe = async (req, res) => {};

// Razor Pay
const placeOrderRazor = async (req, res) => {};

// ALL Orders for admin panel

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// User Orders
const userOrders = async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await orderModel.find({ userId });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status },{new:true});
    res.status(200).json({ success: true, message: "Status Updated" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Status Updated" });
  }
};

export {
  placeOrder,
  placeOrderRazor,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};

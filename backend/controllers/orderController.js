import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Gateway Initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Global Variables
const currency = "usd"
const deliveryCharge = 10;
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
const placeOrderStripe = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity : item.quantity
    }));

    line_items.push({
       price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
       quantity : 1
    })

    const session = await stripe.checkout.sessions.create({
      success_url : `${origin}/verify?success=true&orderId=${newOrder._id}`,
       cancel_url : `${origin}/verify?success=false&orderId=${newOrder._id}`,
       line_items,
       mode:'payment'
    })

    res.status(200).json({success:true,session_url : session.url})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const verifyStripe = async(req,res) =>{
    const userId = req.userId;
    let {orderId,success} = req.body;

    try {
      success = success === "true";
      if(success){
        await orderModel.findByIdAndUpdate(orderId,{payment:true},{new:true});
        await userModel.findByIdAndUpdate(userId,{cartData:{}},{new:true});

        res.status(200).json({success:true})
      } else{
        await orderModel.findByIdAndDelete(orderId);
        res.status(400).json({success:false})
      }
    } catch (error) {
          res.status(400).json({ success: false, message: error.message });
    }
}

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

    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
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
  verifyStripe
};

import express from "express";
import { allOrders, placeOrder, placeOrderRazor, placeOrderStripe, updateStatus, userOrders } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js"
const orderRouter = express.Router();

// AdminRoutes
orderRouter.post("/list",adminAuth,allOrders);
orderRouter.post("/staus",adminAuth,updateStatus);

// Payment Routes
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/stripe",authUser,placeOrderStripe);
orderRouter.post("/razorpay",authUser,placeOrderRazor);

// User orders
orderRouter.post("/userorders",authUser,userOrders);

export default orderRouter;
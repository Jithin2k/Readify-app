import express from "express";
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js"
const orderRouter = express.Router();

// AdminRoutes
orderRouter.post("/list",adminAuth,allOrders);
orderRouter.post("/status",adminAuth,updateStatus);

// Payment Routes
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/stripe",authUser,placeOrderStripe);

// User orders
orderRouter.post("/userorders",authUser,userOrders);

// Verify Payment
orderRouter.post("/verifyStripe",authUser,verifyStripe)
export default orderRouter;
import React,{useState} from 'react'
import Title from "../Components/Title"
import CartTotal from "../Components/CartTotal"
import { assests } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../Store/cartSlice";
import { toast } from "react-toastify";
import { addOrder } from "../Store/orderSlice";

const PlaceOrder = () => {
    const [paymentMethod, setPaymentMethod] = useState("cod");

      const navigate = useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.cartItems)
  const total = useSelector((state) => getCartTotal(state.cart));

    const handlePlaceOrder = () =>{
  if(cartItems.length === 0) {
    toast.error("Cart is Empty")
    return
  }

  const newOrder = {
    id : Date.now(),
    items : cartItems,total,
    date  : new Date().toISOString(),
    status : "Pending"
  };

  dispatch(addOrder(newOrder));
  dispatch(clearCart());
  navigate("/orders")
}
  return (
    <div  className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
         <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="email"
          placeholder="Email ID"
        />
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

         <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col sm:flex-row">
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="flex items-center gap-3 border py-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  paymentMethod === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assests.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("razorpay")}
              className="flex items-center gap-3 border py-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assests.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex items-center gap-3 border py-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-sm text-gray-500 font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={handlePlaceOrder} className="bg-black text-white px-16 py-3 text-sm cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder

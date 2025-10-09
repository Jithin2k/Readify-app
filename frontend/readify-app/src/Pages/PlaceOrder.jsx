import React, { useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assests } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../Store/cartSlice";
import { toast } from "react-toastify";
import { addOrder } from "../Store/orderSlice";
import { backendUrl } from "../Store/urlSlice.js";
import axios from "axios";

const PlaceOrder = () => {
  const allBooks = useSelector((store) => store.bookData.allBooks);
  const cartItems = useSelector((store) => store.cart.cartItems || []);
  const total = useSelector((state) => getCartTotal(state.cart));
  const token = localStorage.getItem("token");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handlePlaceOrder = () => {
  //   if (cartItems.length === 0) {
  //     toast.error("Cart is Empty");
  //     return;
  //   }

  //   const newOrder = {
  //     id: Date.now(),
  //     items: cartItems,
  //     total,
  //     date: new Date().toISOString(),
  //     status: "Pending",
  //   };

  //   dispatch(addOrder(newOrder));
  //   dispatch(clearCart());
  //   navigate("/orders");
  // };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = cartItems.map((item) => ({
        bookId: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      }));
      let orderData = {
        address: formData,
        items: orderItems,
        amount: total + 5,
      };

      switch (paymentMethod) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token: token } }
          );

          if (response.data.success) {
            dispatch(clearCart());
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token: token } }
          );
          console.log(responseStripe);
          
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            onChange={onChangeHandler}
            required
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          placeholder="Email ID"
        />
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="text"
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="number"
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full"
            type="text"
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full"
          type="number"
          onChange={onChangeHandler}
          name="phone"
          required
          value={formData.phone}
          placeholder="Phone"
        />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
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
            {/* <div
              onClick={() => setPaymentMethod("razorpay")}
              className="flex items-center gap-3 border py-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assests.razorpay_logo} alt="" />
            </div> */}
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
            <button
              type="submit"
              // onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

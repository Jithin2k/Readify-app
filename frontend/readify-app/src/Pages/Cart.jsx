import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  setCartItems,
  updateQuantity,
} from "../Store/cartSlice";
import { toast } from "react-toastify";
import Title from "../Components/Title";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";
import CartTotal from "../Components/CartTotal";
import { backendUrl } from "../Store/urlSlice";
import axios from "axios";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = async (id) => {
   const token = localStorage.getItem("token");

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/remove",
          { itemId: id },
          { headers: { token: token } }
        );
         dispatch(removeFromCart({ id }));
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to remove item from server");
      }
    }
  };

  const handleQuantity = async (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));

    const token = localStorage.getItem("token");

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId: id, quantity },
          { headers: { token: token } }
        );
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };

  const getUserCartData = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token: token } }
      );
      console.log(response);
      dispatch(setCartItems(response.data.cartItems));
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleProceedToPay = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is Empty");
      return;
    }
    navigate("/placeorder");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserCartData(token);
    }
  }, []);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="py-4 border-t border-b text-green-950 grid grid-cols-[4fr_.5fr_.5fr] sm:grid-cols-[4fr_2fr_2fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={item.image} alt="" />
                <div>
                  <p className="text-sm sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  handleQuantity(item.id, parseInt(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <p
                className="cursor-pointer"
                onClick={() => handleRemoveItem(item.id)}
              >
                <MdDeleteOutline size={30} />
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center gap-5">
            <h2 className="text-center sm:text-2xl text-5xl text-green-900">
              Cart Is Empty!!!
            </h2>
            <p>
              <FaRegSadCry size={60} />
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
        <div className="w-full text-start">
          <button
            onClick={handleProceedToPay}
            className="bg-green-800 text-white text-sm my-8 px-8 py-3 cursor-pointer"
          >
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

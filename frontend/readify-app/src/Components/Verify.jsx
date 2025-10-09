import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCartItems } from "../Store/cartSlice";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../Store/urlSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Verify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = localStorage.getItem("token");

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token: token } }
      );
      if(response.data.success){
       dispatch(setCartItems({}))
        navigate("/orders")
      } else{
        navigate("/cart")
      }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);
  return <div></div>;
};

export default Verify;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { backendUrl } from "./Store/urlSlice";
import { setBooks } from "./Store/bookSlice";

const App = () => {
  const [bookData, setBookData] = useState([]);
  const dispatch = useDispatch();
  // const token = "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AcmVhZGlmeS5jb21yZWFkaWZ5QDJr.0C666gcG5k9pXHrHwkZ8eDgoVIfMItjw5UemCC_3q5s"

  const getBooksData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
  
      dispatch(setBooks(response.data.products))
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(()=>{
    getBooksData()
  },[])

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book/:bookId" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

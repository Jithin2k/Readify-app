import React, { useState } from "react";
import { assests } from "../assets/assets.js";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { setShowSearchBar } from "../Store/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Store/urlSlice.js";
import { clearCart } from "../Store/cartSlice.js";

const Navbar = () => {
  const [sideMenu, setSidemenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const token = useSelector((store) => store.userToken.token);


  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(""));
    dispatch(clearCart())
    navigate("/login");
  };

  const openSearchBar = () => {
    if (location.pathname !== "/collections") {
      navigate("/collection");
    }
    dispatch(setShowSearchBar(true));
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <Link to="/">
          {" "}
          <img className="w-36 sm:w-40" src={assests.logo} alt="" />
        </Link>
      </div>

      <ul className="hidden sm:flex items-center gap-5 font-medium ">
        <NavLink
          to="/"
          className="text-[#333333] hover:text-[#36d1b4] hover:scale-105  cursor-pointer"
        >
          Home
        </NavLink>
        <NavLink
          to="/collection"
          className="text-[#333333] hover:text-[#36d1b4] hover:scale-105  cursor-pointer"
        >
          Collection
        </NavLink>
        <NavLink
          to="/about"
          className="text-[#333333] hover:text-[#36d1b4] hover:scale-105  cursor-pointer"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-[#333333] hover:text-[#36d1b4] hover:scale-105 cursor-pointer"
        >
          Contact
        </NavLink>
      </ul>

      <div className="flex items-center gap-5 cursor-pointer">
        <p onClick={openSearchBar}>
          <IoSearch size={30} />
        </p>
       <div className="group relative">
  {token ? (
    <>
      <p>
        <CgProfile size={30} className="cursor-pointer" />
      </p>
      <div className="group-hover:block hidden absolute right-0 dropdown-menu py-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-[#333333] font-medium rounded">
          <p className="cursor-pointer hover:text-[#36d1b4]">My Profile</p>
          <Link to="/orders">
            <p className="cursor-pointer hover:text-[#36d1b4]">Orders</p>
          </Link>
          <p onClick={logout} className="cursor-pointer hover:text-[#36d1b4]">Logout</p>
        </div>
      </div>
    </>
  ) : (
    <Link to="/login">
      <CgProfile size={30} className="cursor-pointer" />
    </Link>
  )}
</div>

        <Link to="/cart">
          <p>
            <FaCartShopping size={30} />
          </p>{" "}
        </Link>
        <div onClick={() => setSidemenu(true)} className="sm:hidden">
          <p>
            <IoMdMenu size={30} />
          </p>
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`sm:hidden absolute top-0 bottom-0 right-0 overflow-hidden text-[#333333] bg-slate-50 transition-all duration-300 ${
          sideMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col my-3 px-6">
          <div
            onClick={() => setSidemenu(false)}
            className="flex items-center  my-5 gap-3 cursor-pointer"
          >
            <FaArrowLeft size={30} />
            <p>Back</p>
          </div>

          <ul className="flex flex-col justify-center gap-y-8 text-center font-medium">
            <Link to="/">
              {" "}
              <li
                className="hover:bg-[#36d1b4] rounded-lg py-2 hover:text-white"
                onClick={() => setSidemenu(false)}
              >
                Home
              </li>{" "}
            </Link>
            <Link to="/collections">
              <li
                className="hover:bg-[#36d1b4] rounded-lg py-2 hover:text-white"
                onClick={() => setSidemenu(false)}
              >
                Collection
              </li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li
                className="hover:bg-[#36d1b4] rounded-lg py-2 hover:text-white"
                onClick={() => setSidemenu(false)}
              >
                About
              </li>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <li
                className="hover:bg-[#36d1b4] rounded-lg py-2 hover:text-white"
                onClick={() => setSidemenu(false)}
              >
                Contact
              </li>{" "}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

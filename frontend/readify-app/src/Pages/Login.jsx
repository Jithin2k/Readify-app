import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { backendUrl, setToken } from "../Store/urlSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const userToken = useSelector((store) => store.userToken.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          dispatch(setToken(response.data.token));
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message || "Invalid Credentials");
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          dispatch(setToken(response.data.token));
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message || "Invalid Credentials");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [userToken, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-green-900 items-center"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-green-400" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          className="w-full px-3 py-2 border border-green-950"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          required
        />
      )}
      <input
        className="w-full px-3 py-2 border border-green-950"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-green-950"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-green-900 text-white  font-light px-8 py-2 mt-4 cursor-pointer"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;

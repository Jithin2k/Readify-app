import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async(e) => {
e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-green-900 items-center">
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
          placeholder="Name"
          required
        />
      )}
      <input
        className="w-full px-3 py-2 border border-green-950"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-green-950"
        type="password"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p onClick={()=>setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
        ) : (
          <p onClick={()=>setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        )}
      </div>
      <button type="submit" className="bg-green-900 text-white  font-light px-8 py-2 mt-4 cursor-pointer">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  );
};

export default Login;

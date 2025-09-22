import React from "react";
import { assests } from "../assets/assets";

const Hero = () => {
  return (
    <div className="border flex flex-col-reverse sm:flex-row mt-5">
      <div className="w-full sm:w-1/2  flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl p-4 sm:p-5 mt-4 sm:mt-0 font-medium">
          “ <span className="text-[#a2cea1] ">Think</span> before you speak.{" "}
          <span className="text-[#a2cea1]"> Read</span> before you think.”
        </h1>
        <div className="flex items-center gap-3 text-center">
          <hr className="w-8 h-[4px]  bg-[#1B5E20] border-none" />
          <p className=" text-xl sm:text-2xl my-2 text-blue-900 font-semibold">
            Fran Lebowitz
          </p>
        </div>

        <button className="m-4 sm:m-7 px-4 py-2 sm:px-10 sm:py-4 bg-[#36d1b4] sm:text-2xl text-base text-white font-medium rounded-2xl">Start Reading</button>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={assests.hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;

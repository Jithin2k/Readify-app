import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";

const Policies = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-15 sm:gap-2 py-20 text-sm md:text-base">
        <div className="flex flex-col items-center text-center gap-3">
          <p>
            <FaExchangeAlt size={40} />
          </p>
          <p className="font-semibold text-[#1b5e20]">Easy Exchange Policy</p>
          <p className="font-medium text-[#a2cea1]">We offer hassle free exchange policy</p>
        </div>
        <div  className="flex flex-col items-center text-center gap-3">
          <p>
            <SiTicktick size={40} />
          </p>
          <p className="font-semibold  text-[#1b5e20]">7 Days Return Policy</p>
          <p className="font-medium text-[#a2cea1]">We provide 7 days free return policy</p>
        </div>

        <div  className="flex flex-col items-center text-center gap-3">
          <p>
            <MdSupportAgent size={40} />
          </p>
          <p className="font-semibold  text-[#1b5e20]">Best customer support</p>
          <p className="font-medium text-[#a2cea1]">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default Policies;

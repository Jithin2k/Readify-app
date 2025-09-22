import React from "react";
import { assests } from "../assets/assets";

const Footer = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm">
        <div className="">
          <img className="w-40" src={assests.logo} alt="" />
          <p className="w-full sm:w-2/3 text-[#a2cea1]">
            Readify is your ultimate digital library, offering a seamless way to
            discover, explore, and purchase your favorite books. Whether you’re
            a casual reader or a book enthusiast, Readify provides curated
            collections, bestsellers, and personalized recommendations to make
            your reading experience effortless and enjoyable. Join our community
            and enjoy hassle-free browsing, secure checkout, and timely
            deliveries—all in one convenient platform.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-[#a2cea1]">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-[#a2cea1]">
            <li>+91-35675-8726</li>
            <li>readify@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <hr className="mt-10" />
      <p className="text-sm mt-5 text-center">Copyright@Readify2025-All Rights Recieved</p>
    </div>
  );
};

export default Footer;
 
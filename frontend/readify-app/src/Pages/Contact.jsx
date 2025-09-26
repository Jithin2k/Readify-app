import React from 'react'
import Title from "../Components/Title";
import { assests } from '../assets/assets';
import NewsLetter from '../Components/NewsLetter';


const Contact = () => {
  return (
    <div >
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assests.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-green-600">Our Store</p>
          <p className="text-gray-500">
            57565 William Station <br /> Suite 350,Washington,USA
          </p>
          <p>
            Tel: 36675 38373 <br /> Email:admin@readify@gmail.com
          </p>
          <p className="text-xl font-semibold text-green-900">Careers at Readify</p>
          <p className="text-green-500">Learn more about our team and job opening</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact

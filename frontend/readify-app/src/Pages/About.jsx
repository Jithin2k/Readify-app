import React from "react";
import { assests } from "../assets/assets";
import Title from "../Components/Title";
import NewsLetter from "../Components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col sm:flex-row gap-16">
        <img
          className="w-full md:max-w-[500px]"
          src={assests.about_img}
          alt=""
          srcset=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-green-900">
          <p>
            Readify is a modern book e-commerce platform designed to
            revolutionize the way readers discover, purchase, and engage with
            literature. Users can browse detailed book pages featuring
            high-resolution images, author bios, reader reviews, and dynamic
            pricing. The app’s smart search and filter system allows users to
            find exactly what they’re looking for—whether it's a motivational
            read, a gripping thriller, or a niche academic title. With
            personalized recommendations powered by user behavior and
            preferences, Readify ensures that every visit feels tailored and
            inspiring.
          </p>
          <p>
            What truly sets Readify apart is its community-driven ethos and
            attention to user experience. Readers can leave reviews, rate books,
            and share their collections with friends. The app encourages
            literary exploration through curated lists, seasonal picks, and
            author spotlights.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Readify, our mission is to empower readers everywhere by making
            books more accessible, engaging, and personalized than ever before.
            We believe that every story has the power to inspire, educate, and
            transform—and our platform is built to connect people with the books
            that matter most to them. Whether you're a lifelong learner, a
            weekend reader, or someone just discovering the joy of literature.

          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convienence</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;

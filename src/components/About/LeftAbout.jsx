import React from "react";
import {  bannerImg2 } from "../../assets/index";

const LeftAbout = () => {
  return (
    <div className="w-full lgl:w-[45%] flex  items-center relative ">
      <img className="z-10 lg:-ml-8 md:ml-32 md:w-[500px] md:h-[500px] " src={bannerImg2} alt="bannerImg" />
      <div className="absolute bottom-0 right-1 md:right-0 lg:right-2 lg:left-0 w-[320px] h-[200px] lgl:w-[450px] lgl:h-[320px] md:w-[700px] md:h-[300px]  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default LeftAbout;

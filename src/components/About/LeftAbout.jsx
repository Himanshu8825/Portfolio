import React from "react";
import {  bannerImg2 } from "../../assets/index";
import Suraj from '../../assets/images/SurajPhoto.png'

const LeftAbout = () => {
  return (
    <div className="w-full lgl:w-[45%] flex  items-center relative ">
      <img className="z-10 lg:ml-4" src={Suraj} alt="bannerImg" />
      <div className="absolute bottom-0 w-[300px] h-[200px] lgl:w-[450px] lgl:h-[320px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default LeftAbout;

import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative  pl-[1rem]">
      <img
        className=" lgl:w-[500px] lgl:h-[600px] md:w-[400px] md:h-[500px] z-10 md:ml-0 lg:ml-36 "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 right-0 md:right-0  lg:right-2 w-[320px] h-[200px] lgl:w-[500px] lgl:h-[400px] md:w-[700px] md:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;

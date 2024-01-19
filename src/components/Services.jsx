import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import { AiOutlineCodepen } from "react-icons/ai";
import { PiGameControllerFill } from "react-icons/pi";
import { BsWordpress } from "react-icons/bs";

const Services = () => {
  const icon1 = <BiCodeAlt size={55} className="text-brightColor" />;
  const icon2 = <BsAndroid size={55} className="text-brightColor" />;
  const icon3 = <GrApple size={55} className="text-brightColor" />;
  const icon4 = <AiOutlineCodepen size={55} className="text-brightColor" />;
  const icon5 = <PiGameControllerFill size={55} className="text-brightColor" />;
  const icon6 = <BsWordpress size={55} className="text-brightColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Services
      </h1>

      <div className=" flex flex-wrap items-center justify-center gap-5 mt-4">
        <ServicesCard icon={icon1} title="web development" />
        <ServicesCard icon={icon2} title="app development" />
        <ServicesCard icon={icon3} title="ios development" />
        <ServicesCard icon={icon4} title="freelancing " />
        <ServicesCard icon={icon5} title="game development" />
        <ServicesCard icon={icon6} title="wordpress" />
      </div>
    </div>
  );
};

export default Services;

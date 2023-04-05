import { aboutUs, NavbarItems } from "@/Datas";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full mb-[30px] border-b-2 h-[100px] flex flex-col justify-center ">
      <div className=" w-full flex justify-between  items-center">
        <h2 className="cursor-pointer text-[30px] text-[red] font-bold md:text-[35px]">
          Digiti
        </h2>
        <div className="flex gap-5">
          <p className="cursor-pointer">shopIcon</p>
          <p className="cursor-pointer">Login</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex   gap-3 text-gray-500 ">
          {NavbarItems.map((item, index) => (
            <p className="cursor-pointer " key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="flex gap-3  text-gray-500">
          {aboutUs.map((item, index) => (
            <p className="cursor-pointer" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

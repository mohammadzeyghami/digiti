import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex w-full">
        <div className="flex flex-col">
          <div className="w-[500px] h-[500px] bg-black"></div>
          <div className="flex gap-10">
            {" "}
            <div className="w-[80px] h-[80px] bg-[yellow]"></div>
            <div className="w-[80px] h-[80px] bg-[yellow]"></div>
          </div>
        </div>
        <div className="flex flex-col mx-[20px] flex-1">
          <h3 className="font-semibold text-[22px]">گوشی ایفون فلان</h3>
          <div className="w-full flex items-center  ">
            <p className="text-gray-300  w-[170px]"> Lorem ipsum dolor</p>
            <div className=" bg-gray-300 h-[1px] w-full "></div>
          </div>
        </div>
        <div></div>{" "}
      </div>
    </div>
  );
};

export default index;

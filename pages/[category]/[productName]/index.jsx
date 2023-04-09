import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

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
          <div className="flex items-center">
            <AiFillStar className="text-yellow-400" size={25} />
            <p className="text-[16px] text-gray-400">3.8</p>
          </div>
          <div className="flex gap-[10px]">
            <div className="text-white font-bold bg-gray-600 w-[18px] h-[18px] rounded-full flex justify-center items-center">
              !
            </div>
            <p className="text-gray-400 text-[14px]">
              درخواست مرجوع کردن کالا در گروه تخته با دلیل "انصراف از خرید" تنها
              در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ
              بودن، کالا نباید باز شده باشد).
            </p>
          </div>
        </div>
        <div></div>{" "}
      </div>
    </div>
  );
};

export default index;

import React from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineSafety,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { TbHomeQuestion } from "react-icons/tb";

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
        <div className="border-2 flex flex-col p-2 w-[350px]">
          <div className="flex items-center justify-between  ">
            <h3>فروشنده</h3>

            <p className="text-blue-400">5 فروشنده دیگر</p>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <TbHomeQuestion size={25} />
            <p className="">فروشنده</p>
            <div className=" bg-blue-300 px-[5px] rounded-lg">
              <p className="text-blue-500 text-[14px]"> رسمی</p>
            </div>
          </div>
          <div className=" flex w-full justify-center items-center  mt-[10px] ">
            <span className="text-green-600 ml-[5px] ">88%</span> رضایت از کالا
            | {"  "}
            عملکرد
            {"  "}
            <span className="text-green-600 mr-[5px]">خیلی خوب</span>
          </div>
          <div className="flex gap-[20px] mt-[20px] ">
            <AiOutlineSafety size={20} className="" />
            <p className="text-green-600 font-bold">18 ماه گارانتی</p>
          </div>

          <div className="flex items-center gap-[20px] mt-[20px] font-semibold">
            <AiOutlineCheckCircle />
            <p> موجود در انبار و فروشگاه دیجیتی </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

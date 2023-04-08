import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FwSwiper, BestSells, CategoryBanner, Category } from "@/components/";
import {
  SwiperItems,
  CategoryBannersData,
  SugestionProductSection,
} from "@/Datas";
const index = () => {
  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        <FwSwiper swiperItems={SwiperItems} />
        <BestSells />
        <div className="flex w-full flex-wrap justify-center gap-[20px]">
          {CategoryBannersData.map((image, index) => (
            <CategoryBanner key={index} image={image} />
          ))}
        </div>
        <div className="flex justify-center w-full items-center flex-col">
          <div className="flex items-center mb-[70px]">
            <h2 className=" font-bold text-[32px]">محصولات پیشنهادی</h2>{" "}
            <AiFillStar size={30} />
          </div>
          <div className=" flex mx-[50px] flex-wrap justify-center max-w-[1250px] gap-[50px] border-2 ">
            {SugestionProductSection.map((item, index) => (
              <Category key={index} category={item} bigSize={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

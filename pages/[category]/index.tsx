import React from "react";
import { FwSwiper, BestSells, CategoryBanner } from "@/components/";
import { SwiperItems, CategoryBannersData } from "@/Datas";
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
      </div>
    </div>
  );
};

export default index;

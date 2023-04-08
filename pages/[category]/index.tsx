import React from "react";
import { FwSwiper, BestSells, BSProduct } from "@/components/";
import { SwiperItems, BSProducts } from "@/Datas";
const index = () => {
  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        <FwSwiper swiperItems={SwiperItems} />

        <BestSells />
      </div>
    </div>
  );
};

export default index;

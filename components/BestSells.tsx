import React from "react";
import { BSProduct } from "@/components";
import { BSProducts } from "@/Datas";
const BestSells = () => {
  return (
    <div className="flex w-full justify-center ">
      <div className="border-2 w-full  max-w-[1400px] flex flex-wrap mx-[30px] items-center justify-around gap-[10px]">
        {BSProducts.map((item, index) => (
          <BSProduct key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSells;

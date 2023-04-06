import React from "react";
import Image from "next/image";
const ProductOffer = ({ product }: any) => {
  const { image, title, text, price, offer } = product;
  return (
    <div className="xl:h-[300px] xl:w-[230px] mx-[5px]    ml-0 bg-gray-400 rounded-md flex flex-col p-[8px]">
      <Image
        className="rounded-md w-full h-[60%] "
        src={image}
        alt="productImage"
      />
      <div className="flex flex-col">
        <h3 className="text-black font-semibold text-center mt-2 text-[14px]">
          {title}
        </h3>
        <p className="text-gray-500 text-center mt-4">{text}</p>
        <div className="text-center ">
          <p className="text-gray-600 font-bold line-through ">{price}</p>
        </div>
        <p className="text-white bg-red-600 w-[80px] flex flex-end rounded-full font-bold justify-center ">
          {offer}
        </p>
      </div>
    </div>
  );
};

export default ProductOffer;

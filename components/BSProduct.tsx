import React from "react";
import Image from "next/image";
const BSProduct = ({ product }: any) => {
  const { title, price, image } = product;
  return (
    <div className="flex items-center">
      <Image src={image} className="w-[200px] h-[200px]" alt="product image" />
      <div className="flex flex-col">
        <h5>{title}</h5>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BSProduct;

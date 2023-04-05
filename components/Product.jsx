import React from "react";

const Product = ({ product }) => {
  const { image, title, text, price } = product;
  return (
    <div className="h-[300px] mx-[60px] w-[260px] bg-black rounded-md flex flex-col p-[8px]">
      <Image className="rounded-md w-full h-[55%]" src={image} />
      <div className="flex flex-col">
        <h3 className="text-gray-400 font-semibold text-center mt-2">
          {title}
        </h3>
        <p className="text-gray-500 text-center mt-4">{text}</p>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
};

export default Product;

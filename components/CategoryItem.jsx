import React from "react";
import Image from "next/image";

const CategoryItem = ({ category }) => {
  const { image, title } = category;
  return (
    <div className="h-[300px] mx-[60px] w-[260px] bg-gray-300 rounded-md flex flex-col p-[8px]">
      <Image className="rounded-md w-full h-[80%] object-cover" src={image} />
      <div className="flex flex-col">
        <button className="text-center w-[70%] mx-auto py-[5px] mt-[20px] font-bold bg-white rounded-lg ">
          {title}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;

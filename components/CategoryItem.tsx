import React from "react";
import Image from "next/image";

const CategoryItem = ({ category }: any) => {
  const { image, title } = category;
  return (
    <div className="xl:h-[300px] mx-[40px] xl:w-[230px] h-[250px] w-[200px]  bg-red-400 rounded-md flex  flex-col p-[8px] mt-[50px]">
      <Image
        className="rounded-md w-full h-[80%] object-cover"
        src={image}
        width={200}
        height={200}
        alt="productImage"
      />
      <div className="flex flex-col">
        <button className="text-center w-[70%] mx-auto py-[5px] mt-[20px] font-bold bg-white rounded-lg ">
          {title}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;

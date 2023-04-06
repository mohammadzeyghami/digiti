import React from "react";
import Image from "next/image";

const CategoryItem = ({ category }: any) => {
  const { image, title } = category;
  return (
    <div className="xl:h-[300px] mx-[40px] xl:w-[230px] h-[250px] w-[200px]  bg-red-500 rounded-md flex  flex-col p-[8px] mt-[50px] cursor-pointer">
      <Image
        className="rounded-md w-full h-[80%] object-cover"
        src={image}
        width={200}
        height={200}
        alt="productImage"
      />
      <div className="flex flex-col">
        <h3 className="text-center w-[70%] mx-auto py-[1px] mt-[25px] font-bold  ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryItem;

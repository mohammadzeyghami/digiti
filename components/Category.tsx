import React from "react";
import Image, { StaticImageData } from "next/image";

interface CategoryProps {
  image: StaticImageData;
  title: string;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div className="flex flex-col mx-[10px] cursor-pointer">
      <Image
        src={category.image}
        alt="categoryImage"
        className="xl:w-[250px] xl:h-[250px] lg:w-[220px] lg:h-[220px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-full"
      />
      <h2 className="w-full flex justify-center font-semibold">
        {category.title}
      </h2>
    </div>
  );
};

export default Category;

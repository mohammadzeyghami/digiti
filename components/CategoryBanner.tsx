import React from "react";
import Image from "next/image";
const CategoryBanner = ({ image }: any) => {
  return (
    <div className="rounded-xl cursor-pointer">
      <Image
        src={image.image}
        className="w-[650px]  h-[250px] object-contain  "
        alt="Products-image"
      />
    </div>
  );
};

export default CategoryBanner;

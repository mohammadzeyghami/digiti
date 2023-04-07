import React from "react";
import Image from "next/image";
const Sugesstion = ({ sugesstionItems }: any) => {
  return (
    <div className="w-full flex flex-wrap mt-[80px] gap-[50px] justify-center ">
      {sugesstionItems.map((item, index) => (
        <Image
          key={index}
          className="xl:w-[350px] cursor-pointer md:[300px] w-[250px] rounded-md "
          alt="sugestionItems"
          src={item}
        />
      ))}
    </div>
  );
};

export default Sugesstion;

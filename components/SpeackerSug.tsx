import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillFire } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Image from "next/image";
import { SpeackerSugs } from "@/Datas";

const SpeackerSug = () => {
  return (
    <div className="w-full  flex flex-col mt-[20px]  p-[20px] border-2 curso ">
      <div className="flex items-center mb-[12px] text-[red]">
        <AiFillFire size={25} />
        <h3 className="text-[22px] font-bold   ">تابستون رو نمیخوای بکوبی ؟</h3>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full "
        >
          {SpeackerSugs.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item}
                className="w-[350px] h-[200px] md:h-[250px]  xl:h-[300px]"
                alt="SpeackerSugs"
              />
              <div>
                <p className="w-full flex justify-center">اسم اسپیکر</p>
                <p className="flex flex-end lg:mr-[50px]">200$</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpeackerSug;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const FwSwiper = ({ swiperItems }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[550px]"
      >
        {swiperItems.map((item) => (
          <SwiperSlide>
            <Image src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FwSwiper;

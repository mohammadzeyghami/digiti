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
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {swiperItems.map((item) => (
          <SwiperSlide>
            <Image src={item} className="h-[400px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FwSwiper;

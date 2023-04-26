import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const FwSwiper = ({ swiperItems }: any) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        {swiperItems.map((item: StaticImageData) => (
          <SwiperSlide>
            <Image
              src={item}
              className="h-[320px] md:h-[360px] xl:h-[400px] object-cover"
              alt="sectionImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FwSwiper;

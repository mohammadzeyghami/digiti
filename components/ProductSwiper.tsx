import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { offerProducts } from "@/Datas";
import ProductOffer from "./ProductOffer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ProductSwiper = () => {
  return (
    <div className="mt-[100px]">
      <Swiper
        slidesPerView={5}
        spaceBetween={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-red-500 rounded-md "
      >
        {offerProducts.map((item) => (
          <SwiperSlide className="bg-red-500">
            <ProductOffer product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;

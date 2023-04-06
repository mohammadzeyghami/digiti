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
    <div className="mt-[40px]">
      <Swiper
        slidesPerView={6}
        spaceBetween={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-orange-300 rounded-md   "
      >
        {offerProducts.map((item) => (
          <SwiperSlide className="bg-orange-300 ">
            <ProductOffer product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;

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
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {offerProducts.map((item) => (
          <SwiperSlide>
            <ProductOffer product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
//<ProductOffer product={item} />

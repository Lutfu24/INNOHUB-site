import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-sky-300/20 w-full h-100 relative">
            <h1 className="font-bold text-5xl absolute top-20 left-60">
              <span className="ml-5">Gələcəyin İT</span> <br />
              <span>mütəxəssislərini</span> <br />
              <span className="ml-7">yetişdiririk</span>
            </h1>
            <button className="bg-[#13D9F9] rounded-3xl px-5 py-3 text-white absolute bottom-20 left-40">
              Bizimlə Əlaqə
            </button>
            <button className="bg-[#13D9F9] rounded-3xl px-5 py-3 text-white absolute bottom-20 left-80">
              Proqramlara Bax
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-sky-300/20 w-full h-100 relative">
            <h1 className="font-bold text-5xl absolute top-20 left-60">
              <span>Sadəcə dərs yox-film</span> <br />
              <span className="ml-7">klubu, seminarlar,</span> <br />
              <span className="ml-25">dostluqlar</span>
            </h1>
            <button className="bg-[#13D9F9] rounded-3xl px-5 py-3 text-white absolute bottom-20 left-40">
              Hub həyatını kəşf et!
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-sky-300/20 w-full h-100 relative">
            <h1 className="font-bold text-5xl absolute top-20 left-60">
              <span>Könüllülük və sosial</span> <br />
              <span className="ml-25">layihələrdə</span> <br />
              <span className="ml-25">fayda yarat</span>
            </h1>
            <button className="bg-[#13D9F9] rounded-3xl px-5 py-3 text-white absolute bottom-20 left-40">
              İcma ilə tanış ol
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

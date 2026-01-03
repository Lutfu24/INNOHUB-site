import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { getCarousels } from "../../services/homeServices.js";
import { Link } from "react-router-dom";

export function Slider() {
  const [carousel, setCarousel] = useState();

  useEffect(() => {
    async function showCarousel() {
      const res = await getCarousels();
      setCarousel(res);
    }
    showCarousel();
  }, []);

  return (
    <section className="w-full px-0 md:px-6 md:py-4">
      <div className="relative mx-auto max-w-[1400px] group">
        <Swiper
          loop
          effect="fade"
          centeredSlides
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          className="h-[400px] md:h-[480px] overflow-hidden md:rounded-[40px] shadow-2xl shadow-sky-200/40"
        >
          {carousel &&
            carousel.map((c, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={c.image} className="relative w-full object-cover" />
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-none from-[#E0F7FF] via-[#F0F9FF] to-[#E0F2FE] px-6 text-center">
                    <div className="pointer-events-none absolute inset-0 opacity-30">
                      <div className="absolute -top-[10%] -right-[5%] h-[300px] w-[300px] rounded-full bg-[#BEEFFF] blur-[80px]" />
                      <div className="absolute -bottom-[10%] -left-[5%] h-[250px] w-[250px] rounded-full bg-sky-200 blur-[70px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                      <span className="mb-4 block text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-[#0284C7]">
                        {c.title}
                      </span>

                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#0F172A]">
                        {c.description?.split(" ") &&
                          c.description?.split(" ").map((item, i) => {
                            return (
                              <div key={i}>
                                <span className="text-[#02C8FE]">{item}</span>
                                <br className="hidden md:block" />
                              </div>
                            );
                          })}
                      </h1>

                      <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                          to={c.link}
                          className="rounded-full border border-sky-100 bg-white/60 px-6 py-3 text-sm font-bold text-[#0369A1] backdrop-blur-sm transition-all hover:bg-white"
                        >
                          Keçid et
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <button className="custom-prev absolute left-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sky-200 bg-white/40 text-[#0284C7] backdrop-blur-md opacity-0 transition-all duration-500 hover:scale-110 hover:bg-white group-hover:opacity-100 lg:flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button className="custom-next absolute right-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sky-200 bg-white/40 text-[#0284C7] backdrop-blur-md opacity-0 transition-all duration-500 hover:scale-110 hover:bg-white group-hover:opacity-100 lg:flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination {
            bottom: 25px !important;
          }
          .custom-bullet {
            width: 8px;
            height: 8px;
            background: #BAE6FD;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            transition: all 0.4s ease;
            display: inline-block;
          }
          .custom-bullet-active {
            width: 24px;
            background: #02C8FE;
            border-radius: 10px;
          }
        `,
        }}
      />
    </section>
  );
}

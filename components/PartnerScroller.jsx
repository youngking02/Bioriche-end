"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnerScroller = ({ partners }) => {
  return (
    <div className="my-12 ">
      <div>
        <h2 className="text-4xl pt-8 sm:text-3xl text-center font-extrabold text-gray-900 pb-10">
          Nos partenaires
        </h2>
        <div className="w-40  h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      {/* 📱 Carrousel logos */}
      <div className="relative overflow-hidden pt-10 rounded-2xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000, // ⏱ change toutes les 2 secondes
            disableOnInteraction: false,
          }}
          loop={true}
          speed={600} // vitesse de transition
          spaceBetween={20}
          slidesPerView={1}
          className="py-6"
        >
          {partners.map((partner, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerScroller;

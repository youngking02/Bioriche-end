"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const catalogues = [
  
  {
    id: "defender",
    title: "BioRiche Defender",
    file: "/files/BioRicheDefender.pdf",
    image: "/caboost.jpg",
  },
  {
    id: "boosteur",
    title: "BioRiche Boosteur",
    file: "/files/BioRicheBoosteur.pdf",
    image: "/cadefen.jpg",
  },
];

export default function CataloguePage() {
  return (
    <div className="container-max my-10 pt-40">
      <h1 className="text-2xl font-bold mb-6">Catalogue</h1>
      <p className="text-sm text-gray-700 mb-8">
        Téléchargez nos catalogues complets en PDF en cliquant ci-dessous.
      </p>

      {/* 📱 Mobile : Carrousel */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-8"
        >
          {catalogues.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-contain mb-4"
                />
                <a
                  href={c.file}
                  download
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-center"
                >
                  📄 Télécharger {c.title}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 Desktop : Grille */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {catalogues.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6"
          >
            <Image
              src={c.image}
              alt={c.title}
              width={200}
              height={150}
              className="rounded-lg object-contain mb-4"
            />
            <h2 className="font-bold text-lg mb-2">{c.title}</h2>
            <a
              href={c.file}
              download
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              📄 Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

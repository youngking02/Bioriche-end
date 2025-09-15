"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    {
      src: "/allbio.png",
      cover: true,
      title: "BioRiche : Cultivez la santé, récoltez l'abondance",
      text: "Engrais biologiques pour une agriculture durable au Bénin et au-delà.",
      cta: "Découvrir nos produits",
    },
    {
      src: "/tomate.JPG",
      cover: false,
      title: "Boostez vos récoltes naturellement",
      text: "Des engrais bio adaptés aux cultures locales pour des résultats visibles.",
      cta: "Découvrir nos produits",
    },
    {
      src: "/paysanbioriche.JPG",
      cover: false,
      title: "Des solutions pour les agriculteurs avec BioRiche",
      text: "BioRiche accompagne les producteurs avec des produits innovants et respectueux de l’environnement.",
      cta: "Contactez-nous",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Fonction pour styliser "BioRiche"
  function highlightBioRiche(text) {
    return text.split(/(BioRiche)/g).map((part, i) =>
      part === "BioRiche" ? (
        <span key={i} className="brush-script">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <section className="container-max my-8 md:my-10 pt-32">
      <div className="relative overflow-hidden rounded-2xl h-[730px] md:h-[430px] bg-black">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Arrière-plan flouté (uniquement pour images 2 et 3) */}
            {!images[current].cover && (
              <Image
                src={images[current].src}
                alt={`Background blurred ${current + 1}`}
                fill
                className="object-cover blur-2xl scale-110"
                aria-hidden="true"
              />
            )}

            {/* Image principale */}
            <Image
              src={images[current].src}
              alt={`Slide ${current + 1}`}
              fill
              priority
              className="object-cover relative z-10 transition-all duration-700"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-20" />

        {/* Texte + CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-white text-center z-30">
          <motion.h1
            key={`title-${current}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            {highlightBioRiche(images[current].title)}
          </motion.h1>

          <motion.p
            key={`text-${current}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-2 max-w-2xl text-sm md:text-base opacity-90"
          >
            {highlightBioRiche(images[current].text)}
          </motion.p>

          <motion.div
            key={`cta-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-5"
          >
            <Link href="/a-propos" className="btn-primary relative z-10">
              {images[current].cta}
            </Link>
          </motion.div>
        </div>

        {/* Indicateurs */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

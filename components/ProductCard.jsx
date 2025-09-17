"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }) {
  const [openModal, setOpenModal] = useState(false);

  // Fonction qui colore les litrage (5L, 1L, 500mL, 250mL) en rouge
  function highlightVolume(text) {
    const regex = /(5L|1L|500mL|250mL)/gi;
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="text-red-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <>
      {/* Carte Produit */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card p-4 rounded-2xl bg-white shadow-lg cursor-pointer hover:shadow-2xl transition"
        onClick={() => setOpenModal(true)}
      >
        {/* Image Produit */}
        <div className="overflow-hidden rounded-full bg-soft flex justify-center items-center">
          <Image
            src={product.image}
            width={300}
            height={300}
            alt={product.name}
            className="object-cover rounded-full"
          />
        </div>

        {/* Infos produit */}
        <div className="mt-3 text-center">
          <h3 className="font-bold text-2xl text-green-700">
            {highlightVolume(product.name)}
          </h3>
          <p className="text-lg text-gray-600">{product.subtitle}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg text-yellow-600">
              {product.price.toFixed(0)} FCFA
            </span>
            <button onClick={() => add(product)} className="btn-primary">
              Afficher Plus
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modale Produit */}
      {openModal && (
        <ProductModal product={product} onClose={() => setOpenModal(false)} />
      )}
    </>
  );
}

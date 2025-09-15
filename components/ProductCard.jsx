"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }) {
  const [openModal, setOpenModal] = useState(false);

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
            width={300}       // ← largeur réduite
            height={300}      // ← hauteur réduite
            alt={product.name}
            className="object-cover rounded-full"
          />
        </div>

        {/* Infos produit */}
        <div className="mt-3 text-center">
          <h3 className="font-bold text-2xl text-green-700">{product.name}</h3>
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

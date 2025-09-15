"use client";
import Image from "next/image";
import { useCart } from "./CartContext";
import DescriptionFormatter from "./DescriptionFormatter";
export default function ProductModal({ product, onClose }) {
  const { add } = useCart();

  const handleAddToCart = () => {
    add(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative animate-fade-in flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Bouton Fermer (toujours visible) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:text-gray-500 font-extrabold text-red-500 text-3xl z-50 bg-white/70 rounded-full px-2"
        >
          ✕
        </button>

        {/* Contenu scrollable */}
        <div className="flex flex-col md:flex-row w-full overflow-y-auto">
          {/* Bloc Infos Produit */}
          <div className="flex-1 p-5 sm:p-8 flex flex-col justify-center">
            {/* Catégorie */}
            <p className="text-green-700 text-sm uppercase tracking-wide font-medium mb-2">
              Agriculture durable
            </p>

            {/* Nom du produit */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
              {product.name}
            </h2>

            {/* Description */}
            
            <DescriptionFormatter className="text-gray-600 text-base sm:text-lg mb-4" text={product.description} />


            {/* Prix */}
            <p className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-6">
              {product.price.toFixed(0)} FCFA
            </p>

            {/* Bouton Ajouter */}
            <button
              onClick={handleAddToCart}
              className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition text-lg"
            >
              Ajouter au panier
            </button>
          </div>

          {/* Bloc Image Produit */}
          <div className="flex-1 relative h-56 sm:h-80 md:h-auto min-h-[250px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:rounded-l-none rounded-b-3xl md:rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

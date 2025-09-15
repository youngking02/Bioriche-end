"use client";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { ALL_PRODUCTS } from "@/lib/products";
import DescriptionFormatter from "@/components/DescriptionFormatter";
export default function Commande() {
  const { add } = useCart();

  const handleAddToCart = (product) => {
    add(product);
  };

  return (
    <div className="container-max py-12 px-4">
      {/* Titre principal */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6">
        Nos Produits
      </h1>
      <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-12"></div>

      {/* Liste des produits */}
      <div className="flex flex-col gap-10">
        {ALL_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full mx-auto flex flex-col md:flex-row overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            {/* Bloc infos produit */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              {/* Catégorie */}
              <p className="text-green-700 text-sm uppercase tracking-wide font-medium mb-2">
                Agriculture durable
              </p>

              {/* Nom */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
                {product.name}
              </h2>

              {/* Description */}
              <DescriptionFormatter className="text-gray-600 text-base sm:text-lg mb-4 " text={product.description} />

              {/* Prix */}
              <p className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-6">
                {product.price.toFixed(0)} FCFA
              </p>

              {/* Bouton ajouter au panier */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition text-lg"
              >
                Ajouter au panier
              </button>
            </div>

            {/* Image produit */}
            <div className="flex-1 relative h-64 sm:h-80 md:h-auto min-h-[300px]">
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
        ))}
      </div>
    </div>
  );
}

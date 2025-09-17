"use client";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import PartnerScroller from "@/components/PartnerScroller";
import NewsGrid from "@/components/NewsGrid";
import Link from "next/link";
import { LIQUIDS, SOLIDS } from "@/lib/products";
import { motion } from "framer-motion";


const partners = [
  { name: "PNUD", logo: "/PNUD.png" },
  { name: "Mairie de GRAND-POPO", logo: "/Ministere Decentralisation.png" },
  { name: "Enabel", logo: "/Enabel.png" },
  { name: "ATDA7", logo: "/ATDA7.png" },
  { name: "OVO", logo: "/OVO.png" },
  { name: "GEL", logo: "/gel.png" },
];
export default function Home() {
  return (
    <div>
      {/* --------------------- HERO --------------------- */}
      <Hero />

      {/* --------------------- PRODUITS PHARES --------------------- */}
      <section className="container-max my-14">
        {/* Titre stylisé et centré */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-3xl pb-5 font-extrabold text-gray-900">
            Nos produits phares
          </h2>
          {/* Barre verte sous le titre */}
          <div className=" w-48 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        {/* Grille des produits */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[SOLIDS[0], LIQUIDS[0], LIQUIDS[1]].map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.4,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
              {/* Chaque carte produit mène à la page produits */}
              <Link href="/produits">
                <ProductCard product={p} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        <div className="flex justify-center mt-10">
          <Link
            href="/produits"
            className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold"
          >
            Voir plus
          </Link>
        </div>
      </section>

      {/* --------------------- QUI SOMMES-NOUS --------------------- */}
      <section className="container-max my-20">
        {/* Titre stylisé et centré */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-3xl pb-5 font-extrabold text-gray-900">
            Qui sommes-nous ?
          </h2>
          <div className="w-48 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        {/* Bloc animé avec dégradé */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="card p-8 bg-gradient-to-r from-green-800 via-re-500 to-green-800 rounded-2xl shadow-2xl mt-10"
        >
          <motion.div
  initial={{ x: "100%", opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    duration: 1.5,
    delay: 0.3,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  className="text-2xl text-white leading-relaxed space-y-4"
>
  <p>
    <strong className="brush-script">BioRiche</strong> est la marque d’excellence
    de l’agroécologie, développée à Grand-Popo, au Bénin.
  </p>

  <p>
    Elle incarne le meilleur de l’engagement pour une production agricole saine
    et durable. Développée à Grand-Popo, notre marque propose des engrais 100 %
    naturels liquides et solides qui nourrissent la terre, renforcent les
    cultures et préservent l’environnement.
  </p>

  <p>
    Avec <strong className="brush-script">BioRiche</strong>, les maraîchers et
    agriculteurs obtiennent des rendements supérieurs tout en cultivant des
    aliments qui protègent la santé des consommateurs.
  </p>

  <p className="font-semibold">
    <strong className="brush-script">BioRiche</strong> : Cultivez la santé,
    récoltez l’abondance !
  </p>

  <p>
    Adoptez <strong className="brush-script">BioRiche</strong> dès aujourd’hui
    et offrez à vos cultures la force d’un engrais 100 % naturel !
  </p>
</motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className=" flex justify-center mt-3"
          >
            <Link
              href="/a-propos"
              className="btn-ghost shadow-lg px-6 py-3 rounded-xl font-semibold"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------- AUTRES BLOCS --------------------- */}
      <NewsGrid />
      < PartnerScroller partners={partners}/>
    </div>
  );
}

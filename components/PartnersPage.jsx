import PartnerScroller from "./PartnerScroller";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "PNUD",
    logo: "/PNUD.png",
    description: "Programmes de Développement des Nations Unies.",
  },

  {
    name: "Mairie de GRAND-POPO",
    logo: "/Ministere Decentralisation.png",
    description: "Mairies de la commune de GRAND-POPO.",
  },

  
  {
    name: "Enabel",
    logo: "/Enabel.png",
    description: "Agence belge de coopération internationale.",
  },

  {
    name: "ATDA7",
    logo: "/ATDA7.png",
    description: "Agence Territoriale de Développement Agricole ATDA Pôle 7.",
  },
  
  
  {
    name: "OVO",
    logo: "/OVO.png",
    description: "Orange fournit la connectivité à tous nos événements.",
  },

  {
    name: "GEL",
    logo: "/gel.png",
    description: "Guichet d'Économie Locale.",
  },
];

export default function PartnersPage() {
  return (
    <section className="container-max my-12">
      {/* Titre */}
      

      {/* Bande défilante */}
      <PartnerScroller partners={partners} />

      {/* Bloc partenaires */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="bg-green-100 border rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={300}
              height={100}
              className="mx-auto object-contain "
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {partner.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

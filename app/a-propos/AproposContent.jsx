"use client";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const equipe = [
  { id: 1, name: "BOCO S. Hyacinthe", role: "Co-fondateur & Gérant", img: "/hyacinthe.jpg" },
  { id: 2, name: "HOUNDEGNON Baudouin", role: "Chargé de Communication", img: "/Baudouin.jpg" },
  { id: 3, name: "BONOU-LOKO Amos", role: "Marketing Manager", img: "/agnes.jpg" },
];

export default function AproposContent() {
  return (
    <div className="container-max my-10 pt-32">
      {/* === TITRE PRINCIPAL === */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center text-green-900 mb-4"
      >
        À propos de <span className="brush-script text-green-600">BioRiche</span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 bg-green-500 mx-auto rounded-full mb-12"
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* === BLOC À PROPOS === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-green-700 to-green-500 rounded-3xl p-8 shadow-xl space-y-6"
        >
          <p className="text-white text-lg leading-relaxed">
            BioRiche est une marque de l'entreprise béninoise Groupe Service Universelle (GSU) spécialisée dans la production et la distribution d'engrais biologiques.Nos produits sont conçus pour améliorer la santé des sols,
            augmenter les rendements et garantir la qualité des récoltes.
          </p>

          <div className="space-y-6">
            {/* Vision */}
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-green-700 mb-2">🌿 Notre Vision</h2>
              <p className="text-gray-700 text-base">
                Être leader dans les solutions innovantes d’intrants naturels pour
                une agriculture respectueuse de l’environnement.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-green-700 mb-2">🚀 Notre Mission</h2>
              <p className="text-gray-700 text-base">
                Œuvrer pour une croissance écologique durable et prospère.
              </p>
            </motion.div>

            {/* Valeurs */}
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-white rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-green-700 mb-3">💎 Nos Valeurs</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Engagement social</strong> — Améliorer la vie des producteurs.</li>
                <li><strong>Innovation</strong> — Créer des solutions performantes.</li>
                <li><strong>Responsabilité</strong> — Promouvoir une gestion éthique.</li>
                <li><strong>Collaboration</strong> — Travailler main dans la main avec les acteurs du secteur.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* === FORMULAIRE DE CONTACT === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-green-700 to-green-500 rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
          <form
            className="grid md:grid-cols-2 gap-4"
            action="https://formsubmit.co/bioriche.gsu@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" readOnly />
            <input required name="name" placeholder="Nom et prénom" className="border rounded-lg px-3 py-2 text-gray-800" />
            <input required name="email" placeholder="Email" type="email" className="border rounded-lg px-3 py-2 text-gray-800" />
            <input name="phone" placeholder="Téléphone" className="border rounded-lg px-3 py-2 md:col-span-2 text-gray-800" />
            <textarea name="message" placeholder="Votre message" rows="5" className="border rounded-lg px-3 py-2 md:col-span-2 text-gray-800"></textarea>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-lg shadow-md md:col-span-2 transition">
              Envoyer
            </button>
          </form>

          {/* Infos contact */}
          <div className="mt-10 space-y-5 text-white">
            <div className="flex items-center gap-4">
              <MdLocationOn size={28} className="text-yellow-300" />
              <p className="font-medium">
                Yodo-Condji, après l’hôtel BEL AZUR, Grand-Popo, Bénin.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt size={24} className="text-yellow-300" />
              <p className="font-medium">+229 01 97 17 84 17</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail size={26} className="text-yellow-300" />
              <p className="font-medium">bioriche.gsu@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === NOTRE ÉQUIPE === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6">
          Notre Équipe Leader
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-32">
          {equipe.map((membre) => (
            <motion.div
              key={membre.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={membre.img}
                alt={membre.name}
                width={200}
                height={200}
                className="  w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-700">{membre.name}</h3>
                <p className="text-gray-600 text-sm">{membre.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

const news = [
  { 
    id: 1, 
    title: "BioRiche Témoignage", 
    video: "https://res.cloudinary.com/dfqizyc0u/video/upload/v1757882854/reportage1_byc0io.mp4", 
    text: "Un nouvel engrais pour revitaliser les sols épuisés." 
  },
  { 
    id: 2, 
    title: "Interview donné par Mr BOCO S. Hyacinthe ;Co-fondateur & Gérant de BioRiche", 
    video: "https://res.cloudinary.com/dfqizyc0u/video/upload/v1757885438/reportage4_dmnqwh.mp4", 
    text: "Présentation des différents produits de la gamme BioRiche." 
  },
  { 
    id: 3, 
    title: "BioRiche Témoignage", 
    video: "https://res.cloudinary.com/dfqizyc0u/video/upload/v1757884205/reportae3_kaa0ew.mp4", 
    text: " BioRiche : Cultivez la santé, récoltez l'abondance." 
  }
];

export default function NewsGrid() {
  return (
    <section className="container-max my-12">
      <h2 className="text-4xl sm:text-3xl pb-5 text-center font-extrabold text-gray-900">
        Nos actualités
      </h2>
      <div className="w-48 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>

      <div className="grid md:grid-cols-3 gap-6 pt-10">
        {news.map((n, idx) => (
          <motion.article
            key={n.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="card overflow-hidden"
          >
            <video
              src={n.video}
              controls
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm text-gray-600">{n.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

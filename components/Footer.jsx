"use client"; 
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white relative">
      {/* Haut du footer */}
      <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 py-14">
        
        {/* Logo + description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold brush-script">BioRiche</h2>
          </div>
          <p className="text-gray-200 text-xl leading-relaxed brush-script">
            Cultivez la santé, récoltez l'abondance.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/share/1AxwitDeqG/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-green-700 rounded-full transition">
              <FaFacebookF size={18} />
            </a>
            <a href="https://wa.me/22997178417" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-green-700 rounded-full transition">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-green-700 rounded-full transition">
              <FaYoutube size={18} />
            </a>
            <a href="https://TikTok.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-green-700 rounded-full transition">
              <FaTiktok size={18} />
            </a>
            
          </div>
        </div>

        {/* Navigation + Entreprise sur la même colonne */}
        <div className="grid grid-cols-2 gap-10">
          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition">Accueil</Link></li>
              <li><Link href="/produits" className="hover:text-yellow-400 transition">Produits</Link></li>
              <li><Link href="/actualites" className="hover:text-yellow-400 transition">Actualités</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li><Link href="/partenaires" className="hover:text-yellow-400 transition">À propos</Link></li>
              <li><Link href="/a-propos" className="hover:text-yellow-400 transition">Équipe</Link></li>
              <li><Link href="/catalogue" className="hover:text-yellow-400 transition">Catalogue</Link></li>
              <li><Link href="/partenaires" className="hover:text-yellow-400 transition">Nos partenaires</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={18} className="text-yellow-400" />
              <span>+229 01 97 17 84 17</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={18} className="text-yellow-400" />
              <span>bioriche.gsu@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn size={20} className="text-yellow-400" />
              <p className="font-medium">
                Yodo-Condji, après l’hôtel BEL AZUR, Grand-Popo, Bénin.
              </p>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="bg-green-800 py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">🌱 Rejoignez la communauté BioRiche !</h3>
        <Link
          href="/commande"
          className="bg-yellow-400 hover:bg-yellow-300 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg transition"
        >
          Commandez maintenant
        </Link>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-green-700 py-4 text-center text-gray-300 text-sm">
        © 2025 <span className="brush-script text-green-400">BioRiche</span>. Tous droits réservés.
      </div>
    </footer>
  );
}

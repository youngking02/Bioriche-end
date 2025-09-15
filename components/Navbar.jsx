"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/CartDrawer";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/", label: "ACCEUIL" },
  { href: "/produits", label: "NOS PRODUITS" },
  { href: "/actualites", label: "ACTUALITÉS" },
  { href: "/partenaires", label: "NOS PARTENAIRES" },
  { href: "/a-propos", label: "À PROPOS" },
  { href: "/catalogue", label: "CATALOGUES" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-800 backdrop-blur border-b shadow-lg">
      {/* Barre principale */}
      <div className="container-max flex h-32 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center font-semibold" onClick={() => setOpen(false)}>
          <Image
            src="/Logooo.png"
            alt="BioRiche Logo"
            width={240}
            height={60}
            className="rounded-2xl"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex flex-col items-center gap-3">
          {/* Liens principaux */}
          <div className="flex flex-row items-center gap-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-base font-bold transition ${
                  pathname === n.href
                    ? "text-yellow-400 underline underline-offset-8"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {n.label}
              </Link>
            ))}

            {/* Bouton Commander */}
            <Link
              href="/commande"
              className="bg-white text-green-800 px-5 py-2 rounded-full font-bold  text-base shadow hover:bg-green-100 transition"
            >
              COMMANDEZ
            </Link>
          </div>

          {/* Barre Numéro + Icônes (Desktop) */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/22997178417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-green-400"
            >
              <FaWhatsapp size={22} />
              <span className="hidden lg:inline font-medium">+229 01 97 17 84 17</span>
            </a>

            <a
              href="tel:+22991000000"
              className="flex items-center gap-2 text-white hover:text-yellow-300"
            >
              <FaPhoneAlt size={20} />
              <span className="hidden lg:inline font-medium">+229 01 97 17 84 17</span>
            </a>

            <a
              href="mailto:bioriche.gsu@gmail.com"
              className="flex items-center gap-2 text-white hover:text-red-400"
            >
              <MdEmail size={22} />
              <span className="hidden lg:inline font-medium">bioriche.gsu@gmail.com</span>
            </a>
          </div>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="md:hidden fixed inset-0 z-50 h-screen bg-green-900 backdrop-blur-6xl overflow-y-auto"
        >
          {/* Contenu principal */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full flex flex-col justify-between px-6 py-8"
          >
            {/* Titre */}
            <h2 className="text-3xl font-extrabold text-white text-center tracking-tight">
              Menu <span className="text-green-400 text-4xl brush-script">BioRiche</span>
            </h2>

            {/* Navigation */}
            <div className="grid gap-4 mt-8">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-semibold rounded-xl px-5 py-4 transition-all duration-300 shadow-lg ${
                    pathname === n.href
                      ? "bg-green-600 text-white shadow-green-500/30"
                      : "bg-white/10 text-gray-100 hover:bg-white/20"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </div>

            {/* Bouton COMMANDEZ */}
            <div className="mt-10">
              <Link
                href="/commande"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 hover:shadow-green-400/50 transition-all duration-300"
              >
                🛒 COMMANDEZ
              </Link>
            </div>

            {/* Barre Numéro + Icônes */}
            <div className="mt-8 grid gap-4">
              <a
                href="https://wa.me/22997178417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                <FaWhatsapp className="text-green-400" size={24} />
                <span className="font-medium text-white">+229 01 97 17 84 17</span>
              </a>

              <a
                href="tel:+22997178417"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                <FaPhoneAlt className="text-green-400" size={22} />
                <span className="font-medium text-white">+229 01 97 17 84 17</span>
              </a>

              <a
                href="mailto:bioriche.gsu@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                <MdEmail className="text-green-400" size={24} />
                <span className="font-medium text-white">
                  bioriche.gsu@gmail.com
                </span>
              </a>
            </div>

            {/* Bouton Fermer */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full py-3 rounded-xl bg-red-500/80 hover:bg-red-600 transition text-white font-semibold shadow-lg"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Drawer de commande */}
      <CartDrawer />
    </header>
  );
}

"use client";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function Page() {
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Numéro admin WhatsApp (format international)
  const ADMIN_WA_NUMBER = "22997178417"; // remplace par ton numéro (sans + pour wa.me)

  // Générer le message WhatsApp
  function buildOrderText(customer, items, total) {
    const lines = [];
    lines.push("🛒 NOUVELLE COMMANDE BioRiche");
    lines.push(`Nom: ${customer.firstName || ""} ${customer.lastName || ""}`);
    lines.push(`Téléphone: ${customer.phone || ""}`);
    lines.push(`Email: ${customer.email || ""}`);
    if (customer.notes) lines.push(`Notes: ${customer.notes}`);
    lines.push("");
    lines.push("Produits:");
    items.forEach((it) => {
      lines.push(`- ${it.name} ×${it.qty} = ${(it.price * it.qty).toFixed(0)} FCFA`);
    });
    lines.push("");
    lines.push(`Total: ${total.toFixed(0)} FCFA`);
    return lines.join("\n");
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = Object.fromEntries(new FormData(e.currentTarget));
    const customer = form;

    if (items.length === 0) {
      setStatus("Votre panier est vide.");
      setLoading(false);
      return;
    }

    // Construire le message WhatsApp
    const message = buildOrderText(customer, items, total);
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encoded}`;

    // Ouvrir WhatsApp
    window.open(waUrl, "_blank");

    // Nettoyer le panier
    clear();
    setLoading(false);
    setStatus("Commande envoyée via WhatsApp ✅");
  }

  return (
    <div className="container-max pt-40 my-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Validation de commande</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Formulaire client */}
        <form
          onSubmit={submit}
          className="card p-6 space-y-3 bg-white rounded-lg shadow"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="firstName"
              required
              placeholder="Nom"
              className="border rounded-lg px-3 py-2"
            />
            <input
              name="lastName"
              required
              placeholder="Prénom"
              className="border rounded-lg px-3 py-2"
            />
          </div>
          <input
            name="phone"
            required
            placeholder="Téléphone"
            className="border rounded-lg px-3 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="border rounded-lg px-3 py-2"
          />
          <textarea
            name="notes"
            placeholder="Adresse ou notes (optionnel)"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <button
            disabled={loading}
            className="btn-primary w-full py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
          >
            {loading ? "Envoi..." : "Valider ma commande"}
          </button>

          {status && <p className="text-sm mt-2">{status}</p>}
        </form>

        {/* Récapitulatif panier */}
        <aside className="card p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-3">Récapitulatif</h3>
          <ul className="space-y-2">
            {items.length === 0 && (
              <li className="text-sm text-gray-500">Votre panier est vide.</li>
            )}
            {items.map((i) => (
              <li key={i.id} className="flex justify-between text-sm">
                <span>
                  {i.name} × {i.qty}
                </span>
                <span>{(i.price * i.qty).toFixed(0)} FCFA</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>{total.toFixed(0)} FCFA</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            À la validation, WhatsApp s’ouvrira automatiquement pour envoyer les
            détails de votre commande.
          </p>
        </aside>
      </div>
    </div>
  );
}

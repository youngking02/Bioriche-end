"use client";
import { useCart } from "./CartContext";
import { X, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const { items, remove, change, total, isOpen, closeDrawer } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay semi-transparent */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeDrawer}
      />

      {/* Panneau du panier */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* En-tête */}
        <div className="p-5 border-b flex items-center justify-between">
          <h3 className="font-semibold">Panier ({items.length})</h3>
          <button className="btn-ghost" onClick={closeDrawer}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-5 space-y-4 bg-white overflow-y-auto max-h-[calc(100vh-160px)]">
          {items.length === 0 && (
            <p className="text-sm text-gray-600">Votre panier est vide.</p>
          )}

          {items.map((i) => (
            <div key={i.id} className="flex gap-3 items-center">
              <div className="size-14 rounded-xl bg-soft" />
              <div className="flex-1">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-gray-600">
                  {i.price.toFixed(0)} FCFA
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    value={i.qty}
                    min="1"
                    onChange={(e) =>
                      change(i.id, parseInt(e.target.value || "1"))
                    }
                    className="w-16 border rounded-lg px-2 py-1 text-sm"
                  />
                  <button
                    onClick={() => remove(i.id)}
                    className="text-red-500 text-sm inline-flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Retirer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t bg-white">
          <div className="flex items-center justify-between mb-3">
            <span>Total</span>
            <span className="font-semibold">{total.toFixed(0)} FCFA</span>
          </div>
          <Link
            href="/checkout"
            className="btn-primary w-full inline-flex justify-center"
            onClick={closeDrawer} 
          >
            Valider la commande
          </Link>
        </div>
      </aside>
    </div>
  );
}

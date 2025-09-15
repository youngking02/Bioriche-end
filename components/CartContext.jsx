"use client";
import { createContext, useContext, useState, useMemo } from "react";
const CartCtx = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Ajouter un produit + ouvrir le tiroir
  const add = (p) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
    setIsOpen(true); // Ouvre automatiquement le CartDrawer
  };

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const change = (id, qty) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, qty) } : i
      )
    );
  const clear = () => setItems([]);
  const total = useMemo(
    () => items.reduce((a, b) => a + b.price * b.qty, 0),
    [items]
  );

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <CartCtx.Provider
      value={{
        items,
        add,
        remove,
        change,
        clear,
        total,
        isOpen,
        openDrawer,
        closeDrawer
      }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);

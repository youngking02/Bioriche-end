import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BIORICH – Engrais biologiques",
  description: "BIORICH: Nourrir la terre, cultiver l'avenir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

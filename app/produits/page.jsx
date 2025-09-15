import ProductCard from "@/components/ProductCard";
import { LIQUIDS, SOLIDS } from "@/lib/products";

export const metadata = { title: "Nos Produits – BIORICHE" };

export default function Page(){
  return (
    <div className=" pt-40 container-max  my-10">
      <h1 className="text-5xl font-bold  text-center mb-6 brush-script">Nos Produits</h1>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-8">Fertilisants Solides</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {SOLIDS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-8 pt-10">Fertilisants Liquides</h2>
      <div className="grid md:grid-cols-3 pt-10 gap-6 mb-10">
        {LIQUIDS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      
    </div>
  );
}

import PartnersPage from "@/components/PartnersPage";
export const metadata = { title: "Nos partenaires – BIORICH" };

export default function Page(){
  return (
    <div className="container-max my-10">
      <h1 className="text-2xl font-bold mb-6">Nos partenaires</h1>
      <PartnersPage />
      <p className="text-sm text-gray-700">Nous collaborons avec des organisations locales et internationales engagées pour une agriculture durable.</p>
    </div>
  );
}

export const metadata = { title: "Vidéos – BIORICH" };
export default function Page(){
  return (
    <div className="container-max my-10">
      <h1 className="text-2xl font-bold mb-6">Vidéos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <iframe className="w-full h-64" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="BIORICH" allowFullScreen />
        </div>
        <div className="card overflow-hidden">
          <iframe className="w-full h-64" src="https://www.youtube.com/embed/ysz5S6PUM-U" title="BIORICH 2" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

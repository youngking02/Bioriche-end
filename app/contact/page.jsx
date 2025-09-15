export const metadata = { title: "Contact – BIORICH" };
export default function Page(){
  return (
    <div className="container-max my-10">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form className="card p-6 grid md:grid-cols-2 gap-4" action="https://formsubmit.co/your@email.com" method="POST">
        <input className="hidden" name="_captcha" value="false" readOnly />
        <input className="hidden" name="_subject" value="Message site BIORICH" readOnly />
        <input required name="name" placeholder="Nom et prénom" className="border rounded-lg px-3 py-2" />
        <input required name="email" placeholder="Email" type="email" className="border rounded-lg px-3 py-2" />
        <input name="phone" placeholder="Téléphone" className="border rounded-lg px-3 py-2 md:col-span-2" />
        <textarea name="message" placeholder="Votre message" rows="5" className="border rounded-lg px-3 py-2 md:col-span-2"></textarea>
        <button className="btn-primary md:col-span-2">Envoyer</button>
      </form>
    </div>
  );
}

import { NextResponse } from "next/server";

const { WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID } = process.env;

export async function POST(req){
  const { customer, items, total } = await req.json();

  if(!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID){
    return new NextResponse("WhatsApp env vars not set", { status: 500 });
  }

  const msg = `Nouvelle commande BIORICH%0AClient: ${encodeURIComponent(customer.firstName)} ${encodeURIComponent(customer.lastName)}%0AEmail: ${encodeURIComponent(customer.email)}%0ATel: ${encodeURIComponent(customer.phone)}%0A------%0A${items.map(i => `${i.name} x${i.qty}`).join("%0A")}%0ATotal: ${total} FCFA`;

  // Send to your own WhatsApp (template-free text via Cloud API using "messages")
  const url = `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`;
  const payload = {
    messaging_product: "whatsapp",
    to: customer.phone, // send confirmation to customer
    type: "text",
    text: { preview_url: false, body: "Merci pour votre commande BIORICH ! Nous revenons vers vous rapidement. Total: " + total + " FCFA" }
  };

  const adminPayload = {
    messaging_product: "whatsapp",
    to: customer.phone, // You may change to your own number stored in env for admin notifications
    type: "text",
    text: { body: "Copie client, utilisez l'email pour les détails." }
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if(!res.ok){
      const t = await res.text();
      throw new Error(t);
    }
  } catch (e){
    return new NextResponse(e.message, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

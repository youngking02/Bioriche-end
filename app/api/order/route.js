import { NextResponse } from "next/server";

export async function POST(req){
  const body = await req.json();
  // cascade to email + WhatsApp
  try {
    const [emailRes, waRes] = await Promise.all([
      fetch(new URL("/api/order/email", req.nextUrl.origin), {
        method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(body)
      }),
      fetch(new URL("/api/order/whatsapp", req.nextUrl.origin), {
        method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(body)
      })
    ]);
    if(!emailRes.ok){ const t = await emailRes.text(); throw new Error(t); }
    if(!waRes.ok){ const t = await waRes.text(); throw new Error(t); }
    return NextResponse.json({ ok: true });
  } catch (e){
    return new NextResponse(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const {
  EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, ADMIN_TO_EMAIL
} = process.env;

export async function POST(req){
  const { customer, items, total } = await req.json();
  if(!EMAIL_HOST) return new NextResponse("EMAIL env vars not set", { status: 500 });
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT || "587"),
    secure: false,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  });

  const summary = items.map(i => `${i.name} x${i.qty} — ${(i.price*i.qty).toFixed(0)} FCFA`).join("\n");
  const htmlList = items.map(i => `<li>${i.name} × ${i.qty} — ${(i.price*i.qty).toFixed(0)} FCFA</li>`).join("");

  // Email to admin
  await transporter.sendMail({
    from: `BIORICH <${EMAIL_USER}>`,
    to: ADMIN_TO_EMAIL,
    subject: "Nouvelle commande BIORICH",
    text: `Client: ${customer.firstName} ${customer.lastName} (${customer.email}, ${customer.phone})\n\n${summary}\nTotal: ${total} FCFA`,
    html: `<p><strong>Client:</strong> ${customer.firstName} ${customer.lastName} (${customer.email}, ${customer.phone})</p><ul>${htmlList}</ul><p><strong>Total:</strong> ${total} FCFA</p>`
  });

  // Confirmation to client
  await transporter.sendMail({
    from: `BIORICH <${EMAIL_USER}>`,
    to: customer.email,
    subject: "Confirmation de commande – BIORICH",
    text: `Merci pour votre commande ! Total: ${total} FCFA\nNous vous contactons rapidement pour la confirmation.`,
    html: `<p>Merci pour votre commande !</p><p>Total: <strong>${total} FCFA</strong></p><p>Nous vous contactons rapidement pour la confirmation.</p>`
  });

  return NextResponse.json({ ok: true });
}

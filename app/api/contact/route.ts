import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const title = body.title?.trim();
    const message = body.message?.trim();

    if (!name || !email || !title || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "The Issue <editor@theissue.xyz>",
      to: process.env.CONTACT_TO_EMAIL || "theissue.submissions@gmail.com",
      replyTo: email,
      subject: `New submission: ${title}`,
      text: `
Name: ${name}
Email: ${email}
Title: ${title}

Message:
${message}
      `.trim(),
      html: `
        <h2>New submission from The Issue</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Title:</strong> ${escapeHtml(title)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);

      return NextResponse.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("Resend success:", result.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
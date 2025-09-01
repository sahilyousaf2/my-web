import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { full_name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "Sahil Yousaf Web Contact <onboarding@resend.dev>", // 👈 verify domain/email yahan lagao
      to: "sahilyousaf66@gmail.com",             // 👈 jahan receive karna hai
      subject: `New Contact Form Message from ${full_name}`,
      text: `
        Name: ${full_name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}

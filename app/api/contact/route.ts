import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get the Google Apps Script webhook URL from environment variables
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare the data for Google Sheets
    const payload = {
      name,
      email,
      company: company || "N/A",
      message,
      timestamp: new Date().toISOString(),
    };

    // Send the data to Google Apps Script webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Google Sheets webhook failed:", response.statusText);
      return NextResponse.json(
        { success: false, message: "Failed to save message" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}

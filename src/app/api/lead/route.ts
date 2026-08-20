import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (resets on server restart)
// For production, use Redis or a proper rate-limiting service
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function validate(body: Record<string, string>): string | null {
  if (!body.fullName || body.fullName.trim().length < 2) {
    return "Full name is required.";
  }
  if (!body.phone || body.phone.trim().length < 7) {
    return "A valid phone number is required.";
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "Invalid email address.";
  }
  return null;
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — if 'website' field is filled, silently succeed (bot)
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  // TODO: Replace with your email notification setup
  // Options:
  //   1. Resend: https://resend.com — add RESEND_API_KEY env var
  //   2. SendGrid
  //   3. Nodemailer with SMTP
  //   4. Webhook to CRM (HubSpot, Pipedrive, etc.)
  //
  // Example with Resend:
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "leads@dallas.alairductcleaning.com",
  //   to: process.env.LEAD_EMAIL || "info@dallas.alairductcleaning.com",
  //   subject: `New lead: ${body.fullName} — ${body.service || "General inquiry"}`,
  //   html: `
  //     <h2>New lead from AL Air Duct Cleaning Dallas website</h2>
  //     <p><strong>Name:</strong> ${body.fullName}</p>
  //     <p><strong>Phone:</strong> ${body.phone}</p>
  //     <p><strong>Email:</strong> ${body.email || "(not provided)"}</p>
  //     <p><strong>Service:</strong> ${body.service || "(not specified)"}</p>
  //     <p><strong>ZIP:</strong> ${body.zip || "(not provided)"}</p>
  //     <p><strong>Message:</strong> ${body.message || "(none)"}</p>
  //   `,
  // });

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("Lead form submission:", {
      name: body.fullName,
      phone: body.phone,
      email: body.email,
      service: body.service,
      zip: body.zip,
      message: body.message,
      timestamp: new Date().toISOString(),
    });
  }

  // TODO: Optionally send to a webhook
  // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  // if (webhookUrl) {
  //   await fetch(webhookUrl, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...body, source: "website", timestamp: new Date().toISOString() }),
  //   });
  // }

  return NextResponse.json({ success: true });
}

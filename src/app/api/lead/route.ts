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

  // ── Formsubmit.co (100% free, no API key required) ──
  // First submission triggers a one-time activation email to info@alhomeservices.us
  // Click "Activate Form" in that email once — then all future leads arrive instantly.
  try {
    const serviceLabel: Record<string, string> = {
      "air-duct-cleaning": "Air Duct Cleaning",
      "dryer-vent-cleaning": "Dryer Vent Cleaning",
      "hvac-cleaning": "HVAC Cleaning",
      "residential-air-duct-cleaning": "Residential Duct Cleaning",
      "commercial-air-duct-cleaning": "Commercial Duct Cleaning",
      "sanitization-deodorization": "Sanitization & Deodorization",
      "mold-inspection-removal": "Mold Inspection & Removal",
      "not-sure": "Not sure",
    };

    const payload = {
      _subject: `New lead: ${body.fullName} — ${serviceLabel[body.service] ?? body.service ?? "General inquiry"}`,
      _captcha: "false",          // disable Formsubmit's own captcha (we already honeypot)
      _template: "table",         // clean table-style email
      Name: body.fullName,
      Phone: body.phone,
      Email: body.email || "(not provided)",
      Service: serviceLabel[body.service] ?? body.service ?? "(not selected)",
      ZIP: body.zip || "(not provided)",
      Message: body.message || "(none)",
      Source: "AL Air Duct Cleaning Dallas — website lead form",
    };

    const res = await fetch("https://formsubmit.co/ajax/info@alhomeservices.us", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // Formsubmit returned an error — log it but don't block the user
      console.error("Formsubmit error:", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    // Network error — log it but still return success to the user
    console.error("Formsubmit fetch failed:", err);
  }

  return NextResponse.json({ success: true });
}

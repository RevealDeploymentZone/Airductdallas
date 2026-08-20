"use client";
import { useState } from "react";
import { SERVICES } from "@/data/business";
import { CheckCircle, Loader2 } from "lucide-react";

interface LeadFormProps {
  heading?: string;
  subline?: string;
  compact?: boolean;
}

export default function LeadForm({
  heading = "Get your free estimate",
  subline = "No obligation. We respond within 1 hour.",
  compact = false,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bot filled the hidden field, silently succeed
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const fullName = (data.get("fullName") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const service = data.get("service") as string;
    const zip = (data.get("zip") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    // Client-side validation
    if (!fullName || fullName.length < 2) {
      setError("Full name is required.");
      setStatus("error");
      return;
    }
    if (!phone || phone.length < 7) {
      setError("A valid phone number is required.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          zip,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please call us directly.");
      }

      setStatus("success");
      form.reset();

      // Fire GA4 event if available
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: "Contact Form",
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle className="text-[#16A34A]" size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A]">We got your request.</h3>
        <p className="text-[#475569] text-sm">We'll call you back within 1 hour.</p>
      </div>
    );
  }

  return (
    <div>
      {(heading || subline) && (
        <div className="mb-5">
          {heading && <h2 className="text-xl font-bold text-[#0F172A] font-display">{heading}</h2>}
          {subline && <p className="text-sm text-[#475569] mt-1">{subline}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real users, catches bots */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={`grid gap-3 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          <div className={compact ? "" : "sm:col-span-2"}>
            <label htmlFor="fullName" className="block text-xs font-medium text-[#0F172A] mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              placeholder="Jane Smith"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-[#0F172A] mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(214) 555-0100"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[#0F172A] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@email.com"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-medium text-[#0F172A] mb-1">
              Service needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent bg-white"
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="zip" className="block text-xs font-medium text-[#0F172A] mb-1">
              ZIP code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              inputMode="numeric"
              maxLength={5}
              placeholder="75201"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent"
            />
          </div>

          <div className={compact ? "" : "sm:col-span-2"}>
            <label htmlFor="message" className="block text-xs font-medium text-[#0F172A] mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Any details that help us prepare (square footage, number of vents, etc.)…"
              className="w-full px-3 py-2.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] focus:border-transparent resize-none"
            />
          </div>
        </div>

        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm min-h-[48px]"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Get my free estimate"
          )}
        </button>
      </form>
    </div>
  );
}

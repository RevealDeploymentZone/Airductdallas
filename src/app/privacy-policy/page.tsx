import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy | AL Air Duct Cleaning Dallas",
  description: "Privacy policy for AL Air Duct Cleaning Dallas website and services.",
  alternates: { canonical: `${BUSINESS.domain}/privacy-policy` },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container max-w-3xl mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
        <h1 className="text-3xl font-bold text-[#0F172A] font-display mb-8">Privacy policy</h1>
        <div className="space-y-6 text-[#475569] leading-relaxed text-sm">
          <p><strong className="text-[#0F172A]">Last updated:</strong> August 2026</p>
          <p>
            {BUSINESS.name} ("we," "our," or "us") operates the website at {BUSINESS.domain}. This privacy policy explains how we collect, use, and protect information you provide when using our website.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Information we collect</h2>
          <p>
            When you submit our contact form or request an estimate, we collect the information you provide — your name, phone number, email address, service type, ZIP code, and any message you include. We use this information solely to respond to your inquiry and schedule service.
          </p>
          <p>
            Our website may also collect standard web server logs including IP addresses, browser type, and pages visited. We use this data to understand site performance and user experience in aggregate — we do not use it to identify individuals.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">How we use your information</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To respond to your service inquiry or estimate request</li>
            <li>To schedule and confirm service appointments</li>
            <li>To follow up on service you've received, if applicable</li>
            <li>To improve our website and service operations</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Cookies and analytics</h2>
          <p>
            This site may use analytics cookies (such as Google Analytics) to understand aggregate website usage. If you prefer not to be tracked, you can use your browser's incognito/private mode or install an ad-blocking browser extension that blocks analytics trackers.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Data retention</h2>
          <p>
            We retain contact form submissions for a reasonable period for business and follow-up purposes. If you'd like your information removed from our records, contact us at {BUSINESS.email} and we'll accommodate your request.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Contact</h2>
          <p>
            Questions about this privacy policy? Contact us at <a href={`mailto:${BUSINESS.email}`} className="text-[#0B5563] underline">{BUSINESS.email}</a> or {BUSINESS.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms of Service | AL Air Duct Cleaning Dallas",
  description: "Terms of service for AL Air Duct Cleaning Dallas.",
  alternates: { canonical: `${BUSINESS.domain}/terms` },
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container max-w-3xl mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />
        <h1 className="text-3xl font-bold text-[#0F172A] font-display mb-8">Terms of service</h1>
        <div className="space-y-6 text-[#475569] leading-relaxed text-sm">
          <p><strong className="text-[#0F172A]">Last updated:</strong> August 2026</p>
          <p>
            By using the {BUSINESS.name} website at {BUSINESS.domain} or engaging our services, you agree to the following terms.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Services</h2>
          <p>
            {BUSINESS.name} provides air duct cleaning, dryer vent cleaning, HVAC cleaning, mold inspection, and related services in the Dallas–Fort Worth area. Service scope, pricing, and scheduling are confirmed before work begins. We provide a written summary of work completed after each job.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Estimates and pricing</h2>
          <p>
            Estimates provided over the phone or through the website are preliminary. An exact price is confirmed on-site after a pre-cleaning inspection. Work does not begin until the customer agrees to the confirmed price. We do not change pricing once work has started.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Customer responsibilities</h2>
          <p>
            Customers are responsible for ensuring an authorized adult is present during the service appointment, that the technician has reasonable access to the HVAC system and all duct access points, and that pets are secured in a separate area during the cleaning.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Limitation of liability</h2>
          <p>
            We are not liable for pre-existing damage to duct systems, HVAC equipment, or building structure that is discovered during inspection or cleaning. Any pre-existing conditions will be documented and communicated to the customer. Our liability for any claim arising from our services is limited to the amount paid for those services.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Website content</h2>
          <p>
            Information on this website is provided for general informational purposes. We make reasonable efforts to ensure accuracy but do not warrant that all content is current or complete. Outbound links to third-party sources (EPA, NFPA, NADCA, etc.) are provided for reference — we are not responsible for the content of external sites.
          </p>

          <h2 className="text-lg font-bold text-[#0F172A] font-display">Contact</h2>
          <p>
            Questions about these terms? Contact us at <a href={`mailto:${BUSINESS.email}`} className="text-[#0B5563] underline">{BUSINESS.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

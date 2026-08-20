import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact AL Air Duct Cleaning Dallas | Free Estimate",
  description:
    "Contact AL Air Duct Cleaning Dallas for a free estimate. Call, email, or submit our form. Same-day service available. We respond within 1 hour.",
  alternates: { canonical: `${BUSINESS.domain}/contact` },
};

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Contact", url: `${BUSINESS.domain}/contact` },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact AL Air Duct Cleaning Dallas",
            url: `${BUSINESS.domain}/contact`,
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Contact us — get your free estimate
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Call or submit the form. We respond within 1 hour during business hours, and same-day service is available across Dallas–Fort Worth.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#E6F3F5] flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm mb-0.5">Phone</div>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#0B5563] font-semibold text-lg hover:text-[#094750] transition-colors">
                      {BUSINESS.phone}
                    </a>
                    <p className="text-sm text-[#475569] mt-0.5">Call or text — available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#E6F3F5] flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm mb-0.5">Email</div>
                    <a href={`mailto:${BUSINESS.email}`} className="text-[#0B5563] hover:text-[#094750] transition-colors">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#E6F3F5] flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm mb-0.5">Service area</div>
                    <p className="text-[#475569]">Dallas–Fort Worth Metroplex</p>
                    <p className="text-sm text-[#475569]">All of Dallas, Collin, Denton, Tarrant, and Rockwall counties</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#E6F3F5] flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm mb-0.5">Hours</div>
                    <p className="text-[#475569]">{BUSINESS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Google Map embed — lazy-loaded */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[#E2E8F0]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d429706.40649064005!2d-96.796988!3d32.776665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991a0c756783%3A0xd25ce49a9e92b756!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AL Air Duct Cleaning Dallas service area map"
                />
              </div>
            </div>

            <div className="card p-8 shadow-card">
              <LeadForm
                heading="Get your free estimate"
                subline="No obligation. We respond within 1 hour."
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-14 lg:hidden" />
    </>
  );
}

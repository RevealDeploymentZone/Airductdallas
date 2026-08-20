import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Building2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Commercial Air Duct Cleaning in Dallas, TX | AL Air Duct Cleaning",
  description:
    "Commercial air duct cleaning for offices, restaurants, retail, and multi-unit properties across Dallas–Fort Worth. After-hours scheduling available. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/commercial-air-duct-cleaning` },
};

const FAQS = [
  {
    question: "How often should commercial ducts be cleaned in Dallas?",
    answer: "NADCA guidelines recommend commercial duct cleaning when there is visible contamination, after construction or renovation, or when system performance degrades. Most Dallas commercial properties benefit from cleaning every 2–4 years depending on occupancy type, foot traffic, and HVAC system configuration. High-traffic spaces like restaurants and medical offices typically need more frequent service.",
  },
  {
    question: "Can commercial duct cleaning be done after hours?",
    answer: "Yes. We regularly work evenings and weekends for commercial clients who can't afford to disrupt business operations. Scheduling is confirmed in advance, and we work to minimize any interruption to your space.",
  },
  {
    question: "Do you clean restaurant hood and exhaust systems?",
    answer: "We clean HVAC supply and return duct systems in restaurant spaces. Restaurant kitchen hood and exhaust systems (commercial kitchen exhaust) are a specialized service with separate regulatory requirements — contact us to discuss your specific configuration.",
  },
  {
    question: "What's the difference between commercial and residential duct cleaning?",
    answer: "Commercial systems are typically larger, more complex, and use different duct configurations — rooftop units (RTUs), VAV boxes, diffusers, and larger-diameter main trunks. Commercial cleaning requires heavier-duty equipment and more technicians. We provide detailed scoping for commercial projects before quoting.",
  },
  {
    question: "Do you provide documentation for property managers?",
    answer: "Yes. We provide a written report documenting the scope of work, areas cleaned, findings, and any recommendations. This documentation supports building maintenance records and tenant air quality requirements.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Commercial Duct Cleaning", url: `${BUSINESS.domain}/services/commercial-air-duct-cleaning` },
];

export default function CommercialDuctPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Commercial Air Duct Cleaning", description: "Professional commercial air duct cleaning for office buildings, restaurants, retail, and multi-unit properties across Dallas–Fort Worth.", slug: "commercial-air-duct-cleaning" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Commercial Duct Cleaning" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0B5563]">For businesses</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Commercial air duct cleaning in Dallas, TX
              </h1>
              <div className="answer-box mb-6">
                <p>
                  AL Air Duct Cleaning Dallas provides commercial duct cleaning for office buildings, retail spaces, restaurants, medical offices, and multi-unit properties across Dallas–Fort Worth. After-hours scheduling available. We provide detailed written documentation suitable for property records.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-5">
                Commercial HVAC systems in DFW face some of the same challenges as residential systems — but at larger scale and with fewer opportunities for scheduled maintenance. Office buildings in Las Colinas, Uptown, and the Telecom Corridor run their systems year-round with high occupancy loads. Retail spaces in Galleria Dallas and other high-traffic locations see constant foot traffic that accelerates particulate accumulation.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                We work with property managers, building engineers, and business owners to schedule around operational requirements. For most commercial clients, we work evenings or weekends to avoid any disruption to daily business. We provide documentation before and after the job suitable for maintenance records.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm min-h-[48px]">
                  <Phone size={16} strokeWidth={1.5} /> Call to discuss your project
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm min-h-[48px]">
                  Request a commercial estimate
                </Link>
              </div>
            </div>
            <div className="card p-6 shadow-card">
              <LeadForm heading="Get a commercial estimate" subline="We'll respond within 1 business hour." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">Commercial property types we serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { type: "Office buildings", detail: "Class A and B office buildings, corporate campuses, co-working spaces throughout DFW" },
              { type: "Retail spaces", detail: "Shopping centers, standalone retail, showrooms, and high-traffic customer-facing spaces" },
              { type: "Restaurants", detail: "HVAC supply and return systems in full-service restaurants, fast casual, and food courts" },
              { type: "Medical and dental offices", detail: "Clean-room standard cleaning for spaces with heightened air quality requirements" },
              { type: "Multi-unit residential", detail: "Apartment complexes, senior living communities, and condominium buildings" },
              { type: "Industrial and warehouse", detail: "Large-volume spaces with industrial HVAC configurations" },
            ].map((item) => (
              <div key={item.type} className="card p-4">
                <div className="font-semibold text-[#0F172A] text-sm mb-1">{item.type}</div>
                <p className="text-xs text-[#475569] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-4">What commercial duct cleaning includes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Pre-cleaning system assessment and scope documentation",
              "Negative-pressure HEPA equipment scaled for commercial systems",
              "All supply and return duct runs — including large-diameter main trunks",
              "Diffusers, grilles, and supply/return boots",
              "Air handling units — internal components per scope",
              "Plenum spaces and distribution boxes",
              "Written post-cleaning report for maintenance records",
              "After-hours and weekend scheduling available",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8FAFC]">
                <CheckCircle size={15} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-[#475569]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Commercial duct cleaning — FAQ</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#0F172A] font-display mb-4">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
              { href: "/services/sanitization-deodorization", label: "Sanitization & deodorization" },
              { href: "/services/air-duct-cleaning", label: "Air duct cleaning" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E2E8F0] rounded-lg text-sm text-[#0B5563] font-medium hover:bg-[#E6F3F5] transition-colors">
                {l.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0B5563] text-white text-center">
        <div className="container">
          <h2 className="text-2xl font-bold font-display mb-3">Commercial duct cleaning across DFW</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">After-hours and weekend scheduling. Written documentation provided. Free site assessment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-bold rounded-lg hover:bg-[#C4501A] transition-colors">
              <Phone size={16} /> Call to discuss your project
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B5563] font-bold rounded-lg hover:bg-[#E6F3F5] transition-colors">
              Request a commercial estimate
            </Link>
          </div>
        </div>
      </section>
      <div className="h-14 lg:hidden" />
    </>
  );
}

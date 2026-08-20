import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "HVAC Cleaning in Dallas, TX | Coil, Blower & Air Handler Cleaning",
  description:
    "HVAC cleaning in Dallas–Fort Worth — evaporator coil, blower wheel, and air handler cleaning. Restore system efficiency and airflow. Same-day service. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/hvac-cleaning` },
};

const FAQS = [
  {
    question: "What does HVAC cleaning include?",
    answer: "A complete HVAC cleaning covers the evaporator coil, blower wheel and housing, drain pan, air handler cabinet interior, supply and return plenums, and all accessible ductwork. It goes beyond air duct cleaning by addressing the mechanical components — the parts that actually condition the air before it enters the duct system.",
  },
  {
    question: "How do I know if my HVAC coil needs cleaning?",
    answer: "Signs include longer run times to reach setpoint, reduced airflow from registers, ice formation on the refrigerant line or coil, musty odors when the system runs, and higher electricity bills during cooling season. In Dallas, coil fouling from cedar pollen and fine construction dust is common and often develops within 2–3 years.",
  },
  {
    question: "How much does HVAC cleaning cost in Dallas?",
    answer: "HVAC cleaning (coil, blower, and air handler) typically costs $200–$400 as a standalone service, or less when bundled with full duct cleaning on the same visit. The exact price depends on system configuration, access, and the degree of fouling.",
  },
  {
    question: "Will cleaning the evaporator coil lower my electricity bill?",
    answer: "A fouled evaporator coil reduces heat transfer efficiency, forcing the compressor to run longer to achieve the same cooling effect. Restoring clean coil surfaces can reduce run time. The extent of savings depends on how fouled the coil was and how your system is sized — we don't promise a specific percentage.",
  },
  {
    question: "Is HVAC cleaning the same as HVAC maintenance?",
    answer: "No. HVAC maintenance typically refers to refrigerant checks, electrical inspections, and filter changes performed by a licensed HVAC contractor. HVAC cleaning is specifically about removing accumulated debris from internal components. Both are important — they address different aspects of system performance.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "HVAC Cleaning", url: `${BUSINESS.domain}/services/hvac-cleaning` },
];

export default function HvacCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "HVAC Cleaning", description: "Professional HVAC cleaning in Dallas–Fort Worth — evaporator coil, blower wheel, and air handler cleaning to restore system efficiency.", slug: "hvac-cleaning" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "HVAC Cleaning" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                HVAC cleaning in Dallas, TX
              </h1>
              <div className="answer-box mb-6">
                <p>
                  HVAC cleaning removes debris from the mechanical components of your heating and cooling system — the evaporator coil, blower wheel, drain pan, and air handler cabinet. In Dallas, where systems run 8–10 months per year, these components foul with pollen, dust, and biological material faster than in most climates. Cost typically ranges from $200–$400.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-5">
                Most homeowners focus on duct cleaning, but the components that condition the air before it enters the ductwork are where fouling has the most direct impact on system performance. A dirty evaporator coil can't transfer heat efficiently. A clogged blower wheel can't move air at designed flow rates. Both problems force your system to run longer, consume more electricity, and stress expensive components.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                In the Dallas area, mountain cedar pollen is particularly problematic for evaporator coils. Cedar pollen particles are small enough to penetrate standard MERV-8 filters and sticky enough to bond to coil fin surfaces, gradually restricting airflow and reducing the coil's heat exchange capacity. Without periodic cleaning, this buildup compounds year over year.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm min-h-[48px]">
                  <Phone size={16} strokeWidth={1.5} /> Call for same-day service
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm min-h-[48px]">
                  Get my free estimate
                </Link>
              </div>
            </div>
            <div className="card p-6 shadow-card">
              <LeadForm heading="Get a free HVAC cleaning estimate" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">What HVAC cleaning covers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Evaporator coil — cleaned with appropriate coil-safe cleaner and rinsed",
              "Blower wheel and housing — debris removal to restore airflow balance",
              "Drain pan — cleaned and drain line confirmed clear",
              "Air handler cabinet interior — vacuumed and wiped",
              "Supply and return plenums adjacent to air handler",
              "Electrical compartment visual check for dust accumulation",
              "Filter slot and filter condition assessment",
              "Post-cleaning airflow comparison at registers",
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
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">HVAC cleaning vs duct cleaning — what's the difference?</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <caption className="text-left text-xs text-[#94A3B8] mb-3">Difference between HVAC cleaning and air duct cleaning</caption>
              <thead>
                <tr className="bg-white">
                  <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Service</th>
                  <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">What it cleans</th>
                  <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Primary benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium text-[#0F172A] border border-[#E2E8F0]">Air duct cleaning</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">Supply ducts, return ducts, registers, plenums</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">Cleaner recirculated air, reduced particulate</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-3 font-medium text-[#0F172A] border border-[#E2E8F0]">HVAC cleaning</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">Evaporator coil, blower, drain pan, air handler</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">Restored system efficiency, reduced run time</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#0F172A] border border-[#E2E8F0]">Full system cleaning</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">All of the above</td>
                  <td className="p-3 text-[#475569] border border-[#E2E8F0]">Maximum air quality and efficiency improvement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#475569] leading-relaxed">
            We recommend combining both services when possible — a full system cleaning addresses every point where contamination affects air quality and efficiency. Done on the same visit, the combined cost is typically less than booking them separately.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">HVAC cleaning — frequently asked questions</h2>
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

      <section className="py-10 bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#0F172A] font-display mb-4">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/air-duct-cleaning", label: "Air duct cleaning" },
              { href: "/services/sanitization-deodorization", label: "Sanitization & deodorization" },
              { href: "/services/commercial-air-duct-cleaning", label: "Commercial duct cleaning" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Schedule HVAC cleaning in Dallas</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Same-day service available. Free estimate before any work begins.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-bold rounded-lg hover:bg-[#C4501A] transition-colors">
              <Phone size={16} /> Call for same-day service
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B5563] font-bold rounded-lg hover:bg-[#E6F3F5] transition-colors">
              Get my free estimate
            </Link>
          </div>
        </div>
      </section>
      <div className="h-14 lg:hidden" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning in Dallas, TX | AL Air Duct Cleaning Dallas",
  description:
    "Professional dryer vent cleaning across Dallas–Fort Worth. Remove lint buildup from duct to exterior cap. Prevents dryer fires — the leading cause is lint accumulation. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/dryer-vent-cleaning` },
};

const FAQS = [
  {
    question: "How often should I clean my dryer vent in Dallas?",
    answer: "Most households benefit from annual dryer vent cleaning. In DFW, where hot summers and high usage rates accelerate lint drying and buildup, homes with heavy laundry loads — families, households with children or pets — may need cleaning every 6–8 months. The clearest indicator is extended drying times: if a standard load takes more than one cycle, the vent likely needs cleaning.",
  },
  {
    question: "How much does dryer vent cleaning cost in Dallas?",
    answer: "A standard single dryer vent cleaning typically costs $100–$175, depending on vent length, number of elbows, and whether the exterior cap needs to be cleared of a bird nest or debris. We provide an exact price after assessing the vent configuration.",
  },
  {
    question: "What are the signs that my dryer vent needs cleaning?",
    answer: "Clothes taking more than one cycle to dry fully, the dryer surface or surrounding wall feeling hot during operation, a burning smell when the dryer runs, the exterior vent flap not opening properly during dryer use, or more than 12 months since the last cleaning are all clear indicators.",
  },
  {
    question: "Can a blocked dryer vent really cause a fire?",
    answer: "Yes. According to the National Fire Protection Association (NFPA), dryers and washing machines are involved in approximately 15,000 home structure fires each year in the United States, with failure to clean as the leading contributing factor. Lint is highly combustible, and a restricted vent allows heat to build up at the dryer exhaust — sometimes to the point of ignition.",
  },
  {
    question: "What's the difference between dryer duct cleaning and air duct cleaning?",
    answer: "Air duct cleaning cleans the HVAC distribution system — the network of supply and return ducts that carry heated and cooled air throughout your home. Dryer vent cleaning cleans the separate exhaust duct that runs from your dryer to the exterior of the home. They are different systems requiring different equipment and technique.",
  },
  {
    question: "My dryer vent runs through the roof — is that harder to clean?",
    answer: "Vertical vent runs that exit through the roof are more difficult to access than side-wall exits and often accumulate more lint at the elbows. We clean these configurations — it requires longer flexible rods and sometimes exterior access. We'll assess the route during the free inspection and confirm the price before starting.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Dryer Vent Cleaning", url: `${BUSINESS.domain}/services/dryer-vent-cleaning` },
];

export default function DryerVentCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Dryer Vent Cleaning", description: "Professional dryer vent cleaning in Dallas–Fort Worth — lint removal from dryer to exterior cap to prevent fires and restore drying efficiency.", slug: "dryer-vent-cleaning" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Dryer Vent Cleaning" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Dryer vent cleaning in Dallas, TX
              </h1>
              <div className="answer-box mb-6">
                <p>
                  Dryer vent cleaning removes accumulated lint from the exhaust duct between your dryer and the exterior vent cap. It's the most effective single action to prevent dryer fires, and it restores drying efficiency. In Dallas, a standard cleaning costs $100–$175. AL Air Duct Cleaning Dallas serves all of DFW with same-day availability.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
                <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-amber-800">
                  According to the <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">NFPA</a>, failure to clean is the leading factor in dryer fires. Lint is highly combustible, and a restricted vent allows heat to accumulate to ignition levels.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-8">
                Most Dallas homeowners don't think about their dryer vent until the dryer stops working properly. By then, lint has been compressing for months or years, and in a Texas summer — where laundry runs constantly and attic temperatures make every duct run hotter — the fire risk is real and not theoretical.
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
              <LeadForm heading="Get a free dryer vent cleaning estimate" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">What dryer vent cleaning includes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Visual inspection of the full vent run — interior and exterior",
              "Flexible rod and brush cleaning from the dryer connection to the exterior cap",
              "Removal of all lint accumulation along the duct length",
              "Clearing of the exterior vent cap — including bird nests or debris blocking the flap",
              "Airflow test to confirm the vent is fully clear after cleaning",
              "Check of duct material — foil accordion duct is a fire hazard and will be flagged",
              "Inspection of duct connections for gaps or disconnections",
              "Written summary including vent length, elbow count, and any findings",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8FAFC]">
                <CheckCircle size={15} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-[#475569]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dallas-specific angle */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">Why dryer vent cleaning is especially important in DFW</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Dallas summers are hard on dryer vents. Attic temperatures in DFW regularly exceed 140°F from June through September. For homes where the dryer vent runs through the attic — common in two-story homes throughout Frisco, Plano, McKinney, and other DFW suburbs — the heat in the attic space dries out accumulated lint faster and makes it more combustible. A vent run that might take years to become a fire hazard in a cooler climate can reach that threshold faster in a Texas summer.
            </p>
            <p>
              DFW households also tend to run their dryers more frequently than the national average — larger households, more children at home, and the year-round active lifestyle that defines North Texas all translate to more laundry cycles per week. More cycles mean faster lint accumulation.
            </p>
            <p>
              Long vent runs are another factor. Many newer DFW homes have laundry rooms positioned on the second floor or in the interior of the home, creating dryer vent runs of 15, 20, or even 25 feet before reaching the exterior. Longer runs with more elbows restrict airflow and create more surface area for lint accumulation. Standard consumer cleaning kits can't reach these configurations — professional equipment with sufficient rod length is required.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">DIY dryer vent cleaning vs professional service</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="text-left text-xs text-[#94A3B8] mb-3">Comparison of DIY consumer kits vs professional dryer vent cleaning</caption>
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Factor</th>
                  <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">DIY kit</th>
                  <th scope="col" className="text-left p-3 font-semibold text-[#0B5563] border border-[#E2E8F0]">Professional cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reach", "Typically 12–18 ft max", "Full vent length — 25+ ft"],
                  ["Elbows and bends", "Often can't navigate properly", "Flexible professional rods handle bends"],
                  ["Exterior cap", "May not address exterior end", "Full inspection and clearing of exterior cap"],
                  ["Airflow confirmation", "No verification method", "Airflow tested before and after"],
                  ["Hazardous material detection", "Not identified", "Accordion foil duct flagged for replacement"],
                  ["Bird nest / debris removal", "No", "Yes, exterior cap fully cleared"],
                ].map(([factor, diy, pro]) => (
                  <tr key={factor}>
                    <td className="p-3 font-medium text-[#0F172A] border border-[#E2E8F0]">{factor}</td>
                    <td className="p-3 text-[#475569] border border-[#E2E8F0]">{diy}</td>
                    <td className="p-3 text-[#475569] border border-[#E2E8F0]">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Dryer vent cleaning — frequently asked questions</h2>
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

      {/* Related services */}
      <section className="py-10 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#0F172A] font-display mb-4">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/air-duct-cleaning", label: "Air duct cleaning" },
              { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
              { href: "/services/residential-air-duct-cleaning", label: "Residential duct cleaning" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Schedule your Dallas dryer vent cleaning</h2>
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

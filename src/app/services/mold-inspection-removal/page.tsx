import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

// IMPORTANT FOR CLIENT:
// Texas regulates mold remediation under TDLR (Texas Department of Licensing and Regulation).
// A Mold Remediation Contractor licence is required to perform remediation work on structures.
// If BUSINESS.licenses.tdlrMold is null (not set), this page describes INSPECTION and DUCT CLEANING ONLY.
// It does NOT claim mold remediation services.
// If you hold a TDLR Mold Remediation Contractor licence, set tdlrMold in business.ts and update this page.

export const metadata: Metadata = {
  title: "Mold Inspection in Dallas Ducts | AL Air Duct Cleaning Dallas",
  description:
    "Mold inspection and duct cleaning for mold-affected HVAC systems in Dallas–Fort Worth. Visual inspection, identification of at-risk areas, thorough cleaning. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/mold-inspection-removal` },
};

const FAQS = [
  {
    question: "What does mold in air ducts look like?",
    answer: "Mold in ducts often appears as dark or discolored patches on duct surfaces, register faces, or the interior of the air handler cabinet. It may be black, green, gray, or brown depending on the species. A musty smell when the HVAC runs is often the first sign — visible growth may not be apparent without opening the system.",
  },
  {
    question: "Can you test for mold in air ducts?",
    answer: "Yes. Air sampling can detect elevated mold spore counts in the air supply coming from a duct system. Surface sampling from inside the ductwork or from register surfaces can identify species present. We can arrange sampling as part of the inspection process.",
  },
  {
    question: "Is mold in ducts dangerous?",
    answer: "It depends on the species and exposure level. Many common household molds found in ducts are nuisance molds rather than health hazards at low concentrations. Elevated exposure to any mold can worsen allergy and asthma symptoms. Certain species, found less commonly, can be associated with more serious health effects. If you suspect mold in your system, an inspection is the appropriate first step.",
  },
  {
    question: "What causes mold in HVAC ducts in Dallas?",
    answer: "The primary cause is moisture. In Dallas, condensation at the evaporator coil and drain pan is the most common entry point. Humid outdoor air drawn in through duct leaks or unsealed returns adds moisture load. Post-storm flooding that contacts ductwork is another common cause. Once moisture is present, organic debris in the duct provides the substrate for growth.",
  },
  {
    question: "Does mold cleaning require a TDLR licence in Texas?",
    answer: "Mold remediation work on structures in Texas is regulated by TDLR and requires a licensed Mold Remediation Contractor. Duct cleaning that removes mold from duct surfaces as part of a mechanical cleaning process is a related but distinct scope. We'll be clear about what we can address and what requires a licensed remediator if the scope extends beyond duct cleaning.",
  },
  {
    question: "After mold is cleaned from ducts, will it come back?",
    answer: "If the moisture source that caused the growth is not corrected, mold will return. Cleaning addresses the current contamination — addressing the underlying cause (drain line blockage, duct leak, humid air infiltration, condensation) prevents recurrence. We identify moisture indicators during the inspection and note what needs attention.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Mold Inspection", url: `${BUSINESS.domain}/services/mold-inspection-removal` },
];

export default function MoldInspectionPage() {
  const hasMoldLicense = !!BUSINESS.licenses.tdlrMold;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Mold Inspection & Duct Cleaning", description: "Mold inspection and duct cleaning for mold-affected HVAC systems in Dallas–Fort Worth homes.", slug: "mold-inspection-removal" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Mold Inspection" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0B5563]">Mold inspection and duct cleaning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Mold inspection and duct cleaning in Dallas, TX
              </h1>
              <div className="answer-box mb-5">
                <p>
                  We perform visual mold inspection of HVAC duct systems and thorough duct cleaning for mold-affected systems in Dallas–Fort Worth. Our service covers assessment, identification of moisture sources, and professional mechanical cleaning of contaminated ducts. {hasMoldLicense ? "We are licensed by TDLR for mold remediation work." : "Structural mold remediation requires a TDLR-licensed contractor — we coordinate referrals when remediation is needed beyond duct scope."}
                </p>
              </div>

              {!hasMoldLicense && (
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg mb-5">
                  <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-sm text-amber-800">
                    <strong>Texas regulation note:</strong> Mold remediation on building structures in Texas requires a TDLR Mold Remediation Contractor licence. Our scope covers duct inspection and duct cleaning. If your situation requires structural remediation, we'll refer you to a licensed remediator.
                  </p>
                </div>
              )}

              <p className="text-[#475569] leading-relaxed mb-5">
                Mold in HVAC duct systems is a specific problem — different from mold on walls, ceilings, or in crawl spaces. Duct systems are dark, contain organic debris, and in DFW's climate experience regular condensation cycles that maintain surface moisture. These conditions are exactly what mold needs to establish.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                When our technician finds visible mold growth during an inspection, the first priority is understanding where moisture is entering the system. Cleaning mold without correcting the source is a short-term measure — it will return. We identify the moisture entry points (coil condensation issues, drain pan blockages, duct leaks) and provide written findings before any cleaning work begins.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm min-h-[48px]">
                  <Phone size={16} strokeWidth={1.5} /> Call for an inspection
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm min-h-[48px]">
                  Get my free estimate
                </Link>
              </div>
            </div>
            <div className="card p-6 shadow-card">
              <LeadForm heading="Schedule a mold inspection" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">What mold inspection and duct cleaning covers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Full visual inspection of accessible ductwork, registers, and air handler",
              "Identification and documentation of visible mold growth locations",
              "Moisture source assessment — coil, drain pan, duct leaks",
              "Air and surface sampling (arranged on request)",
              "Thorough mechanical cleaning of all contaminated duct surfaces",
              "EPA-registered antimicrobial treatment after cleaning (when indicated)",
              "Written inspection report with photographs of findings",
              "Referral coordination for structural remediation if scope extends beyond ducts",
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
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">Why mold inspection matters in Dallas–Fort Worth</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              The DFW climate presents specific mold risk conditions that aren't always obvious to homeowners. The combination of summer heat, high humidity from the Gulf moisture that pushes into North Texas during summer, and the long cooling season creates condensation conditions inside HVAC systems that support microbial growth.
            </p>
            <p>
              The evaporator coil and drain pan are the most common mold initiation points. The coil surface is cold and wet during cooling operation — exactly the conditions where mold spores that arrive on return air can establish. A blocked drain line allows water to pool in the drain pan. If the coil or drain isn't serviced regularly, this becomes a persistent moisture source that feeds mold growth, which then spreads to the supply ductwork as spores are distributed by the blower.
            </p>
            <p>
              Post-storm and post-flooding scenarios are another significant concern in DFW. North Texas experiences intense convective storms, flash flooding events, and occasional hurricane remnants that push significant moisture into structures. Any ductwork that contacts flood water — particularly ground-level or below-slab return ducts — should be inspected promptly.
            </p>
            <p>
              The American Lung Association's resources on <a href="https://www.lung.org/clean-air/indoor-air" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">indoor air quality</a> note that mold can cause respiratory symptoms and allergic reactions. People with asthma, allergies, or compromised immune systems are particularly susceptible. Early detection and proper cleaning limits exposure duration.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Mold in ducts — frequently asked questions</h2>
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
              { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Schedule a mold inspection in Dallas</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Same-day availability. Free inspection. Written report with all findings.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-bold rounded-lg hover:bg-[#C4501A] transition-colors">
              <Phone size={16} /> Call for an inspection
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

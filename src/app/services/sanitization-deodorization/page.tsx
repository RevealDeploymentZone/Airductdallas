import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Duct Sanitization & Deodorization in Dallas, TX | AL Air Duct Cleaning",
  description:
    "EPA-registered antimicrobial sanitization and deodorization for air ducts in Dallas–Fort Worth. Neutralizes odors, inhibits microbial growth. Applied after cleaning. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/sanitization-deodorization` },
};

const FAQS = [
  {
    question: "What is duct sanitization?",
    answer: "Duct sanitization involves applying an EPA-registered antimicrobial agent to the interior surfaces of your duct system after a thorough mechanical cleaning. The treatment inhibits the regrowth of bacteria, mold spores, and other microorganisms on duct surfaces. It is applied after cleaning — not as a substitute for it.",
  },
  {
    question: "Is duct sanitization safe for my family and pets?",
    answer: "We use EPA-registered products that are evaluated for safety in occupied spaces. The product needs time to dry after application — typically 2–4 hours — before the system is returned to normal operation. We confirm product safety data and occupancy instructions before applying in any home.",
  },
  {
    question: "Will sanitization get rid of musty smells from my ducts?",
    answer: "Musty odors from duct systems are typically caused by microbial growth (mold or mildew) or accumulated organic debris. Sanitization treats the microbial component. Mechanical cleaning removes the debris. For persistent odors, both are usually required — sanitization alone will not address the underlying source.",
  },
  {
    question: "Should I sanitize my ducts every time they're cleaned?",
    answer: "Sanitization is most appropriate when the system has visible microbial growth, persistent odors, or has been affected by water intrusion. For a routine cleaning of a normal dry system, it may not be necessary. We'll give you an honest assessment after the pre-cleaning inspection.",
  },
  {
    question: "What odors can duct deodorization address?",
    answer: "Duct deodorization is effective for musty or mildew odors, pet odors that have settled into duct surfaces, post-smoke odors from minor events, and general stale air smells from long-unused systems. It does not eliminate odors from active sources — an active mold problem or a pet that continues to use the same area will return.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Sanitization & Deodorization", url: `${BUSINESS.domain}/services/sanitization-deodorization` },
];

export default function SanitizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Duct Sanitization & Deodorization", description: "EPA-registered antimicrobial sanitization and deodorization applied to air duct systems in Dallas–Fort Worth after mechanical cleaning.", slug: "sanitization-deodorization" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Sanitization & Deodorization" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0B5563]">Antimicrobial treatment</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Duct sanitization and deodorization in Dallas, TX
              </h1>
              <div className="answer-box mb-6">
                <p>
                  Duct sanitization applies an EPA-registered antimicrobial treatment to your duct system after mechanical cleaning — inhibiting microbial regrowth and neutralizing odors embedded in duct surfaces. It's a targeted add-on service, not a standalone replacement for thorough duct cleaning.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-5">
                In Dallas–Fort Worth, the combination of summer heat, humidity, and the long cooling season creates conditions where microbial growth in duct systems is more common than in drier climates. Condensation at cooling coils, humid outdoor air drawn in through leaky duct connections, and moisture from post-storm events all contribute to conditions that support mold and bacteria growth on duct surfaces.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                Our sanitization service uses EPA-registered antimicrobial products applied to cleaned duct surfaces after mechanical debris removal. The treatment inhibits regrowth without generating harsh chemical odors in your living space. We confirm occupancy timing before application in all residential settings.
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
              <LeadForm heading="Get a free sanitization estimate" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">When sanitization is warranted — and when it isn't</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-5 border-[#16A34A]">
              <h3 className="font-semibold text-[#0F172A] mb-3 text-sm">Good candidates for sanitization</h3>
              <ul className="space-y-2">
                {[
                  "Visible mold or dark spotting near registers or inside accessible ducts",
                  "Persistent musty odor when HVAC runs, even after mechanical cleaning",
                  "Home with prior flooding or water intrusion",
                  "Systems in homes with immunocompromised occupants",
                  "After pet or smoke odor remediation",
                  "Duct systems with confirmed high humidity / condensation history",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                    <CheckCircle size={14} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-[#0F172A] mb-3 text-sm">Not recommended as a standalone service</h3>
              <ul className="space-y-2">
                {[
                  "As a substitute for mechanical cleaning — sanitization doesn't remove physical debris",
                  "For routine maintenance on systems with no contamination indicators",
                  "When the odor source is an active problem (live mold, active pet soiling) — address the source first",
                  "On systems with duct material that's incompatible with liquid treatment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                    <ArrowRight size={14} className="text-[#94A3B8] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Sanitization and deodorization — FAQ</h2>
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
              { href: "/services/air-duct-cleaning", label: "Air duct cleaning" },
              { href: "/services/mold-inspection-removal", label: "Mold inspection" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Duct sanitization in Dallas — same-day available</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Free estimate. EPA-registered products. We'll assess whether sanitization is warranted before applying anything.</p>
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

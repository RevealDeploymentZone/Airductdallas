import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Home } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Residential Air Duct Cleaning in Dallas, TX | AL Air Duct Cleaning",
  description:
    "Residential air duct cleaning in Dallas–Fort Worth — single-family homes, townhomes, condos. NADCA-standard negative-pressure cleaning. Same-day service. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/residential-air-duct-cleaning` },
};

const FAQS = [
  {
    question: "How much does residential duct cleaning cost in Dallas?",
    answer: "A standard single-family home in Dallas typically costs between $300 and $600 for a complete duct cleaning. Smaller condos and townhomes are typically in the $250–$400 range. Larger homes above 3,000 sq ft or homes with more than 20 vents cost more. We provide an exact price after a free visual inspection.",
  },
  {
    question: "Should I be home during the duct cleaning?",
    answer: "Someone 18 or older should be present for access and the post-cleaning walkthrough. You don't need to follow the technician throughout the job — most homeowners continue their normal activities while work is in progress.",
  },
  {
    question: "Will the technician move furniture to reach registers?",
    answer: "If a register is blocked by furniture, we'll move what's needed to access it and replace it afterward. This is included in the service — we don't charge extra for standard access work.",
  },
  {
    question: "How do I prepare for a residential duct cleaning?",
    answer: "Clear any items stacked directly on floor registers if possible. Ensure the technician has access to the air handler (typically in a utility closet, attic, or garage). Make sure pets are secured in a separate room during the cleaning.",
  },
  {
    question: "What types of homes do you clean ducts in?",
    answer: "We clean ducts in all residential property types — single-family homes, townhomes, condominiums, duplexes, and rental properties throughout DFW. Both rigid sheet-metal and flexible duct systems are within our scope.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Residential Duct Cleaning", url: `${BUSINESS.domain}/services/residential-air-duct-cleaning` },
];

export default function ResidentialDuctPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Residential Air Duct Cleaning", description: "Professional residential air duct cleaning across Dallas–Fort Worth for single-family homes, townhomes, and condos.", slug: "residential-air-duct-cleaning" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Residential Duct Cleaning" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home size={20} className="text-[#0B5563]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0B5563]">For homeowners</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Residential air duct cleaning in Dallas, TX
              </h1>
              <div className="answer-box mb-6">
                <p>
                  Residential air duct cleaning for Dallas–Fort Worth homes uses negative-pressure HEPA equipment to clean every supply and return duct, register, and plenum in your home. Most single-family homes cost $300–$600 and take 3–4 hours. AL Air Duct Cleaning Dallas serves DFW homes with same-day scheduling and 24/7 availability.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-5">
                AL Air Duct Cleaning Dallas works in homes of all sizes and ages across the Metroplex. Whether you're in a 1970s ranch home in Richardson with original sheet-metal ductwork, a 2000s flex-duct home in Frisco, or a newer townhome in Uptown Dallas, we bring the right equipment for the system in front of us.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                Our residential service is designed around the realities of DFW home life — we work around your schedule, secure pets and children's spaces before work begins, and leave the home clean. Our technician walks you through findings after the job so you understand the current state of your system and any follow-up that might be warranted.
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
              <LeadForm heading="Get a free residential estimate" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">Residential duct cleaning in Dallas — what we cover</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Free pre-cleaning inspection of the full duct system",
              "Negative-pressure HEPA vacuum on main trunk line",
              "All supply duct runs cleaned individually",
              "All return air runs cleaned",
              "Supply and return air plenums",
              "Every register and grille — removed, cleaned, reinstalled",
              "Air handler interior (blower compartment)",
              "Post-job walkthrough with written findings",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8FAFC]">
                <CheckCircle size={15} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-[#475569]">{item}</span>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-4">Residential duct cleaning by home type in DFW</h2>
          <div className="space-y-5 text-[#475569] leading-relaxed">
            <p>
              DFW's housing stock spans 70+ years of construction, and the duct systems in these homes vary considerably. Older homes in neighborhoods like Lake Highlands, Lakewood, and White Rock use rigid sheet-metal ductwork — heavier, more durable, but prone to debris accumulation in horizontal runs. These systems typically clean well and hold the results longer than flex-duct installations.
            </p>
            <p>
              Homes built from the mid-1990s onward throughout North Texas suburbs predominantly use flexible duct installed in attic space. Flex duct is easier to route during construction but more vulnerable to sag, kinking, and connection failure over time. During cleaning, we check flex duct connections for leaks and flag anything that needs repair — a leaky duct connection in 140°F attic space bleeds conditioned air and pulls in particulate.
            </p>
            <p>
              Condominiums and townhomes present different challenges: shorter duct runs, vertical chases, and shared building systems in some configurations. We've cleaned systems in high-rise condos in Uptown, garden-style condos in Addison and Carrollton, and townhome developments throughout the Metroplex.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Frequently asked questions — residential duct cleaning</h2>
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
              { href: "/services/dryer-vent-cleaning", label: "Dryer vent cleaning" },
              { href: "/services/sanitization-deodorization", label: "Sanitization & deodorization" },
              { href: "/services/mold-inspection-removal", label: "Mold inspection" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Schedule residential duct cleaning in Dallas</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Same-day service available. Free inspection and estimate before any work begins.</p>
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

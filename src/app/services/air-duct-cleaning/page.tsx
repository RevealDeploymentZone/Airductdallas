import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Dallas, TX | AL Air Duct Cleaning Dallas",
  description:
    "Professional air duct cleaning in Dallas–Fort Worth using negative-pressure HEPA equipment. Full system cleaning — supply ducts, return ducts, registers, plenums. Free estimate.",
  alternates: { canonical: `${BUSINESS.domain}/services/air-duct-cleaning` },
};

const FAQS = [
  {
    question: "How much does air duct cleaning cost in Dallas?",
    answer: "Most Dallas homeowners pay between $300 and $600 for a complete residential air duct cleaning, depending on home size, the number of supply and return vents, and the degree of contamination. Heavily soiled systems, homes with flex duct in unconditioned attics, or properties requiring mold treatment cost more. We inspect the system and provide an exact price before work begins — no estimates that balloon once we're on-site.",
  },
  {
    question: "How long does air duct cleaning take in Dallas?",
    answer: "A standard 2,000–2,500 sq ft Dallas home takes approximately 3–4 hours. Larger homes or systems with more supply runs take longer. We don't rush — cutting a cleaning short means leaving debris in the system.",
  },
  {
    question: "Does air duct cleaning help with allergies in DFW?",
    answer: "For people sensitive to dust, pollen, or pet dander, reducing the concentration of these particles in recirculated air can help. DFW is one of the highest-allergen metros in the country, and ducts that haven't been cleaned in several years can harbor significant pollen and dust buildup from the oak and cedar seasons.",
  },
  {
    question: "What is negative-pressure duct cleaning?",
    answer: "Negative-pressure cleaning attaches a high-powered HEPA-filtered vacuum to your main trunk line, creating suction that pulls debris out of the duct system rather than blowing it around the house. All registers are sealed before cleaning begins. This is the method recommended by NADCA and produces genuinely clean ducts rather than just loosened debris.",
  },
  {
    question: "How do I know if my ducts need cleaning?",
    answer: "Key indicators include visible dust at registers shortly after cleaning, musty odors when the HVAC system starts, worsening allergy symptoms indoors, recent construction or renovation, visible mold growth near registers, or a system that hasn't been cleaned in more than 5 years. We offer free visual inspections to assess the current state of your system.",
  },
  {
    question: "Will duct cleaning make my house less dusty?",
    answer: "It depends on where the dust is coming from. If it's originating inside the duct system and being redistributed by airflow, cleaning will reduce it. If the primary source is air infiltration, high foot traffic, or a degraded filter, cleaning will help but the dust will return. We identify the sources of contamination during the inspection.",
  },
  {
    question: "Do you clean both supply and return ducts?",
    answer: "Yes. A proper cleaning covers all supply ducts, all return air ducts, the supply and return plenums, and all registers and grilles. Cleaning only the supply side — which some companies do to cut time — leaves half the system untouched.",
  },
];

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
  { name: "Air Duct Cleaning", url: `${BUSINESS.domain}/services/air-duct-cleaning` },
];

export default function AirDuctCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Air Duct Cleaning", description: "Professional negative-pressure air duct cleaning in Dallas–Fort Worth using HEPA-filtered equipment.", slug: "air-duct-cleaning" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Air Duct Cleaning" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Air duct cleaning in Dallas, TX
              </h1>
              {/* AEO Answer-first paragraph */}
              <div className="answer-box mb-6">
                <p>
                  Air duct cleaning removes accumulated dust, debris, pollen, and biological contaminants from your home's HVAC duct system using negative-pressure HEPA equipment. In Dallas, a full residential cleaning typically costs $300–$600 and takes 3–4 hours. AL Air Duct Cleaning Dallas serves all of DFW with same-day scheduling.
                </p>
              </div>
              <p className="text-[#475569] leading-relaxed mb-6">
                Your HVAC system circulates the same air through the same ductwork hundreds of times each day. In a DFW home — where the AC runs 8–10 months a year, mountain cedar pollen coats everything in winter, and construction dust blows in from a dozen active subdivisions nearby — that ductwork accumulates debris far faster than it would in most of the country.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                AL Air Duct Cleaning Dallas uses truck-mounted or high-powered portable HEPA-filtered vacuums and professional agitation equipment to clean the full system: every supply run, every return run, both plenums, and every register and grille. We don't skip the return side or the plenums because they're harder to reach — those are often the most contaminated parts of the system.
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
              <LeadForm heading="Get a free duct cleaning estimate" subline="We'll call you back within 1 hour." />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">What's included in a full duct cleaning</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Inspection of all accessible ductwork and components before cleaning begins",
              "Negative-pressure HEPA vacuum connected to main trunk line",
              "All supply duct runs cleaned from register to plenum",
              "All return air duct runs cleaned",
              "Supply and return plenums vacuumed and wiped",
              "All supply and return registers removed, cleaned, and reinstalled",
              "Air handler cabinet interior cleaned (blower area)",
              "Visual post-cleaning inspection — camera available on request",
              "Written summary of findings and any recommended follow-up",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8FAFC]">
                <CheckCircle size={15} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-[#475569]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">How air duct cleaning works — step by step</h2>
          <div className="space-y-5">
            {[
              { n: 1, title: "Schedule and confirm", body: "Call or submit the form. We confirm your service window and what to expect during the visit. Most Dallas addresses qualify for same-day or next-day scheduling." },
              { n: 2, title: "Pre-cleaning inspection", body: "Before touching anything, the technician walks your system — inspecting the air handler, accessible ductwork, and registers. They explain what they find and confirm the scope of work." },
              { n: 3, title: "Seal and set up negative pressure", body: "Every supply and return register is sealed with covers or foam. The HEPA vacuum is connected to the main trunk line and suction is confirmed. This step is non-negotiable — if suction isn't confirmed before cleaning starts, debris just moves around the system." },
              { n: 4, title: "Agitate every run", body: "A spinning brush or compressed-air whip travels the full length of each supply and return duct run, dislodging accumulated dust and debris and driving it toward the vacuum collection point." },
              { n: 5, title: "Clean registers and grilles", body: "Every register is removed, washed or vacuumed, and reinstalled. This step matters — caked registers restrict airflow and re-contaminate the air coming out." },
              { n: 6, title: "Clean plenums and air handler", body: "The supply and return plenums — the large distribution boxes directly connected to the air handler — are vacuumed and wiped. The interior of the air handler cabinet is cleaned at this stage as well." },
              { n: 7, title: "Post-cleaning inspection", body: "The technician does a final walkthrough, confirming each run is clear. Customers can request camera inspection footage before the system is sealed back up." },
              { n: 8, title: "Debrief and recommendations", body: "The technician reviews what was found, notes any areas of concern (duct damage, moisture, mold), and makes recommendations — without pressure to add unnecessary services." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0B5563] text-white text-sm font-bold flex items-center justify-center shrink-0 font-display">
                  {step.n}
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] mb-1">{step.title}</div>
                  <p className="text-sm text-[#475569] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-4">Who needs air duct cleaning in DFW</h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Not every home needs annual duct cleaning — the EPA is explicit about this. What triggers a genuine need are specific contamination conditions, and those conditions arise more frequently in the DFW market than in most regions:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Homeowners with allergies or asthma", desc: "Mountain cedar season (December–February) and live oak season (spring) deposits significant fine pollen in unfiltered systems. If symptoms worsen at home, the duct system is worth inspecting." },
              { title: "Post-renovation and new construction", desc: "Drywall dust, concrete particles, and sawdust generated during construction are fine enough to bypass filters and coat duct interiors. Builder-clean houses in DFW's active suburbs often need cleaning within the first year." },
              { title: "Homes with pets", desc: "Pet hair and dander accumulates in return air ducts faster than most contaminants. Multi-pet households typically see meaningful buildup within 2–3 years." },
              { title: "Homes near active construction", desc: "Frisco, McKinney, Allen, and other fast-growing suburbs sit adjacent to construction sites year-round. Silica and construction dust are extremely fine and enter homes through doors, windows, and air infiltration." },
              { title: "Systems that haven't been serviced in 5+ years", desc: "Even in normal conditions, five years of daily operation accumulates meaningful debris — especially in a climate where the system runs almost year-round." },
              { title: "After water damage or flooding", desc: "Water in ducts creates ideal conditions for microbial growth. Any home that experienced flooding or prolonged moisture infiltration should have the duct system inspected promptly." },
            ].map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="font-semibold text-[#0F172A] text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dallas-specific */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">Why air duct cleaning matters in Dallas specifically</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Dallas–Fort Worth sits in one of the most challenging air quality zones in the southern United States. The TCEQ issues ozone action day alerts across DFW from May through October, and during those periods, outdoor air quality can drop to levels that affect people with respiratory conditions. Your home's HVAC system and duct network are your primary defense against outdoor air quality events — and a compromised duct system undermines that defense.
            </p>
            <p>
              DFW's long cooling season — most homes run central AC from April through October, and often into November — means your duct system processes more air cycles per year than comparable homes in cooler climates. More air cycles mean faster accumulation of dust, particulate, and biological material on duct surfaces.
            </p>
            <p>
              The regional pollen calendar is particularly demanding. Mountain cedar pollen from the Hill Country begins in late November and peaks in January and February — it's one of the most potent allergens in North America and penetrates standard MERV-8 filters. Live oak pollination in March and April adds another heavy load. Both species drop their pollen in bulk, and North Texas homes with any air infiltration — normal for homes of all ages — accumulate it inside.
            </p>
            <p>
              Texas building practice also influences duct system performance. Most DFW homes from the 1990s onward use flexible duct installed in unconditioned attic space. At DFW attic temperatures — which routinely exceed 140°F in July and August — flex duct connections deteriorate faster than in cooler climates. Loose duct connections allow conditioned air to leak into the attic and allow attic air (carrying insulation fibers and particulate) to enter the distribution system. We check for and report on duct integrity on every cleaning job.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing guidance */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">Air duct cleaning cost in Dallas — what drives the price</h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            We don't publish flat rates because two homes of the same square footage can require very different levels of work. Here's what we assess when pricing a job:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { factor: "Number of supply and return vents", detail: "More vents means more time agitating, sealing, and cleaning each run individually." },
              { factor: "Duct system configuration", detail: "Simple main-trunk systems are faster to clean than branched flex-duct trees with many short runs." },
              { factor: "Degree of contamination", detail: "A lightly dusty system cleaned three years ago requires less work than one that's never been touched in fifteen years." },
              { factor: "Duct material", detail: "Rigid sheet metal, lined rigid metal, and flex duct each require different agitation techniques and equipment." },
              { factor: "Accessibility", detail: "Ducts in accessible crawl spaces or attics with good pull-down stair access take less time than ducts in difficult attic configurations." },
              { factor: "Add-on services", detail: "Sanitization treatment, coil cleaning, and dryer vent cleaning are priced separately but offer genuine value when done on the same visit." },
            ].map((item) => (
              <div key={item.factor} className="flex gap-3 p-4 bg-[#F8FAFC] rounded-lg">
                <CheckCircle size={15} className="text-[#0B5563] mt-0.5 shrink-0" strokeWidth={2} />
                <div>
                  <div className="font-semibold text-[#0F172A] text-sm">{item.factor}</div>
                  <p className="text-xs text-[#475569] mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="answer-box">
            <p><strong>Typical range for Dallas:</strong> $300–$600 for a standard residential cleaning. The exact price is confirmed during the free pre-cleaning inspection before any work begins. We don't charge extra for moving furniture to reach registers, and our price doesn't change once we start the job.</p>
          </div>
        </div>
      </section>

      {/* Definition box */}
      <section className="bg-[#F8FAFC] py-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#0F172A] font-display mb-5">Key terms explained</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { term: "NADCA", def: "National Air Duct Cleaners Association — the industry trade group that publishes cleaning standards and certifies technicians. Choosing a NADCA-adherent company means the cleaning follows a defined, inspectable process." },
              { term: "Negative pressure", def: "A cleaning configuration in which a high-powered vacuum creates suction throughout the duct system before agitation begins. Debris is drawn toward the vacuum rather than distributed through the home." },
              { term: "HEPA filtration", def: "High Efficiency Particulate Air filtration captures 99.97% of particles down to 0.3 microns. Required on duct cleaning vacuums to prevent fine dust from exhausting back into the home." },
              { term: "PM2.5", def: "Particulate matter 2.5 microns or smaller in diameter — the particle size most associated with respiratory and cardiovascular health effects according to EPA research. Can be captured and re-released by duct systems." },
            ].map((item) => (
              <div key={item.term} className="definition-box">
                <div className="font-bold text-[#0F172A] text-sm mb-1">{item.term}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">Frequently asked questions about air duct cleaning in Dallas</h2>
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

      {/* Internal links */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#0F172A] font-display mb-4">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/dryer-vent-cleaning", label: "Dryer vent cleaning" },
              { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
              { href: "/services/sanitization-deodorization", label: "Sanitization & deodorization" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E2E8F0] rounded-lg text-sm text-[#0B5563] font-medium hover:bg-[#E6F3F5] transition-colors">
                {l.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad bg-[#0B5563] text-white text-center">
        <div className="container">
          <h2 className="text-2xl font-bold font-display mb-3">Schedule your Dallas duct cleaning today</h2>
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

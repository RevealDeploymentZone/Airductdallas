import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Air Duct Cleaning FAQ | Dallas–Fort Worth | AL Air Duct Cleaning Dallas",
  description:
    "Answers to the most common questions about air duct cleaning, dryer vent cleaning, and HVAC cleaning in Dallas–Fort Worth. Honest answers, no sales pressure.",
  alternates: { canonical: `${BUSINESS.domain}/faq` },
};

const FAQ_CATEGORIES = [
  {
    category: "Air duct cleaning basics",
    faqs: [
      {
        question: "How much does air duct cleaning cost in Dallas?",
        answer: "Most Dallas homeowners pay between $300 and $600 for a complete residential duct cleaning, depending on the size of the home, the number of supply and return vents, and the degree of contamination. Larger homes above 3,000 sq ft or systems with significant mold or debris may cost more. We provide an exact price after a free visual inspection — no surprise charges once we're on-site.",
      },
      {
        question: "How long does air duct cleaning take?",
        answer: "A standard 2,000–2,500 sq ft Dallas home takes 3–4 hours. Larger homes with more vent runs take longer. We don't rush the process — an incomplete cleaning that cuts corners on time is worse than waiting for a thorough one.",
      },
      {
        question: "How often should Dallas homeowners clean their air ducts?",
        answer: "The EPA does not recommend a fixed cleaning schedule. Their guidance is to clean when there is visible mold growth, vermin evidence, or substantial debris buildup. In DFW, the combination of long AC seasons, significant pollen loads, and frequent post-construction environments means most homes see genuine buildup within 3–5 years. Homes with pets, smokers, or occupants with allergies or asthma may benefit from more frequent service.",
      },
      {
        question: "Does duct cleaning make a house less dusty?",
        answer: "It can, if the duct system is a primary source of the dust. Ducts that haven't been cleaned in years can harbor significant debris that redistributes every time the blower runs. If the primary dust source is air infiltration, high foot traffic, or an inadequate filter, cleaning will help but the dust will return from those sources. We identify sources during inspection.",
      },
      {
        question: "Is air duct cleaning worth it in Dallas?",
        answer: "In specific situations — visible contamination, post-renovation, significant pollen buildup, or after water damage — yes, it's clearly worth it. For routine maintenance on a healthy system that's been serviced within the last 3–4 years, the benefit is less clear. We'll be honest with you during the inspection about whether cleaning is genuinely warranted.",
      },
    ],
  },
  {
    category: "The cleaning process",
    faqs: [
      {
        question: "What is negative-pressure duct cleaning?",
        answer: "Negative-pressure cleaning connects a high-powered HEPA-filtered vacuum to your main trunk line, creating suction throughout the system before any agitation begins. All registers are sealed. When the brush or compressed-air agitation tool travels the ducts, debris is drawn toward the vacuum rather than distributed through the home. This is the method specified by NADCA — it produces genuinely clean ducts, not just loosened debris.",
      },
      {
        question: "Do you clean both supply and return ducts?",
        answer: "Yes. A complete cleaning covers all supply ducts, all return air ducts, both plenums, and all registers and grilles. Cleaning only the supply side is a shortcut — it leaves the return system and plenums (often the most contaminated areas) untouched.",
      },
      {
        question: "Should I be home during the cleaning?",
        answer: "Someone 18 or older should be present for access and the final walkthrough. You don't need to follow the technician throughout — most homeowners continue normal activities while work is in progress. We ask that pets are secured in a separate room.",
      },
      {
        question: "Will the cleaning make a mess in my house?",
        answer: "No. The negative-pressure setup contains debris within the duct system and vacuum. Registers are sealed before any agitation begins. Technicians use drop cloths or tarps at work areas. If anything unexpected gets disturbed, we clean it before leaving.",
      },
    ],
  },
  {
    category: "Dryer vent cleaning",
    faqs: [
      {
        question: "How often should I clean my dryer vent?",
        answer: "Most households should clean the dryer vent annually. In DFW, where laundry loads are high and long vent runs are common in newer two-story homes, households with heavy laundry use may need cleaning every 6–8 months. The clearest indicator is clothes taking more than one cycle to dry fully.",
      },
      {
        question: "Can a blocked dryer vent cause a fire?",
        answer: "Yes. The NFPA reports approximately 15,000 dryer fires per year in the US, with failure to clean as the leading contributing factor. Lint is highly combustible, and a restricted vent allows heat to build up to ignition temperatures.",
      },
      {
        question: "How much does dryer vent cleaning cost in Dallas?",
        answer: "A standard single dryer vent cleaning typically costs $100–$175 in Dallas, depending on vent length, number of bends, and whether the exterior cap requires clearing.",
      },
    ],
  },
  {
    category: "Mold and moisture",
    faqs: [
      {
        question: "How do I know if I have mold in my ducts?",
        answer: "The most common indicators are a musty odor when the HVAC runs, visible dark spotting on or near registers or the air handler, or unexplained worsening of allergy or respiratory symptoms indoors. A visual inspection will confirm or rule out mold in accessible areas — we can arrange air or surface sampling when warranted.",
      },
      {
        question: "Can mold grow in Dallas air ducts?",
        answer: "Yes. The combination of evaporator coil condensation, humid outdoor air drawn through duct leaks, and organic debris in the duct creates conditions where microbial growth can establish. DFW's summer humidity and the long cooling season make this more common than in drier climates.",
      },
    ],
  },
  {
    category: "Pricing and service",
    faqs: [
      {
        question: "Do you charge for the initial inspection?",
        answer: "No. The pre-cleaning inspection is free. We inspect the system, assess the degree of contamination, and provide an exact price before any work begins. If we determine cleaning isn't genuinely warranted, we'll tell you that too.",
      },
      {
        question: "Do you serve my area?",
        answer: "We serve all of Dallas–Fort Worth, including Dallas, Plano, Frisco, Irving, Garland, Richardson, Arlington, McKinney, Mesquite, Carrollton, Allen, Fort Worth, and 15+ additional cities. There is no additional travel charge within our core service area.",
      },
      {
        question: "Are you available on weekends and evenings?",
        answer: "Yes. We're open 24/7 and can accommodate weekend and evening appointments. For commercial clients requiring off-hours service, we work around your operational schedule.",
      },
    ],
  },
];

const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.faqs);

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "FAQ", url: `${BUSINESS.domain}/faq` },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
            Frequently asked questions — air duct cleaning in Dallas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Straight answers to the questions Dallas–Fort Worth homeowners ask most. No marketing copy dressed up as answers.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-14">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-[#0F172A] font-display mb-6 pb-3 border-b border-[#E2E8F0]">
                  {cat.category}
                </h2>
                <div className="space-y-7">
                  {cat.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="font-semibold text-[#0F172A] mb-2">{faq.question}</h3>
                      <p className="text-[#475569] text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#E6F3F5] rounded-xl text-center">
            <h2 className="text-lg font-bold text-[#0F172A] mb-2">Have a question not answered here?</h2>
            <p className="text-sm text-[#475569] mb-5">Call us or submit the contact form — we'll get back to you within 1 hour.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm">
                <Phone size={15} /> {BUSINESS.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm">
                Send a message <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="h-14 lg:hidden" />
    </>
  );
}

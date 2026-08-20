import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, Wind, Flame, Settings, Home as HomeIcon, Building2,
  Sparkles, ShieldCheck, CheckCircle, Star, ArrowRight, MapPin
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/data/business";
import { faqSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dallas Air Duct Cleaning | Same-Day Service | AL Air Duct Cleaning",
  description:
    "AL Air Duct Cleaning Dallas — professional duct cleaning, dryer vent cleaning, and HVAC cleaning across DFW. Same-day service, open 24/7. Call for a free estimate.",
  alternates: { canonical: BUSINESS.domain },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Wind, Flame, Settings, Home: HomeIcon, Building2, Sparkles, ShieldCheck,
};

const PROCESS_STEPS = [
  { name: "Schedule your visit", text: "Call or submit the online form. We confirm a same-day or next-day window within 30 minutes." },
  { name: "Pre-inspection walkthrough", text: "Our technician inspects your duct system, identifies problem areas, and reviews the scope with you before touching anything." },
  { name: "Seal the system", text: "All registers and grilles are sealed to create a closed negative-pressure environment. This is non-negotiable — unsealed duct cleaning just redistributes dust." },
  { name: "Attach the HEPA vacuum", text: "A truck-mounted or portable HEPA-filtered vacuum connects to your main trunk line. Suction is confirmed before we proceed." },
  { name: "Agitate every duct run", text: "A spinning brush or compressed air whip travels the full length of each supply and return duct, dislodging accumulated debris." },
  { name: "Clean registers, grilles, and plenums", text: "Every register is removed, washed, and dried. Supply and return plenums — often the dirtiest areas — are vacuumed and wiped." },
  { name: "Post-cleaning inspection", text: "We use a camera to verify clean ducts before sealing the system back up. You can watch the footage yourself." },
  { name: "Final air quality check and debrief", text: "The technician reviews findings, advises on filter upgrades if warranted, and answers your questions before leaving." },
];

const FAQS = [
  {
    question: "How much does air duct cleaning cost in Dallas?",
    answer: "Most Dallas homeowners pay between $300 and $600 for a complete residential duct cleaning, depending on the size of the home, the number of vents, and the degree of contamination. Larger homes above 3,000 sq ft or systems with significant mold or debris may cost more. We provide an exact price after a free visual inspection — no surprise charges.",
  },
  {
    question: "How long does air duct cleaning take?",
    answer: "A standard single-family home takes 2–4 hours. Larger homes or commercial properties take longer. We do not rush the process — cutting a cleaning short means leaving debris in the system.",
  },
  {
    question: "How often should Dallas homeowners clean their air ducts?",
    answer: "The EPA and NADCA suggest cleaning when there is visible mold, vermin evidence, or significant debris buildup — not on a fixed schedule. In practice, most Dallas homes benefit from cleaning every 3–5 years, given the long AC season, pollen load from mountain cedar and live oak, and the particulate matter that enters during the frequent cold fronts that sweep through DFW.",
  },
  {
    question: "Does duct cleaning actually lower energy bills?",
    answer: "Dirty ducts don't directly reduce energy efficiency the way a clogged filter does — the ducts are passive conduits. However, when debris coats the evaporator coil, blower wheel, or restricts airflow at registers, your system works harder. Cleaning the full system (ducts plus HVAC components) can restore airflow and reduce run time. We won't promise a specific percentage — that would require knowing your specific system.",
  },
  {
    question: "Is duct cleaning safe for my HVAC system?",
    answer: "Yes, when done correctly. The key is using proper negative-pressure containment so debris doesn't re-enter the living space, and a brush technique that won't damage flex duct or sheet-metal seams. Our technicians are trained on both rigid and flexible duct systems common in DFW homes.",
  },
  {
    question: "What's the difference between duct cleaning and dryer vent cleaning?",
    answer: "Air duct cleaning cleans the HVAC distribution system — supply and return air ducts throughout your home. Dryer vent cleaning removes lint from the exhaust duct between your dryer and the exterior wall cap. They're separate systems requiring different equipment. We recommend doing both when we're on-site.",
  },
];

export default function HomePage() {
  const processSteps = PROCESS_STEPS;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: "How air duct cleaning works",
              description: "An 8-step process AL Air Duct Cleaning Dallas uses on every job.",
              steps: processSteps.map((s) => ({ name: s.name, text: s.text })),
            })
          ),
        }}
      />

      {/* ── HERO ── */}
      <section className="bg-white pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E6F3F5] text-[#0B5563] text-xs font-semibold rounded-full mb-5 uppercase tracking-wide">
                Dallas–Fort Worth · Open 24/7
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight font-display mb-5">
                Dallas air duct cleaning that actually gets the dust out
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                AL Air Duct Cleaning Dallas uses professional-grade negative-pressure equipment and HEPA filtration to remove years of accumulated debris from your duct system — not just loosen it and call it done. We serve homeowners and businesses across Dallas–Fort Worth, with same-day scheduling and 24/7 availability.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm min-h-[48px]"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  Call for same-day service
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm min-h-[48px]"
                >
                  Get my free estimate
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "NADCA standards",
                  "HEPA filtration",
                  "Same-day available",
                  "24/7 service",
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-1.5 text-sm text-[#475569]">
                    <CheckCircle size={15} className="text-[#16A34A]" strokeWidth={2} />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-card">
              <LeadForm
                heading="Get your free estimate"
                subline="No obligation. We respond within 1 hour."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO ANSWER BLOCK ── */}
      <section className="bg-[#F8FAFC] py-10">
        <div className="container max-w-3xl mx-auto">
          <div className="answer-box" itemScope itemType="https://schema.org/FAQPage">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0B5563] mb-2">Quick answer</p>
            <p className="text-[#0F172A] font-medium">
              Air duct cleaning in Dallas typically costs $300–$600 for a residential home, depending on size and vent count. A professional cleaning takes 2–4 hours and includes negative-pressure vacuuming of all supply and return ducts, registers, and plenums — leaving your duct system clear of dust, allergens, and debris.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      {(BUSINESS.yearsInBusiness !== "TODO: YEARS IN BUSINESS" ||
        BUSINESS.jobsCompleted !== "TODO: JOBS COMPLETED") && (
        <section className="bg-[#0B5563] py-12">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {BUSINESS.yearsInBusiness !== "TODO: YEARS IN BUSINESS" && (
                <div>
                  <div className="text-4xl font-bold text-[#F26522] font-display">{BUSINESS.yearsInBusiness}+</div>
                  <div className="text-sm mt-1 text-[#CCE7EB]">Years in business</div>
                </div>
              )}
              {BUSINESS.jobsCompleted !== "TODO: JOBS COMPLETED" && (
                <div>
                  <div className="text-4xl font-bold text-[#F26522] font-display">{BUSINESS.jobsCompleted}+</div>
                  <div className="text-sm mt-1 text-[#CCE7EB]">Jobs completed</div>
                </div>
              )}
              {BUSINESS.reviewCount && BUSINESS.reviewAverage && (
                <div>
                  <div className="text-4xl font-bold text-[#F26522] font-display">{BUSINESS.reviewAverage}</div>
                  <div className="text-sm mt-1 text-[#CCE7EB]">Average rating ({BUSINESS.reviewCount} reviews)</div>
                </div>
              )}
              <div>
                <div className="text-4xl font-bold text-[#F26522] font-display">25+</div>
                <div className="text-sm mt-1 text-[#CCE7EB]">Cities served across DFW</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICES GRID ── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">What we do</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">Air quality services across DFW</h2>
            <p className="mt-3 text-[#475569] max-w-xl mx-auto">
              From standard residential duct cleaning to commercial HVAC work and mold inspections, we handle the full scope of indoor air quality services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Wind;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card p-5 hover:border-[#0B5563] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E6F3F5] flex items-center justify-center mb-3 group-hover:bg-[#0B5563] transition-colors">
                    <Icon size={20} strokeWidth={1.5} className="text-[#0B5563] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#0F172A] text-sm mb-1.5">{s.name}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{s.shortDesc}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#0B5563]">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DALLAS HOMEOWNERS CHOOSE US ── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">Why choose us</p>
              <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-4">
                Why Dallas homeowners choose AL Air Duct Cleaning
              </h2>
              <p className="text-[#475569] leading-relaxed mb-8">
                DFW is a demanding climate for HVAC systems. Your air ducts accumulate debris faster here than in most of the country — and your AC runs longer. Here's what makes our approach different.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "DFW ozone season demands cleaner systems",
                    desc: "Dallas sits in one of the highest ground-level ozone zones in Texas. When outside air quality drops, the quality of your indoor air becomes even more important. A clean duct system reduces the load your filters carry during ozone alerts.",
                  },
                  {
                    title: "Mountain cedar and live oak pollen",
                    desc: "Cedar fever is real, and the cedar and live oak pollen that blankets North Texas from November through March finds its way into every home. Ducts that haven't been cleaned in years can harbor significant pollen loads that recirculate every time the fan runs.",
                  },
                  {
                    title: "Your AC runs 8 months a year",
                    desc: "Unlike homes in cooler climates where ducts rest half the year, Dallas systems push conditioned air almost year-round. That means debris accumulates faster and the evaporator coil is under continuous stress.",
                  },
                  {
                    title: "Attic-mounted ductwork in Texas homes",
                    desc: "Most DFW homes run flex duct through unconditioned attic space. Attic temperatures can hit 150°F in August. Duct leaks at those temperatures bleed conditioned air directly into your attic — and allow attic dust and insulation particles to enter the airstream.",
                  },
                  {
                    title: "Humidity and condensation risk",
                    desc: "The warm, humid air that moves through North Texas in spring and fall creates ideal conditions for condensation inside ducts. Persistent moisture leads to microbial growth. We inspect for moisture damage on every job.",
                  },
                  {
                    title: "Post-construction dust in fast-growing suburbs",
                    desc: "Frisco, McKinney, Allen, and other fast-growing DFW suburbs sit next to active construction sites. Construction dust — silica, drywall, and concrete particulate — is extremely fine and clogs duct systems and HVAC components quickly.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle size={18} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                    <div>
                      <div className="font-semibold text-[#0F172A] text-sm">{item.title}</div>
                      <p className="text-sm text-[#475569] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="card p-6">
                <h3 className="font-semibold text-[#0F172A] mb-4 text-lg">Signs your ducts need cleaning</h3>
                <ul className="space-y-2.5">
                  {[
                    "Visible dust buildup around supply registers within days of cleaning",
                    "Musty or stale odor when the AC or heat kicks on",
                    "Unexplained increase in allergy or asthma symptoms indoors",
                    "Visible mold growth on or near registers or in the air handler",
                    "Evidence of rodents or insects inside the duct system",
                    "Home recently renovated or built within the last two years",
                    "Ducts haven't been cleaned in more than 5 years",
                    "Inconsistent airflow — some rooms much warmer or cooler than others",
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle size={14} className="text-[#F26522] mt-0.5 shrink-0" strokeWidth={2} />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-[#0F172A] mb-3 text-lg">How often should you clean ducts in Texas?</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  The EPA does not recommend a fixed cleaning schedule. Their guidance, available at{" "}
                  <a href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">
                    epa.gov
                  </a>
                  , is to clean ducts when there is visible contamination, mold growth, or a vermin infestation. In Texas, the combination of long AC seasons, high pollen loads, and post-construction environments means most homes see genuine buildup within 3–5 years. Homes with pets, smokers, or occupants with allergies or asthma may benefit from more frequent service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">What customers say</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">Customer reviews</h2>
          </div>
          {BUSINESS.reviewCount ? (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Real reviews go here — placeholder shown only if reviewCount is populated */}
              <p className="col-span-3 text-center text-[#475569]">TODO: Add real customer reviews here.</p>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-[#475569] mb-5">See what Dallas homeowners are saying about our service.</p>
              {BUSINESS.social.googleMaps ? (
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors"
                >
                  <Star size={16} strokeWidth={1.5} />
                  Read our Google reviews
                </a>
              ) : (
                <Link href="/reviews" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors">
                  View all reviews
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── MID-PAGE CTA BAND ── */}
      <section className="bg-[#F26522] py-12">
        <div className="container text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold font-display mb-3">
            Ready for cleaner air in your Dallas home?
          </h2>
          <p className="text-orange-100 mb-7 max-w-xl mx-auto">
            Same-day scheduling available. No hidden fees. Our technician will inspect your system and give you an exact price before any work begins.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F26522] font-bold rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Phone size={16} strokeWidth={1.5} />
              Call for same-day service
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4501A] text-white font-semibold rounded-lg hover:bg-[#9D4016] transition-colors"
            >
              Get my free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">About us</p>
          <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-6">
            A Dallas duct cleaning company that does the job right
          </h2>
          <div className="space-y-5 text-[#475569] leading-relaxed">
            <p>
              AL Air Duct Cleaning Dallas was built around a single belief: that homeowners deserve to know exactly what's being done to their HVAC system, and that the work should be done to the same standard a professional would hold themselves to if they were cleaning their own home. That sounds obvious, but it's not how every company in this industry operates.
            </p>
            <p>
              We work across Dallas–Fort Worth, from established neighborhoods in Oak Cliff and Lake Highlands to newer developments in Frisco and Allen. DFW homes vary considerably — from older homes with metal ductwork to newer builds with flex duct systems, from small condos to large two-story homes with complex return air configurations. We've cleaned them all, and we bring appropriate equipment for each job rather than trying to make one setup do everything.
            </p>
            <p>
              Our process follows NADCA (National Air Duct Cleaners Association) guidelines, which means we use negative-pressure containment on every job, clean the full system rather than just the accessible registers, and inspect the system before we leave. We don't upsell services you don't need, and we don't make health claims we can't back up.
            </p>
            <p>
              When it comes to something that circulates through your home's air, you want a company that will be honest about what they found, what they did, and what they recommend. That's what we try to be.
            </p>
          </div>
          <div className="mt-7">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5563] hover:text-[#094750] transition-colors"
            >
              More about our company <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS IN DALLAS (E-E-A-T ANCHOR) ── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">Indoor air quality in DFW</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-6">
              Why air quality matters more in Dallas than most cities
            </h2>
            <div className="space-y-5 text-[#475569] leading-relaxed">
              <p>
                The Dallas–Fort Worth Metroplex has some of the most challenging indoor air quality conditions in the country. The region regularly ranks among the worst in the nation for ozone pollution — the Texas Commission on Environmental Quality (TCEQ) issues ozone action days across DFW throughout the summer months. When outdoor air quality drops, indoor air quality becomes the primary line of defense for people with asthma, allergies, or respiratory conditions.
              </p>
              <p>
                The American Lung Association's <a href="https://aafa.org/allergy-capitals/" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">Allergy Capitals report</a> consistently identifies Dallas as one of the toughest cities in the country for allergy sufferers, driven largely by mountain cedar (Ashe juniper) pollen from December through February and live oak pollen in spring. Both are extremely fine-grained pollens that penetrate standard air filters and accumulate inside duct systems over time.
              </p>
              <p>
                According to the EPA, Americans spend approximately 90% of their time indoors — and indoor air can be 2 to 5 times more polluted than outdoor air, according to EPA data on <a href="https://www.epa.gov/report-environment/indoor-air-quality" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">indoor air quality</a>. In DFW, where homes are sealed against heat for the better part of the year, the recirculation of contaminated air through an uncleaned duct system compounds this problem. Particulate matter — including PM2.5, the fine particles most associated with respiratory and cardiovascular effects — can accumulate on duct surfaces and re-enter the living space each time the blower fan starts.
              </p>
              <p>
                The EPA is careful to note, as stated in their guidance <a href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">on duct cleaning</a>, that duct cleaning has not been proven to prevent health problems in all cases, and that dirty ducts don't automatically mean unhealthy air. What the evidence does support is that cleaning is appropriate when ducts are visibly contaminated with mold, when there is evidence of vermin infestation, or when there is substantial debris buildup restricting airflow. In a DFW context, where systems run harder and longer, this threshold is reached more quickly than in cooler climates.
              </p>
              <p>
                Dryer vent cleaning carries a different kind of urgency. According to the <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">National Fire Protection Association (NFPA)</a>, dryers and washing machines are involved in an estimated 15,000 home structure fires each year in the United States, with lint accumulation as the leading cause. In DFW's hot summers, dryers run harder and lint dries out faster — making the buildup in long or kinked vent runs a genuine fire hazard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8-STEP PROCESS ── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">How it works</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">Our 8-step cleaning process</h2>
            <p className="mt-3 text-[#475569] max-w-xl mx-auto">
              Every job follows the same structured process — whether it's a 1,400 sq ft condo in Uptown or a 4,000 sq ft home in Plano.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="card p-5">
                <div className="w-8 h-8 rounded-full bg-[#0B5563] text-white text-sm font-bold flex items-center justify-center mb-3 font-display">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm mb-1.5">{step.name}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">Benefits</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">What a clean duct system delivers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Better air quality", desc: "Removing accumulated dust, debris, and biological growth from duct surfaces reduces what recirculates through your living space each day." },
              { title: "Allergy and asthma relief", desc: "Cleaning pollen, pet dander, and fine particulate from ducts reduces the allergen load in recirculated air — particularly relevant during DFW's cedar and oak pollen seasons." },
              { title: "System efficiency", desc: "Clean coils, blowers, and unrestricted ductwork let your HVAC move air as it was designed to, reducing run time and wear." },
              { title: "Extended HVAC lifespan", desc: "Debris buildup on the blower wheel and evaporator coil forces components to work harder. Cleaning extends the usable life of expensive components." },
              { title: "Mold and moisture prevention", desc: "Identifying and addressing moisture in the duct system early prevents the conditions that allow microbial growth to take hold." },
              { title: "Dryer fire prevention", desc: "Lint-clogged dryer vents are the leading cause of dryer fires. A clean vent path reduces risk and improves drying efficiency." },
            ].map((b) => (
              <div key={b.title} className="card p-6">
                <CheckCircle size={20} className="text-[#16A34A] mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">{b.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">Where we work</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">Air duct cleaning across DFW</h2>
            <p className="mt-3 text-[#475569]">We serve all of Dallas–Fort Worth, with no extra travel charge within our core service area.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {SERVICE_AREAS.slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card p-4 flex items-center gap-3 hover:border-[#0B5563] transition-all group"
              >
                <MapPin size={18} className="text-[#0B5563] shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-semibold text-[#0F172A] text-sm group-hover:text-[#0B5563] transition-colors">{area.city}</div>
                  <div className="text-xs text-[#475569]">{area.county}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas/dallas" className="text-sm font-semibold text-[#0B5563] hover:text-[#094750] transition-colors">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#0B5563] mb-2">Common questions</p>
            <h2 className="text-3xl font-bold text-[#0F172A] font-display">Frequently asked questions</h2>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5563]">
              See all frequently asked questions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad bg-[#0B5563]">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold font-display mb-3">
            Same-day air duct cleaning in Dallas
          </h2>
          <p className="text-[#CCE7EB] mb-8 max-w-xl mx-auto">
            Open 24/7. Free estimate. Our technician arrives, inspects your system, and gives you an exact price before any work begins.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F26522] text-white font-bold rounded-lg hover:bg-[#C4501A] transition-colors"
            >
              <Phone size={18} strokeWidth={1.5} />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0B5563] font-bold rounded-lg hover:bg-[#E6F3F5] transition-colors"
            >
              Get my free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer for mobile sticky bar */}
      <div className="h-14 lg:hidden" />
    </>
  );
}

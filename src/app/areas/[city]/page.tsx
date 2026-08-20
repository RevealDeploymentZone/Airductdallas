import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/data/business";
import { AREA_DATA } from "@/data/areas";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);
  if (!area) return {};
  return {
    title: `Air Duct Cleaning in ${area.city}, TX | AL Air Duct Cleaning Dallas`,
    description: `Professional air duct cleaning in ${area.city}, TX. Same-day service, free estimate. AL Air Duct Cleaning Dallas serves all of ${area.city} and ${area.county}.`,
    alternates: { canonical: `${BUSINESS.domain}/areas/${city}` },
  };
}

const AREA_FAQS = (cityName: string) => [
  {
    question: `How much does air duct cleaning cost in ${cityName}?`,
    answer: `Most homeowners in ${cityName} pay between $300 and $600 for a complete residential duct cleaning, depending on home size and vent count. We provide an exact price after a free visual inspection before any work begins.`,
  },
  {
    question: `Do you offer same-day duct cleaning in ${cityName}?`,
    answer: `Yes. We offer same-day scheduling for ${cityName} addresses subject to availability. Call us to confirm a same-day window.`,
  },
  {
    question: `How long does duct cleaning take in a ${cityName} home?`,
    answer: `A standard single-family home takes 3–4 hours. Larger homes or those with more complex systems take longer.`,
  },
  {
    question: `Do you clean dryer vents in ${cityName}?`,
    answer: `Yes. Dryer vent cleaning is available throughout ${cityName} — as a standalone service or combined with duct cleaning on the same visit.`,
  },
  {
    question: `Is there a travel charge for ${cityName}?`,
    answer: `No. ${cityName} is within our core DFW service area. No travel charge applies to ${cityName} addresses.`,
  },
];

export default async function AreaPage({ params }: Props) {
  const { city } = await params;
  const areaBase = SERVICE_AREAS.find((a) => a.slug === city);
  if (!areaBase) notFound();

  // Get detailed area data if available, otherwise use generic content
  const areaDetail = AREA_DATA.find((a) => a.slug === city);
  const faqs = AREA_FAQS(areaBase.city);

  const breadcrumbs = [
    { name: "Home", url: BUSINESS.domain },
    { name: "Service Areas", url: `${BUSINESS.domain}/areas/dallas` },
    { name: areaBase.city, url: `${BUSINESS.domain}/areas/${city}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: BUSINESS.name,
          url: BUSINESS.domain,
          telephone: BUSINESS.phoneRaw,
          areaServed: { "@type": "City", name: areaBase.city },
        })
      }} />

      {/* Hero */}
      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-5xl">
          <Breadcrumb items={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/areas/dallas" },
            { name: areaBase.city },
          ]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-[#0B5563]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-[#0B5563]">{areaBase.county}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
                Air duct cleaning in {areaBase.city}, TX
              </h1>
              {/* AEO answer-first block */}
              <div className="answer-box mb-6">
                <p>
                  AL Air Duct Cleaning Dallas provides professional air duct cleaning, dryer vent cleaning, and HVAC cleaning in {areaBase.city}, Texas. Same-day service available. Free estimate. Most {areaBase.city} homes cost $300–$600 for a complete duct cleaning.
                </p>
              </div>
              {areaDetail ? (
                <p className="text-[#475569] leading-relaxed mb-8">{areaDetail.intro}</p>
              ) : (
                <p className="text-[#475569] leading-relaxed mb-8">
                  AL Air Duct Cleaning Dallas serves all of {areaBase.city} and {areaBase.county} with professional air duct cleaning, dryer vent cleaning, mold inspection, and HVAC cleaning services. Our technicians are familiar with the housing stock and HVAC system configurations common in {areaBase.city} and bring appropriate equipment for each job.
                </p>
              )}
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
              <LeadForm
                heading={`Get a free estimate in ${areaBase.city}`}
                subline="We'll call you back within 1 hour."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Housing notes */}
      {areaDetail && (
        <section className="section-pad bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">
              Duct cleaning in {areaBase.city} homes
            </h2>
            <p className="text-[#475569] leading-relaxed mb-6">{areaDetail.housingNotes}</p>
            {areaDetail.neighborhoods.length > 0 && (
              <div>
                <h3 className="font-semibold text-[#0F172A] mb-3">Neighborhoods and areas we serve in {areaBase.city}</h3>
                <div className="flex flex-wrap gap-2">
                  {areaDetail.neighborhoods.map((n) => (
                    <span key={n} className="px-3 py-1 bg-[#E6F3F5] text-[#0B5563] text-sm rounded-full">{n}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Local angle */}
      {areaDetail && (
        <section className="section-pad bg-[#F8FAFC]">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-5">
              Why duct cleaning matters in {areaBase.city}
            </h2>
            <p className="text-[#475569] leading-relaxed mb-6">{areaDetail.localAngle}</p>
            <p className="text-[#475569] leading-relaxed">{areaDetail.driveNote}</p>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">
            Services available in {areaBase.city}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card p-4 flex gap-3 hover:border-[#0B5563] transition-all group">
                <CheckCircle size={16} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                <div>
                  <div className="font-semibold text-[#0F172A] text-sm group-hover:text-[#0B5563] transition-colors">{s.name}</div>
                  <p className="text-xs text-[#475569] mt-0.5">{s.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#0F172A] font-display mb-4">We also serve nearby cities</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.filter((a) => a.slug !== city).slice(0, 12).map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0B5563] hover:bg-[#E6F3F5] transition-colors">
                {a.city} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-8">
            Duct cleaning in {areaBase.city} — frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0B5563] text-white text-center">
        <div className="container">
          <h2 className="text-2xl font-bold font-display mb-3">
            Air duct cleaning in {areaBase.city} — same-day service
          </h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">
            Free inspection. Exact price before work starts. Open 24/7.
          </p>
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

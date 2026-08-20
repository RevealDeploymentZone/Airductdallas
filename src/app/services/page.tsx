import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Flame, Settings, Home, Building2, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS, SERVICES } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "All Air Duct Cleaning Services in Dallas, TX",
  description:
    "Air duct cleaning, dryer vent cleaning, HVAC cleaning, mold inspection, sanitization, residential and commercial duct cleaning across Dallas–Fort Worth.",
  alternates: { canonical: `${BUSINESS.domain}/services` },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Wind, Flame, Settings, Home, Building2, Sparkles, ShieldCheck,
};

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Services", url: `${BUSINESS.domain}/services` },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
            Air duct cleaning services in Dallas, TX
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            AL Air Duct Cleaning Dallas provides a full range of indoor air quality services across Dallas–Fort Worth. From routine residential duct cleaning to commercial HVAC service and mold inspections, we handle the complete scope of what your system needs.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Wind;
              return (
                <div key={s.slug} className="card p-6">
                  <div className="w-11 h-11 rounded-lg bg-[#E6F3F5] flex items-center justify-center mb-4">
                    <Icon size={22} strokeWidth={1.5} className="text-[#0B5563]" />
                  </div>
                  <h2 className="font-bold text-[#0F172A] mb-2 text-lg">{s.name}</h2>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">{s.shortDesc}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B5563] hover:text-[#094750] transition-colors"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-2xl mx-auto">
          <div className="card p-8">
            <LeadForm
              heading="Not sure which service you need?"
              subline="Tell us about your situation and we'll recommend the right service."
            />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About AL Air Duct Cleaning Dallas | DFW Duct Cleaning Company",
  description:
    "AL Air Duct Cleaning Dallas serves homeowners and businesses across DFW. Learn about our approach, our process, and why we built this company around honest work.",
  alternates: { canonical: `${BUSINESS.domain}/about` },
};

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "About", url: `${BUSINESS.domain}/about` },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
            About AL Air Duct Cleaning Dallas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
            AL Air Duct Cleaning Dallas provides professional duct cleaning, dryer vent cleaning, HVAC cleaning, and indoor air quality services across Dallas–Fort Worth. We built this company around a straightforward idea: do the job the right way, be honest about what we find, and don't recommend services the customer doesn't need.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-6 text-[#475569] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#0F172A] font-display">Who we are</h2>
            <p>
              AL Air Duct Cleaning Dallas is a locally operated air quality services company serving the Dallas–Fort Worth Metroplex. We work in homes and commercial properties throughout the region — from older neighborhoods in East Dallas and Oak Cliff to newer developments in Frisco, Allen, and McKinney. We know DFW's housing stock, its HVAC systems, and the specific indoor air quality challenges that come with living in this climate.
            </p>
            <p>
              The air duct cleaning industry has a significant reputation problem, and we know it. A meaningful number of companies in this market operate on bait-and-switch pricing, perform incomplete work, or push unnecessary add-on services. We're aware that homeowners approach this with skepticism — and we think that's reasonable. Our response is to be clear about scope before work starts, confirm pricing before work starts, and provide documentation of what was done after work is complete.
            </p>
            <p>
              We follow NADCA (National Air Duct Cleaners Association) guidelines, which specify negative-pressure cleaning with HEPA filtration, full system coverage including both supply and return sides, and inspection before and after cleaning. These aren't just marketing claims — they're a defined, verifiable process. If you want to verify that your technician is following NADCA protocol, ask them to show you the negative-pressure setup before they start. We'll show you.
            </p>
            <p>
              We also try to be honest about what duct cleaning can and can't do. The EPA is explicit that duct cleaning has not been shown to prevent health problems in all cases, and we don't claim otherwise. What we do claim is that we clean the system thoroughly and tell you what we find. If your system has a problem — a significant mold growth, a duct leak, a moisture source — we'll tell you about it and explain what it means. We won't try to upsell you into services you don't need, and we won't pretend problems don't exist to keep the job simple.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] font-display mt-10">Our approach to DFW homes</h2>
            <p>
              Dallas–Fort Worth is a big, diverse market with decades of different construction styles, housing configurations, and HVAC system types. Homes in established neighborhoods like Lakewood, Lake Highlands, and Preston Hollow were built with different materials and duct configurations than the flex-duct suburban homes in Plano, Carrollton, and McKinney. High-rise condominiums in Uptown require a different approach than two-story single-family homes in Southlake.
            </p>
            <p>
              We don't treat every job the same. We assess the system before deciding on approach and equipment, we bring the right tools for the configuration we're working with, and we adjust the cleaning method based on duct material — you don't use the same technique on 1970s rigid sheet metal that you use on 2015 flexible duct insulated with fiberglass batting.
            </p>
            <p>
              DFW's climate adds specific challenges. The long cooling season means systems accumulate debris faster than in cooler climates. Mountain cedar and live oak pollen seasons push significant fine pollen loads through homes with any air infiltration. Rapid growth in DFW's northern suburbs means many homes sit adjacent to active construction — silica and construction dust is extremely fine and enters systems through any gap. We understand these conditions and factor them into our assessments.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] font-display mt-10">What we stand behind</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { title: "Honest pricing", desc: "Price confirmed before work starts. No charges that appear after we open the system." },
                { title: "Full system coverage", desc: "Both supply and return sides, both plenums, every register. We don't skip the harder-to-reach parts." },
                { title: "Negative-pressure process", desc: "HEPA-filtered vacuum connected before agitation begins. Debris comes out, not back into your house." },
                { title: "Written findings", desc: "After every job, we document what we found — not just what we did. You know the current state of your system." },
                { title: "No unnecessary upsells", desc: "We recommend follow-up work when it's genuinely needed. We don't recommend it because it generates revenue." },
                { title: "Honest limitations", desc: "We tell you when a problem is outside our scope and refer you to the appropriate professional." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#16A34A] mt-0.5 shrink-0" strokeWidth={2} />
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm">{item.title}</div>
                    <p className="text-sm text-[#475569] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] font-display mt-10">Serving all of Dallas–Fort Worth</h2>
            <p>
              We serve all of DFW — from Dallas proper through the inner ring suburbs to the outer Metroplex. There's no additional travel charge within our core service area, which covers all of Dallas County, Collin County, Denton County, Tarrant County, and Rockwall County.
            </p>
            <p>
              Whether you're a homeowner in a 1980s ranch in Richardson, a property manager overseeing a multi-unit complex in Addison, or a business owner in a commercial space in Las Colinas, we work with you on scheduling that fits your situation. We offer same-day service for urgent needs, and 24/7 availability for after-hours emergencies.
            </p>

            {/* Credentials - only shown if licenses populated */}
            {(BUSINESS.licenses.nadca || BUSINESS.licenses.tdlrHvac) && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#0F172A] font-display mb-4">Credentials and licences</h2>
                <div className="flex flex-wrap gap-4">
                  {BUSINESS.licenses.nadca && (
                    <div className="card p-4 text-sm">
                      <div className="font-semibold text-[#0F172A]">NADCA Member</div>
                      <div className="text-[#475569]">ID: {BUSINESS.licenses.nadca}</div>
                    </div>
                  )}
                  {BUSINESS.licenses.tdlrHvac && (
                    <div className="card p-4 text-sm">
                      <div className="font-semibold text-[#0F172A]">TDLR AC Contractor Licence</div>
                      <div className="text-[#475569]">#{BUSINESS.licenses.tdlrHvac}</div>
                    </div>
                  )}
                  {BUSINESS.licenses.tdlrMold && (
                    <div className="card p-4 text-sm">
                      <div className="font-semibold text-[#0F172A]">TDLR Mold Remediation Contractor</div>
                      <div className="text-[#475569]">#{BUSINESS.licenses.tdlrMold}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">Explore our services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/services/air-duct-cleaning", label: "Air duct cleaning" },
              { href: "/services/dryer-vent-cleaning", label: "Dryer vent cleaning" },
              { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
              { href: "/services/mold-inspection-removal", label: "Mold inspection" },
              { href: "/services/sanitization-deodorization", label: "Sanitization" },
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
          <h2 className="text-2xl font-bold font-display mb-3">Ready to schedule?</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Same-day service across DFW. Free estimate. No surprises.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-bold rounded-lg hover:bg-[#C4501A] transition-colors">
              <Phone size={16} /> {BUSINESS.phone}
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

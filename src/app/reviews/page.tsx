import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Star, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | AL Air Duct Cleaning Dallas",
  description:
    "See what Dallas–Fort Worth homeowners say about AL Air Duct Cleaning Dallas. Read real customer reviews and ratings across DFW.",
  alternates: { canonical: `${BUSINESS.domain}/reviews` },
};

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Reviews", url: `${BUSINESS.domain}/reviews` },
];

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
            Customer reviews — AL Air Duct Cleaning Dallas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            What Dallas–Fort Worth homeowners and businesses say about our duct cleaning service. We don't fabricate reviews — these come directly from Google, Yelp, and Facebook.
          </p>
        </div>
      </section>

      {/* Aggregate rating — only rendered if real data is provided */}
      {BUSINESS.reviewCount && BUSINESS.reviewAverage && (
        <section className="bg-[#0B5563] py-12">
          <div className="container max-w-4xl mx-auto text-center text-white">
            <div className="text-5xl font-bold font-display text-[#F26522] mb-2">{BUSINESS.reviewAverage}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < Math.floor(BUSINESS.reviewAverage!) ? "text-[#F26522] fill-current" : "text-[#94A3B8]"} />
              ))}
            </div>
            <p className="text-[#CCE7EB]">Based on {BUSINESS.reviewCount} verified reviews</p>
          </div>
        </section>
      )}

      {/* Reviews listing */}
      <section className="section-pad bg-white">
        <div className="container max-w-4xl mx-auto">
          {BUSINESS.reviewCount ? (
            <div>
              {/* TODO: Populate with real reviews from your Google/Yelp profiles */}
              <p className="text-[#475569] text-center py-10">
                TODO: Add real customer reviews here. Copy verified reviews from your Google Business Profile, Yelp listing, or Facebook page. Do not fabricate reviews.
              </p>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#E6F3F5] flex items-center justify-center mx-auto mb-5">
                <Star size={28} className="text-[#0B5563]" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">Read our customer reviews</h2>
              <p className="text-[#475569] mb-8 max-w-md mx-auto">
                We're building our online review presence. In the meantime, visit our Google Business Profile to see verified customer reviews.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {BUSINESS.social.googleMaps && (
                  <a
                    href={BUSINESS.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors"
                  >
                    <Star size={16} strokeWidth={1.5} />
                    Google reviews
                    <ExternalLink size={14} />
                  </a>
                )}
                {BUSINESS.social.yelp && (
                  <a
                    href={BUSINESS.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#E2E8F0] text-[#0F172A] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-colors"
                  >
                    Yelp reviews
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-3">Had service with us?</h2>
          <p className="text-[#475569] mb-6">
            If you've used our service, we'd appreciate a review on Google. Honest reviews help other Dallas homeowners make informed decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {BUSINESS.social.googleMaps && (
              <a
                href={BUSINESS.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors"
              >
                Leave a Google review
              </a>
            )}
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-[#E2E8F0] text-[#0B5563] font-semibold rounded-lg hover:bg-white transition-colors">
              Contact us directly
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0B5563] text-white text-center">
        <div className="container">
          <h2 className="text-2xl font-bold font-display mb-3">Ready to experience the difference?</h2>
          <p className="text-[#CCE7EB] mb-7 max-w-xl mx-auto">Same-day air duct cleaning across DFW. Free estimate, no surprises.</p>
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

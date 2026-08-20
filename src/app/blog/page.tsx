import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Air Duct Cleaning Blog — Dallas, TX Tips & Guides",
  description:
    "Expert guides on air duct cleaning, dryer vent safety, HVAC maintenance, and indoor air quality for Dallas–Fort Worth homeowners.",
  alternates: { canonical: `${BUSINESS.domain}/blog` },
};

const breadcrumbs = [
  { name: "Home", url: BUSINESS.domain },
  { name: "Blog", url: `${BUSINESS.domain}/blog` },
];

export default function BlogPage() {
  const published = BLOG_POSTS.filter((p) => p.status === "published");
  const stubs = BLOG_POSTS.filter((p) => p.status === "stub");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-display mb-5">
            Air duct cleaning guides for Dallas–Fort Worth homeowners
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Practical information about air duct cleaning, dryer vent safety, HVAC maintenance, and indoor air quality in the DFW climate. Written for homeowners, not for search engines.
          </p>
        </div>
      </section>

      {published.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-[#0F172A] font-display mb-6">Latest articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {published.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:border-[#0B5563] transition-all group">
                  <div className="inline-flex items-center px-2.5 py-1 bg-[#E6F3F5] text-[#0B5563] text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </div>
                  <h2 className="font-bold text-[#0F172A] mb-2 group-hover:text-[#0B5563] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(post.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[#0B5563] font-semibold">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {stubs.length > 0 && (
        <section className="section-pad bg-[#F8FAFC]">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-[#0F172A] font-display mb-2">Coming soon</h2>
            <p className="text-sm text-[#475569] mb-6">Articles in progress — check back soon.</p>
            <div className="grid gap-3">
              {stubs.map((post) => (
                <div key={post.slug} className="card p-4 flex items-center gap-4">
                  <div className="inline-flex items-center px-2 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#94A3B8] text-xs rounded-full shrink-0">
                    {post.category}
                  </div>
                  <span className="font-medium text-[#0F172A] text-sm">{post.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

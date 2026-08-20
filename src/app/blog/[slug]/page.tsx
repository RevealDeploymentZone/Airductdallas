import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import { BUSINESS } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.filter((p) => p.status === "published").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug && p.status === "published");
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${BUSINESS.domain}/blog/${slug}` },
    other: {
      "article:published_time": post.datePublished,
      "article:modified_time": post.dateModified,
    },
  };
}

// Full content for published posts
const POST_CONTENT: Record<string, React.ReactNode> = {
  "air-duct-cleaning-cost-dallas": (
    <div className="prose-content space-y-5 text-[#475569] leading-relaxed">
      <div className="answer-box">
        <p>Air duct cleaning in Dallas costs $300–$600 for most single-family homes. The price depends on home size, vent count, duct system type, and degree of contamination. Smaller condos and townhomes typically run $250–$400. Larger homes above 3,000 sq ft or systems requiring mold treatment cost more. Price is confirmed after a free pre-job inspection.</p>
      </div>

      <p>
        If you've been researching air duct cleaning in Dallas, you've probably seen advertised prices ranging from $49 to $1,000+. That spread isn't an accident — it reflects a mix of genuine variation in service scope and, less charitably, companies using low numbers to get in the door before adding charges once they're on-site.
      </p>
      <p>
        This guide covers what a legitimate duct cleaning costs in Dallas, what's driving the cost up or down, and how to recognize a quote that will balloon once work starts.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Typical Dallas duct cleaning price ranges</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <caption className="text-left text-xs text-[#94A3B8] mb-2">Air duct cleaning price ranges by home type in Dallas, TX</caption>
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Home type</th>
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Typical range</th>
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">What affects it</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Condo / townhome (under 1,500 sq ft)", "$250–$400", "Shorter runs, fewer vents"],
              ["Single-family home (1,500–2,500 sq ft)", "$300–$500", "Standard DFW ranch or two-story"],
              ["Single-family home (2,500–3,500 sq ft)", "$450–$650", "More vent runs, larger return systems"],
              ["Large home (3,500+ sq ft)", "$600+", "Priced by vent count and system complexity"],
              ["With sanitization add-on", "+$100–$200", "Applied after cleaning"],
              ["With dryer vent cleaning", "+$100–$175", "Same-visit pricing"],
            ].map(([type, range, note]) => (
              <tr key={type as string}>
                <td className="p-3 text-[#0F172A] border border-[#E2E8F0] font-medium">{type}</td>
                <td className="p-3 text-[#0B5563] border border-[#E2E8F0] font-semibold">{range}</td>
                <td className="p-3 text-[#475569] border border-[#E2E8F0]">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">What drives the cost up or down</h2>
      <p>
        When a company quotes your duct cleaning, they're estimating time and materials against a set of factors specific to your home. Here are the main ones:
      </p>
      <ul className="space-y-3">
        {[
          { factor: "Vent count", detail: "More supply and return vents mean more individual runs to seal, agitate, and clean. A small condo might have 8 vents. A 4,000 sq ft home could have 30+." },
          { factor: "Duct material", detail: "Rigid sheet-metal ductwork and flexible duct require different equipment and technique. Homes with mixed systems — common in DFW — take more time." },
          { factor: "Degree of contamination", detail: "A system with light dust buildup from a recent cleaning takes less time than one that hasn't been touched in 15 years with visible debris and possible mold." },
          { factor: "System configuration", detail: "A simple single-trunk system is faster to clean than a branched flex-duct tree with 20+ individual runs off the main plenum." },
          { factor: "Access difficulty", detail: "Attic access is easier in some homes than others. Ducts in tight attic spaces with limited pull-down stair access or low ceiling clearance take more time." },
          { factor: "Add-on services", detail: "Sanitization and dryer vent cleaning are legitimate additions that cost more. They may or may not be warranted for your specific situation." },
        ].map((item) => (
          <li key={item.factor} className="flex gap-3 p-3 bg-[#F8FAFC] rounded-lg">
            <div>
              <div className="font-semibold text-[#0F172A] text-sm">{item.factor}</div>
              <p className="text-sm text-[#475569] mt-0.5">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Why some quotes are $49 — and what happens next</h2>
      <p>
        Some companies advertise duct cleaning for $49, $79, or $99. This is typically a bait-and-switch operation: they arrive, perform a cursory inspection, declare that the system has significant contamination (it usually does, to some degree), and then present a bill that's $400–$800 higher than the advertised price. At that point, they're already in your home and you're in a difficult position.
      </p>
      <p>
        Legitimate companies don't quote a flat low price before seeing your system — the price genuinely varies by home. What a legitimate company does is inspect the system, confirm scope and price, and then start work. The price you agree to before they start is what you pay.
      </p>
      <p>
        Other warning signs include companies that advertise "per vent" pricing (which often inflates the vent count on-site), companies that push sanitization or other add-ons before even assessing whether they're needed, and companies that can't explain what negative-pressure cleaning means or show you the setup before starting.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">DFW-specific pricing factors</h2>
      <p>
        Dallas has some market-specific factors that influence where in the range your job falls:
      </p>
      <p>
        Most DFW homes from the mid-1990s onward use flexible duct installed in unconditioned attic space. Flex duct systems are generally faster to clean than complex rigid-metal systems, but Frisco, McKinney, and Allen homes in new subdivisions often have 20–25 vents across two floors, which pushes the price higher.
      </p>
      <p>
        Older homes in established Dallas neighborhoods like Lake Highlands, Richardson, and Garland often have original sheet-metal ductwork that's structurally sound but holds years of debris. These jobs can take longer than newer flex-duct homes.
      </p>
      <p>
        Post-construction cleaning — increasingly common in DFW's fast-growing northern suburbs — involves heavier debris loads from drywall and construction dust. This genuinely takes more time and may cost more than a routine maintenance cleaning.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Is a more expensive cleaning always better?</h2>
      <p>
        Not necessarily. Price reflects scope and time — a company that spends 6 hours on your system isn't automatically doing better work than one that finishes in 3.5 hours. What matters is whether the system coverage is complete (both supply and return sides, both plenums, all registers), whether negative-pressure containment is used, and whether the technician inspects the system before and after.
      </p>
      <p>
        The best price signal is a quote given after an actual inspection of your system, where the technician explains what they found and what the scope of cleaning covers.
      </p>
    </div>
  ),
  "why-dallas-home-gets-dusty": (
    <div className="space-y-5 text-[#475569] leading-relaxed">
      <div className="answer-box">
        <p>Dallas homes get dusty again quickly because the sources are usually active and continuous — air infiltration through the building envelope, HVAC system recirculation, and DFW's high outdoor pollen and particulate load. Cleaning the house removes settled dust, but it doesn't address the sources bringing new dust in.</p>
      </div>

      <p>
        If you're cleaning your house and watching dust reappear on surfaces within two days, you're not imagining it. DFW has some of the most demanding dust conditions in the country, and "clean more often" is only part of the answer. Understanding where the dust is coming from is more useful.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Source 1: Air infiltration through the building envelope</h2>
      <p>
        No house in Dallas is perfectly sealed. Every gap around door frames, window sills, electrical outlets on exterior walls, recessed lights on the top floor, and attic hatches allows outdoor air (and the particles in it) to enter. In DFW, outdoor air carries a significant particulate load: PM2.5 from traffic and industrial sources, fine road dust, pollen from mountain cedar and live oak, and — in the northern suburbs — silica and drywall dust from active construction nearby.
      </p>
      <p>
        The more air that infiltrates, the more dust enters. Houses with poor weather-stripping, aging window seals, or unsealed attic bypasses are continuously admitting outdoor air that brings particles with it. Each time the HVAC system runs and pressurizes or depressurizes the house, the infiltration rate changes — often drawing in more outdoor air.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Source 2: Your HVAC system recirculating what's already inside</h2>
      <p>
        Your HVAC system moves 1,000–2,000+ cubic feet of air per minute through your home. It pulls that air through return registers, passes it across a filter and evaporator coil, and pushes it back out through supply registers. If the duct system contains significant dust and debris, every time the blower runs, some of that debris is redistributed throughout the house.
      </p>
      <p>
        The EPA notes in its <a href="https://www.epa.gov/report-environment/indoor-air-quality" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">indoor air quality research</a> that indoor concentrations of some pollutants can be 2–5 times higher than outdoor concentrations, partly because of recirculation dynamics in sealed buildings. A duct system that hasn't been cleaned in several years can contain meaningful accumulations of dust, skin cells, pet dander, and pollen that reenter the air supply continuously.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Source 3: Cedar and oak pollen in January through April</h2>
      <p>
        Mountain cedar (Ashe juniper) pollen season in North Texas runs from roughly late November through February, with peak concentrations in January. The American Academy of Allergy, Asthma & Immunology has noted that mountain cedar is one of the most potent allergens in North America, and DFW's proximity to the Hill Country makes it one of the most heavily affected metros.
      </p>
      <p>
        Cedar pollen grains are extremely small — similar in size to PM2.5 — which means they penetrate standard MERV-8 filters that catch larger particles. They also have a tendency to clump, which creates visible dust-like deposits on surfaces near supply registers even when the surfaces appeared clean the day before.
      </p>
      <p>
        Live oak pollen follows in March and April, adding another significant load on top of whatever cedar has already deposited. For Dallas homeowners near large oaks, this period can feel like a losing battle against dust regardless of cleaning frequency.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Source 4: Construction activity in the outer suburbs</h2>
      <p>
        If you live in Frisco, McKinney, Allen, Celina, or another fast-growing DFW suburb, you're likely within wind-carry distance of multiple active construction sites. Construction generates extremely fine silica dust (from concrete and masonry), drywall compound dust, and wood particulate. During high-wind events common to North Texas, this material travels considerable distances.
      </p>
      <p>
        Fine silica is harder to see than standard house dust — it's too fine to cast a visible shadow — but it settles on horizontal surfaces and inside duct systems. It's also the particulate type most associated with health effects at elevated concentrations. Homes near active construction sites typically see meaningfully higher dust reaccumulation rates during the building season (spring through fall).
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">What actually helps</h2>
      <p>
        Addressing fast-returning dust in a Dallas home requires working on the source, not just the symptom:
      </p>
      <ul className="space-y-2">
        {[
          { step: "Upgrade your filter", detail: "A MERV-11 or MERV-13 filter captures significantly more fine particles than a standard MERV-8. Check that your air handler can handle the reduced airflow — some residential systems aren't rated for high-MERV filters without modification." },
          { step: "Seal the building envelope", detail: "Weather-stripping, window seals, outlet gaskets on exterior walls, and attic bypass sealing reduce the infiltration rate. This is particularly high-impact during pollen seasons." },
          { step: "Clean the duct system", detail: "If the duct system is a significant reservoir, cleaning it removes the recirculation source. This is most impactful when the duct system has visible buildup or hasn't been cleaned in several years." },
          { step: "Address the HVAC coil and blower", detail: "Debris on the blower wheel and coil can degrade filtration effectiveness and recirculate fine particles. Cleaning these components is separate from duct cleaning." },
          { step: "Maintain filter change frequency during pollen season", detail: "During cedar and oak season, change filters more frequently than the off-season interval. A filter that's loaded with pollen passes more fine particles than a fresh one." },
        ].map((item) => (
          <li key={item.step} className="flex gap-3 p-3 bg-[#F8FAFC] rounded-lg">
            <div>
              <div className="font-semibold text-[#0F172A] text-sm">{item.step}</div>
              <p className="text-sm text-[#475569] mt-0.5">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">When to call a professional</h2>
      <p>
        If dust is reappearing on surfaces near supply registers within 24–48 hours of cleaning, that's a signal that the duct system may be a significant contributor. A visual inspection — which we provide free — can confirm whether there's meaningful debris in the supply or return runs that's causing recirculation. If the duct system is clean and dust is still returning quickly, the primary source is likely air infiltration, which is an envelope issue rather than an HVAC one.
      </p>
    </div>
  ),
  "air-duct-cleaning-vs-dryer-vent-cleaning": (
    <div className="space-y-5 text-[#475569] leading-relaxed">
      <div className="answer-box">
        <p>Air duct cleaning cleans the HVAC supply and return system that circulates conditioned air throughout your home. Dryer vent cleaning removes lint from the separate exhaust duct between your dryer and the exterior wall cap. They're different systems, different equipment, and different risk profiles — air quality for one, fire safety for the other.</p>
      </div>

      <p>
        Dallas homeowners often ask whether they should get both done or whether one covers the other. The short answer: they're completely separate systems with no overlap. Understanding what each one does helps you make a better decision about timing and necessity.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">What air duct cleaning is</h2>
      <p>
        Air duct cleaning addresses your HVAC distribution system — the network of supply and return ducts that carry heated and cooled air to every room in your home. This system is permanently connected to your air handler, which contains the evaporator coil, blower wheel, and filter. Return registers pull air from your rooms, pass it through the filter and coil, and push conditioned air back through supply registers.
      </p>
      <p>
        Over time, the interior surfaces of these ducts accumulate dust, pet dander, pollen, and other particles that pass through or around the filter. In DFW homes — where the AC runs for 8–10 months and the cedar pollen season deposits significant fine-grained pollen — this accumulation happens faster than in most climates.
      </p>
      <p>
        A professional air duct cleaning uses a negative-pressure HEPA-filtered vacuum connected to the main trunk line, with all registers sealed, and agitation tools to dislodge debris from duct surfaces. This is the NADCA-recommended method. The purpose is cleaner recirculated air and, in cases of significant buildup, reduction of the particulate load the filter has to manage.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">What dryer vent cleaning is</h2>
      <p>
        Dryer vent cleaning addresses a completely separate system: the exhaust duct that runs from the back of your clothes dryer to an exterior vent cap on the outside wall or roof of your home. This duct exists to exhaust hot moist air and lint from the dryer to the outside. It carries no conditioned air and has no connection to your HVAC system.
      </p>
      <p>
        Lint is extremely combustible. Every load of laundry deposits some lint in the vent duct — some in the lint trap, and some that passes through the trap and accumulates in the ductwork. Over months and years, this accumulation restricts airflow, forces the dryer to run hotter and longer, and creates a concentration of highly combustible material in a hot duct.
      </p>
      <p>
        According to the <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer" className="text-[#0B5563] underline">National Fire Protection Association (NFPA)</a>, dryers and washing machines are involved in approximately 15,000 home structure fires per year, with failure to clean as the leading contributing factor. In DFW, where summer attic temperatures make vent ducts hotter and where newer two-story homes often have long vent runs through the attic, the risk profile is higher than the national average.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Side-by-side comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <caption className="text-left text-xs text-[#94A3B8] mb-2">Air duct cleaning vs dryer vent cleaning comparison</caption>
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]"></th>
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Air duct cleaning</th>
              <th scope="col" className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0]">Dryer vent cleaning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["System cleaned", "HVAC supply and return ducts", "Dryer exhaust duct"],
              ["Primary purpose", "Air quality, particulate reduction", "Fire prevention, drying efficiency"],
              ["Main hazard addressed", "Dust, allergens, microbial growth", "Lint fire risk"],
              ["Typical frequency", "Every 3–5 years (or when contaminated)", "Annually"],
              ["Typical cost in Dallas", "$300–$600", "$100–$175"],
              ["Time to complete", "3–4 hours", "1–1.5 hours"],
              ["Equipment used", "HEPA vacuum, agitation brushes/whips", "Flexible rod and brush kit, airflow meter"],
            ].map(([factor, duct, dryer]) => (
              <tr key={factor as string}>
                <td className="p-3 font-medium text-[#0F172A] border border-[#E2E8F0]">{factor}</td>
                <td className="p-3 text-[#475569] border border-[#E2E8F0]">{duct}</td>
                <td className="p-3 text-[#475569] border border-[#E2E8F0]">{dryer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Can you do both at the same visit?</h2>
      <p>
        Yes — and there's a practical case for it. When a technician is already on-site with equipment, adding the dryer vent to the same visit is more efficient and typically costs less than booking it separately. The dryer vent cleaning usually adds about an hour and $100–$175 to the visit. If you're already scheduling duct cleaning, it's worth considering.
      </p>
      <p>
        Whether you need both depends on your situation. Dryer vent cleaning is almost always warranted annually for a household doing regular laundry — the lint accumulation risk is real and consistent. Air duct cleaning is warranted when contamination indicators are present, not on a fixed schedule. We assess both during the same free inspection.
      </p>

      <h2 className="text-xl font-bold text-[#0F172A] font-display pt-4">Signs each service is needed</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card p-4">
          <div className="font-semibold text-[#0F172A] mb-2 text-sm">Signs air ducts need cleaning</div>
          <ul className="space-y-1.5 text-sm">
            {[
              "Dust returns to surfaces near registers within days",
              "Musty odor when HVAC starts",
              "Worsening indoor allergy symptoms",
              "Visible mold near registers",
              "System hasn't been cleaned in 5+ years",
              "Recent renovation or construction",
            ].map((s) => <li key={s} className="text-[#475569]">• {s}</li>)}
          </ul>
        </div>
        <div className="card p-4">
          <div className="font-semibold text-[#0F172A] mb-2 text-sm">Signs dryer vent needs cleaning</div>
          <ul className="space-y-1.5 text-sm">
            {[
              "Clothes take more than one cycle to dry",
              "Dryer surface is unusually hot",
              "Burning smell when dryer runs",
              "Exterior vent flap doesn't open fully",
              "More than 12 months since last cleaning",
              "Vent run is long or has multiple bends",
            ].map((s) => <li key={s} className="text-[#475569]">• {s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug && p.status === "published");
  if (!post) notFound();

  const content = POST_CONTENT[slug];
  const otherPosts = BLOG_POSTS.filter((p) => p.status === "published" && p.slug !== slug).slice(0, 2);

  const breadcrumbs = [
    { name: "Home", url: BUSINESS.domain },
    { name: "Blog", url: `${BUSINESS.domain}/blog` },
    { name: post.title, url: `${BUSINESS.domain}/blog/${slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: post.title,
        slug: post.slug,
        description: post.excerpt,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        authorName: post.author,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-[#F8FAFC] py-10 lg:py-14">
        <div className="container max-w-3xl mx-auto">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.category }]} />
          <div className="inline-flex items-center px-2.5 py-1 bg-[#E6F3F5] text-[#0B5563] text-xs font-semibold rounded-full mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0F172A] font-display mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </span>
            {post.author !== "TODO: AUTHOR NAME" && (
              <span className="flex items-center gap-1.5">
                <User size={13} />
                {post.author}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-3xl mx-auto">
          {content || (
            <div className="text-[#475569]">
              <p className="text-lg mb-4">{post.excerpt}</p>
              <p className="text-sm italic">Full article coming soon.</p>
            </div>
          )}

          {/* Internal links to related services */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
            <p className="text-sm font-semibold text-[#0F172A] mb-3">Related services</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/services/air-duct-cleaning", label: "Air duct cleaning in Dallas" },
                { href: "/services/dryer-vent-cleaning", label: "Dryer vent cleaning" },
                { href: "/services/hvac-cleaning", label: "HVAC cleaning" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E8F0] rounded-lg text-xs text-[#0B5563] font-medium hover:bg-[#E6F3F5] transition-colors">
                  {l.label} <ArrowRight size={11} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container max-w-2xl mx-auto">
          <div className="card p-6 text-center">
            <h2 className="text-xl font-bold text-[#0F172A] font-display mb-2">Ready to schedule?</h2>
            <p className="text-sm text-[#475569] mb-5">Same-day service across DFW. Free estimate. No surprises.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm">
                <Phone size={15} /> {BUSINESS.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm">
                Get my free estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[#0F172A] font-display">More articles</h2>
              <Link href="/blog" className="text-sm text-[#0B5563] font-semibold flex items-center gap-1">
                All articles <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-4 hover:border-[#0B5563] transition-all group">
                  <div className="text-xs font-semibold text-[#0B5563] mb-2">{p.category}</div>
                  <div className="font-semibold text-[#0F172A] text-sm group-hover:text-[#0B5563] transition-colors leading-snug">{p.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="h-14 lg:hidden" />
    </>
  );
}

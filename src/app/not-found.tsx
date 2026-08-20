import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import { BUSINESS, SERVICES } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="text-6xl font-bold text-[#E2E8F0] font-display mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#0F172A] font-display mb-3">
          Page not found
        </h1>
        <p className="text-[#475569] mb-8">
          The page you're looking for doesn't exist. Try the links below to find what you need.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B5563] text-white font-semibold rounded-lg hover:bg-[#094750] transition-colors text-sm">
            <Home size={15} /> Go home
          </Link>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F26522] text-white font-semibold rounded-lg hover:bg-[#C4501A] transition-colors text-sm">
            <Phone size={15} /> {BUSINESS.phone}
          </a>
        </div>

        <div className="text-left">
          <h2 className="text-sm font-semibold text-[#0F172A] mb-3">Our main services</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 p-3 border border-[#E2E8F0] rounded-lg text-sm text-[#0B5563] hover:bg-[#E6F3F5] transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

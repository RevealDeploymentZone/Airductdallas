import { Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function TopBar() {
  return (
    <div className="bg-[#0B5563] text-white text-sm py-2">
      <div className="container flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Clock size={14} strokeWidth={1.5} />
          <span>Open 24/7 — same-day service across DFW</span>
        </div>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center gap-2 font-semibold hover:text-orange-300 transition-colors"
        >
          <Phone size={14} strokeWidth={1.5} />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}

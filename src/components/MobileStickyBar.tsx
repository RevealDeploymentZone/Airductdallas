import Link from "next/link";
import { Phone, ClipboardList } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E2E8F0] shadow-lg">
      <div className="flex">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#0B5563] text-white font-semibold text-sm min-h-[48px]"
        >
          <Phone size={18} strokeWidth={1.5} />
          Call now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#F26522] text-white font-semibold text-sm min-h-[48px]"
        >
          <ClipboardList size={18} strokeWidth={1.5} />
          Free estimate
        </Link>
      </div>
    </div>
  );
}

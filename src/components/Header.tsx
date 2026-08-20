"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES } from "@/data/business";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-[#E2E8F0]"
      }`}
    >
      <div className="container flex items-center justify-between h-16 gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="AL Air Duct Cleaning Dallas"
            width={220}
            height={160}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <Link href="/" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-3 py-2 rounded hover:text-[#0B5563] transition-colors"
              aria-haspopup="true"
            >
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#E2E8F0] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="p-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-3 py-2 rounded-lg text-sm hover:bg-[#E6F3F5] hover:text-[#0B5563] transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-[#E2E8F0] mt-1 pt-1">
                  <Link
                    href="/services"
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#0B5563] hover:bg-[#E6F3F5] transition-colors"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            About
          </Link>
          <Link href="/reviews" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            Reviews
          </Link>
          <Link href="/faq" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded hover:text-[#0B5563] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#0B5563]"
          >
            <Phone size={16} strokeWidth={1.5} />
            {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-4 py-2 bg-[#F26522] text-white text-sm font-semibold rounded-lg hover:bg-[#C4501A] transition-colors"
          >
            Free estimate
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg border border-[#E2E8F0]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <div className="container py-4 flex flex-col gap-1">
            <Link href="/" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <button
              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium text-left w-full"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-3 py-2 rounded-lg text-sm hover:bg-[#E6F3F5] text-[#0B5563]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/reviews" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>Reviews</Link>
            <Link href="/faq" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/blog" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="px-3 py-2.5 rounded-lg hover:bg-[#F8FAFC] font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="pt-2 border-t border-[#E2E8F0] flex flex-col gap-2 mt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 bg-[#0B5563] text-white rounded-lg font-semibold"
              >
                <Phone size={16} /> {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center py-3 bg-[#F26522] text-white rounded-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Get free estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

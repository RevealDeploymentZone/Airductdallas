import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/data/business";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: "AL Air Duct Cleaning Dallas | Same-Day Service Across DFW",
    template: "%s | AL Air Duct Cleaning Dallas",
  },
  description:
    "Professional air duct cleaning in Dallas–Fort Worth. NADCA-standard negative-pressure cleaning, same-day availability, 24/7 service. Call for a free estimate.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title: "AL Air Duct Cleaning Dallas | Same-Day Service Across DFW",
    description:
      "Professional air duct cleaning in Dallas–Fort Worth. NADCA-standard negative-pressure cleaning, same-day availability, 24/7 service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AL Air Duct Cleaning Dallas — professional duct cleaning across DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL Air Duct Cleaning Dallas | Same-Day Service Across DFW",
    description:
      "Professional air duct cleaning in Dallas–Fort Worth. Same-day service, 24/7 availability.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BUSINESS.domain,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="font-sans text-[#475569] antialiased">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

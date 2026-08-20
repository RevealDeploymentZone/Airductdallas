import { BUSINESS, SERVICE_AREAS } from "@/data/business";

const domain = BUSINESS.domain;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": `${domain}/#business`,
    name: BUSINESS.name,
    url: domain,
    logo: `${domain}/logo.png`,
    image: `${domain}/og-image.jpg`,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: a.city,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.googleMaps,
      BUSINESS.social.yelp,
    ].filter(Boolean),
    ...(BUSINESS.reviewCount && BUSINESS.reviewAverage
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.reviewAverage,
            reviewCount: BUSINESS.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: domain,
    name: BUSINESS.name,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${domain}/services/${slug}`,
    provider: {
      "@id": `${domain}/#business`,
    },
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a.city })),
    serviceType: name,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  slug,
  description,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${domain}/blog/${slug}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@id": `${domain}/#business`,
    },
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fyyndfit.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FyyndFit",
    url: baseUrl,
    logo: `${baseUrl}/fyyndfit-logo.png`,
    description: "AI-powered fitness app for beginners. Scan gym equipment, get personalized workouts, and track your progress.",
    sameAs: [
      "https://apps.apple.com/ca/app/fyyndfit/id6747248203",
      "https://play.google.com/store/apps/details?id=com.fyyndfit.fyyndfit",
    ],
  };

  const mobileApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "FyyndFit",
    applicationCategory: "HealthApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "1",
    },
    description: "AI-powered fitness app for beginners. Scan gym equipment with your camera, get personalized AI workouts, learn proper form with video tutorials, and track your progress.",
    screenshot: `${baseUrl}/IMG_9474.PNG`,
    downloadUrl: [
      "https://apps.apple.com/ca/app/fyyndfit/id6747248203",
      "https://play.google.com/store/apps/details?id=com.fyyndfit.fyyndfit",
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FyyndFit",
    applicationCategory: "HealthApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "AI-powered fitness app that helps beginners navigate the gym by scanning equipment, generating personalized workouts, and providing form guidance.",
    featureList: [
      "AI-powered gym equipment scanner",
      "Personalized workout generator",
      "Video workout tutorials",
      "Calorie tracking",
      "Progress analytics",
    ],
    screenshot: `${baseUrl}/IMG_9474.PNG`,
    downloadUrl: [
      "https://apps.apple.com/ca/app/fyyndfit/id6747248203",
      "https://play.google.com/store/apps/details?id=com.fyyndfit.fyyndfit",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FyyndFit",
    url: baseUrl,
    description: "AI-powered fitness app for beginners. Find your fitness with FyyndFit.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

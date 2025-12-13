import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Appavoo | Aerospace & Healthcare Innovation",
  description: "Building transformative technology at the intersection of aerospace and healthcare. Founder of Hypersona and Bean.",
  keywords: ["Dinesh Appavoo", "Rocket Science", "Healthcare Innovation", "AlphaFold", "FFSC Engine", "Hypersona", "Bean", "Computational Proteomics"],
  authors: [{ name: "Dinesh Appavoo", url: "https://dineshappavoo.com" }],
  creator: "Dinesh Appavoo",
  metadataBase: new URL('https://dineshappavoo.com'),
  openGraph: {
    title: "Dinesh Appavoo | Aerospace & Healthcare Innovation",
    description: "Building transformative technology at the intersection of aerospace and healthcare",
    type: "website",
    siteName: "Dinesh Appavoo",
    url: "https://dineshappavoo.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dinesh Appavoo - Aerospace & Healthcare Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DineshAppavoo",
    creator: "@DineshAppavoo",
    title: "Dinesh Appavoo | Aerospace & Healthcare Innovation",
    description: "Building transformative technology at the intersection of aerospace and healthcare",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://dineshappavoo.com",
  },
  other: {
    // Social Profile Links
    "twitter:url": "https://x.com/DineshAppavoo",
    "linkedin:url": "https://www.linkedin.com/in/dineshappavoo/",
    "github:url": "https://github.com/dineshappavoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Social Profile Links - JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dinesh Appavoo",
              "url": "https://dineshappavoo.com",
              "sameAs": [
                "https://x.com/DineshAppavoo",
                "https://www.linkedin.com/in/dineshappavoo/",
                "https://github.com/dineshappavoo",
                "https://medium.com/@dineshappavoo"
              ],
              "jobTitle": "Founder & Engineer",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Hypersona"
                },
                {
                  "@type": "Organization",
                  "name": "Bean"
                }
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "The University of Texas at Dallas"
              },
              "email": "hello@dineshappavoo.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
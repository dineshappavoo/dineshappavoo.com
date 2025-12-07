import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Appavoo | Aerospace & Healthcare Innovation",
  description: "Building transformative technology at the intersection of aerospace and healthcare. Founder of Hypersona and Bean.",
  keywords: ["Dinesh Appavoo", "Rocket Science", "Healthcare Innovation", "AlphaFold", "FFSC Engine", "Hypersona", "Bean", "Computational Proteomics"],
  authors: [{ name: "Dinesh Appavoo" }],
  metadataBase: new URL('https://dineshappavoo.com'),
  openGraph: {
    title: "Dinesh Appavoo | Aerospace & Healthcare Innovation",
    description: "Building transformative technology at the intersection of aerospace and healthcare",
    type: "website",
    siteName: "Dinesh Appavoo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DineshAppavoo",
    creator: "@DineshAppavoo",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
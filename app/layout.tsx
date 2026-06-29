import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgridnexus.com"),

  title: {
    default: "NextGrid Nexus | Fashion Technology",
    template: "%s | NextGrid Nexus",
  },

  description:
    "NextGrid Nexus is a modern Fashion Technology platform showcasing AI-powered fashion, smart textiles, wearable technology, digital collections, and innovative design experiences.",

  keywords: [
    "Fashion Technology",
    "AI Fashion",
    "Smart Clothing",
    "Wearable Technology",
    "Digital Fashion",
    "Future Fashion",
    "3D Fashion",
    "Virtual Fashion",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "NextGrid Nexus Team",
    },
  ],

  creator: "NextGrid Nexus",

  publisher: "NextGrid Nexus",

  applicationName: "NextGrid Nexus",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "NextGrid Nexus",
    description:
      "Explore the future of Fashion Technology with AI-powered design, digital fashion, smart fabrics, and immersive innovation.",

    url: "https://nextgridnexus.com",

    siteName: "NextGrid Nexus",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Nexus",
    description:
      "Fashion Technology powered by Artificial Intelligence and Innovation.",
    images: ["/images/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased selection:bg-violet-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
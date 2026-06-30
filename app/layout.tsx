import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: {
    default: "NextGrid Nexus | Fashion Technology & AI Fashion Platform",
    template: "%s | NextGrid Nexus",
  },

  description:
    "NextGrid Nexus is the flagship Fashion Technology ecosystem by NextGrid, connecting AI-powered fashion, smart textiles, digital fashion, wearable technology, sustainable innovation, luxury apparel, beauty, accessories, footwear, home lifestyle, and future-ready shopping experiences.",

  keywords: [
    // Main Brand
    "NextGrid Style",
    "NextGrid Nexus",
    "Fashion Technology",
    "Fashion Tech",
    "AI Fashion",
    "Artificial Intelligence Fashion",
    "Digital Fashion",
    "Smart Fashion",
    "Future Fashion",
    "Fashion Innovation",
    "Luxury Fashion",
    "Fashion Platform",
    "Online Fashion",
    "Fashion Brand",

    // Technologies
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Responsive Design",
    "Progressive Web App",
    "Web Development",

    // AI & Innovation
    "AI Design",
    "Fashion Analytics",
    "Virtual Fashion",
    "3D Fashion",
    "Smart Clothing",
    "Smart Textiles",
    "Wearable Technology",
    "Fashion Automation",

    // Lifestyle
    "Luxury Clothing",
    "Premium Fashion",
    "Modern Fashion",
    "Lifestyle Products",
    "Designer Collections",

    // Brand Collections
    "NextGrid Lifestyle",
    "Men's Fashion",
    "Mens Clothing",
    "Formal Wear",
    "Casual Wear",

    "NextGrid HerStyle",
    "Women's Fashion",
    "Ladies Fashion",
    "Women's Clothing",

    "NextGrid LittleStyle",
    "Kids Fashion",
    "Children Clothing",

    "NextGrid SoleStyle",
    "Footwear",
    "Luxury Shoes",
    "Sneakers",

    "NextGrid Spark",
    "Jewelry",
    "Accessories",
    "Luxury Accessories",
    "Handbags",
    "Wallets",
    "Belts",
    "Luxury Watches",

    "NextGrid EcoWear",
    "Sustainable Fashion",
    "Eco Friendly Clothing",
    "Organic Fashion",
    "Ethical Fashion",

    "NextGrid Active",
    "Sportswear",
    "Gym Wear",
    "Athleisure",

    "NextGrid Beauty",
    "Beauty Products",
    "Cosmetics",
    "Skincare",
    "Personal Care",

    "NextGrid Fragrance",
    "Luxury Perfume",
    "Perfume",
    "Fragrance",

    "NextGrid Living",
    "Home Decor",
    "Lifestyle Products",

    "NextGrid WorkStyle",
    "Corporate Wear",
    "Business Clothing",
    "Professional Fashion",

    "NextGrid Time",
    "Smart Watches",
    "Luxury Watches",
    "Wearables",

    "NextGrid Vision",
    "Eyewear",
    "Sunglasses",
    "Optical Glasses",

    "NextGrid Street",
    "Streetwear",
    "Urban Fashion",
  ],

  authors: [
    {
      name: "NextGrid Team",
      url: "https://nextgrid-nexus.vercel.app",
    },
  ],

  creator: "NextGrid",
  publisher: "NextGrid",

  applicationName: "NextGrid Nexus",

  category: "Fashion Technology",

  classification:
    "Fashion Technology, Artificial Intelligence, Ecommerce, Lifestyle",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextgrid-nexus.vercel.app",
    siteName: "NextGrid Nexus",

    title:
      "NextGrid Nexus | AI Fashion, Smart Clothing & Fashion Technology",

    description:
      "Discover the NextGrid ecosystem featuring AI-powered fashion, luxury apparel, sustainable collections, digital fashion, wearable technology, accessories, beauty, footwear and future-ready innovation.",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Fashion Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Nexus",
    description:
      "The Future of Fashion Technology powered by Artificial Intelligence.",
    creator: "@NextGrid",
    images: ["/images/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    title: "NextGrid Nexus",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
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
        className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased selection:bg-violet-600 selection:text-white`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-var(--navbar-height,0px))]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
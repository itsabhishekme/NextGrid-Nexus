import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Beauty | Cosmetics & Skincare",

  description:
    "Discover NextGrid Beauty, the premium beauty and skincare destination from NextGrid Style. Explore luxury skincare, cosmetics, makeup, wellness, personal care, and beauty innovations designed for modern lifestyles.",

  keywords: [
    "NextGrid Beauty",
    "Beauty",
    "Luxury Beauty",
    "Cosmetics",
    "Skincare",
    "Makeup",
    "Personal Care",
    "Beauty Products",
    "Premium Cosmetics",
    "Beauty Technology",
    "Luxury Skincare",
    "Wellness",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/beauty",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Beauty | Cosmetics & Skincare",
    description:
      "Experience premium beauty, skincare, and cosmetics powered by innovation and modern luxury.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/beauty",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Beauty",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Beauty",
    description:
      "Premium skincare and cosmetics for modern lifestyles.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Skincare",
    description:
      "Advanced skincare solutions formulated with premium ingredients for healthy and radiant skin.",
  },
  {
    title: "Professional Makeup",
    description:
      "High-performance cosmetics designed for everyday elegance and professional artistry.",
  },
  {
    title: "Beauty Essentials",
    description:
      "Daily beauty products crafted to enhance confidence, comfort, and self-care.",
  },
  {
    title: "Personal Care",
    description:
      "Premium personal care collections combining innovation with wellness and luxury.",
  },
  {
    title: "Organic Beauty",
    description:
      "Eco-conscious beauty products made using naturally inspired ingredients.",
  },
  {
    title: "Beauty Technology",
    description:
      "AI-powered skincare analysis and intelligent beauty experiences for the future.",
  },
];

const highlights = [
  "Premium Ingredients",
  "Dermatologist Tested",
  "Cruelty-Free Products",
  "Luxury Packaging",
  "Clean Beauty",
  "Natural Formulas",
  "AI Beauty Innovation",
  "Sustainable Production",
];

export default function BeautyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-pink-500/20 px-5 py-2 text-sm font-semibold text-pink-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
              Beauty
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover a premium beauty destination where luxury skincare,
            cosmetics, wellness, and innovation come together. NextGrid Beauty
            is designed to inspire confidence, elegance, and healthy living
            through exceptional products and intelligent beauty experiences.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Beauty
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </section>

      {/* Collections */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Beauty Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Explore premium beauty solutions for every lifestyle.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-pink-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Highlights */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Why Choose NextGrid Beauty?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-pink-500"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Beauty Meets Innovation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Experience premium cosmetics, intelligent skincare, sustainable
            beauty, and luxury wellness solutions developed for the next
            generation of beauty enthusiasts.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/fragrance"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Fragrance
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
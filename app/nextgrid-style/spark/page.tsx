import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Spark | Accessories & Jewelry",

  description:
    "Discover NextGrid Spark, the premium accessories and jewelry destination by NextGrid Style. Explore luxury handbags, wallets, watches, belts, sunglasses, fine jewelry, smart accessories, and timeless fashion essentials.",

  keywords: [
    "NextGrid Spark",
    "Accessories",
    "Jewelry",
    "Luxury Accessories",
    "Fashion Accessories",
    "Luxury Handbags",
    "Premium Wallets",
    "Designer Belts",
    "Luxury Watches",
    "Fine Jewelry",
    "Necklaces",
    "Bracelets",
    "Rings",
    "Earrings",
    "Sunglasses",
    "Smart Accessories",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/spark",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Spark | Accessories & Jewelry",
    description:
      "Luxury accessories and premium jewelry designed with timeless elegance and modern innovation.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/spark",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Spark",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Spark",
    description:
      "Luxury accessories, premium jewelry and modern fashion essentials.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Handbags",
    description:
      "Premium handbags designed with exceptional craftsmanship, elegance, and functionality.",
  },
  {
    title: "Wallets & Small Leather Goods",
    description:
      "Luxury wallets, card holders, passport covers, and everyday leather essentials.",
  },
  {
    title: "Fashion Jewelry",
    description:
      "Elegant necklaces, earrings, bracelets, rings, and statement jewelry collections.",
  },
  {
    title: "Luxury Watches",
    description:
      "Classic timepieces and modern designer watches crafted for every occasion.",
  },
  {
    title: "Designer Sunglasses",
    description:
      "Fashion-forward sunglasses combining premium materials and advanced UV protection.",
  },
  {
    title: "Smart Accessories",
    description:
      "Technology-inspired accessories blending innovation with contemporary luxury.",
  },
];

const features = [
  "Premium Craftsmanship",
  "Luxury Materials",
  "Modern Design",
  "Fine Jewelry",
  "Italian Leather",
  "Smart Accessories",
  "Sustainable Production",
  "Global Fashion Trends",
];

export default function SparkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Spark
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover premium accessories and luxury jewelry designed to elevate
            every style. From handcrafted leather goods and designer handbags
            to timeless jewelry, watches, and smart accessories, NextGrid Spark
            blends elegance, craftsmanship, and innovation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collection
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </section>

      {/* Collections */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Luxury Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Explore premium accessories crafted with timeless elegance.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-yellow-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {collection.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {collection.description}
                </p>
              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Why Choose NextGrid Spark?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-yellow-500"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Complete Every Look
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Every detail matters. NextGrid Spark delivers luxury accessories,
            premium craftsmanship, timeless jewelry, and innovative fashion
            essentials designed for modern lifestyles.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/lifestyle"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Lifestyle
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
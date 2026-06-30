import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid SoleStyle | Premium Footwear",

  description:
    "Discover NextGrid SoleStyle, the premium footwear collection by NextGrid Style. Explore luxury sneakers, formal shoes, casual footwear, sandals, boots, athletic shoes, and smart footwear designed for comfort, innovation, and modern lifestyles.",

  keywords: [
    "NextGrid SoleStyle",
    "Footwear",
    "Luxury Shoes",
    "Premium Footwear",
    "Sneakers",
    "Running Shoes",
    "Formal Shoes",
    "Casual Shoes",
    "Sports Shoes",
    "Sandals",
    "Boots",
    "Smart Footwear",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/solestyle",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid SoleStyle | Premium Footwear",
    description:
      "Luxury footwear combining comfort, innovation, and timeless craftsmanship.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/solestyle",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid SoleStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid SoleStyle",
    description:
      "Premium footwear designed for every lifestyle.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Sneakers",
    description:
      "Modern sneakers crafted with premium materials, lightweight construction, and exceptional comfort.",
  },
  {
    title: "Formal Collection",
    description:
      "Elegant leather shoes designed for business professionals and formal occasions.",
  },
  {
    title: "Casual Footwear",
    description:
      "Comfortable everyday footwear blending minimalist style with premium quality.",
  },
  {
    title: "Running Collection",
    description:
      "Performance running shoes engineered for speed, cushioning, and endurance.",
  },
  {
    title: "Outdoor Boots",
    description:
      "Adventure-ready boots designed for hiking, travel, and outdoor exploration.",
  },
  {
    title: "Smart Footwear",
    description:
      "Technology-enabled footwear integrating innovative materials and intelligent design.",
  },
];

const features = [
  "Premium Leather",
  "Breathable Materials",
  "Ultra-Lightweight",
  "Advanced Cushioning",
  "Slip Resistant",
  "Smart Comfort",
  "Eco-Friendly Materials",
  "Luxury Craftsmanship",
];

export default function SoleStylePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-violet-600/20 px-5 py-2 text-sm font-semibold text-violet-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
              SoleStyle
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Experience premium footwear designed with luxury craftsmanship,
            innovative technology, and superior comfort. From elegant formal
            shoes to performance sneakers, NextGrid SoleStyle delivers footwear
            built for every journey.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Footwear Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Premium footwear for every occasion and lifestyle.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-violet-500"
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
            Why Choose SoleStyle?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-violet-500"
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
            Walk Into the Future
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Discover footwear crafted with premium materials, innovative
            technology, and timeless design. Every step reflects quality,
            comfort, and modern sophistication.
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
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
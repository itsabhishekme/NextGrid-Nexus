import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Fragrance | Luxury Perfumes",

  description:
    "Discover NextGrid Fragrance, the luxury perfume collection by NextGrid Style. Explore premium fragrances, signature scents, eau de parfum, eau de toilette, body mists, and exclusive fragrance experiences inspired by elegance and innovation.",

  keywords: [
    "NextGrid Fragrance",
    "Luxury Perfumes",
    "Premium Perfume",
    "Fragrance Collection",
    "Eau de Parfum",
    "Eau de Toilette",
    "Luxury Scent",
    "Designer Perfume",
    "Body Mist",
    "Perfume Brand",
    "Luxury Lifestyle",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/fragrance",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Fragrance | Luxury Perfumes",
    description:
      "Experience timeless fragrances crafted for elegance, confidence, and sophistication.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/fragrance",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Fragrance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Fragrance",
    description:
      "Luxury fragrances inspired by elegance and innovation.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Signature Collection",
    description:
      "Timeless fragrances crafted with rare ingredients for everyday elegance.",
  },
  {
    title: "Luxury Collection",
    description:
      "Premium perfumes inspired by modern luxury and sophisticated lifestyles.",
  },
  {
    title: "Fresh Collection",
    description:
      "Light citrus, aquatic, and refreshing fragrances for daily wear.",
  },
  {
    title: "Oud Collection",
    description:
      "Rich oriental perfumes featuring premium oud and exotic woody notes.",
  },
  {
    title: "Floral Collection",
    description:
      "Elegant floral fragrances celebrating beauty, freshness, and femininity.",
  },
  {
    title: "Exclusive Edition",
    description:
      "Limited-edition luxury perfumes crafted for collectors and enthusiasts.",
  },
];

const fragranceNotes = [
  "Bergamot",
  "Rose",
  "Jasmine",
  "Lavender",
  "Vanilla",
  "Amber",
  "Sandalwood",
  "Oud",
  "Musk",
  "Patchouli",
  "Cedarwood",
  "White Flowers",
];

export default function FragrancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Fragrance
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Experience the art of luxury perfumery with signature fragrances
            crafted for modern lifestyles. Every scent is designed to inspire
            confidence, elegance, individuality, and timeless sophistication.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Fragrance Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Discover luxury perfumes crafted for every personality and
              occasion.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-fuchsia-500"
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

      {/* Notes */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Signature Fragrance Notes
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {fragranceNotes.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-fuchsia-500"
              >
                {note}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Experience */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12">

            <h2 className="text-4xl font-bold text-white">
              Crafted for Every Moment
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Whether you prefer fresh citrus notes, floral elegance, woody
              sophistication, or rich oriental blends, NextGrid Fragrance offers
              luxurious scents that complement every personality, season, and
              occasion while reflecting premium craftsmanship and timeless
              style.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Discover Your Signature Scent
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore exclusive perfume collections designed with premium
            ingredients, refined craftsmanship, and modern luxury to create
            unforgettable fragrance experiences.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/beauty"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Beauty
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
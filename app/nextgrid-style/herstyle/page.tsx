import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid HerStyle | Women's Fashion",

  description:
    "Discover NextGrid HerStyle, the premium women's fashion destination by NextGrid Style. Explore luxury apparel, elegant collections, designer dresses, smart fashion, sustainable clothing, accessories, and AI-powered fashion innovation.",

  keywords: [
    "NextGrid HerStyle",
    "Women's Fashion",
    "Ladies Fashion",
    "Women's Clothing",
    "Luxury Fashion",
    "Designer Dresses",
    "Fashion Technology",
    "Digital Fashion",
    "Smart Fashion",
    "Luxury Clothing",
    "AI Fashion",
    "Modern Fashion",
    "Sustainable Fashion",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/herstyle",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid HerStyle | Women's Fashion",
    description:
      "Elegant fashion collections inspired by confidence, beauty, and innovation.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/herstyle",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid HerStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid HerStyle",
    description:
      "Luxury women's fashion powered by innovation and modern design.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Dresses",
    description:
      "Elegant dresses crafted with premium fabrics for formal occasions, celebrations, and timeless sophistication.",
  },
  {
    title: "Casual Wear",
    description:
      "Comfortable everyday clothing designed with modern silhouettes and effortless style.",
  },
  {
    title: "Business Collection",
    description:
      "Professional office wear combining elegance, comfort, and confidence for modern careers.",
  },
  {
    title: "Evening Collection",
    description:
      "Exclusive evening gowns and party wear designed for unforgettable moments.",
  },
  {
    title: "Smart Fashion",
    description:
      "Fashion integrated with innovative textiles and future-ready technology.",
  },
  {
    title: "Seasonal Collections",
    description:
      "Fresh styles inspired by changing seasons, global trends, and sustainable fashion.",
  },
];

const highlights = [
  "Premium Fabrics",
  "Luxury Design",
  "Sustainable Fashion",
  "AI Fashion Innovation",
  "Digital Fashion",
  "Elegant Craftsmanship",
  "Modern Trends",
  "Exclusive Collections",
];

export default function HerStylePage() {
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
              HerStyle
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Experience premium women's fashion that blends elegance,
            innovation, sustainability, and modern luxury. Discover designer
            collections created for confident women who value exceptional style
            and timeless sophistication.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collection
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* Collections */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Women's Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Discover premium fashion designed for every occasion.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-pink-500"
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

      {/* Highlights */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Why Choose HerStyle?
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
            Fashion Designed for Every Woman
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            NextGrid HerStyle celebrates individuality through luxurious
            collections inspired by innovation, craftsmanship, sustainability,
            and the future of fashion technology.
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
              className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid WorkStyle | Formal & Corporate Wear",

  description:
    "Discover NextGrid WorkStyle, the premium formal and corporate wear collection by NextGrid Style. Designed for professionals, executives, entrepreneurs, and modern workplaces with timeless elegance, innovation, and exceptional craftsmanship.",

  keywords: [
    "NextGrid WorkStyle",
    "Formal Wear",
    "Corporate Wear",
    "Business Clothing",
    "Office Fashion",
    "Executive Wear",
    "Professional Clothing",
    "Business Suits",
    "Corporate Fashion",
    "Luxury Formal Wear",
    "Men's Business Wear",
    "Women's Business Wear",
    "NextGrid Style",
    "Fashion Technology",
  ],

  alternates: {
    canonical: "/nextgrid-style/workstyle",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid WorkStyle | Formal & Corporate Wear",
    description:
      "Premium formal fashion designed for professionals and modern workplaces.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/workstyle",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid WorkStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid WorkStyle",
    description:
      "Professional fashion for executives and modern workplaces.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Executive Suits",
    description:
      "Premium tailored business suits crafted with exceptional precision for executives and professionals.",
  },
  {
    title: "Business Casual",
    description:
      "Modern office essentials combining comfort, sophistication, and contemporary fashion.",
  },
  {
    title: "Corporate Dresses",
    description:
      "Elegant professional dresses designed for leadership, confidence, and everyday office wear.",
  },
  {
    title: "Blazers & Jackets",
    description:
      "Luxury blazers and formal jackets suitable for meetings, presentations, and business events.",
  },
  {
    title: "Shirts & Trousers",
    description:
      "Premium formal shirts and tailored trousers engineered for all-day comfort and style.",
  },
  {
    title: "Corporate Accessories",
    description:
      "Leather belts, ties, wallets, briefcases, and accessories that complete every professional wardrobe.",
  },
];

const features = [
  "Premium Tailoring",
  "Luxury Fabrics",
  "Wrinkle Resistant Materials",
  "Breathable Comfort",
  "Business Casual Collections",
  "Executive Styling",
  "Professional Accessories",
  "Modern Office Fashion",
];

export default function WorkStylePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-slate-700/50 px-5 py-2 text-sm font-semibold text-slate-200">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-slate-300 via-white to-slate-500 bg-clip-text text-transparent">
              WorkStyle
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Empower your professional journey with luxury formal wear designed
            for executives, entrepreneurs, business professionals, and modern
            workplaces. Every collection combines premium craftsmanship,
            innovative fabrics, and timeless elegance.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-200"
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
              Professional Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Designed to elevate confidence in every workplace.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-white"
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
            Why Choose WorkStyle?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-white"
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
            Dress for Success
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're leading meetings, building your business, or creating
            a lasting first impression, NextGrid WorkStyle delivers timeless
            formal fashion designed for today's professionals.
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
              className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
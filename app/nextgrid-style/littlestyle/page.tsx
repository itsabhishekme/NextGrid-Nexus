import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid LittleStyle | Kids Fashion",

  description:
    "Discover NextGrid LittleStyle, the premium kids fashion collection by NextGrid Style. Explore comfortable, colorful, durable, and stylish clothing designed for infants, toddlers, children, and young teens.",

  keywords: [
    "NextGrid LittleStyle",
    "Kids Fashion",
    "Children Clothing",
    "Kids Wear",
    "Baby Clothing",
    "Toddler Fashion",
    "Boys Fashion",
    "Girls Fashion",
    "School Wear",
    "Casual Kids Wear",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/littlestyle",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid LittleStyle | Kids Fashion",
    description:
      "Premium kids fashion designed for comfort, safety, creativity, and everyday adventures.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/littlestyle",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid LittleStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid LittleStyle",
    description:
      "Modern kids fashion powered by innovation and premium comfort.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Baby Essentials",
    description:
      "Soft organic clothing and comfortable everyday essentials designed for newborns and infants.",
  },
  {
    title: "Toddler Collection",
    description:
      "Colorful outfits with breathable fabrics that support active play and comfort.",
  },
  {
    title: "Boys Fashion",
    description:
      "Modern casual, formal, and seasonal collections created for young boys.",
  },
  {
    title: "Girls Fashion",
    description:
      "Stylish dresses, tops, skirts, jackets, and everyday wear for young girls.",
  },
  {
    title: "School Collection",
    description:
      "Comfortable uniforms, backpacks, and school-ready apparel built for everyday learning.",
  },
  {
    title: "Adventure Wear",
    description:
      "Durable outdoor clothing designed for travel, sports, and weekend adventures.",
  },
];

const features = [
  "100% Soft Fabrics",
  "Skin-Friendly Materials",
  "Eco-Friendly Manufacturing",
  "Premium Comfort",
  "Breathable Design",
  "Durable Stitching",
  "Modern Style",
  "Easy Care",
];

export default function LittleStylePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-orange-500/20 px-5 py-2 text-sm font-semibold text-orange-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              LittleStyle
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover premium kids fashion thoughtfully designed for growing
            families. Every collection combines comfort, durability, playful
            creativity, and premium craftsmanship to support every stage of
            childhood.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Explore Our Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Stylish clothing for every stage of childhood.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-orange-500"
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
            Why Parents Choose LittleStyle
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-orange-500"
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
            Designed for Every Adventure
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            From everyday essentials to special occasions, NextGrid LittleStyle
            delivers premium children's fashion with exceptional comfort,
            quality, safety, and timeless style.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/lifestyle"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Men's Fashion
            </Link>

            <Link
              href="/nextgrid-style/herstyle"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Women's Fashion
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
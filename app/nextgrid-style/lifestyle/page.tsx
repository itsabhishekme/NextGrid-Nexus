import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Lifestyle | Men's Fashion",

  description:
    "Explore NextGrid Lifestyle, the premium men's fashion destination by NextGrid Style. Discover luxury clothing, casual wear, formal wear, business attire, smart fashion, accessories, and AI-powered fashion innovation.",

  keywords: [
    "NextGrid Lifestyle",
    "Men's Fashion",
    "Luxury Menswear",
    "Formal Wear",
    "Casual Wear",
    "Business Clothing",
    "Premium Fashion",
    "Smart Clothing",
    "AI Fashion",
    "Digital Fashion",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/lifestyle",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Lifestyle | Men's Fashion",
    description:
      "Premium men's fashion designed for modern lifestyles with timeless elegance and innovation.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/lifestyle",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Lifestyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Lifestyle",
    description:
      "Premium men's fashion powered by innovation and timeless design.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Formal Collection",
    description:
      "Luxury suits, blazers, tuxedos, dress shirts, trousers, and premium office wear for modern professionals.",
  },
  {
    title: "Casual Collection",
    description:
      "Premium everyday fashion including polos, shirts, denim, chinos, hoodies, and relaxed essentials.",
  },
  {
    title: "Business Collection",
    description:
      "Executive clothing designed for leadership, meetings, conferences, and professional excellence.",
  },
  {
    title: "Luxury Collection",
    description:
      "Exclusive designer pieces crafted with premium fabrics and exceptional attention to detail.",
  },
  {
    title: "Travel Collection",
    description:
      "Wrinkle-resistant, lightweight apparel engineered for comfort and modern travel.",
  },
  {
    title: "Seasonal Collection",
    description:
      "Spring, Summer, Autumn, and Winter collections inspired by global fashion trends.",
  },
];

const features = [
  "Premium Fabrics",
  "Tailored Fit",
  "Luxury Craftsmanship",
  "Smart Fashion",
  "AI-Powered Design",
  "Sustainable Materials",
  "Modern Styling",
  "Global Fashion Trends",
];

export default function LifestylePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Lifestyle
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Experience premium men's fashion where timeless elegance meets
            modern innovation. NextGrid Lifestyle combines luxury
            craftsmanship, intelligent design, and advanced fashion
            technology to redefine contemporary menswear.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Shop Collection
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
              Explore Our Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Fashion collections created for every occasion and lifestyle.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500"
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
            Why Choose NextGrid Lifestyle?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-cyan-500"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* About */}

      <section>

        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12">

            <h2 className="text-4xl font-bold text-white">
              Designed for Modern Gentlemen
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              NextGrid Lifestyle delivers sophisticated menswear that blends
              timeless tailoring with contemporary innovation. From executive
              business attire and luxury formal wear to premium casual
              essentials, every collection is crafted using exceptional
              materials, intelligent design principles, and sustainable
              manufacturing practices.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our vision is to create fashion that empowers confidence,
              professionalism, and individuality while embracing the future
              through Artificial Intelligence, smart textiles, and digital
              fashion experiences.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Elevate Your Style
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Discover a premium fashion experience where luxury craftsmanship,
            intelligent innovation, and timeless design come together to
            redefine modern menswear.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/herstyle"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore HerStyle
            </Link>

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              View Collections
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
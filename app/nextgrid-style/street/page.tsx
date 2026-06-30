import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Street | Streetwear & Urban Fashion",

  description:
    "Discover NextGrid Street by NextGrid Style — premium streetwear inspired by urban culture, creativity, innovation, and modern fashion. Explore oversized essentials, sneakers, hoodies, cargo collections, and contemporary lifestyle apparel.",

  keywords: [
    "NextGrid Street",
    "Streetwear",
    "Urban Fashion",
    "Oversized Clothing",
    "Sneakers",
    "Hoodies",
    "Cargo Pants",
    "Graphic Tees",
    "Fashion Technology",
    "Luxury Streetwear",
    "Modern Fashion",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/street",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Street | Streetwear & Urban Fashion",
    description:
      "Modern streetwear powered by innovation, creativity, and premium craftsmanship.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/street",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Street",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Street",
    description:
      "Luxury streetwear designed for modern lifestyles.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Oversized Collection",
    description:
      "Relaxed silhouettes designed with premium fabrics for everyday comfort and style.",
  },
  {
    title: "Graphic Essentials",
    description:
      "Creative graphic tees and statement pieces inspired by contemporary urban culture.",
  },
  {
    title: "Premium Hoodies",
    description:
      "Luxury hoodies crafted for warmth, versatility, and modern street aesthetics.",
  },
  {
    title: "Cargo Collection",
    description:
      "Functional cargo pants and utility apparel blending performance with fashion.",
  },
  {
    title: "Sneaker Culture",
    description:
      "Street-inspired footwear engineered for comfort, durability, and bold expression.",
  },
  {
    title: "Urban Accessories",
    description:
      "Caps, backpacks, crossbody bags, and accessories designed to complete every look.",
  },
];

const features = [
  "Premium Cotton Fabrics",
  "Modern Street Design",
  "Oversized Silhouettes",
  "Luxury Comfort",
  "Sustainable Materials",
  "Limited Edition Drops",
  "Creative Graphic Prints",
  "Urban Lifestyle",
];

export default function StreetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-slate-900 to-black">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-zinc-800 px-5 py-2 text-sm font-semibold text-gray-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-gray-200 via-white to-gray-500 bg-clip-text text-transparent">
              Street
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Experience the evolution of streetwear with premium collections
            inspired by creativity, individuality, technology, and modern urban
            culture. Designed for those who define trends instead of following
            them.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
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
              Streetwear Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Explore contemporary fashion inspired by urban lifestyles and
              premium craftsmanship.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-white"
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
            Why NextGrid Street?
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

      {/* Lifestyle */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Urban Fashion Meets Innovation
              </h2>

              <p className="mt-8 leading-8 text-slate-300">
                NextGrid Street combines luxury craftsmanship, premium fabrics,
                modern technology, and creative expression to deliver fashion
                that adapts to today's fast-moving lifestyle.
              </p>

              <p className="mt-6 leading-8 text-slate-300">
                Every collection reflects individuality, comfort, durability,
                and premium quality while embracing sustainability and digital
                fashion innovation.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <h3 className="text-3xl font-bold text-white">
                Featured Categories
              </h3>

              <ul className="mt-8 space-y-5 text-slate-300">

                <li>• Premium Oversized Hoodies</li>
                <li>• Graphic T-Shirts</li>
                <li>• Urban Jackets</li>
                <li>• Utility Cargo Pants</li>
                <li>• Luxury Sneakers</li>
                <li>• Fashion Accessories</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Define Your Own Style
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Join the NextGrid Street community and discover premium streetwear
            collections designed for the next generation of creators,
            innovators, and trendsetters.
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
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
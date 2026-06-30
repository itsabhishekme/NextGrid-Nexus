import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Living | Home & Lifestyle",

  description:
    "Discover NextGrid Living, the premium Home & Lifestyle collection by NextGrid Style. Explore luxury home décor, smart home essentials, furniture, kitchen accessories, lighting, bedding, wellness products, and modern lifestyle solutions designed for contemporary living.",

  keywords: [
    "NextGrid Living",
    "Home & Lifestyle",
    "Home Decor",
    "Luxury Home",
    "Modern Furniture",
    "Interior Design",
    "Kitchen Essentials",
    "Bedroom Decor",
    "Living Room",
    "Smart Home",
    "Lifestyle Products",
    "Home Accessories",
    "Luxury Lifestyle",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/living",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Living | Home & Lifestyle",
    description:
      "Premium home décor and modern lifestyle products crafted for contemporary living.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/living",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Living",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Living",
    description:
      "Luxury home décor, furniture and modern lifestyle collections.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Living Room",
    description:
      "Modern sofas, coffee tables, entertainment units, premium décor and elegant interiors.",
  },
  {
    title: "Bedroom",
    description:
      "Luxury bedding, wardrobes, mattresses, lighting solutions and stylish furniture.",
  },
  {
    title: "Kitchen",
    description:
      "Premium cookware, smart kitchen appliances, dining accessories and storage solutions.",
  },
  {
    title: "Home Office",
    description:
      "Professional desks, ergonomic chairs, lighting and productivity accessories.",
  },
  {
    title: "Smart Living",
    description:
      "Connected home devices, automation, smart lighting and intelligent living solutions.",
  },
  {
    title: "Wellness",
    description:
      "Lifestyle products designed for relaxation, comfort, mindfulness and healthy living.",
  },
];

const features = [
  "Luxury Home Décor",
  "Modern Furniture",
  "Smart Home Solutions",
  "Interior Design",
  "Premium Materials",
  "Sustainable Products",
  "Minimalist Design",
  "Lifestyle Innovation",
];

export default function LivingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              Living
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Create exceptional living spaces with premium home décor, elegant
            furniture, smart home technology, and thoughtfully designed
            lifestyle products. NextGrid Living combines innovation,
            functionality, and timeless aesthetics for modern homes.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Home & Lifestyle Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Beautifully designed collections for every room and every lifestyle.
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
            Why Choose NextGrid Living?
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

      {/* Inspiration */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Designed for Modern Living
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Every NextGrid Living collection is created to balance beauty,
                comfort, sustainability, and intelligent functionality. From
                elegant interiors to connected smart home experiences, we help
                transform everyday spaces into inspiring environments.
              </p>

              <ul className="mt-10 space-y-4 text-slate-300">

                <li>✓ Premium craftsmanship and quality materials</li>

                <li>✓ Contemporary minimalist design</li>

                <li>✓ Sustainable manufacturing practices</li>

                <li>✓ Smart home integration</li>

                <li>✓ Timeless elegance for every room</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <h3 className="text-3xl font-bold text-white">
                Lifestyle Excellence
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                Discover curated collections that redefine everyday living
                through premium design, innovative technology, and exceptional
                comfort.
              </p>

              <Link
                href="/gallery"
                className="mt-10 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                View Inspiration Gallery
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Transform Your Living Space
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Experience the future of modern living with premium furniture,
            sophisticated décor, intelligent home technology, and thoughtfully
            designed lifestyle collections from NextGrid Living.
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
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
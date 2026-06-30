import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid EcoWear | Sustainable Fashion",

  description:
    "Discover NextGrid EcoWear, the sustainable fashion collection by NextGrid Style. Explore eco-friendly clothing, recycled materials, ethical manufacturing, smart textiles, and environmentally responsible fashion for a greener future.",

  keywords: [
    "NextGrid EcoWear",
    "EcoWear",
    "Sustainable Fashion",
    "Eco Fashion",
    "Green Fashion",
    "Ethical Fashion",
    "Organic Clothing",
    "Recycled Fashion",
    "Sustainable Apparel",
    "Eco Friendly Clothing",
    "Fashion Technology",
    "Smart Fabrics",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/ecowear",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid EcoWear | Sustainable Fashion",
    description:
      "Eco-conscious fashion powered by innovation, sustainability, and responsible manufacturing.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/ecowear",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid EcoWear",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid EcoWear",
    description:
      "Sustainable fashion for a better tomorrow.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Organic Cotton",
    description:
      "Premium apparel crafted using certified organic cotton with exceptional comfort and durability.",
  },
  {
    title: "Recycled Materials",
    description:
      "Fashion collections developed from recycled fabrics to reduce environmental impact.",
  },
  {
    title: "Smart Sustainable Textiles",
    description:
      "Innovative fabrics combining advanced textile technology with environmental responsibility.",
  },
  {
    title: "Eco Essentials",
    description:
      "Everyday sustainable clothing designed for modern lifestyles and long-lasting quality.",
  },
  {
    title: "Outdoor Eco Collection",
    description:
      "Performance apparel created using renewable and recycled materials for outdoor adventures.",
  },
  {
    title: "Luxury Sustainable Fashion",
    description:
      "Elegant premium garments proving sustainability and luxury can exist together.",
  },
];

const sustainability = [
  "Ethically Sourced Materials",
  "Organic Cotton",
  "Recycled Polyester",
  "Low Water Consumption",
  "Renewable Energy Production",
  "Carbon Footprint Reduction",
  "Plastic-Free Packaging",
  "Circular Fashion",
  "Responsible Manufacturing",
  "Smart Textile Innovation",
  "Eco-Friendly Dyes",
  "Global Sustainability Standards",
];

export default function EcoWearPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-sm font-semibold text-green-300">
            Sustainable Fashion
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
              EcoWear
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Fashion can inspire positive change. NextGrid EcoWear combines
            sustainability, innovative textiles, ethical sourcing, and premium
            craftsmanship to create collections that care for both people and
            the planet.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collection
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
              Sustainable Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Thoughtfully designed apparel supporting a greener future.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-green-500"
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

      {/* Sustainability */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Sustainability Commitment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400">
            Every NextGrid EcoWear collection is developed with a commitment to
            reducing environmental impact while delivering exceptional quality,
            comfort, and innovation.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {sustainability.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-green-500"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Vision */}

      <section>

        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12">

            <h2 className="text-center text-4xl font-bold text-white">
              Fashion with Purpose
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-slate-300">
              Our vision is to build a future where sustainability, innovation,
              and premium fashion coexist. Through responsible sourcing,
              eco-friendly manufacturing, and smart textile technologies,
              NextGrid EcoWear is shaping the next generation of global fashion.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Build a Greener Tomorrow
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Join NextGrid EcoWear in creating sustainable fashion experiences
            powered by innovation, ethical craftsmanship, and environmental
            responsibility.
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
              className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
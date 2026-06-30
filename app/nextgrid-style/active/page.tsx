import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Active | Sportswear & Athleisure",

  description:
    "Discover NextGrid Active, the performance sportswear and athleisure collection by NextGrid Style. Explore innovative activewear, fitness apparel, smart fabrics, and modern lifestyle essentials engineered for movement, comfort, and performance.",

  keywords: [
    "NextGrid Active",
    "Sportswear",
    "Athleisure",
    "Activewear",
    "Gym Wear",
    "Running Apparel",
    "Fitness Clothing",
    "Performance Wear",
    "Workout Clothes",
    "Training Apparel",
    "Smart Sportswear",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/active",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Active | Sportswear & Athleisure",
    description:
      "Performance-driven sportswear designed for athletes, fitness enthusiasts, and everyday movement.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/active",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Active",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Active",
    description:
      "Performance apparel powered by innovation and modern design.",
    images: ["/images/hero.jpg"],
  },
};

const categories = [
  {
    title: "Running",
    description:
      "Lightweight apparel engineered for speed, endurance, and all-weather performance.",
  },
  {
    title: "Training",
    description:
      "Flexible and breathable workout clothing designed for strength and conditioning.",
  },
  {
    title: "Yoga",
    description:
      "Stretchable, soft, and sustainable activewear for maximum comfort and movement.",
  },
  {
    title: "Outdoor",
    description:
      "Performance jackets, pants, and gear for hiking, trekking, and adventure.",
  },
  {
    title: "Lifestyle",
    description:
      "Modern athleisure collections blending comfort with contemporary fashion.",
  },
  {
    title: "Smart Sportswear",
    description:
      "Technology-integrated apparel featuring smart fabrics and performance innovation.",
  },
];

const highlights = [
  "Moisture-Wicking Fabrics",
  "Breathable Materials",
  "Stretch Performance",
  "Lightweight Construction",
  "Sustainable Manufacturing",
  "Smart Textile Innovation",
  "Premium Comfort",
  "Modern Athletic Design",
];

export default function ActivePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold text-red-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Active
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Elevate your performance with premium sportswear and athleisure
            collections designed for athletes, professionals, and active
            lifestyles. Combining comfort, innovation, and fashion technology,
            NextGrid Active delivers apparel engineered for every movement.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
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

      {/* Categories */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Sportswear Categories
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Premium performance apparel built for every lifestyle.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-red-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
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
            Why Choose NextGrid Active?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center text-white transition hover:border-red-500"
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
            Move Without Limits
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            NextGrid Active combines advanced materials, innovative design,
            smart textiles, and modern craftsmanship to create sportswear that
            performs as hard as you do.
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
              className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
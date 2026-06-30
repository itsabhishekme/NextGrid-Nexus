import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Time | Luxury Watches & Smart Wearables",

  description:
    "Discover NextGrid Time, the premium collection of luxury watches, smart wearables, fitness trackers, and intelligent timepieces. Experience timeless craftsmanship combined with cutting-edge wearable technology.",

  keywords: [
    "NextGrid Time",
    "Luxury Watches",
    "Smart Watches",
    "Wearables",
    "Fitness Tracker",
    "Premium Watches",
    "Digital Watches",
    "Luxury Timepieces",
    "Fashion Technology",
    "Wearable Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/time",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Time | Luxury Watches & Smart Wearables",
    description:
      "Premium watches and smart wearable technology designed for modern lifestyles.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/time",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Time",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Time",
    description:
      "Luxury watches powered by timeless craftsmanship and modern innovation.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Watches",
    description:
      "Premium handcrafted watches inspired by timeless elegance and precision engineering.",
  },
  {
    title: "Smart Watches",
    description:
      "Advanced smart wearables with health tracking, connectivity, and intelligent features.",
  },
  {
    title: "Fitness Wearables",
    description:
      "Track your workouts, heart rate, sleep, calories, and wellness with precision.",
  },
  {
    title: "Executive Collection",
    description:
      "Sophisticated business timepieces crafted for professionals and executives.",
  },
  {
    title: "Sports Collection",
    description:
      "Durable performance watches engineered for adventure, sports, and outdoor activities.",
  },
  {
    title: "Luxury Accessories",
    description:
      "Premium watch straps, charging accessories, travel cases, and exclusive add-ons.",
  },
];

const technologies = [
  "Heart Rate Monitoring",
  "Sleep Tracking",
  "GPS Navigation",
  "Wireless Charging",
  "AMOLED Display",
  "Bluetooth Connectivity",
  "AI Health Analytics",
  "Water Resistant Design",
  "Premium Stainless Steel",
  "Sapphire Crystal Glass",
  "Long Battery Life",
  "Smart Notifications",
];

const features = [
  {
    title: "Luxury Design",
    description:
      "Minimalist aesthetics blended with exceptional craftsmanship and premium materials.",
  },
  {
    title: "Smart Technology",
    description:
      "Next-generation wearable intelligence for health, productivity, and everyday convenience.",
  },
  {
    title: "Performance",
    description:
      "Reliable engineering designed for active lifestyles and demanding environments.",
  },
  {
    title: "Innovation",
    description:
      "Artificial Intelligence and wearable technology working together for a smarter future.",
  },
];

export default function TimePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
            NextGrid Style
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            NextGrid
            <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Time
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover premium luxury watches and intelligent wearable technology
            designed for modern lifestyles. Combining timeless craftsmanship,
            precision engineering, and smart innovation, NextGrid Time
            redefines how you experience every moment.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Watch Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Premium collections crafted for every lifestyle.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-amber-500"
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

      {/* Technology */}

      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold text-white">
            Intelligent Features
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-white transition hover:border-amber-500"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Why Choose NextGrid Time?
            </h2>

            <p className="mt-6 text-slate-400">
              Combining luxury craftsmanship with intelligent wearable innovation.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-amber-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Every Second Matters
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Experience luxury, precision, and intelligent innovation through
            premium watches and wearable technology designed for the future.
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
              className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
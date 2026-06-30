import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "NextGrid Vision | Premium Eyewear",

  description:
    "Discover NextGrid Vision, the premium eyewear collection by NextGrid Style featuring luxury sunglasses, prescription eyewear, blue light glasses, smart eyewear, and innovative optical technology designed for modern lifestyles.",

  keywords: [
    "NextGrid Vision",
    "Eyewear",
    "Luxury Eyewear",
    "Sunglasses",
    "Optical Glasses",
    "Prescription Glasses",
    "Blue Light Glasses",
    "Smart Eyewear",
    "Fashion Eyewear",
    "Premium Sunglasses",
    "Designer Eyewear",
    "Fashion Technology",
    "NextGrid Style",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/nextgrid-style/vision",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Vision | Premium Eyewear",
    description:
      "Luxury eyewear engineered with innovation, comfort, and timeless design.",
    url: "https://nextgrid-nexus.vercel.app/nextgrid-style/vision",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Vision",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Vision",
    description:
      "Premium eyewear combining fashion, innovation, and smart technology.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "Luxury Sunglasses",
    description:
      "Premium designer sunglasses offering exceptional UV protection with modern styling for every occasion.",
  },
  {
    title: "Optical Eyewear",
    description:
      "Elegant prescription frames engineered for superior comfort, precision, and everyday wear.",
  },
  {
    title: "Blue Light Collection",
    description:
      "Protect your eyes during long hours of digital work with advanced blue light filtering technology.",
  },
  {
    title: "Smart Eyewear",
    description:
      "Next-generation wearable eyewear integrating intelligent technology into everyday fashion.",
  },
  {
    title: "Performance Eyewear",
    description:
      "Sports and outdoor eyewear designed for athletes, adventurers, and active lifestyles.",
  },
  {
    title: "Luxury Limited Edition",
    description:
      "Exclusive handcrafted collections featuring premium materials and timeless craftsmanship.",
  },
];

const features = [
  "Premium Optical Lenses",
  "100% UV Protection",
  "Blue Light Filtering",
  "Lightweight Frames",
  "Scratch Resistant Coating",
  "Anti-Reflective Technology",
  "Smart Wearable Integration",
  "Luxury Craftsmanship",
];

const technologies = [
  "Polarized Lens Technology",
  "Photochromic Lenses",
  "Blue Light Protection",
  "Titanium Frames",
  "Carbon Fiber Design",
  "Flexible Hinges",
  "AI Smart Eyewear",
  "Sustainable Materials",
];

export default function VisionPage() {
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
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Vision
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover luxury eyewear designed for modern lifestyles. NextGrid
            Vision combines innovative lens technology, premium craftsmanship,
            fashion-forward aesthetics, and intelligent wearable experiences to
            redefine the future of eyewear.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
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
              Eyewear Collections
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Designed for style, engineered for performance.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-cyan-500"
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
            Premium Features
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center font-medium text-white transition hover:border-cyan-500"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Optical Technologies
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Innovation that enhances comfort, protection, and everyday vision.
            </p>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            See the Future Clearly
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Experience premium eyewear that blends intelligent technology,
            exceptional comfort, and sophisticated design to support every
            lifestyle and every vision.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/nextgrid-style/time"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Time
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Gallery",

  description:
    "Explore the NextGrid Nexus Gallery showcasing AI-powered fashion, digital fashion, smart textiles, wearable technology, luxury collections, sustainable innovation, and immersive fashion experiences.",

  keywords: [
    "Gallery",
    "Fashion Gallery",
    "AI Fashion",
    "Digital Fashion",
    "Luxury Fashion",
    "Fashion Photography",
    "Smart Fabrics",
    "Wearable Technology",
    "Virtual Fashion",
    "Fashion Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/gallery",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gallery | NextGrid Nexus",
    description:
      "Explore the visual world of NextGrid Nexus and the future of Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/gallery",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | NextGrid Nexus",
    description:
      "Explore AI-powered fashion experiences and premium collections.",
    images: ["/images/hero.jpg"],
  },
};

const galleryItems = [
  {
    title: "AI Fashion Design",
    category: "Artificial Intelligence",
    image: "/images/gallery/ai-fashion.jpg",
  },
  {
    title: "Luxury Fashion Collection",
    category: "Luxury",
    image: "/images/gallery/luxury.jpg",
  },
  {
    title: "Smart Fabrics",
    category: "Technology",
    image: "/images/gallery/smart-fabric.jpg",
  },
  {
    title: "Wearable Technology",
    category: "Innovation",
    image: "/images/gallery/wearable.jpg",
  },
  {
    title: "Digital Fashion",
    category: "Virtual",
    image: "/images/gallery/digital-fashion.jpg",
  },
  {
    title: "Future Fashion",
    category: "Innovation",
    image: "/images/gallery/future-fashion.jpg",
  },
  {
    title: "Sustainable Collection",
    category: "Eco Fashion",
    image: "/images/gallery/sustainable.jpg",
  },
  {
    title: "Streetwear",
    category: "Urban",
    image: "/images/gallery/streetwear.jpg",
  },
  {
    title: "Accessories",
    category: "Luxury",
    image: "/images/gallery/accessories.jpg",
  },
];

const categories = [
  "Artificial Intelligence",
  "Luxury Fashion",
  "Digital Fashion",
  "Smart Fabrics",
  "Wearable Technology",
  "3D Fashion",
  "Virtual Fashion",
  "Accessories",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            Fashion
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Inspiration Gallery
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Explore inspiring collections showcasing Artificial Intelligence,
            Digital Fashion, Smart Fabrics, Wearable Technology, immersive
            experiences, sustainability, and luxury innovation.
          </p>

        </div>

      </section>

      {/* Categories */}

      <section>

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6 py-6">

          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:text-white"
            >
              {category}
            </span>
          ))}

        </div>

      </section>

      {/* Gallery Grid */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-8">

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {item.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-white">
                    {item.title}
                  </h2>

                  <Link
                    href="/collection"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4"
                  >
                    View Collection →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Create the Future of Fashion
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore intelligent fashion collections, discover innovative
            technologies, and experience how Artificial Intelligence is shaping
            the next generation of global fashion.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collections
            </Link>

            <Link
              href="/technology"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Technology
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
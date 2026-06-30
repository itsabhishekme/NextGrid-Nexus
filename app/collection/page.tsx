import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Collection",

  description:
    "Discover the premium collections from NextGrid Nexus including men's fashion, women's fashion, kids fashion, footwear, accessories, sustainable fashion, beauty, luxury lifestyle, and AI-powered fashion innovation.",

  keywords: [
    "Fashion Collection",
    "NextGrid Collection",
    "Men's Fashion",
    "Women's Fashion",
    "Kids Fashion",
    "Luxury Fashion",
    "Digital Fashion",
    "AI Fashion",
    "Footwear",
    "Accessories",
    "Beauty",
    "Sustainable Fashion",
    "Lifestyle",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/collection",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Collection | NextGrid Nexus",
    description:
      "Explore premium fashion collections powered by technology and innovation.",
    url: "https://nextgrid-nexus.vercel.app/collection",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Collections",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Collection | NextGrid Nexus",
    description:
      "Explore premium collections from NextGrid Nexus.",
    images: ["/images/hero.jpg"],
  },
};

const collections = [
  {
    title: "NextGrid Lifestyle",
    category: "Men's Fashion",
    description:
      "Premium menswear combining timeless tailoring with modern technology and luxury craftsmanship.",
    href: "/brands/nextgrid-lifestyle",
  },
  {
    title: "NextGrid HerStyle",
    category: "Women's Fashion",
    description:
      "Elegant collections inspired by confidence, individuality, and contemporary fashion.",
    href: "/brands/nextgrid-herstyle",
  },
  {
    title: "NextGrid LittleStyle",
    category: "Kids Fashion",
    description:
      "Comfortable, colorful, and durable clothing designed for children of every age.",
    href: "/brands/nextgrid-littlestyle",
  },
  {
    title: "NextGrid SoleStyle",
    category: "Footwear",
    description:
      "Luxury sneakers, formal shoes, sandals, and everyday footwear crafted for comfort.",
    href: "/brands/nextgrid-solestyle",
  },
  {
    title: "NextGrid Spark",
    category: "Accessories",
    description:
      "Luxury handbags, wallets, belts, jewelry, sunglasses, and fashion accessories.",
    href: "/brands/nextgrid-spark",
  },
  {
    title: "NextGrid EcoWear",
    category: "Sustainable Fashion",
    description:
      "Eco-friendly apparel made using ethical sourcing and environmentally responsible materials.",
    href: "/brands/nextgrid-ecowear",
  },
  {
    title: "NextGrid Active",
    category: "Sportswear",
    description:
      "Performance-driven activewear and athleisure for modern lifestyles.",
    href: "/brands/nextgrid-active",
  },
  {
    title: "NextGrid Beauty",
    category: "Beauty",
    description:
      "Premium skincare, cosmetics, beauty essentials, and personal care products.",
    href: "/brands/nextgrid-beauty",
  },
  {
    title: "NextGrid Fragrance",
    category: "Luxury Perfumes",
    description:
      "Exclusive fragrances crafted for timeless elegance and sophistication.",
    href: "/brands/nextgrid-fragrance",
  },
  {
    title: "NextGrid Living",
    category: "Home & Lifestyle",
    description:
      "Modern home décor, premium essentials, and luxury lifestyle collections.",
    href: "/brands/nextgrid-living",
  },
  {
    title: "NextGrid WorkStyle",
    category: "Corporate Wear",
    description:
      "Professional business attire designed for executives and modern workplaces.",
    href: "/brands/nextgrid-workstyle",
  },
  {
    title: "NextGrid Time",
    category: "Watches & Wearables",
    description:
      "Luxury watches and intelligent wearable technology for connected lifestyles.",
    href: "/brands/nextgrid-time",
  },
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            Explore Our
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fashion Collections
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Discover a complete ecosystem of premium fashion, luxury lifestyle,
            wearable technology, beauty, accessories, and AI-powered innovation
            under the NextGrid Nexus platform.
          </p>

        </div>

      </section>

      {/* Collections */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {collections.map((collection) => (
              <article
                key={collection.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
              >

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                  {collection.category}
                </span>

                <h2 className="mt-6 text-3xl font-bold text-white">
                  {collection.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  {collection.description}
                </p>

                <Link
                  href={collection.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4"
                >
                  Explore Collection →
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Fashion Without Limits
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore intelligent fashion collections built with Artificial
            Intelligence, sustainability, digital innovation, and modern luxury
            to redefine the future of global fashion.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/technology"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Technology
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

    </main>
  );
}
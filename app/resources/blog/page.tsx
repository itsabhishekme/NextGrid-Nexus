import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Explore the official NextGrid Nexus Blog featuring articles on Fashion Technology, Artificial Intelligence, Smart Fabrics, Wearable Technology, Sustainability, Digital Fashion, and Future Innovation.",

  keywords: [
    "NextGrid Nexus Blog",
    "Fashion Technology",
    "AI Fashion",
    "Artificial Intelligence",
    "Smart Fabrics",
    "Wearable Technology",
    "Digital Fashion",
    "Fashion Innovation",
    "Future Fashion",
    "Sustainable Fashion",
    "Fashion Research",
    "Technology Blog",
  ],

  alternates: {
    canonical: "/resources/blog",
  },

  openGraph: {
    title: "NextGrid Nexus Blog",
    description:
      "Latest insights, research, and innovations from NextGrid Nexus.",
    url: "https://nextgrid-nexus.vercel.app/resources/blog",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Nexus Blog",
    description:
      "Explore Fashion Technology, AI, Sustainability and Innovation.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const featuredPosts = [
  {
    title: "Artificial Intelligence is Transforming Fashion",
    category: "Artificial Intelligence",
    date: "June 2026",
    description:
      "Discover how AI is revolutionizing fashion design, manufacturing, personalization, and customer experiences.",
  },
  {
    title: "The Rise of Smart Fabrics",
    category: "Smart Textiles",
    date: "June 2026",
    description:
      "Explore innovative textiles capable of sensing, adapting, and enhancing everyday clothing.",
  },
  {
    title: "Wearable Technology Beyond Smartwatches",
    category: "Wearables",
    date: "June 2026",
    description:
      "From biometric clothing to intelligent accessories, wearable technology is shaping tomorrow's lifestyle.",
  },
  {
    title: "Sustainable Fashion Through Innovation",
    category: "Sustainability",
    date: "June 2026",
    description:
      "How digital technologies are reducing waste while creating environmentally responsible fashion.",
  },
  {
    title: "The Future of Digital Fashion",
    category: "Digital Fashion",
    date: "June 2026",
    description:
      "Virtual garments, digital collections, NFTs, and immersive fashion experiences are redefining creativity.",
  },
  {
    title: "Augmented Reality Shopping Experiences",
    category: "AR",
    date: "June 2026",
    description:
      "See how AR enables virtual try-ons and interactive shopping journeys for modern consumers.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="border-b bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            NextGrid Resources
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            NextGrid Nexus Blog
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Stay informed with expert insights, technology trends,
            sustainability, AI-powered fashion, wearable innovation,
            digital experiences, and the future of Fashion Technology.
          </p>

        </div>
      </section>

      {/* Featured Posts */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Articles
          </h2>

          <p className="mt-4 text-slate-600">
            Explore our latest insights and industry perspectives.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                {post.category}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {post.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {post.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  {post.date}
                </span>

                <Link
                  href="#"
                  className="font-semibold text-violet-600 hover:text-violet-700"
                >
                  Read More →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* Categories */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Explore Categories
            </h2>

            <p className="mt-5 text-slate-400">
              Browse content across our innovation ecosystem.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "Artificial Intelligence",
              "Fashion Technology",
              "Smart Fabrics",
              "Wearable Technology",
              "Digital Fashion",
              "Sustainability",
              "Augmented Reality",
              "Virtual Reality",
              "Innovation",
              "Research",
            ].map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {category}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Stay Connected
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Subscribe to receive the latest articles, research updates,
          product innovations, technology news, and exclusive insights
          from NextGrid Nexus.
        </p>

        <button className="mt-10 rounded-xl bg-violet-600 px-10 py-4 font-bold text-white transition hover:bg-violet-700">
          Subscribe to Newsletter
        </button>

      </section>

    </main>
  );
}
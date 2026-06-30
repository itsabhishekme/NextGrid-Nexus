import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Research",

  description:
    "Explore NextGrid Nexus Research covering Artificial Intelligence, Fashion Technology, Smart Fabrics, Wearable Technology, Sustainability, Digital Fashion, Computer Vision, Data Science, and emerging innovations.",

  keywords: [
    "Research",
    "NextGrid Nexus",
    "Artificial Intelligence",
    "Fashion Technology",
    "Smart Fabrics",
    "Wearable Technology",
    "Digital Fashion",
    "Machine Learning",
    "Computer Vision",
    "Sustainability",
    "Innovation",
    "Technology Research",
    "AI Research",
    "Future Fashion",
    "Scientific Research",
  ],

  alternates: {
    canonical: "/resources/research",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Research | NextGrid Nexus",
    description:
      "Discover research initiatives shaping the future of Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/resources/research",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Research",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Research | NextGrid Nexus",
    description:
      "Research in Artificial Intelligence, Fashion Technology, and Digital Innovation.",
    images: ["/images/hero.jpg"],
  },
};

const researchAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems for fashion recommendation, automation, personalization, and predictive analytics.",
  },
  {
    title: "Computer Vision",
    description:
      "Image recognition, garment classification, virtual try-on experiences, and intelligent visual search.",
  },
  {
    title: "Smart Fabrics",
    description:
      "Research into intelligent textiles, embedded sensors, responsive materials, and connected clothing.",
  },
  {
    title: "Wearable Technology",
    description:
      "Designing wearable devices that combine health monitoring, communication, and premium fashion.",
  },
  {
    title: "Digital Fashion",
    description:
      "Virtual garments, immersive experiences, AI-generated designs, and next-generation digital commerce.",
  },
  {
    title: "Sustainability",
    description:
      "Reducing environmental impact through ethical sourcing, intelligent manufacturing, and circular fashion.",
  },
];

const publications = [
  {
    year: "2026",
    title: "AI-Driven Fashion Personalization",
    category: "Artificial Intelligence",
  },
  {
    year: "2026",
    title: "Future of Smart Textile Systems",
    category: "Smart Fabrics",
  },
  {
    year: "2025",
    title: "Wearable Technology for Connected Fashion",
    category: "Wearables",
  },
  {
    year: "2025",
    title: "Digital Fashion & Virtual Commerce",
    category: "Digital Fashion",
  },
];

const statistics = [
  {
    value: "150+",
    title: "Research Papers",
  },
  {
    value: "45+",
    title: "Research Partners",
  },
  {
    value: "30+",
    title: "Innovation Labs",
  },
  {
    value: "25+",
    title: "Countries",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Innovation Through Research
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Research
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Advancing Fashion Technology through Artificial Intelligence,
            Smart Fabrics, Wearable Technology, Computer Vision,
            Sustainability, and Digital Innovation.
          </p>

        </div>
      </section>

      {/* Statistics */}

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">

          {statistics.map((stat) => (
            <div
              key={stat.title}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-violet-600">
                {stat.value}
              </h2>

              <p className="mt-4 text-slate-600">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Research Areas */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Research Areas
          </h2>

          <p className="mt-5 text-slate-600">
            Exploring technologies shaping the future of intelligent fashion.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {researchAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {area.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {area.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* Publications */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Recent Publications
            </h2>

            <p className="mt-5 text-slate-400">
              Latest research and technical insights from NextGrid Nexus.
            </p>

          </div>

          <div className="mt-16 space-y-8">

            {publications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition hover:border-violet-500"
              >

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>

                    <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                      {paper.category}
                    </span>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {paper.title}
                    </h3>

                  </div>

                  <span className="text-lg font-semibold text-cyan-400">
                    {paper.year}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Collaboration */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 p-12 text-center">

          <h2 className="text-5xl font-bold text-white">
            Collaborate With Our Research Team
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            We actively collaborate with universities, research institutions,
            startups, and technology companies to accelerate innovation across
            Artificial Intelligence, Fashion Technology, Sustainability,
            Wearables, and Digital Commerce.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Partner With Us
            </Link>

            <Link
              href="/resources/innovation"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Explore Innovation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
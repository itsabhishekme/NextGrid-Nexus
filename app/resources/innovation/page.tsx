import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Innovation",

  description:
    "Discover how NextGrid Nexus is driving innovation through Artificial Intelligence, Fashion Technology, Smart Fabrics, Wearable Technology, Digital Fashion, Sustainability, and immersive digital experiences.",

  keywords: [
    "Innovation",
    "Fashion Technology",
    "Artificial Intelligence",
    "AI Fashion",
    "Smart Fabrics",
    "Wearable Technology",
    "Digital Fashion",
    "Augmented Reality",
    "Virtual Reality",
    "3D Fashion",
    "Sustainability",
    "Research",
    "Technology Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/resources/innovation",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Innovation | NextGrid Nexus",
    description:
      "Explore how NextGrid Nexus is shaping the future of Fashion Technology through innovation.",
    url: "https://nextgrid-nexus.vercel.app/resources/innovation",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Innovation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Innovation | NextGrid Nexus",
    description:
      "Innovation powering the future of Fashion Technology.",
    images: ["/images/hero.jpg"],
  },
};

const innovationAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "Intelligent recommendation engines, predictive analytics, personalization, and AI-assisted fashion design.",
  },
  {
    title: "Smart Fabrics",
    description:
      "Advanced textile innovation with embedded sensors, adaptive materials, and connected experiences.",
  },
  {
    title: "Wearable Technology",
    description:
      "Fashion meets technology through intelligent wearables, biometric monitoring, and connected accessories.",
  },
  {
    title: "Digital Fashion",
    description:
      "Virtual fashion collections, digital garments, immersive experiences, and next-generation commerce.",
  },
  {
    title: "Augmented & Virtual Reality",
    description:
      "Interactive virtual try-ons, immersive shopping, and engaging customer experiences.",
  },
  {
    title: "Sustainable Innovation",
    description:
      "Eco-conscious production powered by data, AI, automation, and responsible manufacturing.",
  },
];

const roadmap = [
  {
    year: "2026",
    title: "AI Personalization",
    description:
      "Launching intelligent personalization and recommendation experiences.",
  },
  {
    year: "2027",
    title: "Smart Textile Platform",
    description:
      "Introducing connected smart fabrics for health, fitness, and lifestyle.",
  },
  {
    year: "2028",
    title: "Digital Fashion Ecosystem",
    description:
      "Expanding immersive digital fashion experiences powered by AI.",
  },
  {
    year: "2029",
    title: "Global Innovation Network",
    description:
      "Collaborating with researchers, startups, and technology partners worldwide.",
  },
];

const stats = [
  {
    value: "250+",
    title: "Innovation Projects",
  },
  {
    value: "45+",
    title: "Research Partners",
  },
  {
    value: "120+",
    title: "Technology Integrations",
  },
  {
    value: "35+",
    title: "Countries",
  },
];

export default function InnovationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Future Technology
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Innovation
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Innovation is at the heart of NextGrid Nexus. We combine
            Artificial Intelligence, Fashion Technology, Smart Textiles,
            Digital Commerce, and Sustainability to shape the future of fashion.
          </p>

        </div>
      </section>

      {/* Statistics */}

      <section className="border-b bg-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">

          {stats.map((stat) => (
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

      {/* Innovation Areas */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Innovation Areas
          </h2>

          <p className="mt-5 text-slate-600">
            Transforming industries through advanced technologies.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {innovationAreas.map((area) => (
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

      {/* Roadmap */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Innovation Roadmap
            </h2>

            <p className="mt-5 text-slate-400">
              Our long-term vision for the future of Fashion Technology.
            </p>

          </div>

          <div className="mt-16 space-y-8">

            {roadmap.map((item) => (
              <div
                key={item.year}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition hover:border-violet-500"
              >

                <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                  {item.year}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Collaboration */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 p-12 text-center">

          <h2 className="text-5xl font-bold text-white">
            Partner With NextGrid Nexus
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            We collaborate with universities, startups, research
            organizations, enterprises, and technology innovators to build
            intelligent, sustainable, and future-ready Fashion Technology
            solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/resources/research"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Explore Research
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
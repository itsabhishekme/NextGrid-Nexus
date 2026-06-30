import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "About",

  description:
    "Learn about NextGrid Nexus, a next-generation Fashion Technology platform driving innovation through Artificial Intelligence, Smart Fabrics, Wearable Technology, Digital Fashion, Sustainability, and immersive digital experiences.",

  keywords: [
    "About NextGrid Nexus",
    "NextGrid",
    "Fashion Technology",
    "Artificial Intelligence",
    "Digital Fashion",
    "Smart Fabrics",
    "Wearable Technology",
    "Innovation",
    "Luxury Fashion",
    "Future Fashion",
    "Sustainable Fashion",
    "AI Fashion",
  ],

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About | NextGrid Nexus",
    description:
      "Discover the vision, mission, innovation, and future of NextGrid Nexus.",
    url: "https://nextgrid-nexus.vercel.app/about",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "About NextGrid Nexus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About | NextGrid Nexus",
    description:
      "The future of Fashion Technology powered by Artificial Intelligence.",
    images: ["/images/hero.jpg"],
  },
};

const pillars = [
  {
    title: "Innovation",
    description:
      "We combine creativity and emerging technologies to redefine how fashion is designed, manufactured, marketed, and experienced.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI powers intelligent recommendations, digital design, automation, analytics, and personalized customer experiences.",
  },
  {
    title: "Sustainability",
    description:
      "We believe the future of fashion must be environmentally responsible through ethical sourcing, smart production, and circular innovation.",
  },
  {
    title: "Digital Transformation",
    description:
      "From virtual fashion to immersive commerce, we embrace technologies shaping the future of retail.",
  },
];

const technologies = [
  "Artificial Intelligence",
  "Smart Fabrics",
  "Wearable Technology",
  "Augmented Reality",
  "Virtual Reality",
  "3D Fashion Design",
  "Digital Commerce",
  "Cloud Computing",
];

const statistics = [
  {
    value: "14+",
    title: "Brand Categories",
  },
  {
    value: "100%",
    title: "Innovation Driven",
  },
  {
    value: "AI",
    title: "Powered Platform",
  },
  {
    value: "Global",
    title: "Future Vision",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

        
          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            Building the Future of
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fashion Technology
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            NextGrid Nexus is an innovative Fashion Technology ecosystem
            dedicated to transforming the fashion industry through Artificial
            Intelligence, Digital Fashion, Smart Fabrics, Wearable Technology,
            immersive experiences, and sustainable innovation.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {statistics.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
              >
                <h2 className="text-5xl font-extrabold text-cyan-400">
                  {item.value}
                </h2>

                <p className="mt-4 text-slate-400">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Our Story */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Our Story
              </h2>

              <p className="mt-8 leading-8 text-slate-300">
                NextGrid Nexus was created to bridge the gap between fashion,
                technology, and innovation. Our mission is to empower brands,
                creators, developers, designers, and consumers through
                intelligent digital solutions that inspire creativity and
                transform the global fashion ecosystem.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                We envision a world where Artificial Intelligence, immersive
                technologies, sustainable materials, and digital experiences
                become essential components of every modern fashion brand.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                To accelerate innovation within the global fashion industry by
                creating intelligent platforms powered by Artificial
                Intelligence, sustainable technologies, immersive experiences,
                and customer-centric digital solutions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Innovation Pillars */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Innovation Pillars
            </h2>

            <p className="mt-6 text-slate-400">
              Four principles driving the NextGrid Nexus ecosystem.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-violet-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {pillar.description}
                </p>

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
              Core Technologies
            </h2>

            <p className="mt-6 text-slate-400">
              Technologies powering the NextGrid Nexus platform.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

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

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <h2 className="text-5xl font-bold text-white">
            Join the Future of Fashion Technology
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore our technologies, discover innovative research, and become
            part of the NextGrid Nexus ecosystem shaping tomorrow's fashion
            industry.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/technology"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Technologies
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
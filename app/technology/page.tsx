import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Technology",

  description:
    "Explore the innovative technologies powering NextGrid Nexus, including Artificial Intelligence, Smart Fabrics, Wearable Technology, Augmented Reality, Virtual Reality, and 3D Fashion Design.",

  keywords: [
    "Technology",
    "Fashion Technology",
    "Artificial Intelligence",
    "AI Fashion",
    "Smart Fabrics",
    "Wearable Technology",
    "Augmented Reality",
    "Virtual Reality",
    "3D Fashion Design",
    "Digital Fashion",
    "Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technology",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Technology | NextGrid Nexus",
    description:
      "Discover the technologies transforming the future of fashion.",
    url: "https://nextgrid-nexus.vercel.app/technology",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology | NextGrid Nexus",
    description:
      "Explore the future of Fashion Technology.",
    images: ["/images/hero.jpg"],
  },
};

const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "AI-driven fashion design, personalization, predictive analytics, recommendation systems, and intelligent automation.",
    href: "/technologies/artificial-intelligence",
  },
  {
    title: "Smart Fabrics",
    description:
      "Advanced textiles featuring embedded sensors, adaptive materials, and sustainable innovations.",
    href: "/technologies/smart-fabrics",
  },
  {
    title: "Wearable Technology",
    description:
      "Connected wearables, smart devices, health monitoring, and intelligent lifestyle solutions.",
    href: "/technologies/wearable-technology",
  },
  {
    title: "Augmented Reality",
    description:
      "Immersive virtual try-on experiences, interactive shopping, and enhanced retail engagement.",
    href: "/technologies/augmented-reality",
  },
  {
    title: "Virtual Reality",
    description:
      "Virtual showrooms, immersive fashion experiences, and digital collaboration environments.",
    href: "/technologies/virtual-reality",
  },
  {
    title: "3D Fashion Design",
    description:
      "Digital garment creation, rapid prototyping, visualization, and sustainable product development.",
    href: "/technologies/3d-fashion-design",
  },
];

const advantages = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Generative AI",
  "Cloud Computing",
  "IoT Devices",
  "Smart Textiles",
  "Digital Twins",
  "Virtual Commerce",
  "Data Analytics",
  "Automation",
  "Sustainability",
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
            Technologies
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Powering Innovation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            NextGrid Nexus combines Artificial Intelligence,
            Smart Fabrics, Wearable Technology, Augmented Reality,
            Virtual Reality, and 3D Fashion Design to create
            intelligent digital experiences for the future of fashion.
          </p>

        </div>

      </section>

      {/* Technology Cards */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => (
              <article
                key={technology.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
              >

                <h2 className="text-2xl font-bold text-white">
                  {technology.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  {technology.description}
                </p>

                <Link
                  href={technology.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4"
                >
                  Explore Technology →

                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Platform Features */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Platform Technologies
            </h2>

            <p className="mt-6 text-slate-400">
              Modern technologies powering the NextGrid Nexus ecosystem.
            </p>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {advantages.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Discover What's Next
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore cutting-edge technologies transforming fashion,
            retail, manufacturing, sustainability, and customer
            experiences through intelligent digital innovation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/collection"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collections
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

    </main>
  );
}
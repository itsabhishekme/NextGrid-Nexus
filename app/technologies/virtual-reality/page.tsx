import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Virtual Reality",

  description:
    "Explore Virtual Reality at NextGrid Nexus. Discover immersive fashion experiences, virtual showrooms, digital commerce, 3D environments, metaverse innovation, AI-powered design, and next-generation Fashion Technology.",

  keywords: [
    "Virtual Reality",
    "VR",
    "Fashion Technology",
    "Metaverse",
    "Virtual Showroom",
    "Digital Fashion",
    "3D Fashion",
    "Immersive Commerce",
    "Artificial Intelligence",
    "Mixed Reality",
    "Virtual Shopping",
    "Future Fashion",
    "Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/virtual-reality",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Virtual Reality | NextGrid Nexus",
    description:
      "Immersive Virtual Reality experiences for the future of Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/technologies/virtual-reality",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Virtual Reality",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Virtual Reality | NextGrid Nexus",
    description:
      "Discover immersive Virtual Reality experiences powered by NextGrid Nexus.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Virtual Showrooms",
    description:
      "Create immersive digital stores where customers can explore fashion collections in fully interactive 3D environments.",
  },
  {
    title: "Digital Fashion Experiences",
    description:
      "Present virtual garments, fashion collections, and runway experiences without physical limitations.",
  },
  {
    title: "Immersive Commerce",
    description:
      "Transform online shopping into engaging Virtual Reality experiences that increase customer confidence and interaction.",
  },
  {
    title: "AI-Powered Design",
    description:
      "Combine Artificial Intelligence with Virtual Reality to accelerate design, collaboration, and product visualization.",
  },
  {
    title: "Virtual Collaboration",
    description:
      "Enable designers, engineers, and creative teams to collaborate inside shared immersive environments.",
  },
  {
    title: "Training & Simulation",
    description:
      "Provide realistic training environments for manufacturing, retail operations, and customer engagement.",
  },
];

const applications = [
  "Virtual Fashion Shows",
  "Immersive Shopping",
  "Digital Showrooms",
  "Metaverse Commerce",
  "Fashion Education",
  "Retail Training",
  "Product Design",
  "Virtual Collaboration",
  "3D Visualization",
  "Interactive Storytelling",
  "Brand Experiences",
  "Customer Engagement",
];

const technologies = [
  "Unity",
  "Unreal Engine",
  "OpenXR",
  "WebXR",
  "Three.js",
  "Blender",
  "Meta Quest",
  "Apple Vision Pro",
  "Artificial Intelligence",
  "Next.js",
  "React",
  "TypeScript",
];

const metrics = [
  {
    value: "85%",
    title: "Higher User Engagement",
  },
  {
    value: "50%",
    title: "Faster Product Visualization",
  },
  {
    value: "3x",
    title: "Longer Customer Sessions",
  },
  {
    value: "95%",
    title: "Immersive Experience Rating",
  },
];

export default function VirtualRealityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Immersive Innovation
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Virtual Reality
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus leverages Virtual Reality, Artificial Intelligence,
            and immersive technologies to transform fashion experiences,
            digital commerce, product visualization, and collaborative design.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/research"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Explore Research
            </Link>

            <Link
              href="/resources/innovation"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Innovation
            </Link>

          </div>

        </div>
      </section>

      {/* Metrics */}

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-violet-600">
                {metric.value}
              </h2>

              <p className="mt-4 text-slate-600">
                {metric.title}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Virtual Reality Capabilities
          </h2>

          <p className="mt-5 text-slate-600">
            Creating immersive digital experiences for the future of fashion.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {feature.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* Applications */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              VR Applications
            </h2>

            <p className="mt-5 text-slate-400">
              Practical Virtual Reality solutions across fashion and retail.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {applications.map((application) => (
              <span
                key={application}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {application}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Technology Stack */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Technology Stack
          </h2>

          <p className="mt-5 text-slate-600">
            Modern platforms powering immersive Virtual Reality experiences.
          </p>

        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-2xl border bg-white p-5 text-center font-semibold text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-700"
            >
              {technology}
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Build the Future of Immersive Fashion
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus combines Virtual Reality, Artificial Intelligence,
            Digital Fashion, and immersive commerce to redefine customer
            experiences, product development, and fashion innovation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/resources/case-studies"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              View Case Studies
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
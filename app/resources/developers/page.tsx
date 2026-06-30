import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Developers",

  description:
    "Developer resources for NextGrid Nexus. Explore APIs, SDKs, documentation, AI integrations, Fashion Technology tools, authentication, and developer guides for building modern fashion applications.",

  keywords: [
    "NextGrid Developers",
    "Developer Portal",
    "API",
    "REST API",
    "GraphQL",
    "SDK",
    "Authentication",
    "OAuth",
    "Artificial Intelligence",
    "Fashion Technology",
    "Developer Documentation",
    "Next.js",
    "React",
    "TypeScript",
    "Open API",
    "Cloud Platform",
    "Developer Tools",
  ],

  alternates: {
    canonical: "/resources/developers",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Developers | NextGrid Nexus",
    description:
      "Everything developers need to build on the NextGrid Nexus platform.",
    url: "https://nextgrid-nexus.vercel.app/resources/developers",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Developers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Developers | NextGrid Nexus",
    description:
      "Developer platform for Fashion Technology and Artificial Intelligence.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Developer APIs",
    description:
      "Powerful REST and GraphQL APIs for fashion products, inventory, users, orders, AI services, and analytics.",
  },
  {
    title: "Authentication",
    description:
      "Secure authentication using JWT, OAuth, API Keys, and enterprise identity providers.",
  },
  {
    title: "AI Services",
    description:
      "Integrate intelligent recommendations, image recognition, personalization, and predictive analytics.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud-native architecture designed for modern enterprise applications.",
  },
  {
    title: "SDKs",
    description:
      "Official SDKs for JavaScript, TypeScript, Python, and future mobile platforms.",
  },
  {
    title: "Developer Experience",
    description:
      "Clean APIs, detailed documentation, examples, tutorials, and production-ready integrations.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "REST API",
  "GraphQL",
  "Tailwind CSS",
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "Docker",
  "Kubernetes",
];

const resources = [
  {
    title: "API Reference",
    description:
      "Comprehensive API documentation with endpoints, authentication, request examples, and responses.",
  },
  {
    title: "SDK Downloads",
    description:
      "Official SDKs and client libraries for faster development.",
  },
  {
    title: "Code Examples",
    description:
      "Ready-to-use integration examples and production templates.",
  },
  {
    title: "Tutorials",
    description:
      "Step-by-step learning resources for building Fashion Technology applications.",
  },
];

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Developer Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Developers
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Build intelligent Fashion Technology applications using
            NextGrid Nexus APIs, AI services, cloud infrastructure,
            developer tools, and comprehensive documentation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/documentation"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Documentation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Contact Developer Relations
            </Link>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Platform Features
          </h2>

          <p className="mt-5 text-slate-600">
            Everything you need to build scalable digital experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Technology Stack */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Technology Stack
            </h2>

            <p className="mt-5 text-slate-400">
              Modern technologies powering the NextGrid ecosystem.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Developer Resources */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Developer Resources
          </h2>

          <p className="mt-5 text-slate-600">
            Learn faster with comprehensive documentation and practical examples.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {resources.map((resource) => (
            <article
              key={resource.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {resource.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {resource.description}
              </p>

              <button className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
                Learn More
              </button>

            </article>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Start Building Today
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Join the NextGrid Nexus developer community and create innovative
            Fashion Technology applications powered by AI, cloud computing,
            and modern web technologies.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/documentation"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Read Documentation
            </Link>

            <Link
              href="/resources/support"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Developer Support
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
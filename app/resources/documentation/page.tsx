import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Documentation",

  description:
    "Official NextGrid Nexus Documentation. Learn how to integrate APIs, AI services, authentication, developer SDKs, Fashion Technology tools, deployment guides, and platform best practices.",

  keywords: [
    "NextGrid Documentation",
    "API Documentation",
    "Developer Documentation",
    "Fashion Technology",
    "Artificial Intelligence",
    "REST API",
    "GraphQL",
    "SDK",
    "Authentication",
    "Next.js",
    "React",
    "TypeScript",
    "Cloud",
    "Deployment",
    "Developer Guide",
    "Integration",
  ],

  alternates: {
    canonical: "/resources/documentation",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Documentation | NextGrid Nexus",
    description:
      "Official documentation for developers building with NextGrid Nexus.",
    url: "https://nextgrid-nexus.vercel.app/resources/documentation",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Documentation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Documentation | NextGrid Nexus",
    description:
      "Learn everything about building on the NextGrid Nexus platform.",
    images: ["/images/hero.jpg"],
  },
};

const quickStart = [
  {
    title: "Getting Started",
    description:
      "Set up your development environment and create your first NextGrid Nexus project.",
  },
  {
    title: "Authentication",
    description:
      "Secure applications using API Keys, OAuth, JWT, and enterprise authentication.",
  },
  {
    title: "API Reference",
    description:
      "Complete REST and GraphQL API documentation with request and response examples.",
  },
  {
    title: "SDK Installation",
    description:
      "Install official SDKs for JavaScript, TypeScript, Python, and future platforms.",
  },
];

const guides = [
  {
    title: "Artificial Intelligence",
    description:
      "Integrate recommendation engines, computer vision, personalization, and predictive analytics.",
  },
  {
    title: "Smart Fashion APIs",
    description:
      "Build intelligent fashion applications powered by modern cloud services.",
  },
  {
    title: "Wearable Technology",
    description:
      "Connect wearable devices and smart textile platforms with secure APIs.",
  },
  {
    title: "Digital Commerce",
    description:
      "Manage products, inventory, orders, payments, and customer experiences.",
  },
  {
    title: "Deployment",
    description:
      "Deploy applications securely using cloud-native infrastructure and CI/CD pipelines.",
  },
  {
    title: "Security",
    description:
      "Follow best practices for authentication, authorization, encryption, and secure APIs.",
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
  "PostgreSQL",
  "Redis",
  "Vercel",
  "GitHub",
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Developer Documentation
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Documentation
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Comprehensive documentation covering APIs, SDKs,
            authentication, cloud deployment, Artificial Intelligence,
            Fashion Technology integrations, and developer best practices.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/developers"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Developer Portal
            </Link>

            <Link
              href="/resources/support"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Support
            </Link>

          </div>

        </div>
      </section>

      {/* Quick Start */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Quick Start
          </h2>

          <p className="mt-5 text-slate-600">
            Everything you need to begin building with NextGrid Nexus.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {quickStart.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* Documentation Guides */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Documentation Guides
            </h2>

            <p className="mt-5 text-slate-400">
              Learn every aspect of the NextGrid platform.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition hover:border-violet-500"
              >

                <h3 className="text-2xl font-bold text-white">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {guide.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Technology Stack */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Supported Technologies
          </h2>

          <p className="mt-5 text-slate-600">
            Modern technologies powering NextGrid Nexus.
          </p>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-700"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Build?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Build intelligent Fashion Technology applications using
            NextGrid Nexus APIs, AI services, cloud infrastructure,
            and modern development tools.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/developers"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Start Developing
            </Link>

            <Link
              href="/resources/support"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Get Support
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
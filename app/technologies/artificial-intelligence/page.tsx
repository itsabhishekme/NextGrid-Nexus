import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Artificial Intelligence",

  description:
    "Explore Artificial Intelligence at NextGrid Nexus. Discover AI-powered fashion, machine learning, computer vision, predictive analytics, recommendation systems, generative AI, automation, and intelligent digital experiences.",

  keywords: [
    "Artificial Intelligence",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Fashion AI",
    "Computer Vision",
    "Predictive Analytics",
    "Recommendation Engine",
    "Digital Fashion",
    "Fashion Technology",
    "Smart Retail",
    "Automation",
    "Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/artificial-intelligence",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Artificial Intelligence | NextGrid Nexus",
    description:
      "Discover how Artificial Intelligence is transforming Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/technologies/artificial-intelligence",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence | NextGrid Nexus",
    description:
      "AI-powered innovation for the future of Fashion Technology.",
    images: ["/images/hero.jpg"],
  },
};

const capabilities = [
  {
    title: "Machine Learning",
    description:
      "Train intelligent models to recognize patterns, predict trends, and automate decision-making across fashion and retail ecosystems.",
  },
  {
    title: "Computer Vision",
    description:
      "Enable image recognition, virtual try-on, garment classification, quality inspection, and intelligent visual search.",
  },
  {
    title: "Generative AI",
    description:
      "Accelerate creativity by generating fashion concepts, product descriptions, design inspiration, and digital content.",
  },
  {
    title: "Recommendation Systems",
    description:
      "Deliver personalized shopping experiences using customer behavior, preferences, and predictive analytics.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast demand, optimize inventory, improve merchandising, and enhance business decision-making using AI.",
  },
  {
    title: "Automation",
    description:
      "Automate workflows across customer support, supply chains, manufacturing, and digital commerce.",
  },
];

const applications = [
  "Personalized Shopping",
  "AI Fashion Design",
  "Virtual Styling",
  "Inventory Optimization",
  "Demand Forecasting",
  "Fraud Detection",
  "Smart Manufacturing",
  "Customer Analytics",
  "Image Recognition",
  "Virtual Try-On",
  "Voice Assistants",
  "Predictive Maintenance",
];

const benefits = [
  {
    value: "95%",
    title: "Recommendation Accuracy",
  },
  {
    value: "60%",
    title: "Faster Decision Making",
  },
  {
    value: "45%",
    title: "Improved Customer Experience",
  },
  {
    value: "30%",
    title: "Operational Cost Reduction",
  },
];

const technologies = [
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "Python",
  "Next.js",
  "TypeScript",
  "Computer Vision",
  "Natural Language Processing",
  "Large Language Models",
  "Cloud AI",
  "Machine Learning",
  "Data Analytics",
];

export default function ArtificialIntelligencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Intelligent Innovation
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Artificial Intelligence
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Artificial Intelligence powers the future of NextGrid Nexus by
            enabling personalized shopping, intelligent automation, predictive
            analytics, digital fashion design, computer vision, and immersive
            customer experiences.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/research"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              AI Research
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

      {/* Benefits */}

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-violet-600">
                {benefit.value}
              </h2>

              <p className="mt-4 text-slate-600">
                {benefit.title}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Capabilities */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            AI Capabilities
          </h2>

          <p className="mt-5 text-slate-600">
            Building intelligent systems for the future of Fashion Technology.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {capability.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {capability.description}
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
              AI Applications
            </h2>

            <p className="mt-5 text-slate-400">
              Practical use cases transforming fashion and retail.
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
            AI Technology Stack
          </h2>

          <p className="mt-5 text-slate-600">
            Modern technologies powering intelligent innovation.
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
            Build Intelligent Fashion Experiences
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Discover how Artificial Intelligence empowers NextGrid Nexus to
            deliver innovative digital experiences, smarter business decisions,
            sustainable solutions, and the next generation of Fashion
            Technology.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/case-studies"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              View Case Studies
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
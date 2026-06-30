import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Augmented Reality",

  description:
    "Explore Augmented Reality at NextGrid Nexus. Discover immersive shopping, virtual try-on technology, interactive retail experiences, AI-powered visualization, smart fashion, and digital innovation.",

  keywords: [
    "Augmented Reality",
    "AR",
    "Fashion Technology",
    "Virtual Try-On",
    "Smart Retail",
    "Digital Fashion",
    "Artificial Intelligence",
    "Mixed Reality",
    "Immersive Shopping",
    "Retail Innovation",
    "3D Visualization",
    "Interactive Commerce",
    "Future Fashion",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/augmented-reality",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Augmented Reality | NextGrid Nexus",
    description:
      "Experience the future of Fashion Technology through Augmented Reality.",
    url: "https://nextgrid-nexus.vercel.app/technologies/augmented-reality",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Augmented Reality",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Augmented Reality | NextGrid Nexus",
    description:
      "Immersive shopping and intelligent fashion experiences powered by AR.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Virtual Try-On",
    description:
      "Allow customers to preview clothing, footwear, eyewear, and accessories using realistic augmented reality experiences.",
  },
  {
    title: "Interactive Shopping",
    description:
      "Transform online shopping into an engaging and personalized experience through real-time product visualization.",
  },
  {
    title: "3D Product Visualization",
    description:
      "Present products in immersive 3D with accurate textures, lighting, materials, and interactive controls.",
  },
  {
    title: "AI-Powered Recommendations",
    description:
      "Combine Augmented Reality with Artificial Intelligence to deliver personalized shopping suggestions.",
  },
  {
    title: "Retail Navigation",
    description:
      "Guide customers through physical stores using location-aware augmented experiences.",
  },
  {
    title: "Marketing Experiences",
    description:
      "Create immersive campaigns, product launches, and branded experiences that increase customer engagement.",
  },
];

const applications = [
  "Virtual Clothing Try-On",
  "Interactive Store Displays",
  "Footwear Visualization",
  "Eyewear Preview",
  "Beauty & Cosmetics",
  "Furniture Placement",
  "Product Demonstrations",
  "Retail Navigation",
  "Digital Catalogs",
  "Interactive Packaging",
  "Smart Advertising",
  "Immersive Commerce",
];

const technologies = [
  "ARKit",
  "ARCore",
  "Unity",
  "Unreal Engine",
  "WebXR",
  "Three.js",
  "Computer Vision",
  "Artificial Intelligence",
  "Machine Learning",
  "Next.js",
  "TypeScript",
  "Cloud Computing",
];

const metrics = [
  {
    value: "70%",
    title: "Higher Customer Engagement",
  },
  {
    value: "40%",
    title: "Lower Product Returns",
  },
  {
    value: "3x",
    title: "Longer Shopping Sessions",
  },
  {
    value: "95%",
    title: "Customer Satisfaction",
  },
];

export default function AugmentedRealityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Immersive Technology
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Augmented Reality
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus combines Augmented Reality with Artificial
            Intelligence to create immersive shopping experiences,
            interactive fashion visualization, and intelligent retail
            innovation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/research"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Explore Research
            </Link>

            <Link
              href="/resources/case-studies"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Case Studies
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
            Core Capabilities
          </h2>

          <p className="mt-5 text-slate-600">
            Enhancing fashion and retail with immersive digital experiences.
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
              AR Applications
            </h2>

            <p className="mt-5 text-slate-400">
              Real-world solutions powered by Augmented Reality.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {applications.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {item}
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
            Industry-leading technologies powering immersive experiences.
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
            Experience the Future of Retail
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus is redefining digital commerce through
            Augmented Reality, Artificial Intelligence, and immersive
            Fashion Technology solutions that connect brands with
            customers like never before.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/resources/innovation"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
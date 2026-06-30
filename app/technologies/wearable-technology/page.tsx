import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Wearable Technology",

  description:
    "Explore Wearable Technology at NextGrid Nexus. Discover smart wearables, connected clothing, biometric monitoring, IoT devices, health technology, AI-powered fashion, and next-generation digital experiences.",

  keywords: [
    "Wearable Technology",
    "Smart Wearables",
    "Fashion Technology",
    "Connected Clothing",
    "Smart Watches",
    "Health Monitoring",
    "IoT Devices",
    "Artificial Intelligence",
    "Smart Fabrics",
    "Fitness Tracking",
    "Digital Fashion",
    "Innovation",
    "Future Fashion",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/wearable-technology",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Wearable Technology | NextGrid Nexus",
    description:
      "Discover wearable innovation powered by Artificial Intelligence and Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/technologies/wearable-technology",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wearable Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wearable Technology | NextGrid Nexus",
    description:
      "Smart wearables, connected fashion, and intelligent digital experiences.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Health Monitoring",
    description:
      "Monitor heart rate, oxygen levels, sleep quality, activity, posture, and wellness through intelligent wearable devices.",
  },
  {
    title: "Smart Clothing",
    description:
      "Connected garments equipped with sensors and intelligent fabrics for real-time performance monitoring.",
  },
  {
    title: "Fitness Tracking",
    description:
      "Measure workouts, calories, movement, and performance with AI-powered wearable technologies.",
  },
  {
    title: "IoT Connectivity",
    description:
      "Synchronize wearable devices with smartphones, cloud platforms, and connected ecosystems using IoT technologies.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Leverage machine learning and predictive analytics to deliver personalized health insights and recommendations.",
  },
  {
    title: "Sustainable Innovation",
    description:
      "Develop eco-friendly wearable products using efficient manufacturing and sustainable materials.",
  },
];

const applications = [
  "Healthcare",
  "Sports & Fitness",
  "Smart Watches",
  "Smart Glasses",
  "Connected Clothing",
  "Industrial Safety",
  "Military Applications",
  "Outdoor Adventure",
  "Fashion Accessories",
  "Medical Devices",
  "Lifestyle Monitoring",
  "Digital Wellness",
];

const technologies = [
  "Bluetooth LE",
  "IoT",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Flexible Electronics",
  "Smart Sensors",
  "Cloud Computing",
  "Next.js",
  "React",
  "TypeScript",
  "Edge Computing",
];

const metrics = [
  {
    value: "24/7",
    title: "Continuous Monitoring",
  },
  {
    value: "95%",
    title: "Data Accuracy",
  },
  {
    value: "40%",
    title: "Improved User Engagement",
  },
  {
    value: "60%",
    title: "Smarter Decision Making",
  },
];

export default function WearableTechnologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Connected Innovation
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Wearable Technology
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus is transforming Fashion Technology through
            intelligent wearable devices, connected clothing, Artificial
            Intelligence, biometric monitoring, and immersive digital
            experiences.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/resources/research"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Research
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
            Core Capabilities
          </h2>

          <p className="mt-5 text-slate-600">
            Intelligent wearable solutions for modern lifestyles.
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
              Industry Applications
            </h2>

            <p className="mt-5 text-slate-400">
              Wearable technology transforming industries worldwide.
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
            Modern technologies enabling connected wearable ecosystems.
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
            Build the Future of Connected Fashion
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus combines Artificial Intelligence, Smart Fabrics,
            IoT, Wearable Technology, and Digital Innovation to create
            intelligent products that improve health, performance, and
            customer experiences.
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
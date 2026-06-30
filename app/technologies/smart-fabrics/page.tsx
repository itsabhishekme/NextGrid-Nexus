import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Smart Fabrics",

  description:
    "Explore Smart Fabrics at NextGrid Nexus. Discover intelligent textiles, wearable sensors, adaptive clothing, IoT-enabled garments, sustainable materials, and next-generation Fashion Technology innovations.",

  keywords: [
    "Smart Fabrics",
    "Smart Textiles",
    "Fashion Technology",
    "Wearable Technology",
    "IoT Clothing",
    "Connected Textiles",
    "Adaptive Clothing",
    "Intelligent Fabrics",
    "Sustainable Textiles",
    "Artificial Intelligence",
    "Digital Fashion",
    "Future Fashion",
    "Innovation",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/smart-fabrics",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Smart Fabrics | NextGrid Nexus",
    description:
      "Discover intelligent fabrics powering the future of Fashion Technology.",
    url: "https://nextgrid-nexus.vercel.app/technologies/smart-fabrics",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Fabrics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Fabrics | NextGrid Nexus",
    description:
      "Smart textiles, connected clothing, and intelligent wearable innovation.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Embedded Sensors",
    description:
      "Integrate miniature sensors into fabrics to monitor temperature, movement, pressure, and environmental conditions in real time.",
  },
  {
    title: "Adaptive Materials",
    description:
      "Create textiles capable of responding dynamically to heat, moisture, light, and changing environmental conditions.",
  },
  {
    title: "Health Monitoring",
    description:
      "Enable continuous wellness tracking through smart garments that measure heart rate, posture, respiration, and activity.",
  },
  {
    title: "Connected Clothing",
    description:
      "Combine IoT technologies with fashion to enable intelligent communication between garments and digital devices.",
  },
  {
    title: "Energy Harvesting",
    description:
      "Explore fabrics capable of generating or storing energy to power wearable electronics and smart accessories.",
  },
  {
    title: "Sustainable Innovation",
    description:
      "Develop environmentally responsible textiles using recyclable materials, advanced manufacturing, and intelligent production methods.",
  },
];

const applications = [
  "Healthcare",
  "Sports Performance",
  "Military & Defense",
  "Industrial Safety",
  "Luxury Fashion",
  "Smart Uniforms",
  "Fitness Tracking",
  "Outdoor Apparel",
  "Medical Wearables",
  "Connected Lifestyle",
  "Emergency Services",
  "Digital Commerce",
];

const technologies = [
  "IoT",
  "Flexible Electronics",
  "Wearable Sensors",
  "Artificial Intelligence",
  "Machine Learning",
  "Nanotechnology",
  "RFID",
  "Bluetooth Low Energy",
  "Cloud Computing",
  "Next.js",
  "React",
  "TypeScript",
];

const statistics = [
  {
    value: "90%",
    title: "Improved User Experience",
  },
  {
    value: "60%",
    title: "Faster Innovation",
  },
  {
    value: "40%",
    title: "Lower Material Waste",
  },
  {
    value: "24/7",
    title: "Real-Time Monitoring",
  },
];

export default function SmartFabricsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Intelligent Textiles
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Smart Fabrics
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Smart Fabrics combine advanced materials, embedded electronics,
            Artificial Intelligence, and connected technologies to create
            intelligent clothing for healthcare, sports, sustainability,
            and the future of Fashion Technology.
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

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Smart Fabric Capabilities
          </h2>

          <p className="mt-5 text-slate-600">
            Advanced textile technologies transforming modern apparel.
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
              Smart textiles transforming industries worldwide.
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
            Technologies enabling intelligent connected textiles.
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
            Shape the Future of Smart Textiles
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus is advancing Fashion Technology through
            intelligent fabrics, Artificial Intelligence, wearable
            innovation, sustainable materials, and connected digital
            experiences.
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
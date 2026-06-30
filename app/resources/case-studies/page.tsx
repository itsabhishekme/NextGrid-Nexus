import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Case Studies",

  description:
    "Explore NextGrid Nexus case studies showcasing innovations in Artificial Intelligence, Fashion Technology, Smart Fabrics, Wearable Technology, Sustainable Fashion, Digital Commerce, and immersive customer experiences.",

  keywords: [
    "Case Studies",
    "NextGrid Nexus",
    "Fashion Technology",
    "Artificial Intelligence",
    "Smart Fabrics",
    "Wearable Technology",
    "Digital Fashion",
    "Innovation",
    "Technology Success Stories",
    "Sustainable Fashion",
    "Customer Experience",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "/resources/case-studies",
  },

  openGraph: {
    title: "Case Studies | NextGrid Nexus",
    description:
      "Real-world innovation stories from the NextGrid Nexus ecosystem.",
    url: "https://nextgrid-nexus.vercel.app/resources/case-studies",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Case Studies | NextGrid Nexus",
    description:
      "Discover innovation stories powered by NextGrid Nexus.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const studies = [
  {
    title: "AI-Powered Fashion Recommendations",
    category: "Artificial Intelligence",
    industry: "Retail Technology",
    description:
      "Leveraging intelligent recommendation systems to deliver highly personalized shopping experiences and improve customer engagement.",
    impact: "42% increase in customer engagement",
  },
  {
    title: "Smart Textile Innovation",
    category: "Smart Fabrics",
    industry: "Wearable Technology",
    description:
      "Developing intelligent fabrics capable of monitoring movement, temperature, and comfort for modern lifestyles.",
    impact: "35% improvement in product performance",
  },
  {
    title: "Digital Fashion Collection",
    category: "Digital Fashion",
    industry: "Fashion Design",
    description:
      "Creating immersive digital collections combining 3D design, AI-assisted creativity, and sustainable production workflows.",
    impact: "Reduced design cycle by 50%",
  },
  {
    title: "Virtual Try-On Experience",
    category: "Augmented Reality",
    industry: "E-Commerce",
    description:
      "Implementing augmented reality to allow customers to preview products before purchasing.",
    impact: "30% increase in online conversions",
  },
  {
    title: "Sustainable Manufacturing",
    category: "Sustainability",
    industry: "Fashion Production",
    description:
      "Optimizing manufacturing through AI and data analytics to reduce waste and improve resource efficiency.",
    impact: "28% reduction in production waste",
  },
  {
    title: "Wearable Health Analytics",
    category: "Wearable Technology",
    industry: "HealthTech",
    description:
      "Developing wearable solutions capable of tracking wellness metrics while maintaining premium fashion aesthetics.",
    impact: "Improved user engagement by 40%",
  },
];

const metrics = [
  {
    value: "250+",
    title: "Innovation Projects",
  },
  {
    value: "120+",
    title: "Global Clients",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    value: "35+",
    title: "Countries Served",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Innovation Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Case Studies
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Discover how NextGrid Nexus combines Artificial Intelligence,
            Fashion Technology, Digital Innovation, and Sustainable Design
            to create measurable business impact.
          </p>

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

      {/* Case Studies */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Success Stories
          </h2>

          <p className="mt-5 text-slate-600">
            Real-world innovation powered by technology and creativity.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {studies.map((study) => (
            <article
              key={study.title}
              className="rounded-3xl border bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  {study.category}
                </span>

                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  {study.industry}
                </span>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {study.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                {study.description}
              </p>

              <div className="mt-8 rounded-2xl bg-violet-50 p-6">
                <h4 className="font-bold text-violet-700">
                  Key Impact
                </h4>

                <p className="mt-3 text-slate-700">
                  {study.impact}
                </p>
              </div>

              <Link
                href="#"
                className="mt-8 inline-flex font-semibold text-violet-600 hover:text-violet-700"
              >
                View Full Case Study →
              </Link>

            </article>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Build the Future?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Collaborate with NextGrid Nexus to transform ideas into
            intelligent products, digital experiences, and innovative
            fashion technology solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white transition hover:bg-violet-700"
            >
              Contact Us
            </Link>

            <Link
              href="/resources/research"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Research
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
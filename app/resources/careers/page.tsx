import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Careers",

  description:
    "Explore career opportunities at NextGrid Nexus. Join our team of innovators building the future of Fashion Technology through Artificial Intelligence, Smart Fabrics, Wearable Technology, Digital Fashion, Sustainability, and immersive experiences.",

  keywords: [
    "NextGrid Careers",
    "NextGrid Jobs",
    "Fashion Technology Jobs",
    "AI Careers",
    "Software Engineering",
    "Frontend Developer",
    "Backend Developer",
    "UI UX Designer",
    "Product Designer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Research Engineer",
    "Digital Fashion",
    "Wearable Technology",
    "Innovation",
    "Technology Careers",
  ],

  alternates: {
    canonical: "/resources/careers",
  },

  openGraph: {
    title: "Careers | NextGrid Nexus",
    description:
      "Build the future of Fashion Technology with NextGrid Nexus.",
    url: "https://nextgrid-nexus.vercel.app/resources/careers",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Careers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | NextGrid Nexus",
    description:
      "Join NextGrid Nexus and help shape the future of Fashion Technology.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const openings = [
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description:
      "Build modern user experiences using Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description:
      "Develop scalable APIs, cloud infrastructure, and intelligent backend systems.",
  },
  {
    title: "AI / Machine Learning Engineer",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full-Time",
    description:
      "Create intelligent solutions for fashion recommendation, personalization, and automation.",
  },
  {
    title: "UI / UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    description:
      "Design premium digital experiences for fashion technology platforms.",
  },
  {
    title: "Fashion Technology Researcher",
    department: "Research",
    location: "Global",
    type: "Full-Time",
    description:
      "Research emerging technologies including smart textiles, wearable devices, and sustainable innovation.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    description:
      "Grow the NextGrid ecosystem through creative campaigns and digital strategy.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and continuously explore emerging technologies.",
  },
  {
    title: "Collaboration",
    description:
      "We believe exceptional products are built by diverse and collaborative teams.",
  },
  {
    title: "Learning",
    description:
      "Continuous growth and professional development are part of our culture.",
  },
  {
    title: "Impact",
    description:
      "Every contribution helps shape the future of Fashion Technology.",
  },
];

const benefits = [
  "Remote-first culture",
  "Flexible working hours",
  "Learning & certification support",
  "Modern technology stack",
  "Innovation-driven projects",
  "Global collaboration",
  "Career growth opportunities",
  "Inclusive workplace",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Join Our Team
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Careers at NextGrid Nexus
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Help us redefine Fashion Technology through Artificial Intelligence,
            Sustainable Innovation, Smart Fabrics, Wearable Technology,
            Digital Experiences, and next-generation commerce.
          </p>

          <Link
            href="#jobs"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
          >
            View Open Positions
          </Link>

        </div>
      </section>

      {/* Values */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Culture
          </h2>

          <p className="mt-5 text-slate-600">
            Everything we build begins with our people.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Benefits */}

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <h2 className="text-center text-4xl font-bold text-white">
            Why Work With Us?
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center text-slate-300 transition hover:border-violet-500"
              >
                {benefit}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Open Positions */}

      <section
        id="jobs"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Current Opportunities
          </h2>

          <p className="mt-5 text-slate-600">
            Explore exciting opportunities across engineering,
            research, design, and business.
          </p>
        </div>

        <div className="mt-16 space-y-8">

          {openings.map((job) => (
            <article
              key={job.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {job.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                      {job.department}
                    </span>

                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                      {job.location}
                    </span>

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      {job.type}
                    </span>

                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {job.description}
                  </p>

                </div>

                <div>
                  <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
                    Apply Now
                  </button>
                </div>

              </div>
            </article>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Don't See Your Role?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            We're always looking for talented individuals passionate about
            technology, innovation, fashion, artificial intelligence,
            research, and creating meaningful digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Recruitment
            </Link>

            <Link
              href="/resources/documentation"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Learn About NextGrid
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
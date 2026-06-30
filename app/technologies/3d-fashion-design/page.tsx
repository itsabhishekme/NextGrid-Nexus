import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "3D Fashion Design",

  description:
    "Explore 3D Fashion Design at NextGrid Nexus. Discover digital garment creation, virtual prototyping, AI-assisted fashion design, digital twins, sustainable product development, and immersive fashion experiences.",

  keywords: [
    "3D Fashion Design",
    "Digital Fashion",
    "Fashion Technology",
    "3D Clothing",
    "Virtual Fashion",
    "Digital Garments",
    "Fashion Innovation",
    "Artificial Intelligence",
    "3D Modeling",
    "CLO3D",
    "Browzwear",
    "Marvelous Designer",
    "Sustainable Fashion",
    "Virtual Try-On",
    "NextGrid Nexus",
  ],

  alternates: {
    canonical: "/technologies/3d-fashion-design",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "3D Fashion Design | NextGrid Nexus",
    description:
      "Experience the future of digital fashion with intelligent 3D design technologies.",
    url: "https://nextgrid-nexus.vercel.app/technologies/3d-fashion-design",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "3D Fashion Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "3D Fashion Design | NextGrid Nexus",
    description:
      "Digital fashion, virtual garments, AI-assisted design and immersive experiences.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Digital Garment Creation",
    description:
      "Design realistic digital garments before physical production, reducing sampling costs and accelerating product development.",
  },
  {
    title: "Virtual Prototyping",
    description:
      "Evaluate fit, drape, materials, and garment construction in realistic virtual environments.",
  },
  {
    title: "AI-Assisted Design",
    description:
      "Use Artificial Intelligence to generate concepts, optimize patterns, and accelerate creative workflows.",
  },
  {
    title: "Digital Twins",
    description:
      "Create highly accurate digital replicas of garments for manufacturing, visualization, and lifecycle management.",
  },
  {
    title: "Virtual Try-On",
    description:
      "Enable customers to visualize clothing digitally before purchasing, improving confidence and reducing returns.",
  },
  {
    title: "Sustainable Development",
    description:
      "Reduce fabric waste, unnecessary sampling, and environmental impact through digital-first workflows.",
  },
];

const software = [
  "CLO 3D",
  "Marvelous Designer",
  "Browzwear",
  "Blender",
  "Autodesk Maya",
  "Adobe Substance 3D",
  "Unreal Engine",
  "Unity",
  "Next.js",
  "React",
  "TypeScript",
  "Artificial Intelligence",
];

const benefits = [
  {
    value: "70%",
    title: "Reduced Physical Samples",
  },
  {
    value: "60%",
    title: "Faster Product Development",
  },
  {
    value: "40%",
    title: "Lower Production Costs",
  },
  {
    value: "90%",
    title: "Improved Visualization",
  },
];

export default function Fashion3DPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Future of Digital Fashion
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            3D Fashion Design
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Build the next generation of fashion using intelligent 3D design,
            virtual garments, AI-assisted creativity, digital twins,
            sustainable product development, and immersive customer
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

      {/* Benefits */}

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-violet-600">
                {item.value}
              </h2>

              <p className="mt-4 text-slate-600">
                {item.title}
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
            Intelligent tools transforming modern fashion development.
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

      {/* Software */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Industry Technologies
            </h2>

            <p className="mt-5 text-slate-400">
              Platforms powering professional digital fashion workflows.
            </p>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {software.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 p-12 text-center">

          <h2 className="text-5xl font-bold text-white">
            Shape the Future of Fashion
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            NextGrid Nexus combines Artificial Intelligence, 3D Fashion
            Design, Digital Commerce, Virtual Reality, and Sustainable
            Innovation to redefine how fashion is created and experienced.
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
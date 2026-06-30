import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Support",

  description:
    "Get support from NextGrid Nexus. Find help with accounts, products, developer resources, documentation, Fashion Technology services, Artificial Intelligence solutions, and customer assistance.",

  keywords: [
    "NextGrid Support",
    "Customer Support",
    "Help Center",
    "Technical Support",
    "Developer Support",
    "Documentation",
    "Fashion Technology",
    "Artificial Intelligence",
    "FAQ",
    "Customer Service",
    "NextGrid Nexus",
    "Troubleshooting",
    "Support Center",
    "Contact Support",
  ],

  alternates: {
    canonical: "/resources/support",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Support | NextGrid Nexus",
    description:
      "Customer and developer support for the NextGrid Nexus platform.",
    url: "https://nextgrid-nexus.vercel.app/resources/support",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Support | NextGrid Nexus",
    description:
      "Find help, documentation, FAQs, and customer assistance.",
    images: ["/images/hero.jpg"],
  },
};

const supportOptions = [
  {
    title: "Customer Support",
    description:
      "Receive assistance with products, services, accounts, and general inquiries from our support specialists.",
  },
  {
    title: "Technical Support",
    description:
      "Resolve technical issues, troubleshooting, integrations, deployments, and platform-related questions.",
  },
  {
    title: "Developer Support",
    description:
      "Get expert guidance for APIs, SDKs, authentication, cloud services, and development workflows.",
  },
  {
    title: "Business Support",
    description:
      "Enterprise onboarding, strategic partnerships, consulting, and business collaboration assistance.",
  },
  {
    title: "Research Assistance",
    description:
      "Collaborate with our research teams working on Artificial Intelligence, Smart Fabrics, and Digital Fashion.",
  },
  {
    title: "Innovation Consulting",
    description:
      "Explore custom innovation solutions, digital transformation, and emerging Fashion Technology strategies.",
  },
];

const faqs = [
  {
    question: "How do I contact NextGrid Nexus?",
    answer:
      "You can reach our team through the Contact page for general inquiries, partnerships, and technical support.",
  },
  {
    question: "Where can developers find API documentation?",
    answer:
      "Visit the Documentation and Developers sections for guides, API references, authentication, and SDKs.",
  },
  {
    question: "How do I report a technical issue?",
    answer:
      "Use our support channels with detailed information about the issue, browser, device, and any relevant screenshots.",
  },
  {
    question: "Do you collaborate with universities and startups?",
    answer:
      "Yes. We actively collaborate on research, innovation, AI, sustainability, and Fashion Technology initiatives.",
  },
];

const quickLinks = [
  {
    title: "Documentation",
    href: "/resources/documentation",
  },
  {
    title: "Developers",
    href: "/resources/developers",
  },
  {
    title: "Research",
    href: "/resources/research",
  },
  {
    title: "Innovation",
    href: "/resources/innovation",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Help Center
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">
            Support Center
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Whether you're a customer, developer, researcher, or business
            partner, we're here to help you succeed with NextGrid Nexus.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Support
            </Link>

            <Link
              href="/resources/documentation"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Documentation
            </Link>

          </div>

        </div>
      </section>

      {/* Support Services */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            How Can We Help?
          </h2>

          <p className="mt-5 text-slate-600">
            Dedicated assistance for every part of the NextGrid ecosystem.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {supportOptions.map((item) => (
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

      {/* Quick Links */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Helpful Resources
            </h2>

            <p className="mt-5 text-slate-400">
              Explore our knowledge base and developer resources.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-violet-500"
              >

                <h3 className="text-xl font-bold text-white">
                  {link.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  Learn more →
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600">
            Answers to common questions about NextGrid Nexus.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border bg-white p-8 shadow-sm"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {faq.answer}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600">

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">

          <h2 className="text-5xl font-bold text-white">
            Need More Assistance?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-100">
            Our support specialists, engineers, researchers, and developer
            advocates are ready to help you build, innovate, and succeed with
            NextGrid Nexus.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105"
            >
              Contact Our Team
            </Link>

            <Link
              href="/resources/developers"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700"
            >
              Developer Portal
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
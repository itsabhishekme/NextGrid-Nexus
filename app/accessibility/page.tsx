import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Learn about NextGrid Nexus's commitment to digital accessibility, inclusive design, and creating an accessible experience for all users across our Fashion Technology platform.",

  keywords: [
    "Accessibility",
    "Accessibility Statement",
    "Inclusive Design",
    "Digital Accessibility",
    "WCAG",
    "Accessible Website",
    "NextGrid",
    "NextGrid Nexus",
    "Fashion Technology",
    "Accessibility Policy",
    "Screen Reader Support",
    "Keyboard Navigation",
  ],

  alternates: {
    canonical: "/accessibility",
  },

  openGraph: {
    title: "Accessibility | NextGrid Nexus",
    description:
      "Discover our commitment to creating an inclusive and accessible digital experience for everyone.",
    url: "https://nextgrid-nexus.vercel.app/accessibility",
    siteName: "NextGrid Nexus",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Accessibility | NextGrid Nexus",
    description:
      "Learn about NextGrid Nexus's accessibility commitment and inclusive digital experience.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Accessibility Statement
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
            Accessibility at{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              NextGrid Nexus
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            At <strong>NextGrid Nexus</strong>, we believe technology should be
            accessible to everyone. Our mission is to build an inclusive Fashion
            Technology platform that provides equal access regardless of
            ability, device, or assistive technology.
          </p>
        </div>

        <div className="space-y-10">

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Commitment
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              We are committed to providing an accessible digital experience for
              all visitors. Accessibility is considered throughout our design,
              development, testing, and content creation processes to ensure
              that everyone can comfortably use our platform.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              We continuously improve our website by following accessibility
              best practices and adopting modern web standards whenever
              possible.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Accessibility Features
            </h2>

            <ul className="mt-6 space-y-4 list-disc pl-6 text-slate-600 leading-8">
              <li>Responsive layouts for desktop, tablet, and mobile devices.</li>
              <li>Keyboard-friendly navigation.</li>
              <li>Clear typography with readable font sizes.</li>
              <li>Consistent navigation across the website.</li>
              <li>Proper semantic HTML structure.</li>
              <li>Alternative text for meaningful images where applicable.</li>
              <li>Accessible forms and interactive elements.</li>
              <li>Color combinations designed to improve readability.</li>
              <li>Support for modern screen readers.</li>
              <li>Fast-loading pages optimized for performance.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Standards We Aim to Follow
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              We strive to align our digital experiences with internationally
              recognized accessibility best practices, including the Web Content
              Accessibility Guidelines (WCAG), while continually improving the
              usability of our website.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Continuous Improvement
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Accessibility is an ongoing effort. We regularly review our
              website, identify opportunities for improvement, and implement
              enhancements that help create a better experience for all users.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Third-Party Content
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Some third-party integrations, embedded content, or external
              services may not be fully controlled by NextGrid Nexus. While we
              encourage accessibility from all partners, we cannot guarantee the
              accessibility of third-party platforms.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Feedback
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              If you encounter an accessibility barrier or have suggestions that
              could improve your experience, we encourage you to contact us. We
              value your feedback and will make reasonable efforts to address
              accessibility concerns promptly.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Contact Our Team
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              NextGrid Nexus is committed to building the future of Fashion
              Technology through innovation, inclusivity, and accessibility. We
              believe that every individual deserves equal access to digital
              experiences, regardless of ability or technology.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last Updated: June 2026
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
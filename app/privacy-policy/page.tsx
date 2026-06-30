import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Privacy Policy",

  description:
    "Read the Privacy Policy of NextGrid Nexus to understand how we collect, use, protect, store, and process your personal information while using our Fashion Technology platform.",

  keywords: [
    "Privacy Policy",
    "Privacy",
    "Data Protection",
    "Personal Information",
    "User Privacy",
    "GDPR",
    "Data Security",
    "Fashion Technology",
    "NextGrid",
    "NextGrid Nexus",
    "Information Collection",
    "Privacy Statement",
    "Website Privacy",
    "Online Privacy",
    "Cookie Policy",
    "Legal",
  ],

  alternates: {
    canonical: "/privacy-policy",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Privacy Policy | NextGrid Nexus",
    description:
      "Learn how NextGrid Nexus collects, uses, protects, and safeguards your information.",
    url: "https://nextgrid-nexus.vercel.app/privacy-policy",
    siteName: "NextGrid Nexus",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Privacy Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NextGrid Nexus",
    description:
      "Understand how your information is collected and protected by NextGrid Nexus.",
    images: ["/images/hero.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-14">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Welcome to <strong>NextGrid Nexus</strong>. Your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            disclose, protect, and manage your personal information when you
            visit our website or use our Fashion Technology platform.
          </p>
        </div>

        <div className="space-y-10">

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Information We Collect
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on how you interact with our website, we may collect
              various types of information, including:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Name and contact information.</li>
              <li>Email address.</li>
              <li>Account information.</li>
              <li>Device and browser information.</li>
              <li>IP address.</li>
              <li>Website usage and analytics.</li>
              <li>Communication preferences.</li>
              <li>Technical logs and diagnostic information.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              How We Use Your Information
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We use collected information to provide, improve, and secure our
              services while delivering the best possible user experience.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Provide requested products and services.</li>
              <li>Improve website functionality.</li>
              <li>Enhance security and fraud prevention.</li>
              <li>Respond to customer inquiries.</li>
              <li>Improve platform performance.</li>
              <li>Analyze website traffic.</li>
              <li>Develop new features and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Cookies & Tracking Technologies
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We use cookies and similar technologies to improve user
              experience, remember preferences, measure website performance,
              and understand visitor interactions. Please review our Cookie
              Policy for additional information.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Data Security
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Protecting your information is a priority. We implement
              administrative, technical, and organizational safeguards designed
              to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Data Retention
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We retain personal information only for as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes, and enforce our agreements.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our website may integrate trusted third-party services including
              hosting providers, analytics platforms, payment providers, or
              embedded content. These services operate under their own privacy
              policies.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Your Rights
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on your location and applicable laws, you may have the
              right to:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Access your personal information.</li>
              <li>Request corrections.</li>
              <li>Request deletion of your information.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Object to certain processing activities.</li>
              <li>Request a copy of your data.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Children's Privacy
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our services are not intended for children under the applicable
              minimum age without parental or guardian consent. We do not
              knowingly collect personal information from children in violation
              of applicable laws.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We may update this Privacy Policy periodically to reflect changes
              in our services, legal requirements, or technology. The updated
              version will always be published on this page.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have questions regarding this Privacy Policy or the way we
              handle your information, please contact our support team.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Contact NextGrid Nexus
              </Link>
            </div>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-2xl font-bold">
              Our Commitment
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              At NextGrid Nexus, protecting user privacy is a core principle of
              our platform. We are committed to transparency, responsible data
              practices, and maintaining the trust of our global community while
              building the future of Fashion Technology.
            </p>

            <p className="mt-8 text-sm text-slate-400">
              Last Updated: June 2026
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
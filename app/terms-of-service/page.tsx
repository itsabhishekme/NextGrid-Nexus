import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Terms of Service",

  description:
    "Read the Terms of Service for NextGrid Nexus. Learn about your rights, responsibilities, acceptable use, intellectual property, user accounts, and the terms governing our Fashion Technology platform.",

  keywords: [
    "Terms of Service",
    "Terms and Conditions",
    "Legal",
    "User Agreement",
    "Website Terms",
    "NextGrid",
    "NextGrid Nexus",
    "Fashion Technology",
    "Digital Platform",
    "Acceptable Use",
    "Intellectual Property",
    "User Accounts",
    "Privacy",
    "Online Services",
    "Legal Notice",
  ],

  alternates: {
    canonical: "/terms-of-service",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Terms of Service | NextGrid Nexus",
    description:
      "Review the legal terms governing your use of the NextGrid Nexus platform and services.",
    url: "https://nextgrid-nexus.vercel.app/terms-of-service",
    siteName: "NextGrid Nexus",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Terms of Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | NextGrid Nexus",
    description:
      "Learn about the terms governing the use of NextGrid Nexus.",
    images: ["/images/hero.jpg"],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <div className="mb-14">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Legal Agreement
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
            Terms of Service
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Welcome to <strong>NextGrid Nexus</strong>. These Terms of Service
            ("Terms") govern your access to and use of our website, products,
            services, applications, and digital experiences. By accessing or
            using our platform, you agree to comply with these Terms.
          </p>
        </div>

        <div className="space-y-10">

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              By using NextGrid Nexus, you acknowledge that you have read,
              understood, and agreed to be bound by these Terms of Service, our
              Privacy Policy, Cookie Policy, and any additional policies that
              may apply to specific services.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Eligibility
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              You must use our platform in accordance with applicable laws and
              regulations. If you create an account, you are responsible for
              ensuring that your information is accurate and kept up to date.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              User Responsibilities
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Users agree to use the platform responsibly and refrain from
              activities that may harm the website, other users, or our
              services.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Provide accurate information.</li>
              <li>Respect intellectual property rights.</li>
              <li>Do not misuse or disrupt the platform.</li>
              <li>Do not attempt unauthorized access.</li>
              <li>Comply with all applicable laws.</li>
              <li>Maintain the confidentiality of account credentials.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Intellectual Property
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Unless otherwise stated, all content available on NextGrid Nexus,
              including text, graphics, logos, icons, images, software, design,
              branding, trademarks, and other materials, is owned by or
              licensed to NextGrid and is protected by applicable intellectual
              property laws.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Acceptable Use
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              You agree not to:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Upload malicious software or harmful code.</li>
              <li>Interfere with website security.</li>
              <li>Reverse engineer our services where prohibited.</li>
              <li>Violate applicable laws or regulations.</li>
              <li>Infringe intellectual property rights.</li>
              <li>Impersonate another individual or organization.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Accounts
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If account functionality is available, users are responsible for
              safeguarding login credentials and for all activities that occur
              under their account.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our platform may include links or integrations with third-party
              websites or services. We are not responsible for their content,
              availability, or privacy practices.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Disclaimer
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              NextGrid Nexus is provided on an "as available" and "as is"
              basis. While we strive to provide reliable services, we do not
              guarantee uninterrupted availability, complete accuracy, or that
              the platform will always be free from errors or vulnerabilities.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To the fullest extent permitted by applicable law, NextGrid,
              NextGrid Nexus, and its affiliates shall not be liable for
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of the platform.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Termination
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We reserve the right to suspend or terminate access to our
              services at our discretion if these Terms are violated or if
              necessary to protect our platform, users, or legal obligations.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Changes to These Terms
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We may revise these Terms from time to time. Updated versions will
              be published on this page, and continued use of our services
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have any questions regarding these Terms of Service,
              please contact our team.
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
              NextGrid Nexus is committed to maintaining a secure, transparent,
              and trustworthy platform for our global community. These Terms of
              Service help ensure a fair, safe, and innovative experience for
              every visitor and customer.
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
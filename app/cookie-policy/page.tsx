import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Cookie Policy",

  description:
    "Read the Cookie Policy for NextGrid Nexus to understand how we use cookies, analytics, preferences, security technologies, and similar tracking technologies across our Fashion Technology platform.",

  keywords: [
    "Cookie Policy",
    "Cookies",
    "Browser Cookies",
    "Tracking Technologies",
    "Analytics Cookies",
    "Functional Cookies",
    "Performance Cookies",
    "Marketing Cookies",
    "Privacy",
    "NextGrid",
    "NextGrid Nexus",
    "Fashion Technology",
    "Website Cookies",
    "Cookie Settings",
    "User Preferences",
    "Website Security",
  ],

  alternates: {
    canonical: "/cookie-policy",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cookie Policy | NextGrid Nexus",
    description:
      "Learn how NextGrid Nexus uses cookies and similar technologies to improve user experience, website performance, and security.",
    url: "https://nextgrid-nexus.vercel.app/cookie-policy",
    siteName: "NextGrid Nexus",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | NextGrid Nexus",
    description:
      "Understand how cookies are used across the NextGrid Nexus platform.",
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
            Cookie Policy
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            This Cookie Policy explains how <strong>NextGrid Nexus</strong>
            uses cookies and similar technologies to enhance your browsing
            experience, improve website performance, analyze traffic, and
            provide secure and personalized services across our Fashion
            Technology platform.
          </p>
        </div>

        <div className="space-y-10">

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              What Are Cookies?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Cookies are small text files stored on your computer, smartphone,
              or other device when you visit a website. They help websites
              recognize returning visitors, remember preferences, improve
              functionality, and provide a smoother browsing experience.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Why We Use Cookies
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              NextGrid Nexus uses cookies to provide reliable services, improve
              website performance, enhance security, remember user preferences,
              and better understand how visitors interact with our platform.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              <li>Improve website functionality.</li>
              <li>Remember language and user preferences.</li>
              <li>Enhance website performance.</li>
              <li>Analyze visitor behavior and traffic.</li>
              <li>Protect against fraud and malicious activity.</li>
              <li>Maintain secure user sessions.</li>
              <li>Support future personalization features.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Types of Cookies We Use
            </h2>

            <div className="mt-8 space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Essential Cookies
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  These cookies are necessary for the website to function
                  properly. They enable security features, navigation, and core
                  website functionality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Performance Cookies
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  Performance cookies collect anonymous information that helps
                  us understand how visitors use our website so we can improve
                  speed, usability, and reliability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Functional Cookies
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  These cookies remember your preferences, language settings,
                  and personalized options to improve your browsing experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Analytics Cookies
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  Analytics technologies help us understand website traffic,
                  identify popular pages, and continuously improve our digital
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Future Marketing Cookies
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  If marketing features are introduced in the future, cookies
                  may be used to deliver more relevant content and promotional
                  experiences. Any such use will comply with applicable privacy
                  regulations.
                </p>
              </div>

            </div>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Some features of our website may rely on trusted third-party
              providers, such as analytics, hosting, security, embedded media,
              or performance services. These providers may also use cookies in
              accordance with their own privacy policies.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Managing Cookies
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Most web browsers allow you to control, disable, or delete
              cookies through browser settings. Please note that disabling some
              cookies may affect the functionality and performance of certain
              features on our website.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Changes to This Policy
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We may update this Cookie Policy periodically to reflect changes
              in our services, technology, or legal requirements. Updates will
              be published on this page with a revised effective date.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you have any questions regarding this Cookie Policy or our use
              of cookies and similar technologies, please contact our support
              team.
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
              Transparency & Trust
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              At NextGrid Nexus, transparency is one of our core values. We are
              committed to providing clear information about how data and
              technologies like cookies are used to deliver a secure,
              innovative, and user-friendly Fashion Technology experience.
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
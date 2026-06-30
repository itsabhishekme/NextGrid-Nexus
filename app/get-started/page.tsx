import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Get Started",

  description:
    "Create your NextGrid Nexus account and begin exploring Fashion Technology, Artificial Intelligence, Smart Fabrics, Wearable Technology, Digital Fashion, developer resources, and innovative digital experiences.",

  keywords: [
    "NextGrid Nexus",
    "Get Started",
    "Create Account",
    "Register",
    "Sign Up",
    "Fashion Technology",
    "Artificial Intelligence",
    "Developer Platform",
    "Digital Fashion",
    "Innovation",
    "Wearable Technology",
    "Smart Fabrics",
  ],

  alternates: {
    canonical: "/get-started",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Get Started | NextGrid Nexus",
    description:
      "Join NextGrid Nexus and begin your journey into Fashion Technology and Artificial Intelligence.",
    url: "https://nextgrid-nexus.vercel.app/get-started",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Get Started",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Get Started | NextGrid Nexus",
    description:
      "Create your NextGrid Nexus account today.",
    images: ["/images/hero.jpg"],
  },
};

const benefits = [
  {
    title: "Personal Dashboard",
    description:
      "Manage your profile, projects, saved collections, and personalized recommendations.",
  },
  {
    title: "Developer Resources",
    description:
      "Access APIs, SDKs, documentation, tutorials, and technical guides.",
  },
  {
    title: "Research & Innovation",
    description:
      "Explore cutting-edge research, AI innovations, and Fashion Technology advancements.",
  },
  {
    title: "Exclusive Updates",
    description:
      "Receive product announcements, newsletters, beta features, and industry insights.",
  },
];

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}

          <div>

            <span className="rounded-full bg-cyan-600/20 px-5 py-2 text-sm font-semibold text-cyan-300">
              Welcome to NextGrid Nexus
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Get
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Started Today
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Join the NextGrid Nexus ecosystem and explore the future of
              Fashion Technology, Artificial Intelligence, Smart Fabrics,
              Wearable Technology, Digital Fashion, and innovative digital
              experiences.
            </p>

            <div className="mt-12 grid gap-6">

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Registration Form */}

          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl backdrop-blur">

              <h2 className="text-3xl font-bold text-white">
                Create Your Account
              </h2>

              <p className="mt-3 text-slate-400">
                Join NextGrid Nexus in just a few steps.
              </p>

              <form className="mt-10 space-y-6">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    placeholder="Create a secure password"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Confirm Password
                  </label>

                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-slate-400">

                  <input
                    type="checkbox"
                    className="mt-1 rounded border-slate-700"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms-of-service"
                      className="text-violet-400 hover:text-violet-300"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-violet-400 hover:text-violet-300"
                    >
                      Privacy Policy
                    </Link>.
                  </span>

                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-violet-600 py-4 font-bold text-white transition hover:bg-violet-700"
                >
                  Create Account
                </button>

              </form>

              <div className="my-8 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-700"></div>

                <span className="text-sm text-slate-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-700"></div>

              </div>

              <button className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 font-semibold text-white transition hover:bg-slate-700">
                Continue with Google
              </button>

              <p className="mt-8 text-center text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-violet-400 hover:text-violet-300"
                >
                  Sign In
                </Link>
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
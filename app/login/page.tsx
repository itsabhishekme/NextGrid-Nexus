import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Login",

  description:
    "Securely sign in to your NextGrid Nexus account. Access your dashboard, AI-powered fashion tools, developer resources, research, and personalized digital experiences.",

  keywords: [
    "NextGrid Nexus Login",
    "Login",
    "Sign In",
    "Fashion Technology",
    "Artificial Intelligence",
    "User Dashboard",
    "Developer Portal",
    "Customer Login",
    "Digital Fashion",
    "Authentication",
    "Secure Login",
  ],

  alternates: {
    canonical: "/login",
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "Login | NextGrid Nexus",
    description:
      "Access your secure NextGrid Nexus account and personalized dashboard.",
    url: "https://nextgrid-nexus.vercel.app/login",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Nexus Login",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Login | NextGrid Nexus",
    description:
      "Secure login for the NextGrid Nexus platform.",
    images: ["/images/hero.jpg"],
  },
};

const features = [
  {
    title: "Secure Authentication",
    description:
      "Enterprise-grade authentication with encrypted sessions and secure account protection.",
  },
  {
    title: "Personal Dashboard",
    description:
      "Access your saved projects, collections, AI tools, and personalized workspace.",
  },
  {
    title: "Developer Access",
    description:
      "Manage API keys, documentation, SDKs, and developer resources from one dashboard.",
  },
  {
    title: "Research Portal",
    description:
      "Explore innovation projects, research publications, and emerging technologies.",
  },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>

            <span className="rounded-full bg-violet-600/20 px-5 py-2 text-sm font-semibold text-violet-300">
              Welcome Back
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Sign in to
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NextGrid Nexus
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Access your personalized dashboard, AI-powered fashion tools,
              developer resources, research, innovation projects, and
              intelligent digital experiences.
            </p>

            <div className="mt-12 grid gap-6">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Login Form */}

          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl backdrop-blur">

              <h2 className="text-3xl font-bold text-white">
                Login
              </h2>

              <p className="mt-3 text-slate-400">
                Enter your credentials to continue.
              </p>

              <form className="mt-10 space-y-6">

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
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                  />
                </div>

                <div className="flex items-center justify-between">

                  <label className="flex items-center gap-2 text-sm text-slate-400">

                    <input
                      type="checkbox"
                      className="rounded border-slate-700"
                    />

                    Remember me

                  </label>

                  <Link
                    href="#"
                    className="text-sm text-violet-400 hover:text-violet-300"
                  >
                    Forgot Password?
                  </Link>

                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-violet-600 py-4 font-bold text-white transition hover:bg-violet-700"
                >
                  Sign In
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
                Don't have an account?{" "}
                <Link
                  href="/get-started"
                  className="font-semibold text-violet-400 hover:text-violet-300"
                >
                  Get Started
                </Link>
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
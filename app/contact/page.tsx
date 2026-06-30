import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgrid-nexus.vercel.app"),

  title: "Contact",

  description:
    "Get in touch with NextGrid Nexus. Contact our team for partnerships, business inquiries, media, support, developer collaboration, AI Fashion solutions, and Fashion Technology innovation.",

  keywords: [
    "Contact NextGrid Nexus",
    "Contact",
    "Fashion Technology",
    "AI Fashion",
    "Business Inquiry",
    "Customer Support",
    "Developer Support",
    "Partnership",
    "Innovation",
    "Artificial Intelligence",
    "Digital Fashion",
  ],

  alternates: {
    canonical: "/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact | NextGrid Nexus",
    description:
      "Reach the NextGrid Nexus team for support, partnerships, innovation, and business opportunities.",
    url: "https://nextgrid-nexus.vercel.app/contact",
    siteName: "NextGrid Nexus",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact NextGrid Nexus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | NextGrid Nexus",
    description:
      "Connect with the NextGrid Nexus team.",
    images: ["/images/hero.jpg"],
  },
};

const contactCards = [
  {
    title: "Business Partnerships",
    description:
      "Discuss collaborations, strategic partnerships, investment opportunities, and enterprise solutions.",
  },
  {
    title: "Customer Support",
    description:
      "Receive assistance with products, services, technical issues, and account-related questions.",
  },
  {
    title: "Developers",
    description:
      "Contact our developer relations team regarding APIs, SDKs, integrations, and technical documentation.",
  },
  {
    title: "Media & Press",
    description:
      "Connect with our communications team for interviews, media inquiries, and company announcements.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-7xl">
              We'd Love to
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you're interested in Fashion Technology,
              Artificial Intelligence, partnerships, enterprise
              solutions, research, or simply have a question,
              our team is ready to help.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Cards */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-2">

            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-violet-500"
              >
                <h2 className="text-2xl font-bold text-white">
                  {card.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Form */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <h2 className="text-3xl font-bold text-white">
                Send Us a Message
              </h2>

              <p className="mt-4 text-slate-400">
                Fill out the form below and our team will respond as soon as possible.
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
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-violet-500"
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
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-violet-500"
                  />

                </div>

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Business Inquiry"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-violet-500"
                  />

                </div>

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-violet-500"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Information */}

            <div>

              <h2 className="text-3xl font-bold text-white">
                Contact Information
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                We're committed to helping businesses, developers,
                researchers, and customers build the future of Fashion
                Technology together.
              </p>

              <div className="mt-10 space-y-8">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Email
                  </h3>
                  <p className="mt-2 text-slate-400">
                    contact@nextgridnexus.com
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Business Hours
                  </h3>
                  <p className="mt-2 text-slate-400">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Resources
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-4">

                    <Link
                      href="/resources/support"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Support
                    </Link>

                    <Link
                      href="/resources/documentation"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Documentation
                    </Link>

                    <Link
                      href="/resources/developers"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Developers
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Collection", href: "#collection" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = [
    "Artificial Intelligence",
    "Smart Fabrics",
    "Wearable Technology",
    "Augmented Reality",
    "Virtual Reality",
    "3D Fashion Design",
  ];

  const resources = [
    "Blog",
    "Research",
    "Innovation",
    "Case Studies",
    "Developers",
    "Documentation",
    "Careers",
    "Support",
  ];

  const socialLinks = [
    {
      icon: "🌐",
      name: "Website",
      url: "#",
    },
    {
      icon: "📘",
      name: "Facebook",
      url: "#",
    },
    {
      icon: "📸",
      name: "Instagram",
      url: "#",
    },
    {
      icon: "🐦",
      name: "Twitter",
      url: "#",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      url: "#",
    },
    {
      icon: "▶️",
      name: "YouTube",
      url: "#",
    },
  ];

  const stats = [
    {
      value: "250+",
      title: "Fashion Projects",
    },
    {
      value: "120+",
      title: "Global Clients",
    },
    {
      value: "35+",
      title: "Countries",
    },
    {
      value: "98%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Top CTA */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 p-12 text-center">

            <h2 className="text-5xl font-extrabold text-white">
              Shape the Future of Fashion Technology
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-violet-100">
              Discover how artificial intelligence, digital fashion,
              sustainable innovation, wearable technology, and smart textiles
              are transforming the future of design.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">

              <button className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105">
                Start Your Journey
              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700">
                Explore Collections
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="border-b border-slate-800">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="text-center"
            >

              <h3 className="text-5xl font-bold text-violet-400">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Main Footer */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* ================= Brand ================= */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2 shadow-xl">
                  <Image
                    src="/logo.png"
                    alt="NextGrid Nexus"
                    width={70}
                    height={70}
                    priority
                    className="rounded-xl bg-white p-2"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    NextGrid Nexus
                  </h2>

                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-violet-300">
                    Fashion • AI • Innovation
                  </p>
                </div>

              </div>

              <p className="mt-8 leading-8 text-gray-300">
                NextGrid Nexus is a next-generation Fashion Technology platform
                exploring Artificial Intelligence, Sustainable Fashion, Smart
                Textiles, Wearable Technology, Digital Experiences, and Future
                Innovation.
              </p>

              <div className="mt-8 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-xl text-white transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 transition hover:text-white"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-violet-500 transition-all group-hover:w-5"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Technologies ================= */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Technologies
            </h3>

            <ul className="space-y-5">
              {technologies.map((item) => (
                <li key={item}>
                  <span className="group flex cursor-pointer items-center text-gray-400 transition hover:text-cyan-400">
                    <span className="mr-3 h-2 w-2 rounded-full bg-cyan-400 transition-all group-hover:w-5"></span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Resources ================= */}
          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-5">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-400 transition hover:text-violet-300"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-violet-400 transition-all group-hover:w-5"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Newsletter */}

      <section className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="rounded-3xl bg-slate-900 p-10">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <h2 className="text-4xl font-bold text-white">
                  Subscribe to Our Newsletter
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  Stay updated with the latest innovations in Fashion
                  Technology, Artificial Intelligence, Smart Fabrics,
                  Sustainability, and Digital Fashion.
                </p>

              </div>

              <div>

                <form className="flex flex-col gap-4 sm:flex-row">

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-violet-500"
                  />

                  <button
                    type="submit"
                    className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white transition hover:bg-violet-700"
                  >
                    Subscribe
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom Footer */}

      <section className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} NextGrid Nexus. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              Cookie Policy
            </Link>

            <Link
              href="/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              Accessibility
            </Link>

          </div>

        </div>

      </section>

    </footer>
  );
}

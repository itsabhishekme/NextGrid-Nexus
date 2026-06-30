"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Technology",
    href: "/technology",
  },
  {
    title: "Collection",
    href: "/collection",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${isScrolled
            ? "bg-[#172554]/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20"
            : "bg-[#172554]"
          }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* ================= LOGO ================= */}

          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src="/logo.png"
                alt="NextGrid Nexus Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                NextGrid Nexus
              </h1>

              <p className="text-xs uppercase tracking-[0.35em] text-blue-200">
                Fashion Technology
              </p>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative text-sm font-semibold tracking-wide text-slate-200 transition duration-300 hover:text-cyan-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* ================= BUTTONS ================= */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link
              href="/login"
              className="rounded-xl border border-blue-400/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl bg-white/10 p-3 text-white transition hover:bg-white/20 lg:hidden"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed left-0 top-24 z-40 w-full overflow-hidden bg-[#172554] transition-all duration-500 lg:hidden ${mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-3 px-6 py-8">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-5 py-4 text-lg font-medium text-white transition hover:bg-white/10 hover:text-cyan-300"
            >
              {item.title}
            </a>
          ))}

          <div className="mt-8 space-y-4">
            <button className="w-full rounded-xl border border-blue-400/40 px-6 py-4 text-white transition hover:bg-white/10">
              Login
            </button>

            <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
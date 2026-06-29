"use client";

import { useEffect, useState } from "react";

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
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Technology",
      href: "#technology",
    },
    {
      title: "Collection",
      href: "#collection",
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 shadow-xl backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl font-bold text-white shadow-lg">
              NG
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                NextGrid Nexus
              </h1>

              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                Fashion Technology
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-semibold text-slate-200 transition hover:text-cyan-400"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
              Login
            </button>

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105">
              Get Started
            </button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl bg-slate-800 p-3 text-white lg:hidden"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="fixed left-0 top-[88px] z-40 w-full bg-slate-950 lg:hidden">

          <div className="space-y-2 px-6 py-8">

            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-4 text-lg font-medium text-white transition hover:bg-slate-800"
              >
                {item.title}
              </a>
            ))}

            <div className="mt-8 space-y-4">

              <button className="w-full rounded-xl border border-slate-600 px-6 py-4 text-white">
                Login
              </button>

              <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white">
                Get Started
              </button>

            </div>

          </div>

        </div>
      )}

      {/* Spacer */}

      <div className="h-24"></div>
    </>
  );
}

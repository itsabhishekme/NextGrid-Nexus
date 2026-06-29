"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactCards = [
    {
      title: "Office",
      icon: "🏢",
      value: "NextGrid Nexus Headquarters",
      description: "Innovation District, Fashion Tech Center",
    },
    {
      title: "Email",
      icon: "📧",
      value: "hello@nextgridnexus.com",
      description: "We usually reply within 24 hours.",
    },
    {
      title: "Phone",
      icon: "📞",
      value: "+1 (800) 123-4567",
      description: "Monday - Friday | 9:00 AM - 6:00 PM",
    },
    {
      title: "Support",
      icon: "💬",
      value: "24/7 Customer Assistance",
      description: "Our support specialists are always ready.",
    },
  ];

  const services = [
    "AI Fashion Design",
    "Smart Wearable Technology",
    "Fashion Consultation",
    "Digital Collection Development",
    "Sustainable Manufacturing",
    "Virtual Fashion Solutions",
    "Brand Collaboration",
    "Enterprise Solutions",
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-100 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Let's Build the Future of Fashion
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We'd love to hear your ideas, answer your questions, and discuss how
            fashion technology can help transform your next project.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mb-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 text-5xl">{card.icon}</div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="font-semibold text-violet-600">
                {card.value}
              </p>

              <p className="mt-3 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        {/* Main Grid */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* =========================
              Contact Form
           ========================= */}

          <section
            aria-labelledby="contact-form-heading"
            className="rounded-3xl bg-white p-8 shadow-xl md:p-10 lg:p-12"
          >
            {/* Header */}

            <header className="mb-10">
              <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Contact NextGrid Nexus
              </span>

              <h3
                id="contact-form-heading"
                className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
              >
                Send Us a Message
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                We'd love to hear from you. Whether you have questions about fashion
                technology, artificial intelligence, partnerships, media inquiries,
                research collaborations, or business opportunities, our team is here to
                help.
              </p>

              <p className="mt-3 leading-8 text-gray-600">
                Complete the contact form below and we'll respond as soon as possible.
              </p>
            </header>

            {/* Success Message */}

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-8 rounded-2xl border border-green-300 bg-green-50 p-5 text-green-700"
              >
                <p className="font-semibold">
                  ✅ Your message has been submitted successfully.
                </p>

                <p className="mt-2 text-sm">
                  Thank you for contacting NextGrid Nexus. We'll review your inquiry and
                  get back to you shortly.
                </p>
              </div>
            )}

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
              noValidate
            >
              {/* Name */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Last Name *
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Email & Phone */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Company */}

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Company / Organization
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 p-4 leading-8 transition focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-100"
                />

                <p className="mt-2 text-sm text-gray-500">
                  Please provide as much detail as possible so we can assist you
                  efficiently.
                </p>
              </div>

              {/* Privacy Notice */}

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm leading-7 text-gray-600">
                  Your information will only be used to respond to your inquiry. We
                  respect your privacy and do not sell or share your personal information
                  with third parties.
                </p>
              </div>

              {/* Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300"
              >
                Send Message
              </button>
            </form>

            {/* SEO Content */}

            <footer className="mt-10 border-t border-gray-200 pt-8">
              <h4 className="text-xl font-semibold text-gray-900">
                Let's Build the Future Together
              </h4>

              <p className="mt-4 leading-8 text-gray-600">
                NextGrid Nexus collaborates with fashion brands, AI startups, technology
                companies, retailers, manufacturers, designers, researchers, investors,
                and innovators worldwide. If you're interested in partnerships,
                consulting, media opportunities, or digital transformation, we'd be happy
                to connect and explore new possibilities.
              </p>
            </footer>
          </section>

          {/* Right Panel */}

          <div>

            <div className="rounded-3xl bg-gradient-to-br from-violet-700 to-cyan-600 p-10 text-white shadow-xl">

              <h3 className="mb-6 text-3xl font-bold">
                Why Partner With NextGrid Nexus?
              </h3>

              <p className="mb-8 leading-8 text-violet-100">
                We combine technology, creativity, and sustainability to
                develop modern fashion experiences for brands, startups,
                enterprises, and creative professionals around the world.
              </p>

              <div className="space-y-4">

                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-xl bg-white/10 p-4"
                  >
                    <span className="text-xl">✔</span>
                    <span>{service}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* Statistics */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <h4 className="text-5xl font-bold text-violet-600">
                  120+
                </h4>
                <p className="mt-3 text-gray-600">
                  Global Clients
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <h4 className="text-5xl font-bold text-cyan-600">
                  350+
                </h4>
                <p className="mt-3 text-gray-600">
                  Completed Projects
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <h4 className="text-5xl font-bold text-green-600">
                  98%
                </h4>
                <p className="mt-3 text-gray-600">
                  Client Satisfaction
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <h4 className="text-5xl font-bold text-pink-600">
                  24/7
                </h4>
                <p className="mt-3 text-gray-600">
                  Technical Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

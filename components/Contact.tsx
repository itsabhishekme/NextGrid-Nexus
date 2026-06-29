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

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            {submitted && (
              <div className="mb-8 rounded-xl border border-green-300 bg-green-100 p-5 text-green-700">
                Your message has been submitted successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="rounded-xl border p-4 outline-none transition focus:border-violet-600"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="rounded-xl border p-4 outline-none transition focus:border-violet-600"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border p-4 outline-none transition focus:border-violet-600"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-xl border p-4 outline-none transition focus:border-violet-600"
                />

              </div>

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none transition focus:border-violet-600"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none transition focus:border-violet-600"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none transition focus:border-violet-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-700"
              >
                Send Message
              </button>

            </form>

          </div>

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

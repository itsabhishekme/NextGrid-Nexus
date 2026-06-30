export default function About() {
  const innovations = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description:
        "AI is transforming fashion by accelerating design, predicting trends, and creating highly personalized shopping experiences. Designers can explore thousands of concepts within minutes while maintaining creative control.",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Smart Fabrics",
      description:
        "Smart textiles integrate sensors and advanced materials that respond to temperature, movement, moisture, and environmental conditions, bringing intelligence directly into everyday clothing.",
      icon: "🧵",
    },
    {
      id: 3,
      title: "Wearable Technology",
      description:
        "Modern wearable devices combine health monitoring, connectivity, and style into elegant garments and accessories that seamlessly fit into daily life.",
      icon: "⌚",
    },
    {
      id: 4,
      title: "Sustainable Fashion",
      description:
        "Technology enables responsible manufacturing, recycled materials, circular production systems, and transparent supply chains that reduce environmental impact.",
      icon: "🌱",
    },
  ];



  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* =========================
    About NextGrid Nexus
========================= */}

        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative overflow-hidden bg-white py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}

            <header className="mx-auto mb-20 max-w-4xl text-center">
              <span className="inline-flex items-center rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold tracking-wide text-violet-700">
                About NextGrid Nexus
              </span>

              <h2
                id="about-heading"
                className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
              >
                Where Fashion Meets Technology
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                NextGrid Nexus is a next-generation fashion technology platform focused
                on the convergence of artificial intelligence, digital innovation,
                sustainable manufacturing, immersive commerce, wearable technology,
                smart textiles, and future retail experiences.
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                Our mission is to educate, inspire, and connect designers, developers,
                entrepreneurs, researchers, startups, brands, and technology
                enthusiasts who are shaping the future of the global fashion industry
                through innovation and intelligent digital solutions.
              </p>
            </header>

            {/* Main Content */}

            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left */}

              <article>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                  Our Vision
                </h3>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  Fashion is evolving beyond fabrics and traditional manufacturing.
                  Artificial intelligence, cloud computing, computer vision, robotics,
                  blockchain, 3D design, and immersive technologies are redefining how
                  clothing is imagined, created, manufactured, marketed, and delivered
                  to consumers around the world.
                </p>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  At NextGrid Nexus, we believe technology should empower creativity
                  rather than replace it. By combining intelligent software with human
                  imagination, brands can build more personalized customer experiences,
                  reduce production waste, improve operational efficiency, and create
                  sustainable business models for the future.
                </p>

                <p className="mb-6 text-lg leading-8 text-gray-600">
                  We explore emerging innovations across AI-assisted fashion design,
                  predictive analytics, digital twins, virtual garments, smart wearable
                  devices, automated manufacturing, circular fashion, augmented reality,
                  mixed reality, and next-generation e-commerce experiences.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  Our long-term vision is to become one of the world's leading knowledge
                  platforms dedicated to fashion technology, helping businesses,
                  innovators, startups, and creators embrace digital transformation with
                  confidence.
                </p>
              </article>

              {/* Right */}

              <aside className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 p-10 text-white shadow-2xl">
                <h3 className="mb-6 text-3xl font-bold">
                  Why Fashion Technology?
                </h3>

                <p className="mb-8 text-lg leading-8 text-violet-100">
                  Technology is transforming every stage of the fashion ecosystem—from
                  product design and manufacturing to logistics, retail, customer
                  engagement, and sustainability.
                </p>

                <ul className="space-y-5 text-lg">
                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>AI-powered fashion design and creative assistance</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Predictive trend forecasting using machine learning</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Smart textiles and connected wearable technologies</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Sustainable manufacturing and circular fashion systems</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Digital clothing, NFTs, and virtual fashion collections</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Augmented reality shopping and virtual try-on solutions</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>3D product visualization and digital twin technology</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Supply chain optimization through intelligent automation</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Hyper-personalized shopping experiences powered by AI</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span aria-hidden="true">✔</span>
                    <span>Future-ready retail powered by immersive digital experiences</span>
                  </li>
                </ul>
              </aside>
            </div>

            {/* Bottom Section */}

            <div className="mx-auto mt-24 max-w-5xl rounded-3xl border border-violet-100 bg-violet-50 p-10">
              <h3 className="mb-6 text-center text-3xl font-bold text-gray-900">
                Our Commitment
              </h3>

              <p className="text-center text-lg leading-8 text-gray-600">
                NextGrid Nexus is committed to publishing insightful, trustworthy, and
                future-focused content covering fashion innovation, artificial
                intelligence, sustainability, digital commerce, smart manufacturing,
                wearable technology, and emerging consumer experiences. We strive to
                bridge the gap between fashion and technology while supporting the next
                generation of creators and innovators.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
             Innovation Pillars
           ========================= */}

        <section
          id="innovation-pillars"
          aria-labelledby="innovation-heading"
          className="mt-28"
        >
          {/* Section Header */}

          <header className="mx-auto mb-16 max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-700">
              Future of Fashion Technology
            </span>

            <h3
              id="innovation-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl"
            >
              Innovation Pillars
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              NextGrid Nexus explores the breakthrough technologies transforming the
              global fashion industry. From artificial intelligence and smart textiles
              to immersive commerce and sustainable manufacturing, these innovation
              pillars represent the foundation of tomorrow's digital fashion ecosystem.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Our platform helps designers, developers, brands, startups, retailers,
              manufacturers, and technology enthusiasts understand how emerging digital
              innovations are redefining creativity, production, shopping experiences,
              and customer engagement.
            </p>
          </header>

          {/* Innovation Grid */}

          <div
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
            role="list"
          >
            {innovations.map((item) => (
              <article
                key={item.id}
                role="listitem"
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:border-violet-300 hover:shadow-2xl"
              >
                {/* Icon */}

                <div
                  aria-hidden="true"
                  className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110"
                >
                  {item.icon}
                </div>

                {/* Title */}

                <h4 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>

                {/* Divider */}

                <div className="my-6 h-px bg-gray-200" />

                {/* Benefits */}

                <ul className="space-y-3 text-sm leading-7 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✔</span>
                    <span>Accelerates digital transformation</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✔</span>
                    <span>Improves sustainability and efficiency</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✔</span>
                    <span>Enhances customer experiences</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✔</span>
                    <span>Supports innovation-driven business growth</span>
                  </li>
                </ul>

                {/* Footer */}

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <p className="text-sm font-medium text-violet-700">
                    Building the future of fashion technology.
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Content */}

          <div className="mx-auto mt-20 max-w-5xl rounded-3xl bg-gradient-to-r from-violet-50 via-white to-cyan-50 p-10">
            <h4 className="text-center text-3xl font-bold text-gray-900">
              Driving Innovation Across the Fashion Industry
            </h4>

            <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-600">
              Every innovation showcased by NextGrid Nexus contributes to a smarter,
              more connected, and sustainable fashion ecosystem. We highlight
              technologies that empower businesses to streamline design workflows,
              optimize production, improve supply chain transparency, personalize
              customer experiences, reduce environmental impact, and unlock entirely new
              digital business models.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-600">
              As artificial intelligence, automation, wearable technology, blockchain,
              augmented reality, virtual reality, and advanced materials continue to
              evolve, NextGrid Nexus remains committed to delivering trustworthy,
              educational, and future-focused insights for the next generation of
              fashion innovators.
            </p>
          </div>
        </section>

        {/* Quote */}

        <div className="mt-24 rounded-3xl bg-gray-900 px-10 py-16 text-center text-white">

          <h3 className="text-4xl font-bold">
            "Innovation is the Fabric of the Future."
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            The future of fashion is intelligent, connected, sustainable, and
            personalized. Every innovation—from AI-driven design to smart
            fabrics—creates opportunities for a more creative and responsible
            industry.
          </p>

        </div>

      </div>
    </section>
  );
}

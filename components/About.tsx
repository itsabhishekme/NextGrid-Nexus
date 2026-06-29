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

  const statistics = [
    { label: "AI Design Accuracy", value: "98%" },
    { label: "Smart Textile Innovation", value: "150+" },
    { label: "Global Fashion Partners", value: "80+" },
    { label: "Digital Collections", value: "300+" },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            About NextGrid Nexus
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Where Fashion Meets Technology
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            NextGrid Nexus explores the future of fashion through artificial
            intelligence, smart materials, immersive digital experiences, and
            sustainable innovation. We combine creativity with engineering to
            redefine how clothing is designed, produced, and experienced.
          </p>
        </div>

        {/* Mission */}

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Fashion is entering a new digital era where intelligent software,
              connected garments, and virtual experiences create limitless
              opportunities for designers and consumers alike.
            </p>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              By embracing emerging technologies, brands can improve
              sustainability, optimize manufacturing, personalize customer
              experiences, and accelerate product innovation.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              NextGrid Nexus is dedicated to showcasing these innovations while
              inspiring creators, developers, entrepreneurs, and fashion
              enthusiasts to shape tomorrow's industry.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-600 p-10 text-white shadow-xl">
            <h3 className="mb-6 text-3xl font-bold">
              Why Fashion Technology?
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✔ AI-powered fashion design</li>
              <li>✔ Predictive trend forecasting</li>
              <li>✔ Sustainable manufacturing</li>
              <li>✔ Smart wearable devices</li>
              <li>✔ Digital clothing collections</li>
              <li>✔ Virtual fitting experiences</li>
              <li>✔ Blockchain product authenticity</li>
              <li>✔ Augmented reality shopping</li>
            </ul>
          </div>

        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-5xl font-extrabold text-violet-600">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Innovation Cards */}

        <div className="mt-24">

          <div className="mb-12 text-center">

            <h3 className="text-4xl font-bold text-gray-900">
              Innovation Pillars
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              Our platform highlights the technologies shaping the next
              generation of fashion experiences.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {innovations.map((item) => (

              <div
                key={item.id}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="mb-6 text-5xl">
                  {item.icon}
                </div>

                <h4 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h4>

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

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

export default function Technology() {
  const technologies = [
    {
      id: 1,
      icon: "🤖",
      title: "Artificial Intelligence",
      subtitle: "Intelligent Fashion Design",
      description:
        "Artificial Intelligence empowers designers to create collections faster, predict trends with greater accuracy, personalize customer experiences, and automate repetitive creative workflows while preserving artistic vision.",
      features: [
        "Trend Forecasting",
        "AI Design Assistant",
        "Smart Recommendations",
        "Predictive Analytics",
      ],
      color: "from-violet-600 to-fuchsia-600",
    },
    {
      id: 2,
      icon: "🧵",
      title: "Smart Fabrics",
      subtitle: "Next Generation Textiles",
      description:
        "Modern textiles integrate intelligent materials capable of sensing environmental changes, regulating temperature, monitoring movement, and delivering enhanced comfort for everyday wear.",
      features: [
        "Temperature Regulation",
        "Adaptive Materials",
        "Sensor Integration",
        "Energy Efficient",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      icon: "⌚",
      title: "Wearable Technology",
      subtitle: "Connected Lifestyle",
      description:
        "Wearable devices merge technology with fashion by incorporating biometric sensors, wireless communication, and health monitoring into stylish garments and accessories.",
      features: [
        "Health Monitoring",
        "Bluetooth Connectivity",
        "Fitness Tracking",
        "Mobile Integration",
      ],
      color: "from-emerald-500 to-green-700",
    },
    {
      id: 4,
      icon: "🥽",
      title: "Augmented Reality",
      subtitle: "Virtual Try-On",
      description:
        "AR technology enables customers to preview garments digitally, improving confidence before purchase while reducing returns and enhancing the online shopping experience.",
      features: [
        "Virtual Fitting",
        "3D Visualization",
        "Interactive Shopping",
        "Real-Time Preview",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      icon: "🌍",
      title: "Sustainable Innovation",
      subtitle: "Eco-Friendly Production",
      description:
        "Technology-driven sustainability focuses on circular production, recycled materials, transparent supply chains, and resource optimization to reduce environmental impact.",
      features: [
        "Carbon Reduction",
        "Eco Materials",
        "Zero Waste",
        "Circular Economy",
      ],
      color: "from-green-500 to-lime-600",
    },
    {
      id: 6,
      icon: "🛰️",
      title: "Digital Fashion",
      subtitle: "Virtual Collections",
      description:
        "Digital fashion extends beyond physical garments, enabling creators to design virtual clothing for gaming, social media, immersive environments, and the metaverse.",
      features: [
        "NFT Ready",
        "Metaverse Fashion",
        "3D Garments",
        "Digital Commerce",
      ],
      color: "from-indigo-600 to-violet-700",
    },
  ];

  return (
    <section
      id="technology"
      className="bg-gradient-to-b from-slate-100 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Technology Platform
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Fashion Innovation Powered by Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover the advanced technologies revolutionizing fashion through
            Artificial Intelligence, Smart Textiles, Wearable Devices,
            Sustainability, and immersive Digital Experiences.
          </p>

        </div>

        {/* Technology Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {technologies.map((tech) => (

            <div
              key={tech.id}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} text-4xl text-white`}
              >
                {tech.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {tech.title}
              </h3>

              <p className="mt-2 text-lg font-semibold text-violet-600">
                {tech.subtitle}
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                {tech.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {tech.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3"
                  >
                    <span className="text-green-600">✔</span>

                    <span className="font-medium text-slate-700">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Feature Banner */}

        <div className="mt-24 rounded-[36px] bg-slate-900 p-12 text-white">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <h3 className="text-4xl font-extrabold">
                Building the Future of Fashion
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                NextGrid Nexus combines emerging technologies with modern design
                principles to create intelligent fashion ecosystems that are
                sustainable, personalized, immersive, and globally connected.
              </p>

              <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
                Discover Our Technology
              </button>

            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-800 p-6">
                <div className="text-4xl">⚡</div>
                <h4 className="mt-4 text-xl font-bold">
                  Faster Innovation
                </h4>
                <p className="mt-3 text-slate-400">
                  Accelerate product development with AI-assisted workflows.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6">
                <div className="text-4xl">📊</div>
                <h4 className="mt-4 text-xl font-bold">
                  Smart Analytics
                </h4>
                <p className="mt-3 text-slate-400">
                  Make informed decisions using predictive insights and data.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6">
                <div className="text-4xl">🌱</div>
                <h4 className="mt-4 text-xl font-bold">
                  Sustainability
                </h4>
                <p className="mt-3 text-slate-400">
                  Reduce waste through digital manufacturing and eco materials.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6">
                <div className="text-4xl">🚀</div>
                <h4 className="mt-4 text-xl font-bold">
                  Future Ready
                </h4>
                <p className="mt-3 text-slate-400">
                  Prepare your brand for the next generation of fashion
                  technology.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

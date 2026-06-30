export default function Hero() {
  const highlights = [
    {
      id: 1,
      value: "500+",
      title: "Fashion Concepts",
    },
    {
      id: 2,
      value: "150+",
      title: "AI Innovations",
    },
    {
      id: 3,
      value: "98%",
      title: "Client Satisfaction",
    },
    {
      id: 4,
      value: "35+",
      title: "Global Partners",
    },
  ];

  const technologies = [
    "Artificial Intelligence",
    "Smart Fabrics",
    "Wearable Technology",
    "Digital Fashion",
    "3D Design",
    "Virtual Reality",
    "Augmented Reality",
    "Sustainable Materials",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"
    >
      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600 blur-3xl"></div>

        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"></div>

        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-pink-600 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <span className="inline-flex rounded-full bg-violet-600/20 px-5 py-2 text-sm font-semibold text-violet-300 ring-1 ring-violet-500">
              🚀 Future of Fashion Technology
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
              Fashion
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Meets
              </span>
              Artificial Intelligence
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Welcome to <strong>NextGrid Nexus</strong>, where cutting-edge
              technology transforms fashion into intelligent, sustainable,
              interactive, and personalized experiences. Explore AI-powered
              design, wearable technology, smart textiles, and the future of
              digital fashion.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700">
                Explore Innovation
              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900">
                View Collection
              </button>

            </div>

            {/* Technology Tags */}

            <div className="mt-12 flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">

              <img
                src="/images/hero.jpg"
                alt="Fashion Technology"
                className="h-[650px] w-full rounded-[32px] object-cover"
              />

            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-10 bottom-20 rounded-2xl bg-white p-6 shadow-2xl">

              <h3 className="text-4xl font-bold text-cyan-600">
                3D
              </h3>

              <p className="mt-2 text-gray-700">
                Virtual Fashion Experience
              </p>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-28 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition hover:-translate-y-2"
            >

              <h2 className="text-5xl font-extrabold text-violet-400">
                {item.value}
              </h2>

              <p className="mt-3 text-slate-300">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* Feature Section */}

        <div className="mt-28 rounded-[40px] bg-white/5 p-10 backdrop-blur">

          <div className="grid gap-12 lg:grid-cols-3">

            <div>
              <div className="mb-5 text-5xl">🤖</div>

              <h3 className="text-3xl font-bold">
                AI Fashion Design
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Artificial Intelligence accelerates design workflows,
                predicts trends, and enables personalized fashion
                experiences with incredible speed and creativity.
              </p>
            </div>

            <div>
              <div className="mb-5 text-5xl">🧵</div>

              <h3 className="text-3xl font-bold">
                Smart Textiles
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Intelligent fabrics respond to heat, movement, moisture,
                and environmental changes while providing comfort and
                advanced functionality.
              </p>
            </div>

            <div>
              <div className="mb-5 text-5xl">🌍</div>

              <h3 className="text-3xl font-bold">
                Sustainable Innovation
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Future-ready manufacturing focuses on recycled materials,
                reduced waste, digital production, and environmentally
                responsible innovation.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-28 rounded-[40px] bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 px-10 py-16 text-center">

          <h2 className="text-5xl font-extrabold">
            Creating Tomorrow's Fashion Today
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-violet-100">
            Experience a new generation of fashion driven by Artificial
            Intelligence, immersive digital experiences, wearable devices,
            intelligent textiles, and sustainable innovation. NextGrid Nexus
            empowers creators, brands, and technology pioneers to build the
            future together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className="rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105">
              Discover More
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-violet-700">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

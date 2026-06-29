export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "AI Fashion Design",
      category: "Artificial Intelligence",
      image: "/images/fashion-ai.jpg",
      description:
        "Advanced AI systems generating unique fashion concepts and personalized clothing collections.",
    },
    {
      id: 2,
      title: "Smart Fabric",
      category: "Innovation",
      image: "/images/smart-fabric.jpg",
      description:
        "Next-generation textiles with integrated sensors, adaptive materials, and intelligent responses.",
    },
    {
      id: 3,
      title: "Wearable Technology",
      category: "Technology",
      image: "/images/wearable.jpg",
      description:
        "Connected clothing and wearable devices designed for comfort, health monitoring, and communication.",
    },
    {
      id: 4,
      title: "Luxury Collection",
      category: "Fashion",
      image: "/images/hero.jpg",
      description:
        "Premium fashion inspired by modern digital craftsmanship and elegant aesthetics.",
    },
    {
      id: 5,
      title: "Digital Fashion",
      category: "Virtual Design",
      image: "/images/fashion-ai.jpg",
      description:
        "Virtual garments created for immersive digital experiences, gaming, and the metaverse.",
    },
    {
      id: 6,
      title: "Future Runway",
      category: "Runway",
      image: "/images/hero.jpg",
      description:
        "Runway concepts that combine sustainability, AI, and futuristic design language.",
    },
    {
      id: 7,
      title: "Smart Wear",
      category: "Wearables",
      image: "/images/wearable.jpg",
      description:
        "Elegant smart clothing integrating technology without compromising comfort or style.",
    },
    {
      id: 8,
      title: "Eco Innovation",
      category: "Sustainability",
      image: "/images/smart-fabric.jpg",
      description:
        "Environmentally responsible materials developed through modern textile innovation.",
    },
    {
      id: 9,
      title: "Creative Studio",
      category: "Design Lab",
      image: "/images/fashion-ai.jpg",
      description:
        "An experimental studio where designers and AI collaborate to create tomorrow's fashion.",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Visual Gallery
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Fashion Technology Showcase
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Discover our curated collection of AI-powered fashion, smart
            textiles, wearable innovations, digital couture, sustainable
            materials, and futuristic runway concepts.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {galleryItems.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute bottom-8 left-8 right-8">

                    <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                      {item.category}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-200">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Feature Section */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <h3 className="text-4xl font-bold text-gray-900">
              Explore the Evolution of Fashion
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every design in our gallery represents the convergence of
              creativity, engineering, sustainability, and digital innovation.
              Fashion is no longer limited to physical garments—it now includes
              intelligent materials, immersive virtual experiences, and
              AI-assisted creativity.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              NextGrid Nexus celebrates this transformation through curated
              collections that inspire designers, developers, innovators, and
              technology enthusiasts around the world.
            </p>

            <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-700">
              Explore More
            </button>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-cyan-600 p-10 text-white shadow-2xl">

            <h3 className="mb-8 text-3xl font-bold">
              Gallery Highlights
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <span className="text-3xl">🤖</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    AI Generated Fashion
                  </h4>
                  <p className="text-violet-100">
                    Intelligent design powered by machine learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🧵</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Smart Textiles
                  </h4>
                  <p className="text-violet-100">
                    Fabrics that respond to movement and environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🥽</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Virtual Fashion
                  </h4>
                  <p className="text-violet-100">
                    Digital garments designed for immersive worlds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🌱</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Sustainable Innovation
                  </h4>
                  <p className="text-violet-100">
                    Eco-friendly materials and responsible production.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-violet-600">
              500+
            </h3>
            <p className="mt-3 text-gray-600">
              Fashion Concepts
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-600">
              120+
            </h3>
            <p className="mt-3 text-gray-600">
              Smart Products
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-green-600">
              80+
            </h3>
            <p className="mt-3 text-gray-600">
              Design Awards
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8 text-center">
            <h3 className="text-5xl font-bold text-pink-600">
              35+
            </h3>
            <p className="mt-3 text-gray-600">
              Global Exhibitions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default function Collection() {
  const collections = [
    {
      id: 1,
      title: "AI Couture",
      category: "Artificial Intelligence",
      year: "2026",
      description:
        "A luxury fashion collection generated with AI-assisted design workflows, combining creativity with advanced machine learning to produce elegant silhouettes and personalized styles.",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
      features: [
        "AI Generated Patterns",
        "Luxury Fabrics",
        "Digital Customization",
        "Smart Manufacturing",
      ],
    },
    {
      id: 2,
      title: "Smart Street",
      category: "Wearable Technology",
      year: "2026",
      description:
        "Urban fashion enhanced with embedded sensors, adaptive lighting, environmental monitoring, and seamless mobile connectivity.",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
      features: [
        "IoT Integration",
        "Temperature Control",
        "Health Monitoring",
        "Bluetooth Connectivity",
      ],
    },
    {
      id: 3,
      title: "Eco Future",
      category: "Sustainable Fashion",
      year: "2026",
      description:
        "Designed with recycled fibers and environmentally responsible production techniques to reduce waste while maintaining premium quality.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      features: [
        "Recycled Materials",
        "Zero Waste",
        "Organic Textiles",
        "Carbon Reduction",
      ],
    },
    {
      id: 4,
      title: "Virtual Wear",
      category: "Digital Fashion",
      year: "2026",
      description:
        "Exclusive clothing designed for virtual environments, gaming, social media, and immersive digital experiences.",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
      features: [
        "Metaverse Ready",
        "NFT Compatible",
        "3D Assets",
        "AR Compatible",
      ],
    },
    {
      id: 5,
      title: "Future Sports",
      category: "Performance",
      year: "2026",
      description:
        "Performance apparel powered by intelligent textiles that optimize comfort, movement, and athlete performance.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
      features: [
        "Moisture Control",
        "Smart Sensors",
        "Body Analytics",
        "Flexible Materials",
      ],
    },
    {
      id: 6,
      title: "Luxury Nexus",
      category: "Premium Collection",
      year: "2026",
      description:
        "A premium collection showcasing timeless elegance enhanced by digital craftsmanship and AI-assisted tailoring.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
      features: [
        "Luxury Finish",
        "Personal Tailoring",
        "Digital Design",
        "Exclusive Edition",
      ],
    },
  ];

  return (
    <section
      id="collection"
      className="bg-gradient-to-b from-white to-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Fashion Collections
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Digital Fashion Collection
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore futuristic collections where creativity meets artificial
            intelligence, sustainable materials, wearable technology, and
            immersive digital experiences.
          </p>

        </div>

        {/* Collection Grid */}

        <div className="grid gap-10 lg:grid-cols-3">

          {collections.map((collection) => (

            <div
              key={collection.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                  {collection.category}
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-600">
                  {collection.year}
                </div>

                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  {collection.title}
                </h3>

                <p className="mb-6 leading-8 text-gray-600">
                  {collection.description}
                </p>

                <div className="mb-8">

                  <h4 className="mb-3 text-lg font-semibold text-gray-900">
                    Highlights
                  </h4>

                  <ul className="space-y-2">

                    {collection.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <span className="text-green-600">✔</span>
                        {feature}
                      </li>

                    ))}

                  </ul>

                </div>

                <button className="w-full rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700">
                  Explore Collection
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Featured Banner */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 px-10 py-20 text-center text-white">

          <h3 className="text-5xl font-bold">
            Next Generation Fashion
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-violet-100">
            Every collection combines innovation, sustainability, and digital
            craftsmanship to redefine how modern fashion is imagined,
            manufactured, and experienced across both physical and virtual
            worlds.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-4">

            <div>
              <h4 className="text-5xl font-bold">300+</h4>
              <p className="mt-3">Design Concepts</p>
            </div>

            <div>
              <h4 className="text-5xl font-bold">80+</h4>
              <p className="mt-3">Fashion Partners</p>
            </div>

            <div>
              <h4 className="text-5xl font-bold">150+</h4>
              <p className="mt-3">AI Projects</p>
            </div>

            <div>
              <h4 className="text-5xl font-bold">50+</h4>
              <p className="mt-3">Global Awards</p>
            </div>

          </div>

          <button className="mt-12 rounded-xl bg-white px-10 py-4 text-lg font-bold text-violet-700 transition hover:scale-105">
            View All Collections
          </button>

        </div>

      </div>
    </section>
  );
}

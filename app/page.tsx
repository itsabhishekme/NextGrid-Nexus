import Hero from "../components/Hero";
import About from "../components/About";
import Technology from "../components/Technology";
import BrandEcosystem from "../components/BrandEcosystem";
import Collection from "../components/Collection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default async function Home() {
  // Remove this after testing.
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section
        id="about"
        className="bg-white px-6 py-24 lg:px-16"
      >
        <About />
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="bg-slate-100 px-6 py-24 lg:px-16"
      >
        <Technology />
      </section>

      {/* Brand Ecosystem Section */}
      <section
        id="brands"
        className="bg-white px-6 py-24 lg:px-16"
      >
        <BrandEcosystem />
      </section>

      {/* Collection Section */}
      <section
        id="collection"
        className="bg-slate-100 px-6 py-24 lg:px-16"
      >
        <Collection />
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="bg-white px-6 py-24 lg:px-16"
      >
        <Gallery />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-slate-100 px-6 py-24 lg:px-16"
      >
        <Contact />
      </section>
    </main>
  );
}
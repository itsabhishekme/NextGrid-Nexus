import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technology from "../components/Technology";
import Collection from "../components/Collection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 lg:px-16 bg-white"
      >
        <About />
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-24 px-6 lg:px-16 bg-slate-100"
      >
        <Technology />
      </section>

      {/* Collection Section */}
      <section
        id="collection"
        className="py-24 px-6 lg:px-16 bg-white"
      >
        <Collection />
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-24 px-6 lg:px-16 bg-slate-100"
      >
        <Gallery />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 lg:px-16 bg-white"
      >
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}

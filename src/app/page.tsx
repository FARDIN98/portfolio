import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Portfolio from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

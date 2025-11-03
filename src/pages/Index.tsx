import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import DomainExpertise from "@/components/DomainExpertise";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <DomainExpertise />
      <Skills />
      <Projects />
      <Recognition />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

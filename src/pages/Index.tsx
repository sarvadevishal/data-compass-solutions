import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Methodology from "@/components/Methodology";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <About />
      <Experience />
      <Methodology />
      <Skills />
      <Projects />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

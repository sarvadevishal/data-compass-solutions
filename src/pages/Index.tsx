import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Methodology from "@/components/Methodology";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import CodeShowcase from "@/components/CodeShowcase";
import Testimonials from "@/components/Testimonials";
import Recognition from "@/components/Recognition";
import Insights from "@/components/Insights";
import Certifications from "@/components/Certifications";
import ROICalculator from "@/components/ROICalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <ROICalculator />
      <About />
      <Experience />
      <Methodology />
      <Skills />
      <Projects />
      <CaseStudies />
      <CodeShowcase />
      <Testimonials />
      <Recognition />
      <Insights />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

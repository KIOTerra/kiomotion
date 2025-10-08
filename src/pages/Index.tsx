import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollScene3D from "@/components/ScrollScene3D";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollScene3D />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

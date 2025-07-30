import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductionStages from "@/components/ProductionStages";
import FinalVideo from "@/components/FinalVideo";
import Contact from "@/components/Contact";
import ScrollingGifs from "@/components/ScrollingGifs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProductionStages />
      <FinalVideo />
      <Contact />
      <ScrollingGifs />
    </div>
  );
};

export default Index;

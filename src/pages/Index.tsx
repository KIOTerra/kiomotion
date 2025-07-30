import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductionStages from "@/components/ProductionStages";
import FinalVideo from "@/components/FinalVideo";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductionStages />
      <FinalVideo />
      <Contact />
    </div>
  );
};

export default Index;

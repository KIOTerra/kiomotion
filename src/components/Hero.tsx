import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-center text-orange-500">KIO MOTION</h1>
          <h2 className="text-3xl mb-8 text-center text-slate-50 font-extrabold md:text-2xl">correndo com ideias, narrativas e tecnologia para animar o futuro</h2>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('production')}>
              View Production Process
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('final-video')}>
              Watch Final Video
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
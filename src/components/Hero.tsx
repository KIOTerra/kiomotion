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
          <img 
            src="/lovable-uploads/98ffaff2-0df3-4712-9a5d-abe9648e0151.png" 
            alt="KJD Motion - Animando o Futuro" 
            className="mx-auto mb-6 w-auto h-32 md:h-40 lg:h-48"
          />
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Bringing ideas to life through innovative motion graphics and visual storytelling
          </p>
          
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
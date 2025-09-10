import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <iframe 
        src="https://player.vimeo.com/video/567980408?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        title="Ugah e a descoberta do fogo"
      ></iframe>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <img src="/lovable-uploads/98ffaff2-0df3-4712-9a5d-abe9648e0151.png" alt="KJD Motion - Animando o Futuro" className="mx-auto mb-6 w-auto h-32 md:h-40 lg:h-48" />
          
          <p className="text-xl mb-20 leading-relaxed md:text-xl text-gray-50">Correndo com narrativas e tecnologia para realizar o impossível</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('projects')}>
              Portfolio
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('about')}>
              Sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="h-screen flex items-center justify-center relative overflow-hidden w-full"
    style={{ height: '120vh' }}>
      {/* Background Video */}
      <video 
        className="absolute inset-0 z-0 w-full h-full object-cover" 
        style={{
          width: '100vw',
          height: '120vh',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover'
        }}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
      >
        <source src="/lovable-uploads/REEL_v2_site.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-transparent rounded-sm"></div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <img src="/lovable-uploads/Logo_total_2_alpha.png" alt="KIO Motion - Animando o Futuro" className="mx-auto mb-6 w-auto h-32 md:h-40 lg:h-48" />
          
          <p className="text-xl mb-20 leading-relaxed md:text-xl text-gray-50">Correndo com narrativas e tecnologia para realizar o impossível</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="hover-rotate" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('projects')}>
              Portfólio
            </Button>
            <Button variant="hover-rotate" size="lg" className="text-lg px-8 py-6 h-auto bg-white hover:bg-white/90 transition-transform duration-300 hover:rotate-12" style={{
            color: '#00497C'
          }} onClick={() => scrollToSection('about')}>
              Sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
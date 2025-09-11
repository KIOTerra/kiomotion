import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Background Video */}
      <iframe src="https://player.vimeo.com/video/567980408?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" className="absolute z-0" style={{
      width: '120vw',
      height: '120vh',
      left: '-10vw',
      top: '-10vh',
      objectFit: 'cover',
      transform: 'scale(1.1)'
    }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Ugah e a descoberta do fogo"></iframe>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-transparent rounded-sm"></div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <img src="/lovable-uploads/c21fd0f7-f8de-4bf7-8bac-83582c55943f.png" alt="KJD Motion - Animando o Futuro" className="mx-auto mb-6 w-auto h-32 md:h-40 lg:h-48" />
          
          <p className="text-xl mb-20 leading-relaxed md:text-xl text-gray-50">Correndo com narrativas e tecnologia para realizar o impossível</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="hover-rotate" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => scrollToSection('projects')}>
              Portfolio
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
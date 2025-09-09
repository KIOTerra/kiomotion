import { Button } from "@/components/ui/button";
const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 rounded-sm bg-amber-600 bg-[FF7235]">
        <div className="flex items-center justify-between">
          <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/d06eb3d4-f85d-4a2e-8f95-8adcd6f90b42.png" 
              alt="JK Logo" 
              className="h-8 w-auto"
            />
          </button>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              Minha Jornada
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projetos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contato
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;
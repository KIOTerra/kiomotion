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
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b w-full">
      <div className="w-full px-6 py-1" style={{backgroundColor: '#00497C'}}>
        <div className="flex items-center justify-between">
          <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/194574b1-b1ff-45c6-95e9-ea7002a75fb3.png" 
              alt="Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:rotate-12"
            />
          </button>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" onClick={() => scrollToSection('about')}>
              Sobre nós
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" onClick={() => scrollToSection('projects')}>
              Projetos
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20" onClick={() => scrollToSection('contact')}>
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
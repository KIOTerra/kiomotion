import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            KIO
          </button>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('production')}
            >
              Production
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('final-video')}
            >
              Final Video
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
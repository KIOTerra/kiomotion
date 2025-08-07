import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projects = [
    {
      id: 1,
      title: "Motion Branding Corporativo",
      description: "Identidade visual em movimento para empresa de tecnologia. Desenvolvimento de logo animado, paleta de cores dinâmica e elementos gráficos que transmitem inovação e modernidade.",
      specs: { duration: "2:30", resolution: "4K", fps: "60" },
      status: "Concluído"
    },
    {
      id: 2,
      title: "Campanha Digital Interativa",
      description: "Série de animações para redes sociais focadas em engajamento. Criação de templates modulares, transições suaves e elementos interativos que aumentaram o alcance em 300%.",
      specs: { duration: "1:45", resolution: "4K", fps: "30" },
      status: "Em andamento"
    },
    {
      id: 3,
      title: "Explainer Video Educacional",
      description: "Vídeo explicativo sobre sustentabilidade corporativa. Combinação de motion graphics, ilustrações customizadas e narração envolvente para comunicar conceitos complexos de forma simples.",
      specs: { duration: "3:15", resolution: "4K", fps: "24" },
      status: "Finalizado"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projetos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore meu portfólio de projetos de motion design e descubra como transformo ideias em experiências visuais memoráveis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project) => (
                  <div key={project.id} className="flex-[0_0_100%] min-w-0 px-4">
                    <Card className="overflow-hidden border-2">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <svg 
                                className="w-8 h-8 text-primary" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                              {project.status === "Concluído" ? "Projeto Finalizado" : 
                               project.status === "Em andamento" ? "Em Produção" : "Disponível para Visualização"}
                            </p>
                            <Button variant="outline">
                              {project.status === "Concluído" ? "Ver Projeto" : "Preview"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-8">
                      <Card className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">{project.title}</h3>
                        <div className="prose prose-lg mx-auto text-foreground/90 mb-8">
                          <p className="text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold mb-2">Duração</h4>
                            <p className="text-3xl font-bold text-primary">{project.specs.duration}</p>
                            <p className="text-sm text-muted-foreground">Minutos</p>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="text-lg font-semibold mb-2">Resolução</h4>
                            <p className="text-3xl font-bold text-primary">{project.specs.resolution}</p>
                            <p className="text-sm text-muted-foreground">Ultra HD</p>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="text-lg font-semibold mb-2">Taxa de Quadros</h4>
                            <p className="text-3xl font-bold text-primary">{project.specs.fps}</p>
                            <p className="text-sm text-muted-foreground">FPS</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10"
              onClick={scrollPrev}
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10"
              onClick={scrollNext}
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              {projects.length} projetos no portfólio • Use as setas para navegar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
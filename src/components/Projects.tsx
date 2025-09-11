import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);
  const projects = [{
    id: 1,
    title: "Motion Branding Corporativo",
    description: "Identidade visual em movimento para empresa de tecnologia. Desenvolvimento de logo animado, paleta de cores dinâmica e elementos gráficos que transmitem inovação e modernidade.",
    specs: {
      duration: "2:30",
      resolution: "4K",
      fps: "60"
    },
    status: "Concluído"
  }, {
    id: 2,
    title: "Campanha Digital Interativa",
    description: "Série de animações para redes sociais focadas em engajamento. Criação de templates modulares, transições suaves e elementos interativos que aumentaram o alcance em 300%.",
    specs: {
      duration: "1:45",
      resolution: "4K",
      fps: "30"
    },
    status: "Em andamento"
  }, {
    id: 3,
    title: "Explainer Video Educacional",
    description: "Vídeo explicativo sobre sustentabilidade corporativa. Combinação de motion graphics, ilustrações customizadas e narração envolvente para comunicar conceitos complexos de forma simples.",
    specs: {
      duration: "3:15",
      resolution: "4K",
      fps: "24"
    },
    status: "Finalizado"
  }, {
    id: 4,
    title: "Animação 3D Produto",
    description: "Apresentação tridimensional de produto inovador com foco em detalhes técnicos. Modelagem, iluminação e animação realista que destaca as funcionalidades e benefícios do produto.",
    specs: {
      duration: "2:45",
      resolution: "4K",
      fps: "30"
    },
    status: "Concluído"
  }, {
    id: 5,
    title: "Video Musical Conceitual",
    description: "Clipe musical com estética experimental e narrativa visual poética. Fusão de técnicas tradicionais e digitais para criar uma experiência audiovisual única e memorável.",
    specs: {
      duration: "4:20",
      resolution: "4K",
      fps: "24"
    },
    status: "Finalizado"
  }, {
    id: 6,
    title: "Apresentação Institucional",
    description: "Vídeo corporativo para lançamento de nova filial. Combinação de filmagem real com elementos gráficos animados, criando uma narrativa envolvente sobre a expansão da empresa.",
    specs: {
      duration: "3:50",
      resolution: "4K",
      fps: "25"
    },
    status: "Em andamento"
  }, {
    id: 7,
    title: "Short Form Content",
    description: "Série de vídeos verticais para TikTok e Instagram Reels. Conteúdo dinâmico com transições rápidas, efeitos visuais impactantes e storytelling adaptado para formato mobile.",
    specs: {
      duration: "0:45",
      resolution: "Full HD",
      fps: "60"
    },
    status: "Concluído"
  }];
  return <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Projetos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 px-0 text-xl text-center font-normal">
            Explore meu portfólio de projetos de motion design e descubra como transformo ideias em experiências visuais memoráveis
          </p>
          
          {/* Project Thumbnails */}
          <div className="flex justify-center gap-6 mb-8">
            {projects.map((project, index) => <button key={project.id} onClick={() => scrollTo(index)} className={`relative group transition-all duration-300 ${selectedIndex === index ? 'scale-110 ring-2 ring-primary' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}>
                <div className="w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-border">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-foreground">{project.title.split(' ')[0]}</p>
                  </div>
                </div>
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-primary' : 'bg-transparent'}`} />
              </button>)}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map(project => <div key={project.id} className="flex-[0_0_100%] min-w-0 px-4">
                    <Card className="overflow-hidden border-2">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                              {project.status === "Concluído" ? "Projeto Finalizado" : project.status === "Em andamento" ? "Em Produção" : "Disponível para Visualização"}
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
                  </div>)}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10" onClick={scrollPrev}>
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10" onClick={scrollNext}>
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
    </section>;
};
export default Projects;
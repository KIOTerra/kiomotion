import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [thumbnailsRef, thumbnailsApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true
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
        <div className="text-center mb-16 my-0 px-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Projetos</h2>
          <p className="max-w-3xl mx-auto mb-12 px-0 text-xl text-center font-normal my-[30px] text-gray-900">Dê uma olhada nos meus projetos e descubra como podemos transformar ideias em visuais memoráveis juntos.</p>
          
          {/* Project Thumbnails Carousel */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing py-4" ref={thumbnailsRef}>
              <div className="flex gap-6 md:gap-8 px-4 bg-[#000a00]/0 rounded-sm mx-0">
                {projects.map((project, index) => <div key={project.id} className="flex-[0_0_auto]">
                    <button onClick={() => scrollTo(index)} className={`flex flex-col items-center gap-3 group transition-all duration-300 ${selectedIndex === index ? 'scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}>
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center border-2 transition-all duration-300 ${selectedIndex === index ? 'bg-primary border-primary' : 'bg-gradient-to-br from-primary/20 to-secondary/20 border-border'}`}>
                        <svg className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${selectedIndex === index ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className={`text-sm font-medium text-center max-w-24 leading-tight transition-all duration-300 ${selectedIndex === index ? 'text-primary' : 'text-foreground'}`}>{project.title.split(' ')[0]}</p>
                    </button>
                  </div>)}
              </div>
            </div>
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold mb-2">Design</h4>
                            <p className="text-3xl font-bold text-primary">Motion</p>
                            <p className="text-sm text-muted-foreground">Graphics</p>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="text-lg font-semibold mb-2">Animação</h4>
                            <p className="text-3xl font-bold text-primary">2D/3D</p>
                            <p className="text-sm text-muted-foreground">Híbrida</p>
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
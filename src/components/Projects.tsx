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
    title: "Propaganda Unimed",
    description: "Identidade visual em movimento para empresa de tecnologia. Desenvolvimento de logo animado, paleta de cores dinâmica e elementos gráficos que transmitem inovação e modernidade.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ses9tcV7KLo?si=zSTBm8cy7BH31LwP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/Ses9tcV7KLo/hqdefault.jpg",
    projectTitle: "Explainer video Unimed",
    responsibility: "Direção de arte, design e animação",
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
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/567spXgGO0g?si=Lg_qYhDjfbcxgscZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/567spXgGO0g/hqdefault.jpg",
    projectTitle: "Campanha Digital Interativa",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "1:45",
      resolution: "4K",
      fps: "30"
    },
    status: "Em andamento"
  }, {
    id: 3,
    title: "MTV Video Educacional",
    description: "Vídeo explicativo sobre sustentabilidade corporativa. Combinação de motion graphics, ilustrações customizadas e narração envolvente para comunicar conceitos complexos de forma simples.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-GPo-FDmXM?si=ugtQDcTcfV65mJSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/Q-GPo-FDmXM/hqdefault.jpg",
    projectTitle: "Explainer Video Educacional",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "3:15",
      resolution: "4K",
      fps: "24"
    },
    status: "Finalizado"
  }, {
    id: 4,
    title: "Colagem 3D Produto",
    description: "Apresentação tridimensional de produto inovador com foco em detalhes técnicos. Modelagem, iluminação e animação realista que destaca as funcionalidades e benefícios do produto.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2VS959gI3Sc?si=p2YX3eEv67WDAaCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/2VS959gI3Sc/hqdefault.jpg",
    projectTitle: "Animação 3D Produto",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "2:45",
      resolution: "4K",
      fps: "30"
    },
    status: "Concluído"
  }, {
    id: 5,
    title: "MTV Musical Conceitual",
    description: "Clipe musical com estética experimental e narrativa visual poética. Fusão de técnicas tradicionais e digitais para criar uma experiência audiovisual única e memorável.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PX9IZCLv_LA?si=zbM2YcWzoXR7RTy3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/PX9IZCLv_LA/hqdefault.jpg",
    projectTitle: "Video Musical Conceitual",
    responsibility: "Direção de arte e animação",
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
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SdPs50SSMQ8?si=HIHqZIZcQKTmEYba" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/SdPs50SSMQ8/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
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
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IHPYsGLXPE0?si=EfcLDN78L6xroyIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/IHPYsGLXPE0/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "0:45",
      resolution: "Full HD",
      fps: "60"
    },
    status: "Concluído"
  }, {
    id: 8,
    title: "IA Colagem",
    description: "Descrição do projeto 8 será adicionada em breve.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uVkAL_4C8Q4?si=fd0MmmbYh3WJAqcD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/uVkAL_4C8Q4/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "2:00",
      resolution: "4K",
      fps: "30"
    },
    status: "Em breve"
  }, {
    id: 9,
    title: "Projeto 9",
    description: "Descrição do projeto 9 será adicionada em breve.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sMaO4vyfO84?si=pa9Z_ioI5-_H-8nh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/sMaO4vyfO84/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "2:00",
      resolution: "4K",
      fps: "30"
    },
    status: "Em breve"
  }, {
    id: 10,
    title: "Projeto 10",
    description: "Descrição do projeto 10 será adicionada em breve.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1D67GkrlM7U?si=xQsNkCBitlbS8hJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/1D67GkrlM7U/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "2:00",
      resolution: "4K",
      fps: "30"
    },
    status: "Concluído"
  }, {
    id: 12,
    title: "Projeto 12",
    description: "Descrição do projeto 12 será adicionada em breve.",
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Uws7ghWBHr0?si=j6iMe8-Qt1lDwZ6i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    thumbnail: "https://img.youtube.com/vi/Uws7ghWBHr0/hqdefault.jpg",
    responsibility: "Direção de arte e animação",
    specs: {
      duration: "2:00",
      resolution: "4K",
      fps: "30"
    },
    status: "Concluído"
  }];
  return <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 px-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Projetos</h2>
          <p className="max-w-3xl mx-auto mb-12 px-0 text-xl text-center font-normal my-[30px] text-gray-900">Dê uma olhada nos meus projetos e descubra como podemos transformar ideias em visuais memoráveis juntos.</p>
          
          {/* Project Thumbnails Carousel */}
          <div className="max-w-5xl mx-auto mb-12 relative">
            {/* Left Arrow */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            {/* Right Arrow */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="overflow-hidden cursor-grab active:cursor-grabbing py-4" ref={thumbnailsRef}>
              <div className="flex gap-3 md:gap-4 px-4 bg-[#000a00]/0 rounded-sm mx-0">
                {projects.map((project, index) => <div key={project.id} className="flex-[0_0_auto]">
                    <button onClick={() => scrollTo(index)} className={`flex flex-col items-center gap-3 group transition-all duration-300 ${selectedIndex === index ? 'scale-125' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}>
                      <div className={`rounded-lg overflow-hidden flex items-center justify-center border-2 transition-all duration-300 relative ${selectedIndex === index ? 'w-20 h-20 md:w-28 md:h-28 border-primary shadow-lg shadow-primary/20' : 'w-16 h-16 md:w-20 md:h-20 border-border'}`}>
                        {project.thumbnail ? (
                          <>
                            <img 
                              src={project.thumbnail} 
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover scale-150"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              {selectedIndex === index ? (
                                <img 
                                  src="/lovable-uploads/Logo_2_Alpha.png" 
                                  alt="Selected"
                                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300"
                                />
                              ) : (
                                <svg className="w-8 h-8 md:w-12 md:h-12 text-white/80 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center ${selectedIndex === index ? 'bg-primary' : 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}>
                            {selectedIndex === index ? (
                              <img 
                                src="/lovable-uploads/Logo_2_Alpha.png" 
                                alt="Selected"
                                className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300"
                              />
                            ) : (
                              <svg className="w-8 h-8 md:w-12 md:h-12 text-primary transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      <p className={`text-sm font-medium text-center max-w-20 leading-tight transition-all duration-300 ${selectedIndex === index ? 'text-primary' : 'text-foreground'}`}>{project.title.split(' ')[0]}</p>
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
                          {project.videoEmbed ? (
                            <div className="w-full h-full relative" dangerouslySetInnerHTML={{ __html: project.videoEmbed.replace('width="560" height="315"', 'class="absolute inset-0 w-full h-full rounded-lg"') }} />
                          ) : (
                            <div className="text-center">
                              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <h3 className="text-2xl font-semibold mb-4">{project.projectTitle || project.title}</h3>
                              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                {project.status === "Concluído" ? "Projeto Finalizado" : project.status === "Em andamento" ? "Em Produção" : project.status === "Em breve" ? "Em breve" : "Disponível para Visualização"}
                              </p>
                              <Button variant="outline">
                                {project.status === "Concluído" ? "Ver Projeto" : project.status === "Em breve" ? "Em breve" : "Preview"}
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-8">
                      <Card className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">{project.projectTitle || project.title}</h3>
                        <div className="prose prose-lg mx-auto text-foreground/90 mb-8">
                          <p className="text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex justify-center">
                          <div className="text-center bg-primary/10 px-6 py-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Responsável por</p>
                            <p className="text-lg font-semibold text-primary">{project.responsibility}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="absolute left-4 top-[28%] -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10" onClick={scrollPrev}>
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-4 top-[28%] -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center z-10" onClick={scrollNext}>
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              12 projetos no portfólio • Use as setas para navegar
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;
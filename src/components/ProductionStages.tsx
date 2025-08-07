import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductionStages = () => {
  const stages = [
    {
      stage: "01",
      title: "Conceito & Planejamento",
      description: "Brainstorming inicial, storyboard e desenvolvimento da direção criativa",
      status: "Concluído",
      duration: "2 semanas",
      deliverables: ["Mood board", "Storyboard", "Style frames", "Cronograma"]
    },
    {
      stage: "02", 
      title: "Design & Criação de Assets",
      description: "Criação de assets visuais, ilustrações e elementos de design",
      status: "Concluído",
      duration: "3 semanas",
      deliverables: ["Design de personagens", "Backgrounds", "Elementos UI", "Paleta de cores"]
    },
    {
      stage: "03",
      title: "Produção de Animação",
      description: "Dando vida aos designs com motion graphics e animações",
      status: "Em Andamento",
      duration: "4 semanas",
      deliverables: ["Animações principais", "Transições", "Efeitos", "Timing"]
    },
    {
      stage: "04",
      title: "Pós-Produção",
      description: "Composição final, design de som e garantia de qualidade",
      status: "Pendente",
      duration: "1 semana", 
      deliverables: ["Edição final", "Mix de som", "Color grading", "Exportação"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Em Andamento": return "bg-primary/10 text-primary";
      case "Pendente": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="production" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Etapas de Produção</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma visão abrangente do nosso fluxo de trabalho de motion design, do conceito inicial à entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stages.map((stage, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-2">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/50"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-primary/30">{stage.stage}</div>
                  <Badge className={getStatusColor(stage.status)}>
                    {stage.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{stage.title}</CardTitle>
                <CardDescription className="text-base">
                  {stage.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Duração:</span>
                    <span className="text-muted-foreground">{stage.duration}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-sm block mb-2">Principais Entregas:</span>
                    <div className="flex flex-wrap gap-2">
                      {stage.deliverables.map((deliverable, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionStages;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductionStages = () => {
  const stages = [
    {
      stage: "01",
      title: "Concept & Planning",
      description: "Initial brainstorming, storyboarding, and creative direction development",
      status: "Completed",
      duration: "2 weeks",
      deliverables: ["Mood board", "Storyboard", "Style frames", "Timeline"]
    },
    {
      stage: "02", 
      title: "Design & Asset Creation",
      description: "Creating visual assets, illustrations, and design elements",
      status: "Completed",
      duration: "3 weeks",
      deliverables: ["Character designs", "Backgrounds", "UI elements", "Color palette"]
    },
    {
      stage: "03",
      title: "Animation Production",
      description: "Bringing designs to life with motion graphics and animations",
      status: "In Progress",
      duration: "4 weeks",
      deliverables: ["Key animations", "Transitions", "Effects", "Timing"]
    },
    {
      stage: "04",
      title: "Post-Production",
      description: "Final compositing, sound design, and quality assurance",
      status: "Pending",
      duration: "1 week", 
      deliverables: ["Final edit", "Sound mix", "Color grading", "Export"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "In Progress": return "bg-primary/10 text-primary";
      case "Pending": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="production" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Production Stages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of our motion design workflow, from initial concept to final delivery
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
                    <span className="font-semibold text-sm">Duration:</span>
                    <span className="text-muted-foreground">{stage.duration}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-sm block mb-2">Key Deliverables:</span>
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
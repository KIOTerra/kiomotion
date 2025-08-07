import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalVideo = () => {
  return (
    <section id="final-video" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vídeo Final</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O ápice do nosso processo criativo - uma peça impressionante de motion design que dá vida à nossa visão
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                  <h3 className="text-2xl font-semibold mb-4">Vídeo Em Breve</h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa obra-prima de motion design está atualmente em produção
                  </p>
                  <Button variant="outline">
                    Preview Disponível Em Breve
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <h4 className="text-lg font-semibold mb-2">Duração</h4>
              <p className="text-3xl font-bold text-primary">2:30</p>
              <p className="text-sm text-muted-foreground">Minutos</p>
            </Card>
            
            <Card className="text-center p-6">
              <h4 className="text-lg font-semibold mb-2">Resolução</h4>
              <p className="text-3xl font-bold text-primary">4K</p>
              <p className="text-sm text-muted-foreground">Ultra HD</p>
            </Card>
            
            <Card className="text-center p-6">
              <h4 className="text-lg font-semibold mb-2">Taxa de Quadros</h4>
              <p className="text-3xl font-bold text-primary">60</p>
              <p className="text-sm text-muted-foreground">FPS</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalVideo;
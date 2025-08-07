const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Minha Jornada & Propósito
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/90 leading-relaxed">
            <p className="text-xl mb-6">
              Bem-vindo ao meu mundo criativo onde movimento encontra emoção e histórias ganham vida através do design visual.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Minha Jornada</h3>
                <p className="text-muted-foreground">
                  Começando como um contador de histórias visuais apaixonado, evoluí para um motion designer que acredita 
                  que cada quadro conta uma história. Minha jornada foi moldada por incontáveis horas de experimentação, 
                  aprendendo com líderes da indústria e expandindo os limites do que é possível em motion graphics.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Meu Propósito</h3>
                <p className="text-muted-foreground">
                  Crio motion graphics que não apenas são bonitos—eles comunicam, inspiram e conectam. 
                  Meu propósito é transformar ideias complexas em narrativas visuais envolventes que ressoam com 
                  audiências e criam conexões significativas entre marcas e suas comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
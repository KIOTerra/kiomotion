const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> & Objetivos</h2>
          
          <div className="prose prose-lg mx-auto text-foreground/90 leading-relaxed">
            <p className="text-xl mb-6">
              Bem-vindo ao meu mundo criativo onde movimento encontra emoção e histórias ganham vida através do design visual.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Toc, toc! Quem é?</h3>
                <p className="text-muted-foreground">Sou o Caio, também conhecido como KIO, e trabalho com motion design há cerca de três anos. Já atuo como diretor criativo, animador e explorador dedicado de IA para motion e storytelling. Além disso, domino tanto animação 3D quanto 2D tradicional e até stop motion. E é claro, também navego pelos mundos de VFX e fake out of home.</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Proposito</h3>
                <p className="text-muted-foreground">
                  Meu objetivo é criar motion graphics que transcendem o visual—eles comunicam, inspiram e conectam. 
                  Busco transformar ideias complexas em narrativas visuais envolventes que ressoam com 
                  audiências e criam conexões significativas entre marcas e suas comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
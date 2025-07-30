const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Journey & Purpose
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/90 leading-relaxed">
            <p className="text-xl mb-6">
              Welcome to my creative world where motion meets emotion and stories come alive through visual design.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground">
                  Starting as a passionate visual storyteller, I've evolved into a motion designer who believes 
                  that every frame tells a story. My journey has been shaped by countless hours of experimentation, 
                  learning from industry leaders, and pushing the boundaries of what's possible in motion graphics.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Purpose</h3>
                <p className="text-muted-foreground">
                  I create motion graphics that don't just look beautiful—they communicate, inspire, and connect. 
                  My purpose is to transform complex ideas into engaging visual narratives that resonate with 
                  audiences and drive meaningful connections between brands and their communities.
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
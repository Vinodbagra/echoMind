import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, User, Code, Cpu, Zap } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Clean gradient background with subtle coding pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 coding-bg"></div>
      
      {/* Subtle coding-themed elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal geometric shapes representing code blocks */}
        <div className="absolute top-20 left-20 w-16 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-2 bg-accent/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-20 h-2 bg-primary/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-60 right-20 w-14 h-2 bg-accent/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-40 w-18 h-2 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
        
        {/* Code-like grid pattern */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-ping delay-1500"></div>
      </div>

      {/* Enhanced decorative elements with animations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-spin-slow"></div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-10 py-20">
        {/* Enhanced Profile Photo with floating tech icons */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="relative group">
            {/* Floating tech icons around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center animate-bounce">
              <Code className="h-4 w-4 text-primary" />
            </div>
            <div className="absolute -bottom-2 -left-4 w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center animate-bounce delay-300">
              <Cpu className="h-4 w-4 text-accent" />
            </div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center animate-bounce delay-700">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gradient-to-r from-accent/30 to-primary/30 bg-card shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
              <img 
                src={profilePlaceholder} 
                alt="Vinod Sharma" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight animate-pulse">
              Vinod Sharma
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary/60">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/60"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/60"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-2xl md:text-3xl text-foreground font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Software Development Engineer
            </p>
            <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">GenAI</span>
              <span className="text-muted-foreground">•</span>
              <span className="px-3 py-1 bg-accent/10 rounded-full text-accent font-medium">Backend</span>
              <span className="text-muted-foreground">•</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">Agentic AI</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Building intelligent solutions that bridge the gap between AI innovation and real-world applications
            </p>
            
            {/* Coding-themed subtitle */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground font-mono">
              <span className="text-primary">&lt;/&gt;</span>
              <span>Backend Developer</span>
              <span className="text-accent">•</span>
              <span>AI Engineer</span>
              <span className="text-primary">&lt;/&gt;</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
          <Button size="lg" className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Mail className="h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="gap-3 px-8 py-4 text-lg font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105" asChild>
            <a href="/Vinod_Sharma_Resume.pdf" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 pt-12">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Vinodbagra"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/vinodiitkgp2019"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/50 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vinodsharmaiitkgp93@gmail.com"
              className="group p-3 rounded-full bg-card/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

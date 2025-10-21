import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <TechStack />
      <Education />
      <Contact />
      
      <footer className="py-12 text-center text-muted-foreground border-t bg-gradient-to-r from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-accent rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm font-medium">
            © 2024 Vinod Sharma. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

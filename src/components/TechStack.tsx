import { Code, Database, Cloud, Brain, Terminal, GitBranch, Server, Layers, Zap, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "Python", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "FastAPI", icon: Server, color: "from-green-500 to-emerald-500" },
  { name: "Go", icon: Layers, color: "from-cyan-500 to-blue-500" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-indigo-600" },
  { name: "Docker", icon: Terminal, color: "from-blue-400 to-cyan-400" },
  { name: "AWS", icon: Cloud, color: "from-orange-500 to-yellow-500" },
  { name: "LLMs", icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "Redis", icon: Zap, color: "from-red-500 to-orange-500" },
  { name: "MongoDB", icon: Database, color: "from-green-600 to-emerald-600" },
  { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600" },
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-secondary/10 to-background coding-grid relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-6 border border-primary/20">
            <Cpu className="h-5 w-5" />
            <span className="text-sm font-semibold">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modern technologies I work with to build scalable and efficient solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Code snippet visualization */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-muted-foreground font-medium">Terminal</span>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-green-400">
              <span className="text-blue-400">$</span> python main.py
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">def</span> <span className="text-yellow-400">process_data</span>(data):
            </div>
            <div className="text-gray-300 ml-4">
              <span className="text-blue-400">return</span> <span className="text-green-400">ai_model</span>.predict(data)
            </div>
            <div className="text-green-400">
              <span className="text-blue-400">$</span> docker run -p 8000:8000 my-app
            </div>
            <div className="text-gray-300">
              <span className="text-cyan-400">Server</span> running on <span className="text-yellow-400">http://localhost:8000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

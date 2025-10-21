import { Code, Database, Cloud, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "from-purple-500 to-pink-500",
    skills: ["LLaMA", "GPT Models", "RAG Pipeline", "ChromaDB", "Embeddings", "Prompt Engineering"],
  },
  {
    icon: Code,
    title: "Backend Development",
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "FastAPI", "Golang", "Node.js", "REST APIs", "WebSocket", "Socket.io"],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    color: "from-green-500 to-emerald-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS CloudSearch", "S3"],
  },
  {
    icon: Cloud,
    title: "DevOps & Tools",
    color: "from-orange-500 to-red-500",
    skills: ["Docker", "AWS", "Git", "Strapi CMS", "PhonePe Gateway", "AWS SES"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 bg-gradient-to-br from-background via-accent/5 to-background coding-bg relative overflow-hidden">
      {/* Clean background decorative elements */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-accent/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary/5 rounded-full blur-2xl animate-float delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/3 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-6 border border-primary/20">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Full-stack development with focus on AI, backend systems, and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="flex items-start gap-4 mb-6 relative">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 cursor-default border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

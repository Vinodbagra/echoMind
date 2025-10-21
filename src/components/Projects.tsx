import { Code2, Github, Sparkles, ExternalLink, Star, GitFork, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Financial Doc Summarizer",
    description: "AI-powered summarizer to extract key insights from financial PDFs",
    technologies: ["Python", "FastAPI", "Docker", "ChromaDB", "RAG"],
    achievements: [
      "Built an AI-powered summarizer to extract key insights from financial PDFs (quarterly results, earnings calls, presentations, press releases).",
      "Converted raw PDFs and scanned images into standardized Markdown using pymupdf4llm library, enabling consistent and efficient processing by the LLM.",
      "Implemented a RAG pipeline with ChromaDB embeddings to generate accurate, parameter-based summaries (P&L, revenue, deposits, assets).",
      "Automated financial report analysis, reducing manual review effort by 95% through AI-driven extraction and summarization of key insights from lengthy PDFs.",
    ],
    impact: "95% reduction in manual review",
    github: "#",
  },
  {
    title: "MCP Platform",
    description: "Platform for creating and deploying custom MCP tools",
    technologies: ["Python", "FastAPI", "Docker", "MongoDB", "REST", "GPT4All"],
    achievements: [
      "Built an MCP platform where users can either create and deploy custom MCP tools on Docker or use pre-deployed tools directly through a chat interface.",
      "Streamlined deployment using Dockerized services, improving portability, ease of use, and reducing setup overhead for end-users.",
      "Reduced manual configuration by 90% by enabling users to fetch or generate MCP tools dynamically via chat, leveraging semantic search and LLM-assisted tool creation.",
      "Implemented a local AI API using GPT4All (LLaMA 3.2-1B Instruct) for private, cost-efficient AI processing.",
    ],
    impact: "90% less manual configuration",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-gradient-to-br from-background via-primary/5 to-background code-lines relative overflow-hidden">
      {/* Clean background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-float delay-500"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/3 rounded-full blur-lg animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 text-accent mb-6 border border-accent/20">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Innovative solutions leveraging AI and modern backend technologies
          </p>
        </div>

        {/* Project stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
            <p className="text-muted-foreground text-sm">Featured Projects</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border-2 border-border hover:border-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
            <p className="text-muted-foreground text-sm">Efficiency Gain</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
              <GitFork className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">10+</h3>
            <p className="text-muted-foreground text-sm">Technologies Used</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group flex flex-col hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">
                    {project.impact}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col relative">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {project.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="gap-2 group-hover:border-primary group-hover:text-primary transition-colors" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

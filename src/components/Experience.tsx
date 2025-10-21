import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "ICICI Bank",
    position: "SDE-1, Innovation Labs (GenAI Team)",
    location: "Mumbai, Maharashtra",
    period: "Jul 2024 – Present",
    achievements: [
      "Developed a Business requirement specifications document generator that automates the process of making BRS.",
      "Utilized llama3.3:70b model to extract information using conversation context of the user in the deep tree structure.",
      "Generated mermaid user flow script for backend applications using deepseek-coder:33b model by giving chat context and efficient prompts.",
      "Streamlined BRS creation, turning a multi-day manual task into a fast, automated process completed in minutes.",
      "Implemented a real-time llm backed chat feature using WebSocket and Socket.io, enhancing user engagement and reducing response time by 20%.",
    ],
  },
  {
    company: "Swish Club",
    position: "Software Development Engineer Intern",
    location: "Bengaluru, Karnataka",
    period: "May 2023 – Aug 2023",
    achievements: [
      "Automated the process of uploading products on AWS Cloud Search and caching in Redis for an e-comm platform.",
      "Empowered dynamic content updates in front-end by integration of Strapi content management system in backend.",
      "Successfully incorporated PhonePe Payment Gateway, ensuring quick, user-friendly and secure payment processing in backend to backend call.",
      "Implemented AWS-SES integration to automate post-event email notifications, enhancing user communication.",
      "Built an end to end checkout process from Buy Now to Order Placed for the e-commerce system in the backend.",
    ],
  },
  {
    company: "Fatcat Innovations Pvt Ltd",
    position: "Software Development Engineer Intern",
    location: "Hyderabad, Telangana",
    period: "Dec 2022 – Jan 2023",
    achievements: [
      "Implemented the students login auth as well as login with Google and Microsoft for the ERP based System.",
      "Designed database schemas and entity-relationship diagrams for college ERP system using PostgreSQL database.",
      "Wrote APIs using python flask framework to retrieve data based on dynamic queries as per front-end requirements.",
      "Developed an authentication middleware, significantly enhancing APIs security and ensuring protection of APIs.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 bg-gradient-to-br from-background via-secondary/20 to-background coding-grid relative overflow-hidden">
      {/* Clean background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-6 border border-primary/20">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-semibold">Professional Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions across GenAI, backend systems, and Agentic AI
          </p>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2+</h3>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border-2 border-border hover:border-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">3</h3>
            <p className="text-muted-foreground text-sm">Companies</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">10+</h3>
            <p className="text-muted-foreground text-sm">Projects</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border-2 border-border hover:border-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl w-fit mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
            <p className="text-muted-foreground text-sm">Available</p>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground">{exp.position}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

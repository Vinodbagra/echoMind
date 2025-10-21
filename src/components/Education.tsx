import { GraduationCap, Trophy, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-32 px-4 bg-gradient-to-br from-background via-secondary/10 to-background code-lines relative overflow-hidden">
      {/* Clean background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/3 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 text-accent mb-6 border border-accent/20">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold">Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Education & Achievements
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Indian Institute of Technology Kharagpur
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="font-medium">Jul 2019 - May 2024</Badge>
                    <Badge className="bg-primary text-primary-foreground font-semibold">CGPA: 8.08 / 10</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-semibold text-foreground">
                Bachelor of Technology in Civil Engineering
              </p>
              <p className="text-sm text-muted-foreground">Kharagpur, West Bengal</p>
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-medium">Data Structures & Algorithms (C++)</Badge>
                  <Badge variant="outline" className="font-medium">Probability & Statistics</Badge>
                  <Badge variant="outline" className="font-medium">Linear Algebra</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    Competitive Programming
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">Active problem solver with strong algorithmic skills</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3 p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold text-lg">LeetCode</span>
                  <Badge className="bg-primary text-primary-foreground font-semibold">1650+ Rating</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Active participation in weekly contests with consistent performance
                </p>
                <a
                  href="https://leetcode.com/Vinodsharma123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  @Vinodsharma123 →
                </a>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold text-lg">Codeforces</span>
                  <Badge className="bg-primary text-primary-foreground font-semibold">1200+ Rating</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Regular participant in competitive programming contests
                </p>
                <a
                  href="https://codeforces.com/profile/052000vinodsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  @052000vinodsharma →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

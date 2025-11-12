import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-br from-background via-primary/5 to-background coding-bg relative overflow-hidden">
      {/* Clean background decorative elements */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-accent/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary/5 rounded-full blur-2xl animate-float delay-500"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-accent/3 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="space-y-6 mb-16">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-6 border border-primary/20">
            <Send className="h-5 w-5" />
            <span className="text-sm font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Open to new opportunities, collaborations, and interesting conversations about technology
          </p>
        </div>

        {/* Contact stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">24h</h3>
            <p className="text-muted-foreground text-sm">Response Time</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border-2 border-border hover:border-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Available</h3>
            <p className="text-muted-foreground text-sm">For New Projects</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">IST</h3>
            <p className="text-muted-foreground text-sm">Time Zone</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:vinodsharmaiitkgp93@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium break-all"
                >
                  vinodsharmaiitkgp93@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:9358931167"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  935-893-1167
                </a>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Location</p>
                <p className="text-foreground text-sm font-medium">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2 font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 focus:bg-primary/5 focus:text-primary" asChild>
            <a href="mailto:vinodsharmaiitkgp93@gmail.com">
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 focus:bg-primary/5 focus:text-primary" asChild>
            <a href="https://linkedin.com/in/vinodiitkgp2019" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 focus:bg-primary/5 focus:text-primary" asChild>
            <a href="https://github.com/Vinodbagra" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

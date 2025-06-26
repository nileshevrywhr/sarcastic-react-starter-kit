
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-r from-orange-50/50 to-green-50/50 dark:from-orange-950/10 dark:to-green-950/10">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Digital Suraksha Initiative</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Together, we are building a secure digital infrastructure for New India. 
              Every secured server is a step towards our vision of technological self-reliance.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Knowledge Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Ollama Security Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Server Fortification Manual</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security Assessment Reports</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Digital Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Server Security Scanner</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Infrastructure Assessment</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Monitoring Dashboard</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support & Guidance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Security Consultation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Emergency Response</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Digital Suraksha Initiative. Empowering every developer to build a secure digital future. 
            <span className="block mt-1 italic">"Sabka Saath, Sabka Vikas, Sabka Vishwas - Everyone's Support, Everyone's Development, Everyone's Trust"</span>
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Shield className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

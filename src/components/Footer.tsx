
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Slim Shady Security Alert</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Making servers bulletproof, one fire track at a time. 
              'Cause everybody has security problems, but not everybody's got bars to solve them.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Recovery Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Lose Yourself Security Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Not Afraid Hardening Tips</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Rap God Vulnerability Reports</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">8 Mile Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Stan Server Scanner</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Marshall Security Checker</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Detroit Monitoring Tools</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">The Way I Am Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Cleanin' Out My Closet Audit</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Emergency Response Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Professional D12 Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Slim Shady Security Alert. Protecting servers from themselves since developers started sleeping on security. Now wake up!
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

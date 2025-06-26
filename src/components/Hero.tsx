
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 md:py-32">
      <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-1">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <span className="text-sm">Your server awaits the protection it deserves</span>
      </div>
      
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-center max-w-4xl">
        Friends, Your Ollama Server Has Become a{" "}
        <span className="bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent">
          Digital Seva Platform
        </span>{" "}
        for the Entire World
      </h1>
      
      <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
        My dear technology enthusiasts, just as we built Digital India brick by brick, 
        your server too needs the foundation of security. Today, your innovation serves 
        the world - but let us ensure it serves with strength, dignity, and protection.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Shield className="h-4 w-4" />
          Strengthen Digital Infrastructure
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Join the Security Mission
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          "Technology is best when it brings people together with trust and security" - A vision for New India
        </p>
      </div>
    </section>
  );
};

export default Hero;

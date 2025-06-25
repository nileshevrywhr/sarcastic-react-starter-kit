
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 md:py-32">
      <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-1">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <span className="text-sm">Your Ollama server is probably exposed right now</span>
      </div>
      
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-center max-w-4xl">
        Welcome to the most{" "}
        <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
          unnecessary
        </span>{" "}
        security wake-up call you'll pretend to ignore
      </h1>
      
      <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
        Because nothing says "professional deployment" like leaving your AI models 
        wide open to the internet. Yes, we're talking to you, person reading this 
        while your server happily serves requests to literally anyone who asks nicely.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Shield className="h-4 w-4" />
          Check Your Exposure
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Learn to Secure (Finally)
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          "I thought security was someone else's job!" - Every developer ever
        </p>
      </div>
    </section>
  );
};

export default Hero;

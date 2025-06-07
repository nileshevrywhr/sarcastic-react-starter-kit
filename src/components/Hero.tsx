
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 md:py-32">
      <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-1">
        <Coffee className="h-4 w-4" />
        <span className="text-sm">Powered by caffeine and existential dread</span>
      </div>
      
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-center max-w-4xl">
        Welcome to the most{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          enthusiastic
        </span>{" "}
        React boilerplate you'll ever ignore
      </h1>
      
      <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
        Because nothing says "professional development" like starting with someone else's 
        code and pretending you understand how it works. Built with React, TypeScript, 
        and a healthy dose of imposter syndrome.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Code2 className="h-4 w-4" />
          Start Procrastinating
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          View Documentation (LOL)
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          "This saved me literally dozens of minutes!" - Developer who definitely exists
        </p>
      </div>
    </section>
  );
};

export default Hero;

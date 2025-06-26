
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle } from "lucide-react";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 md:py-32">
      <div className="flex items-center space-x-2 rounded-lg bg-muted px-3 py-1">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <span className="text-sm">Yo, your server's straight exposed, no cap</span>
      </div>
      
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-center max-w-4xl">
        Look, if you had one shot, one opportunity{" "}
        <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          To Secure Everything
        </span>{" "}
        You Ever Wanted, Would You Capture It, Or Just Let It Slip?
      </h1>
      
      <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
        'Cause I'm beginning to feel like a Hack God, Hack God
        All my people from the front to the back nod, back nod
        Your Ollama server's been hacked, y'all been had, y'all
        Better secure that stack before they attack, attack
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Shield className="h-4 w-4" />
          Lose Yourself (In Security)
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Mom's Spaghetti Code Fix
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          "His palms are sweaty, knees weak, arms are heavy / There's vomit on his sweater already / Mom's spaghetti / He's nervous, but on the surface he looks calm and ready / To drop bombs, but he keeps on forgetting / What he wrote down, the whole crowd goes so loud" - Your security config, probably
        </p>
      </div>
    </section>
  );
};

export default Hero;

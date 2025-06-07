
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Palette, Rocket, Bug, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Blazingly Fast*",
      description: "So fast you won't even notice when it breaks. *Results may vary based on your definition of 'fast'.",
      badge: "Optimistic"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Ready",
      description: "Ready to disappoint enterprise clients with the same efficiency as personal projects.",
      badge: "Questionable"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful Design",
      description: "Designed by developers, for developers. Beauty is in the eye of the beholder (and we're all blind).",
      badge: "Subjective"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Production Ready",
      description: "If by 'production' you mean 'barely functional enough to show your manager'.",
      badge: "Debatable"
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Battle Tested",
      description: "Tested in the most demanding environment: a developer's localhost at 2 AM.",
      badge: "Concerning"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Zero Configuration",
      description: "Because we've done all the configuration wrong so you don't have to!",
      badge: "Convenient"
    }
  ];

  return (
    <section id="features" className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Features That Will Change Your Life*
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          *Life-changing effects not guaranteed. Side effects may include increased cynicism 
          and an inexplicable urge to rewrite everything from scratch.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <Badge variant="secondary">{feature.badge}</Badge>
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;

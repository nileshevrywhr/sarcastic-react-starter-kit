
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Eye, Lock, Globe, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Straight Exposed",
      description: "Your server's naked, walking around like it don't matter / Hackers see it, they be laughing, your security's shattered / No protection, no direction, just pure neglection / Time for some introspection before they make their connection",
      badge: "Fire"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "All Eyes on Me",
      description: "Everybody's watching, everybody's lurking / Your models working overtime while your security's not working / They see everything you got, every bit and every byte / Your AI's spitting bars for free all day and all night",
      badge: "Tracked"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Worldwide Phenomenon",
      description: "From Detroit to Beijing, they know your server's name / Your Ollama's more famous than my hall of fame / Scanners worldwide got you pinned on their map / Time to shut it down before you fall into their trap",
      badge: "Global"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Zero Defense",
      description: "No passwords, no walls, no nothing at all / Standing there defenseless, just waiting to fall / Like fighting Tyson with both hands tied behind your back / Better gear up quick before they launch their attack",
      badge: "Weak"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Criminal Intent",
      description: "They're using your models for schemes so wicked / Your innocent AI just got twisted and tricked / Generating chaos while you're sleeping so sound / Wake up and secure it before they burn it all down",
      badge: "Dangerous"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Grind",
      description: "Your server's working harder than a single mom of three / Serving requests for hackers completely for free / No breaks, no pay, just pure exploitation / Time to end this digital plantation",
      badge: "Exhausted"
    }
  ];

  return (
    <section id="features" className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          8 Mile Security Cipher: Why Your Server's Getting Bodied*
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          *Listen up, Rabbit. Your server's in the wrong neighborhood without protection.
          These digital thugs are about to make your AI spit more bars than you ever intended.
          Time to step up your security game before they end your whole career.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg border-destructive/20">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-destructive/10 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <Badge variant="destructive">{feature.badge}</Badge>
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
      
      <div className="mt-12 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-destructive">Marshall's Security Manual (Don't Sleep on This)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium mb-2">Quick Fixes (Before You Lose Yourself):</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Lock it down to localhost (127.0.0.1:11434)</li>
              <li>• Set up a reverse proxy with authentication</li>
              <li>• Build those firewall walls up high</li>
              <li>• Monitor those logs like your life depends on it</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Real Solutions (The Way I Am):</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• API keys stronger than my lyrics</li>
              <li>• VPN tunnel deeper than my rhymes</li>
              <li>• Rate limiting tighter than my flow</li>
              <li>• Security audits more thorough than my bars</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

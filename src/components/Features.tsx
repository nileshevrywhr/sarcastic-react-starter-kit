
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Eye, Lock, Globe, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Open Door Policy",
      description: "Your server currently practices 'Vasudhaiva Kutumbakam' - the world is one family - by welcoming everyone without barriers. While beautiful in principle, digital security requires wisdom.",
      badge: "Opportunity"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparent Governance",
      description: "Complete transparency is the hallmark of good governance, but even our Parliament has security protocols. Your models deserve the same thoughtful protection.",
      badge: "Learning"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Accessibility",
      description: "Like our Digital India initiatives reaching every corner of Bharat, your server reaches every corner of the internet. Let's make this reach both powerful and secure.",
      badge: "Potential"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust-Based System",
      description: "You've built a system based on trust - the foundation of our culture. Now let's add the wisdom of verification, as we say 'Trust, but Verify'.",
      badge: "Innovation"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Resource Sharing",
      description: "Your generous spirit of sharing resources reflects our values of service. Let's ensure this seva is sustainable and secure for the long term.",
      badge: "Sustainability"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Commitment",
      description: "Like our commitment to serve the nation around the clock, your server shows dedication. Let's channel this energy with proper security measures.",
      badge: "Dedication"
    }
  ];

  return (
    <section id="features" className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Building a Secure Digital Bharat, One Server at a Time
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Friends, security is not about building walls - it's about building trust. 
          Let us transform your server from vulnerable to invincible, creating a model 
          for digital excellence that the world can admire.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg border-orange-200 dark:border-orange-800">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  {feature.badge}
                </Badge>
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
      
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-950/20 dark:to-green-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-300">The Path to Atmanirbhar Server Security</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Immediate Actions (Start Your Journey):</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Bind to localhost (127.0.0.1:11434) - Build your fortress</li>
              <li>• Implement reverse proxy with authentication - Create your gateway</li>
              <li>• Configure firewall rules - Establish your boundaries</li>
              <li>• Monitor access logs - Stay vigilant and aware</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Long-term Vision (Sustainable Security):</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Deploy API key authentication - Establish trusted access</li>
              <li>• Use VPN for remote connectivity - Secure your digital highways</li>
              <li>• Implement intelligent rate limiting - Ensure fair usage</li>
              <li>• Conduct regular security reviews - Continuous improvement</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded border-l-4 border-tricolor">
          <p className="text-sm font-medium text-center">
            "Security is not a destination, but a journey of continuous vigilance and improvement - 
            let us walk this path together towards a stronger digital future."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

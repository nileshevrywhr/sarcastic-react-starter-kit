
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const ServerStats = () => {
  const stats = [
    {
      value: 259237,
      label: "Total Servers Discovered",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20"
    },
    {
      value: 1937,
      label: "Secured Servers",
      color: "text-green-400", 
      bgColor: "bg-green-500/10 border-green-500/20"
    },
    {
      value: 126,
      label: "New Discoveries Today",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      value: 4,
      label: "Latest Discovery",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10 border-pink-500/20",
      suffix: " minutes ago"
    }
  ];

  return (
    <section className="container py-16 -mt-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Digital Infrastructure Census</h2>
        <p className="text-muted-foreground">Real-time data on our collective journey toward server security</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg border backdrop-blur-sm ${stat.bgColor} transition-all duration-300 hover:scale-105`}
          >
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                <AnimatedCounter 
                  target={stat.value} 
                  duration={2000 + (index * 300)}
                />
                {stat.suffix && (
                  <span className="text-sm font-normal"> minutes ago</span>
                )}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-xs text-muted-foreground italic">
          * Progress takes time, but every step forward strengthens our digital foundation
        </p>
      </div>
    </section>
  );
};

export default ServerStats;

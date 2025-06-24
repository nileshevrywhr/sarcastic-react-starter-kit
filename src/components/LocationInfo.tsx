
import { MapPin } from "lucide-react";

const LocationInfo = () => {
  const serverData = {
    ip: "117.72.XXX.XX",
    port: 11434,
    version: "0.5.10",
    city: "Beijing",
    country: "CN",
    country_name: "China",
    region: "Beijing",
    latitude: "39.907501",
    longitude: "116.397102",
    protocol: "http",
    local: [
      {
        name: "deepseek-r1:1.5b",
        model: "deepseek-r1:1.5b",
        size: 1117322599
      },
      {
        name: "nomic-embed-text:latest",
        model: "nomic-embed-text:latest",
        size: 274302450
      }
    ],
    running: [],
    first_seen_online: "2025-06-23T20:57:12.507543",
    age: "10 hours"
  };

  const formatSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    const gb = bytes / (1024 * 1024 * 1024);
    
    if (gb >= 1) {
      return `${gb.toFixed(1)}GB`;
    } else {
      return `${mb.toFixed(0)}MB`;
    }
  };

  return (
    <section className="container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Map Placeholder */}
        <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Map will be integrated here</p>
            <p className="text-sm text-muted-foreground mt-2">
              {serverData.latitude}, {serverData.longitude}
            </p>
          </div>
        </div>

        {/* Server Information */}
        <div className="bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-sm text-white p-6 rounded-lg font-mono text-sm h-96 overflow-y-auto">
          {/* Header with IP:Port and status */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-cyan-400 text-lg font-medium">
                {serverData.ip}:{serverData.port}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 text-xs">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-400">🇨🇳</span>
              <span className="text-white">
                {serverData.country_name} / {serverData.region} / {serverData.city}
              </span>
            </div>
          </div>

          {/* Protocol and Version */}
          <div className="space-y-1 mb-4">
            <div>
              <span className="text-gray-400">Protocol: </span>
              <span className="text-cyan-400">{serverData.protocol}</span>
            </div>
            <div>
              <span className="text-gray-400">Version: </span>
              <span className="text-cyan-400">{serverData.version}</span>
            </div>
          </div>

          {/* Models */}
          <div className="mb-4">
            <div className="text-yellow-400 mb-2">Local Models ({serverData.local.length})</div>
            {serverData.local.map((model, index) => (
              <div key={index} className="ml-2 mb-1 text-xs">
                <div className="text-white">{model.name}</div>
                <div className="text-gray-400">{formatSize(model.size)}</div>
              </div>
            ))}
          </div>

          {/* Running Models */}
          <div className="mb-4">
            <div className="text-yellow-400 mb-2">Running ({serverData.running.length})</div>
            {serverData.running.length === 0 && (
              <div className="ml-2 text-gray-400 text-xs">No models currently running</div>
            )}
          </div>

          {/* Timestamps */}
          <div className="border-t border-gray-700 pt-4 space-y-1 text-xs text-gray-400">
            <div>First seen: {new Date(serverData.first_seen_online).toLocaleString()}</div>
            <div>Age: {serverData.age}</div>
            <div>Coordinates: {serverData.latitude}, {serverData.longitude}</div>
            <div>Country code: {serverData.country}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;

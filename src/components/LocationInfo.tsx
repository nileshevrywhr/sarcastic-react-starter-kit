
import { MapPin } from "lucide-react";

const LocationInfo = () => {
  const locationData = {
    city: "Mumbai",
    country: "IN",
    country_name: "India",
    ip: "13.233.86.114",
    port: "22181",
    protocol: "https",
    region: "Maharashtra",
    ollama_version: "0.9.0",
    first_found: "27/5/2025, 5:22:54 pm",
    age: "3 weeks",
    latitude: "19.075975",
    longitude: "72.877380",
    organization: "Infocon Holding - EasyIO-30P Sedona",
    asn: "16509"
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
              {locationData.latitude}, {locationData.longitude}
            </p>
          </div>
        </div>

        {/* Minimal Server Information */}
        <div className="bg-slate-900 text-white p-6 rounded-lg font-mono">
          {/* Header with URL and status */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-cyan-400 text-lg">
              {locationData.protocol}://{locationData.ip}:{locationData.port}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm">99%</span>
            </div>
          </div>

          {/* Organization info */}
          <div className="mb-4">
            <div className="text-orange-400 text-sm mb-1">aws</div>
            <div className="text-white mb-2">{locationData.organization}</div>
            <div className="text-cyan-400">{locationData.ip}</div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-400">🇮🇳</span>
            <span className="text-white">
              {locationData.country_name} / {locationData.region} / {locationData.city}
            </span>
          </div>

          {/* ASN */}
          <div className="mb-3">
            <span className="text-gray-400">ASN: </span>
            <span className="text-cyan-400">{locationData.asn}</span>
          </div>

          {/* Organization code */}
          <div className="mb-3">
            <span className="text-gray-400">Organization: </span>
            <span className="text-cyan-400">AMAZON-02</span>
          </div>

          {/* Date */}
          <div className="mb-4">
            <span className="text-white">2025-06-24</span>
          </div>

          {/* Service indicator */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400">ollama</span>
          </div>

          {/* Additional fields for reference */}
          <div className="border-t border-gray-700 pt-4 text-xs space-y-1 text-gray-400">
            <div>Country: {locationData.country}</div>
            <div>Protocol: {locationData.protocol}</div>
            <div>Ollama Version: {locationData.ollama_version}</div>
            <div>First Found: {locationData.first_found}</div>
            <div>Age: {locationData.age}</div>
            <div>Coordinates: {locationData.latitude}, {locationData.longitude}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;

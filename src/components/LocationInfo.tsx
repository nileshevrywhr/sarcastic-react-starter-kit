
import { MapPin, Globe, Server, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocationInfo = () => {
  const locationData = {
    city: "Mumbai",
    country: "IN",
    country_name: "India",
    ip: "13.233.XXX.XXX",
    port: "11434",
    protocol: "http",
    region: "Maharashtra",
    ollama_version: "0.9.0",
    first_found: "27/5/2025, 5:22:54 pm",
    age: "3 weeks",
    latitude: "19.075975",
    longitude: "72.877380",
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

        {/* Location Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-6">Location Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">City:</span>
                  <span>{locationData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Region:</span>
                  <span>{locationData.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Country:</span>
                  <span>{locationData.country_name} ({locationData.country})</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Network
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IP:</span>
                  <span className="font-mono">{locationData.ip}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Port:</span>
                  <span className="font-mono">{locationData.port}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protocol:</span>
                  <span className="uppercase">{locationData.protocol}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ollama Version:</span>
                  <span>{locationData.ollama_version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coordinates:</span>
                  <span className="font-mono text-xs">
                    {locationData.latitude}, {locationData.longitude}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">First Found:</span>
                  <span className="text-sm">{locationData.first_found}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age:</span>
                  <span>{locationData.age}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;

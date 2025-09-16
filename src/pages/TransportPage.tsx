import { 
  Car, 
  Train, 
  Bus, 
  Plane, 
  MapPin, 
  Clock, 
  DollarSign,
  Navigation,
  Shield,
  Users,
  Zap,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransportPage() {
  const transportOptions = {
    taxi: [
      {
        id: 1,
        company: "Uber",
        type: "UberX",
        eta: "3 min",
        price: "$12-16",
        rating: 4.8,
        safetyFeatures: ["GPS Tracking", "Driver Verification", "24/7 Support"],
        distance: "0.2 miles away"
      },
      {
        id: 2,
        company: "Yellow Cab",
        type: "Standard",
        eta: "5 min",
        price: "$10-14",
        rating: 4.2,
        safetyFeatures: ["Licensed Driver", "Regulated Rates"],
        distance: "0.1 miles away"
      }
    ],
    metro: [
      {
        id: 1,
        line: "6 Train",
        direction: "Downtown",
        eta: "2 min",
        price: "$2.90",
        crowdLevel: "Medium",
        safetyScore: 85,
        nextStops: ["Union Square", "Astor Place", "Bleecker St"]
      },
      {
        id: 2,
        line: "N/Q/R Train",
        direction: "Brooklyn",
        eta: "4 min",
        price: "$2.90",
        crowdLevel: "High",
        safetyScore: 82,
        nextStops: ["14th St", "Canal St", "DeKalb Ave"]
      }
    ],
    bus: [
      {
        id: 1,
        route: "M15",
        direction: "Uptown",
        eta: "6 min",
        price: "$2.90",
        crowdLevel: "Low",
        safetyScore: 88,
        accessibility: true
      },
      {
        id: 2,
        route: "M14",
        direction: "Crosstown",
        eta: "8 min",
        price: "$2.90",
        crowdLevel: "Medium",
        safetyScore: 86,
        accessibility: true
      }
    ]
  };

  const emergencyTransport = [
    {
      name: "Emergency Taxi Service",
      phone: "+1-911-TAXI",
      description: "24/7 emergency taxi with police coordination",
      responseTime: "< 5 minutes"
    },
    {
      name: "Medical Transport",
      phone: "911",
      description: "Ambulance and medical emergency transport",
      responseTime: "< 8 minutes"
    },
    {
      name: "Embassy Transport",
      phone: "+1-212-555-0199",
      description: "Secure transport to nearest embassy",
      responseTime: "< 15 minutes"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Transport & Navigation</h1>
        <p className="text-muted-foreground">Safe and reliable transportation options with real-time tracking</p>
      </div>

      {/* Current Location */}
      <Card className="shadow-medium border-0">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Current Location</h3>
              <p className="text-muted-foreground">14th Street & 3rd Avenue, Manhattan</p>
            </div>
            <Badge variant="default" className="bg-success">Safe Area</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Emergency Transport */}
      <Card className="shadow-medium border-0 border-l-4 border-l-emergency">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-emergency">
            <Shield className="w-5 h-5" />
            <span>Emergency Transport</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyTransport.map((service, index) => (
              <div key={index} className="p-3 bg-emergency/5 border border-emergency/20 rounded-lg">
                <h4 className="font-medium text-emergency mb-1">{service.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-emergency">ETA: {service.responseTime}</span>
                  <Button size="sm" variant="destructive">
                    Call Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transport Options */}
      <Tabs defaultValue="taxi" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="taxi" className="flex items-center space-x-2">
            <Car className="w-4 h-4" />
            <span>Taxi/Rideshare</span>
          </TabsTrigger>
          <TabsTrigger value="metro" className="flex items-center space-x-2">
            <Train className="w-4 h-4" />
            <span>Metro</span>
          </TabsTrigger>
          <TabsTrigger value="bus" className="flex items-center space-x-2">
            <Bus className="w-4 h-4" />
            <span>Bus</span>
          </TabsTrigger>
          <TabsTrigger value="airport" className="flex items-center space-x-2">
            <Plane className="w-4 h-4" />
            <span>Airport</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="taxi" className="space-y-4">
          <div className="space-y-4">
            {transportOptions.taxi.map((option) => (
              <Card key={option.id} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{option.company} - {option.type}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {option.eta}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {option.price}
                          </div>
                          <div className="flex items-center text-sm">
                            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                            {option.rating}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{option.distance}</p>
                      </div>
                    </div>
                    <Button>
                      Book Ride
                    </Button>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-sm font-medium mb-2">Safety Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {option.safetyFeatures.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="metro" className="space-y-4">
          <div className="space-y-4">
            {transportOptions.metro.map((option) => (
              <Card key={option.id} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Train className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{option.line} - {option.direction}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {option.eta}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {option.price}
                          </div>
                          <Badge variant={option.crowdLevel === "High" ? "destructive" : option.crowdLevel === "Medium" ? "secondary" : "default"}>
                            {option.crowdLevel} Crowd
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="default" className="mb-2">
                        Safety: {option.safetyScore}%
                      </Badge>
                      <Button className="block">
                        <Navigation className="w-4 h-4 mr-2" />
                        Navigate
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-sm font-medium mb-2">Next Stops:</p>
                    <div className="flex space-x-2">
                      {option.nextStops.map((stop, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {stop}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bus" className="space-y-4">
          <div className="space-y-4">
            {transportOptions.bus.map((option) => (
              <Card key={option.id} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Bus className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Route {option.route} - {option.direction}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {option.eta}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {option.price}
                          </div>
                          {option.accessibility && (
                            <Badge variant="default" className="bg-success">
                              Accessible
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="default" className="mb-2">
                        Safety: {option.safetyScore}%
                      </Badge>
                      <Button className="block">
                        <Navigation className="w-4 h-4 mr-2" />
                        Track Bus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="airport" className="space-y-4">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plane className="w-5 h-5 text-primary" />
                <span>Airport Transportation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">AirTrain + Subway</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>To JFK Airport:</span>
                      <span className="font-medium">45-60 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost:</span>
                      <span className="font-medium">$10.25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Score:</span>
                      <Badge variant="default">88%</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-3" variant="outline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Car className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Taxi to Airport</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>To JFK Airport:</span>
                      <span className="font-medium">30-45 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost:</span>
                      <span className="font-medium">$55-75</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Score:</span>
                      <Badge variant="default">95%</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-3">
                    Book Airport Taxi
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Live Transit Updates */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Live Transit Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
              <p className="text-sm font-medium text-secondary">⚠ Service Alert: 6 Train experiencing delays</p>
              <p className="text-xs text-muted-foreground">Expected delay: 5-10 minutes</p>
            </div>
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <p className="text-sm font-medium text-success">✓ M15 Bus running on schedule</p>
              <p className="text-xs text-muted-foreground">All services operating normally</p>
            </div>
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium text-primary">ℹ Weather Update: Clear conditions for all transport</p>
              <p className="text-xs text-muted-foreground">Good visibility, no weather-related delays</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
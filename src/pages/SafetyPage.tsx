import { Shield, AlertTriangle, MapPin, Clock, Bell, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SafetyPage() {
  const alerts = [
    {
      type: "warning",
      title: "Crowded Area Alert",
      description: "Times Square is experiencing high tourist density. Consider alternative routes.",
      time: "5 minutes ago",
      level: "Medium"
    },
    {
      type: "danger",
      title: "Weather Warning",
      description: "Heavy rain expected in Central Park area from 3-5 PM.",
      time: "15 minutes ago",
      level: "High"
    },
    {
      type: "info",
      title: "Safe Zone Update",
      description: "New emergency shelter added near Brooklyn Bridge.",
      time: "1 hour ago",
      level: "Info"
    }
  ];

  const safeZones = [
    { name: "Police Station 14th Precinct", distance: "0.3 miles", type: "Police" },
    { name: "Lenox Health Greenwich Village", distance: "0.5 miles", type: "Hospital" },
    { name: "US Embassy Consulate", distance: "1.2 miles", type: "Embassy" },
    { name: "Tourist Information Center", distance: "0.8 miles", type: "Info" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Safety & Alerts</h1>
        <p className="text-muted-foreground">Real-time safety information and emergency guidance</p>
      </div>

      {/* Current Safety Status */}
      <Card className="shadow-medium border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-success/10 rounded-full">
              <Shield className="w-8 h-8 text-success" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">You're in a Safe Zone</h2>
              <p className="text-muted-foreground">Current location: Greenwich Village, Manhattan</p>
            </div>
            <Badge variant="default" className="bg-success text-success-foreground">
              Safe Area
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Active Alerts */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-primary" />
            <span>Active Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert, index) => (
            <Alert key={index} className={`border-l-4 ${
              alert.type === 'danger' ? 'border-l-emergency bg-emergency/5' :
              alert.type === 'warning' ? 'border-l-secondary bg-secondary/5' :
              'border-l-primary bg-primary/5'
            }`}>
              <AlertTriangle className={`h-4 w-4 ${
                alert.type === 'danger' ? 'text-emergency' :
                alert.type === 'warning' ? 'text-secondary' :
                'text-primary'
              }`} />
              <AlertDescription>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{alert.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      alert.level === 'High' ? 'destructive' :
                      alert.level === 'Medium' ? 'secondary' :
                      'outline'
                    } className="mb-1">
                      {alert.level}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* Nearby Safe Zones */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Nearby Safe Zones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {safeZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    zone.type === 'Police' ? 'bg-primary/10 text-primary' :
                    zone.type === 'Hospital' ? 'bg-emergency/10 text-emergency' :
                    zone.type === 'Embassy' ? 'bg-success/10 text-success' :
                    'bg-secondary/10 text-secondary'
                  }`}>
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{zone.name}</p>
                    <p className="text-sm text-muted-foreground">{zone.distance} away</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Navigation className="w-4 h-4 mr-1" />
                  Navigate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Today's Safety Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <p className="text-sm font-medium text-success">✓ Carry emergency contact information</p>
            </div>
            <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
              <p className="text-sm font-medium text-secondary">⚠ Avoid crowded subway stations during rush hour</p>
            </div>
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium text-primary">ℹ Keep digital copies of important documents</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Actions */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-emergency" />
            <span>Emergency Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <Shield className="w-6 h-6 text-success" />
              <span className="font-medium">Find Nearest Safe Zone</span>
              <span className="text-xs text-muted-foreground">Locate emergency shelters</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <Navigation className="w-6 h-6 text-primary" />
              <span className="font-medium">Emergency Route</span>
              <span className="text-xs text-muted-foreground">Get to safety quickly</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
              <Bell className="w-6 h-6 text-secondary" />
              <span className="font-medium">Report Incident</span>
              <span className="text-xs text-muted-foreground">Alert local authorities</span>
            </Button>
            
            <Button variant="destructive" className="h-auto p-4 flex flex-col space-y-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-medium">Emergency SOS</span>
              <span className="text-xs">Immediate help</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
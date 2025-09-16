import { MapPin, Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SafetyScore } from "@/components/home/SafetyScore";
import { QuickActions } from "@/components/home/QuickActions";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Hero */}
      <div className="gradient-hero rounded-xl p-8 text-white shadow-large">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-3">
            Welcome to Safe Tourist Companion
          </h1>
          <p className="text-white/90 text-lg">
            Your trusted travel companion with AI-powered safety features, 
            emergency assistance, and personalized travel guidance.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
              24/7 Emergency Support
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
              AI-Powered Safety
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Safety Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Safety Score */}
        <div className="lg:col-span-1">
          <SafetyScore />
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
      </div>

      {/* Current Location Status */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Current Location Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full safe-glow"></div>
              <div>
                <div className="font-medium">Safe Zone</div>
                <div className="text-sm text-muted-foreground">Tourist-friendly area</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div>
                <div className="font-medium">Good Weather</div>
                <div className="text-sm text-muted-foreground">Clear skies, 24°C</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <div>
                <div className="font-medium">Transport Available</div>
                <div className="text-sm text-muted-foreground">Multiple options nearby</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
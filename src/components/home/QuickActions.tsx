import { 
  MapPin, 
  AlertTriangle, 
  Phone, 
  Navigation, 
  Car,
  MessageCircle,
  Shield,
  Camera
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Find Safe Zone",
    icon: Shield,
    description: "Locate nearest safe area",
    href: "/safety",
    color: "text-success"
  },
  {
    title: "Emergency Route",
    icon: Navigation,
    description: "Get to safety quickly",
    href: "/emergency",
    color: "text-emergency"
  },
  {
    title: "Report Issue",
    icon: AlertTriangle,
    description: "Alert authorities",
    href: "/safety",
    color: "text-secondary"
  },
  {
    title: "Call Embassy",
    icon: Phone,
    description: "Contact your embassy",
    href: "/support",
    color: "text-primary"
  },
  {
    title: "Find Transport",
    icon: Car,
    description: "Safe transportation",
    href: "/transport",
    color: "text-primary"
  },
  {
    title: "AI Assistant",
    icon: MessageCircle,
    description: "Get instant help",
    href: "/support",
    color: "text-primary"
  }
];

export function QuickActions() {
  return (
    <Card className="shadow-medium border-0">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Camera className="w-5 h-5 text-primary" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.href}>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col space-y-2 hover:shadow-soft transition-smooth"
              >
                <action.icon className={`w-6 h-6 ${action.color}`} />
                <div className="text-center">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
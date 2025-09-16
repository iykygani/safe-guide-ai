import { useState } from "react";
import { 
  Home, 
  CreditCard, 
  MapPin, 
  Shield, 
  AlertTriangle, 
  Bus, 
  MessageSquare, 
  HeadphonesIcon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "My Digital ID", url: "/digital-id", icon: CreditCard },
  { title: "Travel Guide", url: "/travel-guide", icon: MapPin },
  { title: "Safety & Alerts", url: "/safety", icon: Shield },
  { title: "Emergency SOS", url: "/emergency", icon: AlertTriangle },
  { title: "Transport", url: "/transport", icon: Bus },
  { title: "Reviews", url: "/reviews", icon: MessageSquare },
  { title: "Support", url: "/support", icon: HeadphonesIcon },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden shadow-medium"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X /> : <Menu />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-card border-r border-border z-50 transition-all duration-300",
          "lg:relative lg:translate-x-0",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">SafeTour</span>
            </div>
          )}
          
          {/* Desktop Collapse Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive: navIsActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-smooth",
                  "hover:bg-accent hover:text-accent-foreground",
                  navIsActive || isActive(item.url)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground"
                )
              }
              onClick={() => setIsMobileOpen(false)}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.title}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Emergency Contact */}
        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-emergency/10 border border-emergency/20 rounded-lg p-3">
              <p className="text-sm font-medium text-emergency">24/7 Emergency</p>
              <p className="text-xs text-emergency/80">Tap SOS for instant help</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
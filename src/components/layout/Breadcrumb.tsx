import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/digital-id": "My Digital ID",
  "/travel-guide": "Travel Guide",
  "/safety": "Safety & Alerts",
  "/emergency": "Emergency SOS",
  "/transport": "Transport",
  "/reviews": "Reviews",
  "/support": "Support",
};

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Link 
        to="/" 
        className="flex items-center hover:text-foreground transition-smooth"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const routeName = routeNames[routeTo] || pathname;

        return (
          <div key={pathname} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-foreground font-medium">{routeName}</span>
            ) : (
              <Link 
                to={routeTo}
                className="hover:text-foreground transition-smooth"
              >
                {routeName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
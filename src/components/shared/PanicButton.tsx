import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PanicButton() {
  const [isActivated, setIsActivated] = useState(false);

  const handlePanicActivation = () => {
    setIsActivated(true);
    // Simulate emergency alert
    setTimeout(() => {
      alert("Emergency services have been notified! Help is on the way.");
      setIsActivated(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handlePanicActivation}
        disabled={isActivated}
        className={`
          w-16 h-16 rounded-full shadow-emergency border-2 border-emergency-light
          ${isActivated 
            ? 'bg-emergency-dark emergency-pulse' 
            : 'gradient-emergency hover:scale-110 transition-spring'
          }
        `}
      >
        {isActivated ? (
          <Phone className="w-6 h-6 text-white animate-pulse" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-white" />
        )}
      </Button>
      
      {!isActivated && (
        <div className="absolute -top-12 right-0 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Emergency SOS
        </div>
      )}
    </div>
  );
}
import { Shield, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function SafetyScore() {
  const safetyScore = 82; // Mock safety score
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-secondary";
    return "text-emergency";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Caution";
  };

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-primary" />
          <span>Your Safety Score</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Score Display */}
          <div className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor(safetyScore)}`}>
              {safetyScore}
            </div>
            <Badge 
              variant={safetyScore >= 80 ? "default" : safetyScore >= 60 ? "secondary" : "destructive"}
              className="mt-1"
            >
              {getScoreLabel(safetyScore)}
            </Badge>
          </div>

          {/* Progress Bar */}
          <Progress value={safetyScore} className="h-2" />

          {/* Score Factors */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Location Safety</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-success" />
                <span className="text-success">High</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Travel Pattern</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-success" />
                <span className="text-success">Safe</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Emergency Contacts</span>
              <div className="flex items-center space-x-1">
                <AlertCircle className="w-3 h-3 text-secondary" />
                <span className="text-secondary">Update Needed</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
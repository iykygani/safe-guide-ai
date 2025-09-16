import { CreditCard, User, MapPin, Phone, Calendar, FileText, Download, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function DigitalIdPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Digital Tourist ID</h1>
          <p className="text-muted-foreground">Blockchain-secured identity and travel documents</p>
        </div>
        <Badge variant="default" className="bg-success text-success-foreground">
          Verified
        </Badge>
      </div>

      {/* Digital ID Card */}
      <Card className="shadow-large border-0 gradient-primary text-white">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">John Anderson</h2>
                <p className="text-white/80">Tourist ID: #TID-2024-001892</p>
              </div>
            </div>
            <CreditCard className="w-8 h-8 text-white/60" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/60">Nationality</p>
              <p className="font-medium">United States</p>
            </div>
            <div>
              <p className="text-white/60">Valid Until</p>
              <p className="font-medium">Dec 31, 2024</p>
            </div>
            <div>
              <p className="text-white/60">Emergency Contact</p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-white/60">Current Location</p>
              <p className="font-medium">New York, NY</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-primary" />
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <p className="font-medium">John Anderson</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                <p className="font-medium">March 15, 1990</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Passport Number</label>
                <p className="font-medium">123456789</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nationality</label>
                <p className="font-medium">United States</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Update Information
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>Emergency Contacts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Sarah Anderson</p>
                    <p className="text-sm text-muted-foreground">Spouse</p>
                  </div>
                  <p className="text-sm">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Emergency Services</p>
                    <p className="text-sm text-muted-foreground">Local Emergency</p>
                  </div>
                  <p className="text-sm">911</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Add Contact
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Travel Documents */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-primary" />
            <span>Travel Documents</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <Badge variant="default">Active</Badge>
              </div>
              <h3 className="font-medium">Passport</h3>
              <p className="text-sm text-muted-foreground">Expires: 2030-03-15</p>
              <Button variant="ghost" size="sm" className="mt-2 p-0">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <Badge variant="default">Active</Badge>
              </div>
              <h3 className="font-medium">Travel Insurance</h3>
              <p className="text-sm text-muted-foreground">Expires: 2024-12-31</p>
              <Button variant="ghost" size="sm" className="mt-2 p-0">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-6 h-6 text-secondary" />
                <Badge variant="secondary">Pending</Badge>
              </div>
              <h3 className="font-medium">Visa</h3>
              <p className="text-sm text-muted-foreground">Processing...</p>
              <Button variant="ghost" size="sm" className="mt-2 p-0">
                <Upload className="w-4 h-4 mr-1" />
                Upload
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Trip */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Current Trip Itinerary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">New York City Tour</p>
                  <p className="text-sm text-muted-foreground">Dec 15-20, 2024</p>
                </div>
              </div>
              <Badge variant="default">Current</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="text-muted-foreground">Hotel</label>
                <p className="font-medium">Times Square Hotel</p>
              </div>
              <div>
                <label className="text-muted-foreground">Check-out</label>
                <p className="font-medium">Dec 20, 2024</p>
              </div>
              <div>
                <label className="text-muted-foreground">Flight</label>
                <p className="font-medium">AA123 - Dec 20, 8:30 PM</p>
              </div>
              <div>
                <label className="text-muted-foreground">Local Contact</label>
                <p className="font-medium">+1 (212) 555-0123</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
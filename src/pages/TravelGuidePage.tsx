import { useState } from "react";
import { 
  MapPin, 
  Star, 
  Clock, 
  DollarSign, 
  Camera, 
  Calendar,
  Users,
  Heart,
  Navigation,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TravelGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("attractions");

  const attractions = [
    {
      id: 1,
      name: "Statue of Liberty",
      rating: 4.8,
      price: "$25",
      distance: "2.1 miles",
      image: "🗽",
      category: "Monument",
      description: "Iconic symbol of freedom and democracy",
      safetyScore: 95,
      crowdLevel: "Medium"
    },
    {
      id: 2,
      name: "Central Park",
      rating: 4.7,
      price: "Free",
      distance: "0.8 miles",
      image: "🌳",
      category: "Park",
      description: "Large urban park perfect for relaxation",
      safetyScore: 88,
      crowdLevel: "High"
    },
    {
      id: 3,
      name: "Brooklyn Bridge",
      rating: 4.6,
      price: "Free",
      distance: "1.5 miles",
      image: "🌉",
      category: "Bridge",
      description: "Historic suspension bridge with city views",
      safetyScore: 92,
      crowdLevel: "High"
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Joe's Pizza",
      rating: 4.5,
      price: "$8-15",
      distance: "0.3 miles",
      cuisine: "Italian",
      safetyScore: 90,
      crowdLevel: "Medium"
    },
    {
      id: 2,
      name: "The Halal Guys",
      rating: 4.4,
      price: "$10-18",
      distance: "0.6 miles",
      cuisine: "Middle Eastern",
      safetyScore: 88,
      crowdLevel: "High"
    }
  ];

  const hotels = [
    {
      id: 1,
      name: "Times Square Hotel",
      rating: 4.3,
      price: "$200-350/night",
      distance: "0.2 miles",
      amenities: ["WiFi", "Gym", "24/7 Security"],
      safetyScore: 95,
      crowdLevel: "High"
    }
  ];

  const events = [
    {
      id: 1,
      name: "Broadway Show: Hamilton",
      date: "Tonight 8:00 PM",
      price: "$75-200",
      venue: "Richard Rodgers Theatre",
      availability: "Limited seats"
    },
    {
      id: 2,
      name: "Christmas Market",
      date: "Dec 15-25",
      price: "Free Entry",
      venue: "Union Square",
      availability: "Open"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Travel Guide</h1>
          <p className="text-muted-foreground">Personalized recommendations based on your preferences and safety</p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="shadow-soft border-0">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input placeholder="Search attractions, restaurants, events..." />
            </div>
            <Button>
              <MapPin className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Attractions</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">95%</div>
            <div className="text-sm text-muted-foreground">Safe Areas</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary">300+</div>
            <div className="text-sm text-muted-foreground">Restaurants</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="attractions" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="shadow-medium border-0 hover:shadow-large transition-smooth">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                    {attraction.image}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{attraction.name}</h3>
                      <Button variant="ghost" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm ml-1">{attraction.rating}</span>
                      </div>
                      <Badge variant="outline">{attraction.category}</Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-medium">{attraction.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Distance:</span>
                        <span className="font-medium">{attraction.distance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Safety Score:</span>
                        <Badge variant={attraction.safetyScore >= 90 ? "default" : "secondary"}>
                          {attraction.safetyScore}%
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Crowd Level:</span>
                        <Badge variant={attraction.crowdLevel === "High" ? "destructive" : "outline"}>
                          {attraction.crowdLevel}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" className="flex-1">
                        <Navigation className="w-4 h-4 mr-1" />
                        Navigate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="restaurants" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3">{restaurant.cuisine}</Badge>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Price Range:</span>
                      <span className="font-medium">{restaurant.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance:</span>
                      <span className="font-medium">{restaurant.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Score:</span>
                      <Badge variant="default">{restaurant.safetyScore}%</Badge>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hotels" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1">{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-3">
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">{hotel.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance:</span>
                      <span className="font-medium">{hotel.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety Score:</span>
                      <Badge variant="default">{hotel.safetyScore}%</Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {hotel.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <Card key={event.id} className="shadow-medium border-0">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{event.name}</h3>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Venue:</span>
                      <span className="font-medium">{event.venue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">{event.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <Badge variant={event.availability === "Limited seats" ? "destructive" : "default"}>
                        {event.availability}
                      </Badge>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Hidden Gems Section */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-primary" />
            <span>Hidden Gems Near You</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">🏛️ The Morgan Library</h4>
              <p className="text-sm text-muted-foreground mb-2">Stunning manuscripts and rare books</p>
              <div className="flex justify-between text-xs">
                <span>0.9 miles</span>
                <Badge variant="outline">Hidden Gem</Badge>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">🌺 Elevated Acre</h4>
              <p className="text-sm text-muted-foreground mb-2">Secret rooftop park with harbor views</p>
              <div className="flex justify-between text-xs">
                <span>1.2 miles</span>
                <Badge variant="outline">Local Favorite</Badge>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">🎭 Sleep No More</h4>
              <p className="text-sm text-muted-foreground mb-2">Immersive theater experience</p>
              <div className="flex justify-between text-xs">
                <span>0.7 miles</span>
                <Badge variant="outline">Unique</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
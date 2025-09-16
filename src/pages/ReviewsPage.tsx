import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  MapPin, 
  Calendar,
  User,
  Search,
  Filter,
  Plus,
  Shield,
  Camera
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar: "SJ",
      rating: 5,
      date: "2 days ago",
      location: "Times Square",
      title: "Amazing experience with great safety!",
      content: "The safety features of this app helped me navigate NYC confidently. The real-time alerts saved me from a crowded area, and the emergency button gave me peace of mind.",
      helpful: 12,
      category: "Safety",
      verified: true
    },
    {
      id: 2,
      user: "Mike Chen",
      avatar: "MC",
      rating: 4,
      date: "1 week ago",
      location: "Central Park",
      title: "Great travel recommendations",
      content: "Found some amazing hidden gems through this app. The AI assistant was very helpful in planning my itinerary. Only wish there were more restaurant options.",
      helpful: 8,
      category: "Travel Guide",
      verified: true
    },
    {
      id: 3,
      user: "Emma Rodriguez",
      avatar: "ER",
      rating: 5,
      date: "3 days ago",
      location: "Brooklyn Bridge",
      title: "Lifesaver in emergency situation",
      content: "Got lost late at night and the emergency features helped connect me with local authorities. The safe zone directions were incredibly accurate and fast.",
      helpful: 15,
      category: "Emergency",
      verified: true
    }
  ];

  const discussionTopics = [
    {
      id: 1,
      title: "Best places to visit in winter?",
      author: "TravelLover23",
      replies: 24,
      lastActivity: "2 hours ago",
      category: "General Discussion"
    },
    {
      id: 2,
      title: "Safety tips for solo female travelers",
      author: "SafeTraveler",
      replies: 18,
      lastActivity: "5 hours ago",
      category: "Safety Tips"
    },
    {
      id: 3,
      title: "Hidden gems in Manhattan",
      author: "LocalExplorer",
      replies: 31,
      lastActivity: "1 day ago",
      category: "Recommendations"
    }
  ];

  const safetyReports = [
    {
      id: 1,
      type: "warning",
      location: "42nd Street Station",
      issue: "Pickpocket activity reported",
      time: "30 minutes ago",
      status: "Verified",
      reports: 3
    },
    {
      id: 2,
      type: "info",
      location: "Central Park South",
      issue: "Street fair causing crowds",
      time: "2 hours ago",
      status: "Confirmed",
      reports: 7
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reviews & Community</h1>
          <p className="text-muted-foreground">Share experiences and help fellow travelers stay safe</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Write Review
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-soft border-0">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search reviews, locations, topics..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">1,234</div>
            <div className="text-sm text-muted-foreground">Total Reviews</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary">89</div>
            <div className="text-sm text-muted-foreground">Safety Reports</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">567</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="reviews" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
          <TabsTrigger value="discussions">Community Forum</TabsTrigger>
          <TabsTrigger value="safety">Safety Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-4">
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">{review.user}</h4>
                          {review.verified && (
                            <Badge variant="default" className="bg-success text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <Badge variant="outline">{review.category}</Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {review.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {review.date}
                        </div>
                      </div>
                      
                      <h5 className="font-medium mb-2">{review.title}</h5>
                      <p className="text-muted-foreground mb-4">{review.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="w-4 h-4 mr-1" />
                            Report
                          </Button>
                        </div>
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Write Review Section */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Write a Review</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Location visited" />
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Rating:</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                    ))}
                  </div>
                </div>
              </div>
              <Input placeholder="Review title" />
              <Textarea placeholder="Share your experience..." rows={4} />
              <div className="flex justify-between">
                <Button variant="outline">
                  <Camera className="w-4 h-4 mr-2" />
                  Add Photos
                </Button>
                <Button>
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-4">
          <div className="space-y-4">
            {discussionTopics.map((topic) => (
              <Card key={topic.id} className="shadow-soft border-0 hover:shadow-medium transition-smooth cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{topic.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>by {topic.author}</span>
                        <span>{topic.replies} replies</span>
                        <span>Last activity: {topic.lastActivity}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{topic.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create Discussion */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle>Start a Discussion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Discussion title" />
              <Textarea placeholder="What would you like to discuss?" rows={3} />
              <div className="flex justify-between">
                <select className="px-3 py-2 border border-border rounded-md">
                  <option>General Discussion</option>
                  <option>Safety Tips</option>
                  <option>Recommendations</option>
                  <option>Questions</option>
                </select>
                <Button>
                  Create Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <div className="space-y-4">
            {safetyReports.map((report) => (
              <Card key={report.id} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        report.type === 'warning' 
                          ? 'bg-secondary/10 text-secondary' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{report.issue}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {report.location}
                          </div>
                          <span>{report.time}</span>
                          <span>{report.reports} reports</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={report.status === 'Verified' ? 'default' : 'secondary'}>
                      {report.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Report Safety Issue */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-emergency">
                <Shield className="w-5 h-5" />
                <span>Report Safety Issue</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Location of incident" />
                <select className="px-3 py-2 border border-border rounded-md">
                  <option>Select issue type</option>
                  <option>Suspicious activity</option>
                  <option>Pickpocket/theft</option>
                  <option>Unsafe area</option>
                  <option>Emergency situation</option>
                  <option>Other</option>
                </select>
              </div>
              <Textarea placeholder="Describe the safety issue..." rows={3} />
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">
                  Anonymous reporting available for sensitive situations
                </p>
                <Button variant="destructive">
                  Submit Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
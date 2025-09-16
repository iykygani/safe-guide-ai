import { useState } from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe, 
  HelpCircle, 
  Send,
  Bot,
  User,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SupportPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your AI travel assistant. How can I help you today?",
      time: "Just now"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Police, Fire, Medical emergencies",
      available: "24/7"
    },
    {
      name: "Tourist Hotline",
      number: "+1-212-484-1222",
      description: "NYC official tourist assistance",
      available: "9 AM - 6 PM"
    },
    {
      name: "US Embassy",
      number: "+1-202-501-4444",
      description: "Citizen services and emergencies",
      available: "24/7 Emergency Line"
    },
    {
      name: "Poison Control",
      number: "+1-800-222-1222",
      description: "Poison and overdose assistance",
      available: "24/7"
    }
  ];

  const faqItems = [
    {
      question: "How do I use the emergency SOS feature?",
      answer: "Press and hold the red panic button for 3 seconds. This will immediately alert emergency services and your emergency contacts with your exact location."
    },
    {
      question: "How accurate are the safety scores?",
      answer: "Our safety scores are calculated using real-time data from police reports, crowd monitoring, weather conditions, and user reports. They're updated every 15 minutes."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes! Download offline maps and safety zones before traveling. The emergency SOS works via SMS when there's no internet connection."
    },
    {
      question: "How do I update my emergency contacts?",
      answer: "Go to My Digital ID > Emergency Contacts. You can add up to 5 contacts who will be notified in case of emergency."
    },
    {
      question: "Is my location data secure?",
      answer: "Yes, all location data is encrypted using blockchain technology. Your privacy is our priority - location is only shared during emergencies or with your explicit consent."
    }
  ];

  const supportTickets = [
    {
      id: "TK-2024-001",
      subject: "Unable to verify digital ID",
      status: "In Progress",
      priority: "High",
      created: "2 hours ago"
    },
    {
      id: "TK-2024-002", 
      subject: "App crashes when accessing transport",
      status: "Resolved",
      priority: "Medium",
      created: "1 day ago"
    }
  ];

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    setChatMessages(prev => [...prev, {
      id: prev.length + 1,
      type: "user",
      message: newMessage,
      time: "Just now"
    }]);

    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: prev.length + 1,
        type: "bot", 
        message: "I understand you need help with that. Let me assist you with finding the best solution for your situation.",
        time: "Just now"
      }]);
    }, 1000);

    setNewMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Support & Assistance</h1>
        <p className="text-muted-foreground">24/7 AI assistant, emergency contacts, and multilingual support</p>
      </div>

      {/* Emergency Support Banner */}
      <Card className="shadow-medium border-0 border-l-4 border-l-emergency">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emergency/10 rounded-full">
              <AlertTriangle className="w-6 h-6 text-emergency" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-emergency">Emergency? Need Immediate Help?</h3>
              <p className="text-muted-foreground">Use the red panic button or call emergency services directly</p>
            </div>
            <Button variant="destructive">
              <Phone className="w-4 h-4 mr-2" />
              Call 911
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Support Tabs */}
      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">AI Assistant</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-primary" />
                <span>AI Travel Assistant</span>
                <Badge variant="default" className="bg-success">Online</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto border border-border rounded-lg p-4 mb-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${msg.type === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                        {msg.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about safety, directions, emergencies..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                <Button variant="outline" size="sm" onClick={() => setNewMessage("Where is the nearest safe zone?")}>
                  Find Safe Zone
                </Button>
                <Button variant="outline" size="sm" onClick={() => setNewMessage("How do I get to the airport?")}>
                  Airport Transport
                </Button>
                <Button variant="outline" size="sm" onClick={() => setNewMessage("Emergency contacts help")}>
                  Emergency Help
                </Button>
                <Button variant="outline" size="sm" onClick={() => setNewMessage("What's the weather like?")}>
                  Weather Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                    <div className="flex items-center text-xs text-success">
                      <Clock className="w-3 h-3 mr-1" />
                      {contact.available}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-semibold">{contact.number}</span>
                    <Button size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Embassy Services */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>Embassy Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium mb-2">Lost Passport</h5>
                  <p className="text-sm text-muted-foreground mb-3">Emergency passport replacement services</p>
                  <Button variant="outline" size="sm" className="w-full">Contact Embassy</Button>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium mb-2">Legal Assistance</h5>
                  <p className="text-sm text-muted-foreground mb-3">Legal support and representation</p>
                  <Button variant="outline" size="sm" className="w-full">Get Help</Button>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h5 className="font-medium mb-2">Emergency Funds</h5>
                  <p className="text-sm text-muted-foreground mb-3">Emergency financial assistance</p>
                  <Button variant="outline" size="sm" className="w-full">Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">{item.question}</h4>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle>Still need help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your name" />
                <Input placeholder="Email address" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe your issue..." rows={4} />
              <Button className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Support Tickets</h3>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>

          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <Card key={ticket.id} className="shadow-soft border-0">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{ticket.subject}</h4>
                        <Badge variant="outline">{ticket.id}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Created: {ticket.created}</span>
                        <Badge variant={ticket.priority === 'High' ? 'destructive' : 'secondary'}>
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={ticket.status === 'Resolved' ? 'default' : 'secondary'}>
                        {ticket.status === 'Resolved' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {ticket.status}
                      </Badge>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
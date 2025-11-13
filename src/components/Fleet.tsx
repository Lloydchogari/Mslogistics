import { Card, CardContent } from "@/components/ui/card";
import { AirVent, Wifi, Usb, Coffee, Shield, Users } from "lucide-react";

const Fleet = () => {
  const features = [
    { icon: AirVent, label: "Air Conditioning" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: Usb, label: "USB Charging" },
    { icon: Coffee, label: "Refreshments" },
    { icon: Shield, label: "Safety First" },
    { icon: Users, label: "Spacious Seating" },
  ];

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern, well-maintained buses equipped with premium amenities for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/bus2.jpeg"
              alt="Luxury bus interior with comfortable seating"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/bus1.jpeg"
              alt="Metalstone bus fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-sm">{feature.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

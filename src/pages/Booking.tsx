import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Users, Phone, Mail, User, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    passengers: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking submitted successfully! We'll contact you shortly.");
    console.log("Booking submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cities = [
    "Harare",
    "Bulawayo",
    "Mutare",
    "Gweru",
    "Kwekwe",
    "Kadoma",
    "Masvingo",
    "Chinhoyi",
    "Marondera",
    "Victoria Falls",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Travel across Zimbabwe in comfort and style
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border-2 border-neutral/20 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <User className="text-primary" size={24} />
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 text-base border-2 focus:border-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 pl-11 text-base border-2 focus:border-primary"
                        placeholder="+263 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 pl-11 text-base border-2 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="text-primary" size={24} />
                  Journey Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="from" className="text-base font-medium">
                      From *
                    </Label>
                    <select
                      id="from"
                      name="from"
                      required
                      value={formData.from}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-base ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select departure city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="to" className="text-base font-medium">
                      To *
                    </Label>
                    <select
                      id="to"
                      name="to"
                      required
                      value={formData.to}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-base ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select destination city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-base font-medium">
                      Travel Date *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="h-12 pl-11 text-base border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passengers" className="text-base font-medium">
                      Number of Passengers *
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                      <select
                        id="passengers"
                        name="passengers"
                        required
                        value={formData.passengers}
                        onChange={handleChange}
                        className="h-12 w-full pl-11 rounded-md border-2 border-input bg-background px-3 py-2 text-base ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Passenger" : "Passengers"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                >
                  Complete Booking
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Need help? Contact us at <a href="tel:+263123456789" className="text-primary hover:underline">+263 123 456 789</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;

import { useState, useEffect, useRef } from "react";
import { Package, Bus, Truck } from "lucide-react";

const Routes = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const routes = [
    { destination: "Harare to Gweru", price: "$5", duration: "3h 30m" },
    { destination: "Harare to Kadoma", price: "$6", duration: "2h 15m" },
    { destination: "Harare to Kwekwe", price: "$8", duration: "2h 45m" },
    { destination: "Harare to Chegutu", price: "$12", duration: "1h 30m" },
    { destination: "Gweru to Kwekwe", price: "$4", duration: "1h 15m" },
    { destination: "Gweru to Kadoma", price: "$6", duration: "1h 45m" },
    { destination: "Gweru to Chegutu", price: "$8", duration: "2h 30m" },
    { destination: "Gweru to Harare", price: "$12", duration: "3h 30m" },
  ];

  const offices = [
    {
      city: "Harare",
      location: "Roadport Terminal",
      phone: "+263 242 123 456",
      email: "harare@metalstone.co.zw",
    },
    {
      city: "Gweru",
      location: "City Centre Bus Station",
      phone: "+263 54 987 654",
      email: "gweru@metalstone.co.zw",
    },
    {
      city: "Kadoma",
      location: "Main Bus Terminal",
      phone: "+263 68 456 789",
      email: "kadoma@metalstone.co.zw",
    },
    {
      city: "Kwekwe",
      location: "Central Bus Rank",
      phone: "+263 55 321 987",
      email: "kwekwe@metalstone.co.zw",
    },
  ];

  const services = [
    {
      icon: Package,
      title: "Small Parcel Delivery",
      description: "Fast and secure delivery of small packages across all our destinations."
    },
    {
      icon: Bus,
      title: "Coach Hire",
      description: "Comfortable coaches available for private hire and group travel."
    },
    {
      icon: Truck,
      title: "Goods Transportation",
      description: "Reliable freight services for your cargo transportation needs."
    },
    {
      icon: Bus,
      title: "Intercity Travel",
      description: "Convenient intercity bus services connecting major towns and cities."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            routes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [routes]);

  return (
    <section
      id="routes"
      ref={sectionRef}
      className="min-h-screen bg-white relative overflow-hidden py-16 md:py-20"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="h-0.5 w-8 bg-red-600"></div>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
              Routes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            Where We Go
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
            Daily services connecting Harare, Gweru, Kadoma, and Kwekwe
          </p>
        </div>

        {/* Routes Grid - Ticket Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Ticket Header */}
                <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
                  <h3 className="text-base font-semibold text-gray-900">{route.destination}</h3>
                </div>

                {/* Ticket Details */}
                <div className="p-4 space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="font-semibold text-gray-900">{route.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Daily Service</p>
                      <p className="font-semibold text-gray-900">Available</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Price</p>
                      <p className="text-2xl font-bold text-gray-900">{route.price}</p>
                    </div>
                  </div>

                  {/* Stylish Branding Instead of Barcode */}
                  <div className="border-t border-gray-200 pt-3 flex justify-end">
                    <span className="italic text-xs text-gray-400">Metalstone Logistics</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Contact - Plain Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-1">{office.city}</p>
              <p className="text-base text-gray-700">{office.phone}</p>
            </div>
          ))}
        </div>

        {/* Additional Services - Same as "Your Trusted Partner" */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
              Additional Services
            </h3>
            
            {/* Desktop View - Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Icon className="w-8 h-8 mx-auto text-red-600 mb-3" />
                    <p className="font-semibold text-lg text-gray-900 mb-2 text-center">{service.title}</p>
                    <p className="text-sm text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile View - Auto-Sliding Carousel */}
            <div className="md:hidden relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <Icon className="w-10 h-10 mx-auto text-red-600 mb-3" />
                        <p className="font-semibold text-lg text-gray-900 mb-2 text-center">{service.title}</p>
                        <p className="text-sm text-gray-600 text-center">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-red-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;

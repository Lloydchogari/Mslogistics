import { MapPin, ShieldCheck, Bus, Gem } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: ShieldCheck,
      title: "Safety & Reliability",
      description: "Reliable drivers and modern, well-maintained vehicles ensure a secure journey every time."
    },
    {
      icon: Gem,
      title: "Premium Comfort",
      description: "Enjoy spacious seating, climate control, and onboard amenities for a relaxing trip."
    },
    {
      icon: Bus,
      title: "Extensive Network",
      description: "Connecting all major cities and popular routes across Zimbabwe."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden flex items-start justify-center pt-20 md:pt-24 pb-8"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Column - Text & Bus */}
          <div className={`flex flex-col space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-snug">
                Metalstone Logistics
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                Experience reliable bus services connecting cities across Zimbabwe
              </p>
            </div>

            {/* Bus Image with curved path centered */}
            <div className="relative mt-6 mb-6 flex justify-center">
              {/* Curved line path */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 200 Q 150 80, 450 40"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>

              {/* Starting point marker */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 animate-pulse">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>

              {/* Destination marker */}
              <div className="absolute top-4 right-8 z-10 animate-bounce">
                <MapPin className="text-green-600 fill-green-600" size={28} />
              </div>

              {/* Bus Image - bigger and centered */}
              <div className="relative z-20 max-w-xl w-full">
                <img
                  src="/images/bus.jpeg"
                  alt="Metalstone luxury bus"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Smaller Ticket Card (Example Journey) */}
          <div className={`flex items-start justify-center lg:justify-end lg:ml-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-full max-w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Ticket Header */}
              <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900">Harare to Gweru</h3>
              </div>

              {/* Ticket Details */}
              <div className="p-4 space-y-3 text-sm">
                {/* Route Info */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Departure</p>
                    <p className="font-semibold text-gray-900">Harare</p>
                    <p className="text-xs text-gray-600">Roadport</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Arrival</p>
                    <p className="font-semibold text-gray-900">Gweru</p>
                    <p className="text-xs text-gray-600">City Center</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-gray-900">Nov 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-gray-900">4h 30m</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Price</p>
                    <p className="text-2xl font-bold text-gray-900">$25</p>
                  </div>
                </div>

                {/* Barcode */}
                <div className="border-t border-gray-200 pt-3 flex justify-center">
                  <svg width="140" height="45" viewBox="0 0 200 60">
                    {[...Array(20)].map((_, i) => (
                      <rect
                        key={i}
                        x={i * 10}
                        y="10"
                        width={Math.random() > 0.5 ? 4 : 2}
                        height="40"
                        fill="#000"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section with Auto-Slide on Mobile */}
        <div className={`mt-12 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
              Your Trusted Partner in Travel
            </h3>
            
            {/* Desktop View - Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Icon className="w-8 h-8 mx-auto text-red-600 mb-3" />
                    <p className="font-semibold text-lg text-gray-900 mb-2 text-center">{feature.title}</p>
                    <p className="text-sm text-gray-600 text-center">
                      {feature.description}
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
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <Icon className="w-10 h-10 mx-auto text-red-600 mb-3" />
                        <p className="font-semibold text-lg text-gray-900 mb-2 text-center">{feature.title}</p>
                        <p className="text-sm text-gray-600 text-center">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {features.map((_, index) => (
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

export default Hero;
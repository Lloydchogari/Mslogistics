import { CheckCircle, Award, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Sample background and logo 
const BG_IMAGE = "/images/buses1.png";
const LOGO_IMAGE = "/images/bus1.jpeg";

const features = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Leading the industry with decades of exceptional service"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your security is our top priority on every journey"
  },
  {
    icon: Users,
    title: "Expert Drivers",
    description: "Professional, trained staff committed to your comfort"
  },
  {
    icon: CheckCircle,
    title: "Premium Comfort",
    description: "Modern buses with luxury amenities throughout"
  }
];

function useAutoCarousel(length, delay = 3200) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, delay);
    return () => clearInterval(intervalRef.current);
  }, [length, delay]);

  return [index, setIndex];
}

const About = () => {
  const [activeIndex, setActiveIndex] = useAutoCarousel(features.length);

  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Logo top center for mobile */}
        <div className="w-full flex justify-center mb-10 md:hidden">
          <img
            src={LOGO_IMAGE}
            alt="Metalstone Logo"
            className="h-20 drop-shadow-xl object-contain"
          />
        </div>

        {/* Section header and logo for desktop */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-4">
              Why Choose Metalstone?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              For over two decades, Metalstone has been Zimbabwe's premier bus service provider,
              connecting families, businesses, and communities across the nation. Comfort, reliability, and safety for an unmatched travel experience.
            </p>
          </div>
          {/* Logo on the right for md+ */}
          <div className="md:w-1/3 items-center justify-end mt-8 md:mt-0 hidden md:flex">
            <img
              src={LOGO_IMAGE}
              alt="Metalstone Logo"
              className="h-20 md:h-24 drop-shadow-xl object-contain"
            />
          </div>
        </div>

        {/* Cards carousel */}
        <div className="flex justify-center items-center overflow-hidden relative h-64 md:h-72 mt-16">
          {features.map((feature, idx) => {
            const isActive = idx === activeIndex;
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center 
                  transition-all duration-700 ease-out
                  ${isActive ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"}
                `}
                style={{
                  pointerEvents: isActive ? "auto" : "none"
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/40 w-[320px] mx-auto flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mb-5">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-center">{feature.description}</p>
                </div>
              </div>
            );
          })}
          {/* Carousel indicators (dots) */}
          <div className="absolute bottom-8 w-full flex justify-center gap-2 z-30">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition 
                  ${activeIndex === idx ? "bg-blue-500" : "bg-gray-400/60"}
                `}
                aria-label={`Show card ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom-text, frosted glass, and decoration */}
        <div className="mt-20 flex justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-xl px-7 py-8 max-w-3xl mx-auto shadow-lg border border-white/20">
            <p className="text-lg text-white drop-shadow-lg font-medium mb-0 z-20 relative">
              Whether you're traveling for business or pleasure, Metalstone ensures every mile is a memory. Our commitment to excellence, punctuality, and customer satisfaction has made us the trusted choice for thousands of passengers. <span className="font-semibold text-blue-300">Join the Metalstone family today.</span>
            </p>
            {/* Deco shimmer effect below text */}
            <span
              className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-10 h-2 rounded-full bg-gradient-to-r from-blue-500 via-white to-blue-500 blur-sm opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

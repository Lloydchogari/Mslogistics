import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Routes = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const routes = [
    {
      from: "Harare",
      to: "Bulawayo",
      date: "Nov 15, 2024",
      duration: "5 hours",
      price: "$25",
      image: "/images/bus2.jpeg",
    },
    {
      from: "Harare",
      to: "Mutare",
      date: "Nov 18, 2024",
      duration: "3 hours",
      price: "$18",
      image: "/images/bus3.jpeg",
    },
    {
      from: "Bulawayo",
      to: "Victoria Falls",
      date: "Nov 20, 2024",
      duration: "6 hours",
      price: "$30",
      image: "/images/bus4.jpeg",
    },
    {
      from: "Harare",
      to: "Gweru",
      date: "Nov 22, 2024",
      duration: "2.5 hours",
      price: "$15",
      image: "/images/bus5.jpeg",
    },
    {
      from: "Bulawayo",
      to: "Gwanda",
      date: "Nov 25, 2024",
      duration: "2 hours",
      price: "$12",
      image: "/images/ms.logo.png",
    },
    {
      from: "Harare",
      to: "Masvingo",
      date: "Nov 27, 2024",
      duration: "4 hours",
      price: "$20",
      image: "/images/bus.jpeg",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
            Where We Travel
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Premium connections across Zimbabwe's major cities
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform w-full max-w-[280px] h-[400px] flex items-end justify-center mx-auto ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image covers whole card */}
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Text overlay container with darker black background */}
              <div className="relative z-10 w-full p-4 pt-7 pb-5 bg-black bg-opacity-80">
                <div className="flex items-center justify-center gap-6 mb-2 text-center text-white">
                  <div>
                    <p className="text-xs opacity-90">Departure</p>
                    <p className="font-semibold text-lg truncate">{route.from}</p>
                  </div>
                  <ArrowRight className="text-red-400" size={20} />
                  <div>
                    <p className="text-xs opacity-90">Arrival</p>
                    <p className="font-semibold text-lg truncate">{route.to}</p>
                  </div>
                </div>

                <div className="flex justify-between font-semibold text-base text-white mt-2">
                  <div>
                    <p className="text-xs opacity-70">Date</p>
                    <p>{route.date}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Duration</p>
                    <p>{route.duration}</p>
                  </div>
                </div>
                <div className="text-right text-3xl font-extrabold text-white mt-2">
                  {route.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Routes;

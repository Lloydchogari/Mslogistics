import { useState, useEffect } from "react";

const BusCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState([0, 0, 0, 0]);

  // Images for each container (3 images per container)
  const containerImages = [
    ["/images/bus1.jpeg", "/images/bus2.jpeg", "/images/bus3.jpeg"],
    ["/images/bus2.jpeg", "/images/bus3.jpeg", "/images/bus4.jpeg"],
    ["/images/bus3.jpeg", "/images/bus4.jpeg", "/images/bus5.jpeg"],
    ["/images/bus4.jpeg", "/images/bus5.jpeg", "/images/bus1.jpeg"]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => 
        prev.map(slide => (slide + 1) % 3)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="h-0.5 w-8 bg-red-600"></div>
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
              Our Fleet
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
            Premium Travel Experience
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Modern, comfortable buses equipped with the latest amenities for your journey
          </p>
        </div>

        {/* Main Grid: Image Containers & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: 2x2 Image Grid with Auto-Slide */}
          <div className="grid grid-cols-2 gap-3">
            {containerImages.map((images, containerIndex) => (
              <div 
                key={containerIndex}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] shadow-md"
              >
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ 
                    transform: `translateX(-${currentSlide[containerIndex] * 100}%)`,
                    width: '300%'
                  }}
                >
                  {images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="w-full h-full flex-shrink-0"
                    >
                      <img
                        src={image}
                        alt={`Fleet image ${imageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Logo with Glass Text Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Logo Background Image */}
            <div className="w-full h-full min-h-[400px] lg:min-h-full">
              <img
                src="/images/ms.logo.png"
                alt="Metalstone Logistics Logo"
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>

            {/* Glass Overlay Text */}
            <div className="absolute top-6 left-6 right-6 backdrop-blur-md bg-white/70 rounded-lg p-6 shadow-lg border border-gray-200/50 z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Metalstone Logistics
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Your trusted partner in reliable and comfortable travel across Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusCarousel;
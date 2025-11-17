const BusCarousel = () => {
  // Single image for each container
  const fleetImages = [
    "/images/buses1.png",
    "/images/bus2.jpeg",
    "/images/bus3.jpeg",
    "/images/bus4.jpeg"
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="h-0.5 w-8 bg-red-600"></div>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
              Our Fleet
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            Premium Travel Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
            Modern, comfortable buses equipped with the latest amenities for your journey
          </p>
        </div>

        {/* Main Grid: Image Containers & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: 2x2 Image Grid - Single Images */}
          <div className="grid grid-cols-2 gap-3">
            {fleetImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] shadow-md"
              >
                <img
                  src={image}
                  alt={`Fleet image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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
                className="w-full h-full object-cover bg-white p-8"
              />
            </div>

            {/* Glass Overlay Text - More visible background */}
            <div className="absolute top-6 left-6 right-6 backdrop-blur-sm bg-white/10 rounded-lg p-6 shadow-lg border border-gray-300 z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Metalstone Logistics
              </h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Your trusted partner in reliable and comfortable travel across Zimbabwe. We pride ourselves on providing safe, timely, and quality transportation services connecting major cities throughout the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusCarousel;
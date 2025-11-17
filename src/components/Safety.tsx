import { ShieldCheck, Clock, Users, Award } from "lucide-react";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: "Certified Drivers",
      description:
        "All our drivers are professionally trained and licensed with years of experience",
    },
    {
      icon: Clock,
      title: "Regular Maintenance",
      description:
        "Our fleet undergoes strict maintenance schedules ensuring safety and reliability",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for your peace of mind during travel",
    },
    {
      icon: Award,
      title: "Safety Record",
      description:
        "Proud safety record with zero major incidents in our operational history",
    },
  ];

  // CSS for auto-scroll animation on small screens 
  const scrollAnimation = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    <section id="safety" className="min-h-screen bg-white text-gray-900 relative overflow-hidden py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Large background text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 font-bold text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none select-none pointer-events-none opacity-40">
        SAFETY
      </div>

      {/* Curved decorative elements */}
      <svg className="absolute bottom-20 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
        <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
        <path d="M 0,60 Q 25,35 50,60 T 100,60" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-12 mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Safety First</span>
          </div>
          
          {/* Heading + Image Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Safety, Our Priority
            </h2>
            <img 
              src="/images/ms.logobg.png" 
              alt="Bus 6"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We maintain the highest standards of safety and comfort for every journey
          </p>
        </div>

        {/* Features Grid - Auto-scroll on mobile, Grid on larger screens */}
        <div className="mb-12">
          {/* Add animation styles */}
          <style>{scrollAnimation}</style>
          
          {/* Mobile: Auto-scrolling carousel */}
          <div className="md:hidden overflow-hidden py-4">
            <div 
              className="flex gap-4 animate-scroll"
              style={{
                animation: 'scroll 20s linear infinite',
                width: 'max-content'
              }}
            >
              {/* Original cards */}
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <div
                    key={`original-${index}`}
                    className="flex-shrink-0 w-[85vw] sm:w-[65vw] bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-xl text-center"
                  >
                    <div className="relative">
                      {/* Icon */}
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-100/60 to-blue-200/60 backdrop-blur-sm border border-blue-300/50 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* Duplicate cards for seamless loop */}
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 w-[85vw] sm:w-[65vw] bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-xl text-center"
                  >
                    <div className="relative">
                      {/* Icon */}
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-100/60 to-blue-200/60 backdrop-blur-sm border border-blue-300/50 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm border border-white/40 rounded-3xl p-6 hover:bg-white/40 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 shadow-xl text-center"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 rounded-3xl transition-all duration-300"></div>
                  <div className="relative">
                    {/* Icon */}
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-100/60 to-blue-200/60 backdrop-blur-sm border border-blue-300/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl md:rounded-3xl rounded-none p-6 text-center -mx-4 md:mx-0 shadow-xl mt-16 md:mt-16 mt-24">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ShieldCheck className="w-7 h-7 text-red-600" />
            <h3 className="text-xl font-bold text-gray-900">
              Certified & Trusted
            </h3>
          </div>
          <p className="text-gray-700 text-sm max-w-3xl mx-auto">
            Our commitment to safety goes beyond standards. Every aspect of our service is designed with your well-being in mind, from vehicle inspections to driver training programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;
import { MapPin, Clock, Shield } from "lucide-react";

const ConnectingCities = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bus3.jpeg"
          alt="Passenger enjoying the journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting Cities, Creating Memories
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Every journey with Metalstone is more than just a trip, it's an experience. 
            Sit back, relax, and enjoy the scenic beauty of Zimbabwe while we take care of everything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+ Destinations</h3>
              <p className="text-white/90">
                Extensive network covering all major cities and towns
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">On-Time Guarantee</h3>
              <p className="text-white/90">
                98% punctuality rate, we value your time as much as you do
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Zero Accidents</h3>
              <p className="text-white/90">
                Proud safety record maintained through rigorous standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectingCities;

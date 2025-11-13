import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email us",
      content: "info@metalstonebus.com",
      link: "mailto:info@metalstonebus.com"
    },
    {
      icon: Phone,
      title: "Call us",
      content: "+263 78 568 8186/ +263 78 324 4383",
      link: "tel:+263785688186"
    },
    {
      icon: MapPin,
      title: "Our location",
      content: "26 Betram Road, Milton Park Harare",
      link: "#"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Large background text  */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 font-bold text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] leading-none select-none pointer-events-none">
        CONTACT
      </div>


      {/* Curved decorative elements */}
      <svg className="absolute top-0 left-0 w-40 h-40 opacity-20" viewBox="0 0 100 100">
        <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
        <path d="M 0,60 Q 25,35 50,60 T 100,60" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20 rotate-180" viewBox="0 0 100 100">
        <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
        <path d="M 0,60 Q 25,35 50,60 T 100,60" stroke="#d1d5db" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Contact</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Get in touch
              </h1>
              <p className="text-gray-600 text-base">
                Have questions or ready to transform your business with AI automation?
              </p>
            </div>

            {/* Horizontal scroll container for mobile */}
            <div className="lg:space-y-4">
              <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:bg-gray-100 hover:border-emerald-400 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-xs text-gray-500 mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium text-sm">{info.content}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Name"
                  className="bg-white border-gray-200 rounded-xl h-12 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white border-gray-200 rounded-xl h-12 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="bg-white border-gray-200 rounded-xl min-h-32 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white transition-all resize-none"
                />
              </div>
              <Button 
                onClick={handleSubmit}
                className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 rounded-full font-semibold text-sm transition-all"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
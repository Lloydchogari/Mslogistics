import { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, MapPin, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Routes", href: "#routes" },
    { label: "Fleet", href: "#fleet" },
    { label: "Safety", href: "#safety" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Top Info Bar */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-xs relative">
            {/* Social Icons - Left (always visible) */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
            </div>

            {/* Contact Info - Right for desktop only */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-white/80">
                <MapPin size={13} />
                <span>123 Main Street, Harare</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <Clock size={13} />
                <span>Sun-Mon: 6AM - 8PM</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <Mail size={13} />
                <span>info@metalstonebus.com</span>
              </div>
            </div>

            {/* Mobile only: Email on Far Right */}
            <div className="flex items-center gap-1.5 absolute right-0 top-1/2 -translate-y-1/2 md:hidden pr-2">
              <Mail size={13} className="text-white/80" />
              <span className="text-xs text-white/80">info@metalstonebus.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Blur & Glassy without color change on scroll */}
      <div className="backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo (Hidden on mobile when menu is open) */}
            <div className={`flex-shrink-0 transition-opacity duration-300 ${isMenuOpen ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}>
              <img 
                src="/images/ms.logo.png" 
                alt="Metalstone Logo" 
                className="h-10 w-auto"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm hover:text-white/80 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Link to="/booking">
                <Button variant="neutral" size="sm" className="text-sm">Book Now</Button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-0 pb-6 pt-24 flex flex-col gap-8 backdrop-blur-20xl bg-black/90 px-4 rounded-b-2xl min-h-screen shadow-2xl">
              <div className="flex gap-4 h-48 mt-8">
                <div className="w-1/3">
                  <img 
                    src="/images/bus6.jpeg" 
                    alt="Metalstone buses"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-2/3 flex flex-col items-end justify-center space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white text-lg hover:text-white/80 transition-colors text-right font-medium py-2 px-4 hover:bg-white/10 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Book Now Button - Centered */}
              <div className="flex justify-center px-8 mt-12">
                <Link to="/booking" className="w-3/4" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="neutral" size="lg" className="w-full text-base">
                    Book Now
                  </Button>
                </Link>
              </div>
              
              {/* Bottom statement - At the very bottom */}
              <div className="text-center mt-auto pb-8 border-t border-white/20 pt-6">
                <p className="text-white/70 text-sm">Your trusted journey partner across Zimbabwe</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
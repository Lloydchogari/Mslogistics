import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Metalstone</h3>
            <p className="text-background/80">
              Premium bus services connecting Zimbabwe. Safe, comfortable, and reliable travel.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-background transition-colors">Home</a></li>
              <li><a href="#routes" className="text-background/80 hover:text-background transition-colors">Routes</a></li>
              <li><a href="#fleet" className="text-background/80 hover:text-background transition-colors">Fleet</a></li>
              <li><a href="#safety" className="text-background/80 hover:text-background transition-colors">Safety</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Online Booking</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Group Travel</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Charter Services</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Customer Support</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} Metalstone Bus Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Routes from "@/components/Routes";
import BusCarousel from "@/components/BusCarousel";
import About from "@/components/About";
import ConnectingCities from "@/components/ConnectingCities";
import Safety from "@/components/Safety";
import HappyClients from "@/components/HappyClients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Routes />
      <BusCarousel />
      <About />
      <ConnectingCities />
      <HappyClients />
      <Safety />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

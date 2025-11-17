// HappyClients.js
import { motion } from "framer-motion";

// Dummy testimonials
const testimonials = [
  {
    name: "Sarah Moyo",
    title: "Frequent Rider",
    image: "/images/download (7).jpg", 
    message: "Outstanding service, always on time and I feel truly safe with every journey. Highly recommend!",
  },
  {
    name: "Benjamin Dube",
    title: "Business Client",
    image: "/images/MetaSketch.jpg",
    message: "Professional, reliable and the customer support actually listens! Couldn't ask for more.",
  },
  {
    name: "Tumi Nkosi",
    title: "Travel Enthusiast",
    image: "/images/download (6).jpg",
    message: "Modern cars, friendly drivers, and the booking process is effortless. My go-to every time.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      bounce: 0.3,
    },
  }),
};

const HappyClients = () => (
  <section className="min-h-screen flex flex-col justify-center bg-white text-gray-900 py-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left image */}
      <motion.img
        src="/images/fam.jpeg" 
        alt="Happy clients"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full md:w-1/2 h-[340px] object-contain rounded-3xl shadow-lg mb-8 md:mb-0"
      />
      {/* Right testimonials */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Happy Clients & Testimonials
        </h2>
        <p className="text-gray-600 text-base mb-8 max-w-xl">
          Read what our riders and partners say about their safe, comfortable, and memorable experience with us.
        </p>
        {/* Testimonial Cards */}
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 gap-5"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
              />
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-bold text-lg mb-1 text-blue-700">{t.name}</h4>
                <span className="text-xs text-gray-400 uppercase tracking-wide">{t.title}</span>
                <p className="mt-3 text-gray-700 italic">{t.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HappyClients;

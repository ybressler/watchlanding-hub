import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Your Next Favorite Watch App
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-apple-gray mb-6"
        >
          Experience the future of wearable technology with our innovative Apple Watch app.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-apple-gray max-w-2xl mx-auto"
        >
          Our app seamlessly integrates with your daily routine, providing intelligent insights and personalized experiences right on your wrist. Stay connected, track your goals, and embrace the next generation of wearable innovation.
        </motion.p>
      </div>
    </section>
  );
};
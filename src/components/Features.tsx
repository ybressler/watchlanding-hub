import { motion } from "framer-motion";
import { Activity, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-8 h-8 text-apple-blue" />,
    title: "Track Everything",
    description: "Monitor your daily activities with precision and ease.",
  },
  {
    icon: <Heart className="w-8 h-8 text-apple-blue" />,
    title: "Health First",
    description: "Keep your health goals on track with smart insights.",
  },
  {
    icon: <Zap className="w-8 h-8 text-apple-blue" />,
    title: "Lightning Fast",
    description: "Optimized for speed and battery efficiency.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-apple-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
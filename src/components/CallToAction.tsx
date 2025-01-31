import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your interest! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Be the First to Know</h2>
        <p className="text-apple-gray mb-8">
          Join our waitlist to get early access and exclusive updates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="bg-apple-blue hover:bg-blue-600">
            Join Waitlist
          </Button>
        </form>
      </motion.div>
    </section>
  );
};
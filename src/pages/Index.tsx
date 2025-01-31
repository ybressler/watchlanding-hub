import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Sparkles } from "@/components/Sparkles";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Sparkles />
      <Hero />
      <Features />
      <CallToAction />
    </main>
  );
};

export default Index;
import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import OwnerSection from "@/components/OwnerSection";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <OwnerSection />
      <BlogPreview />
      <Newsletter />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

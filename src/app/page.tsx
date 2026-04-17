"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import BakerySection from '../components/BakerySection';
import CoffeeSection from '../components/CoffeeSection';
import Vibe from '../components/Vibe';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <div className="relative bg-[#FAF9F6] selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <BakerySection />
          <CoffeeSection />
          <Vibe />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import ThreeScene from './ThreeScene';

export default function CoffeeSection() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Scene Animation (Depth and Rotation)
      gsap.to(sceneRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        z: 200, // Move to front
        scale: 1.2,
        y: -100,
        rotationZ: 5,
        ease: "power2.out",
      });

      // Ambient Glow Animation
      gsap.to(glowRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0.8,
        scale: 1.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="coffee" className="bg-[#0A0A0A] text-white py-24 md:py-48 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24 relative">
        
        {/* Massive Background Heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[20vw] font-black italic opacity-[0.02] pointer-events-none whitespace-nowrap">
           SCA 85+ QUALITY
        </div>

        <div className="lg:col-span-6 order-2 lg:order-1 relative h-[600px]" ref={containerRef}>
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Environmental Glow */}
            <div 
              ref={glowRef}
              className="absolute w-[60%] h-[60%] bg-orange-500/30 rounded-full blur-[150px] opacity-0 pointer-events-none"
            />

            {/* The 3D Coffee Scene */}
            <div ref={sceneRef} className="w-full h-full relative z-10 transition-transform duration-300">
               <ThreeScene />
            </div>

            {/* Floating Accents */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-20" />
            <div className="absolute bottom-20 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-10" />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative z-30">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-outfit text-xs md:text-sm tracking-[0.4em] uppercase text-orange-500 font-black mb-8 block">
              The Alchemy of Brewing
            </span>
            <h2 className="font-playfair text-7xl md:text-[8vw] font-black leading-[0.8] mb-10 uppercase tracking-tighter">
              Specialty <br />
              <span className="italic text-orange-500">Coffee</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 mb-12">
               <div className="w-12 h-[2px] bg-orange-500 mt-4 shrink-0" />
               <p className="font-outfit text-xl font-light text-gray-400 leading-relaxed max-w-lg">
                We believe coffee is more than just a drink. It's an exploration of terroir. From the volcanic soils of Ethiopia to the lush hills of Colombia, we bring the world's best 85+ SCA scores to your cup.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                { title: "MICRO-LOTS", desc: "Single farm origins" },
                { title: "ROASTING", desc: "Small batch precision" },
                { title: "BREWING", desc: "Hario V60 & Chemex" },
                { title: "BARISTAS", desc: "SCA Certified craft" }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-white/10 pt-4 group cursor-default">
                  <h4 className="font-outfit text-xs tracking-widest text-orange-500 font-bold mb-1 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                  <p className="font-playfair text-lg italic text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

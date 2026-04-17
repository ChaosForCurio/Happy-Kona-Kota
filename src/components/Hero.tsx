import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[140vh] flex flex-col items-center justify-start pt-40 md:pt-60 bg-[#FAF9F6] overflow-hidden"
    >
      <div className="z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-outfit text-sm md:text-base tracking-[0.4em] uppercase text-orange-500 font-semibold mb-6 block">
            The Art of Sourdough & Specialty Coffee
          </span>
          <h1 className="font-playfair text-[clamp(4rem,18vw,14rem)] font-black leading-[0.8] tracking-tighter uppercase relative">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
              className="block"
            >
              Happy
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "circOut" }}
              className="italic block ml-[0.1em] text-orange-500"
            >
              Kona
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl mx-auto mt-12 font-outfit text-lg md:text-xl font-light leading-relaxed text-gray-700"
        >
          Crafting artisanal sourdough, buttery pastries, and SCA-scored specialty coffee in the heart of Kota. A place where every bite is a celebration of craftsmanship.
        </motion.p>
      </div>

      {/* Parallax Floating Images */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[15%] right-[-10%] md:right-[5%] w-64 h-96 md:w-[35rem] md:h-[45rem] z-0 opacity-40 md:opacity-100"
      >
        <div className="relative w-full h-full">
           <div className="absolute inset-0 border-[20px] border-white/10 translate-x-12 translate-y-12 z-0" />
           <img 
             src="/images/hero-kona.jpg" 
             alt="Happy Kona Experience"
             className="w-full h-full object-cover rounded-sm shadow-[60px_60px_100px_rgba(0,0,0,0.1)] relative z-10"
           />
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2, rotate: -5 }}
        className="absolute bottom-[5%] left-[-10%] md:left-[2%] w-56 h-80 md:w-[25rem] md:h-[35rem] z-0 opacity-40 md:opacity-80"
      >
        <img 
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
          alt="Artisanal Bakery"
          className="w-full h-full object-cover rounded-sm shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      <div className="absolute top-[45%] left-[5%] hidden lg:block">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="flex items-center space-x-6 rotate-[-90deg] origin-left"
         >
           <div className="w-24 h-[1px] bg-black/30" />
           <span className="font-outfit text-xs tracking-[0.5em] uppercase font-black opacity-50">ESTABLISHED 2023</span>
         </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="font-outfit text-[10px] tracking-[0.3em] uppercase opacity-40 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black/50 to-transparent" />
      </motion.div>

      {/* Background Decorative Text */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0 overflow-hidden select-none">
         <span className="font-playfair text-[30vw] font-black leading-none uppercase italic">Premium</span>
      </div>
    </section>
  );
}

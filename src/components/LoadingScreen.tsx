import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-playfair text-white text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                Happy <span className="italic">Kona</span>
              </h2>
            </motion.div>
            
            <div className="relative w-64 h-[1px] bg-white/20 overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 className="absolute inset-0 bg-orange-500"
               />
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-8 overflow-hidden h-6"
            >
               <motion.p 
                 animate={{ y: [0, -24, -48] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="font-outfit text-white/40 text-xs tracking-[0.5em] uppercase font-black text-center leading-6"
               >
                 <span>Baking Happiness</span><br />
                 <span>Brewing Magic</span><br />
                 <span>Crafting Love</span>
               </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

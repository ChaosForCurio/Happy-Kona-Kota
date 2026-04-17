import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "baking happiness — brewing magic — ";
  
  return (
    <div className="bg-orange-500 py-16 md:py-32 overflow-hidden relative border-y border-black">
      <div className="flex whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            <span className="font-playfair text-[15vw] md:text-[12vw] font-black text-black uppercase italic tracking-tighter mx-8 leading-none">
              {text}
            </span>
            <span className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full mx-12 shadow-2xl" />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-transparent to-orange-500 pointer-events-none z-10" />
    </div>
  );
}

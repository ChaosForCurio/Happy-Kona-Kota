import { motion } from 'framer-motion';

const vibeImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800"
];

export default function Vibe() {
  return (
    <section id="vibe" className="py-24 md:py-48 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 md:mb-32">
          <h2 className="font-playfair text-6xl md:text-[10vw] font-bold leading-none uppercase tracking-tighter">
            The <span className="italic">Vibe</span>
          </h2>
          <p className="max-w-xs font-outfit text-lg text-gray-600 mt-8 md:mt-0 md:text-right italic">
            "More than a cafe, it's a sanctuary for the senses in the heart of Kota."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {vibeImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`overflow-hidden rounded-lg group ${
                index % 3 === 1 ? 'md:translate-y-12' : ''
              } ${index % 2 === 1 ? 'translate-y-6 md:translate-y-0' : ''}`}
            >
              <img 
                src={img} 
                alt="Cafe Vibe" 
                className="w-full h-full object-cover aspect-[4/5] md:aspect-square transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="relative py-24 md:py-48 px-6 md:px-12 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text & Vibe */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="font-outfit text-sm tracking-[0.4em] uppercase text-orange-500 font-bold mb-6 block">Join Us</span>
          <h2 className="font-playfair text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Reserve Your <span className="italic text-orange-500">Table</span>
          </h2>
          <p className="font-outfit text-xl text-gray-600 max-w-md font-light mb-12">
            Experience the cozy atmosphere and culinary delights of Happy Kona. Book your table in advance to secure your spot.
          </p>
          
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="font-outfit text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Location</span>
              <span className="font-playfair text-2xl italic text-gray-800">R.K. Puram / Talwandi</span>
            </div>
            <div className="flex flex-col">
              <span className="font-outfit text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Call</span>
              <span className="font-playfair text-2xl italic text-gray-800">+91 98765 43210</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-3xl shadow-2xl shadow-orange-500/10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-outfit text-xs uppercase tracking-widest text-gray-400">Name</label>
                    <input required type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-outfit text-xs uppercase tracking-widest text-gray-400">Phone</label>
                    <input required type="tel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit focus:outline-none focus:border-orange-500 transition-colors" placeholder="+91" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-outfit text-xs uppercase tracking-widest text-gray-400">Date</label>
                    <input required type="date" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit focus:outline-none focus:border-orange-500 transition-colors text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-outfit text-xs uppercase tracking-widest text-gray-400">Time</label>
                    <input required type="time" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-outfit focus:outline-none focus:border-orange-500 transition-colors text-white" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-outfit text-xs uppercase tracking-widest text-gray-400">Guests</label>
                  <select className="bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 font-outfit focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-outfit font-bold tracking-widest uppercase py-4 rounded-xl transition-colors active:scale-[0.98]"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-[400px] text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-playfair text-4xl italic mb-4">Table Confirmed</h3>
                <p className="font-outfit text-gray-400">We look forward to hosting you at Happy Kona.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Phone } from 'lucide-react';



export default function Footer() {
  return (
    <footer id="visit" className="bg-[#1A1A1A] text-white py-24 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12">
              Visit <br />
              <span className="italic">Kona</span>
            </h2>
            <div className="flex flex-col space-y-8 font-outfit text-xl font-light text-gray-400">
              <div className="flex items-start space-x-6">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <p>123, Bakery Street, Civil Lines,<br />Kota, Rajasthan, 324001</p>
              </div>
              <div className="flex items-start space-x-6">
                <Clock className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p>Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-outfit text-sm tracking-widest uppercase font-bold text-orange-500 mb-12 block">
                Socialize
              </h3>
              <a 
                href="https://www.instagram.com/happykonakota/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="mb-8 overflow-hidden rounded-2xl h-64 relative">
                   <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-orange-500/0 transition-colors z-10" />
                   <img 
                      src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400" 
                      alt="Instagram Vibe"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                   />
                </div>
                <span className="font-playfair text-4xl font-bold italic group-hover:text-orange-500 transition-colors">
                  @happykonakota
                </span>
                <p className="font-outfit text-gray-500 mt-4 max-w-xs leading-relaxed text-sm">
                  Join 5,000+ bread lovers and coffee enthusiasts for daily updates.
                </p>
              </a>
            </div>
            
            <div className="mt-16">
              <h3 className="font-outfit text-sm tracking-widest uppercase font-bold text-orange-500 mb-6 block">
                Newsletter
              </h3>
              <div className="flex items-center border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none font-outfit text-lg w-full placeholder:text-white/20"
                />
                <button className="font-outfit text-xs font-bold tracking-widest uppercase">JOIN</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end text-right">
             <div className="font-playfair text-[clamp(2rem,10vw,8rem)] font-extrabold leading-none tracking-tighter opacity-10 uppercase select-none pointer-events-none mb-[-2rem]">
                HAPPY
             </div>
             <div className="font-playfair text-[clamp(2rem,10vw,8rem)] font-extrabold leading-none tracking-tighter opacity-10 uppercase select-none pointer-events-none mb-12">
                KONA
             </div>
             <p className="font-outfit text-[10px] tracking-[0.3em] uppercase opacity-40">
                &copy; 2024 Happy Kona — All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

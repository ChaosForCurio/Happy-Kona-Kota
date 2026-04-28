import { MapPin, Clock, Phone } from 'lucide-react';



export default function Footer() {
  return (
    <footer id="visit" className="relative bg-[#0A0A0A] text-white py-24 md:py-48 px-6 md:px-12 border-t border-white/5 overflow-hidden group">
      
      {/* Interactive Map Background */}
      <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-1000 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[#1A1A1A]/70 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent pointer-events-none z-10" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114002.04690740922!2d75.76189531102941!3d25.173669168925582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b30c41bb44d%3A0x5f5c103200045588!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714101234567!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) contrast(1.2)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-auto"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 drop-shadow-lg">
              Visit <br />
              <span className="italic text-orange-500">Kona</span>
            </h2>
            
            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Branch 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group/card cursor-pointer">
                <h3 className="font-outfit text-sm tracking-widest uppercase font-bold text-orange-500 mb-4 flex items-center gap-2">
                  <MapPin size={16} /> R.K. Puram
                </h3>
                <p className="font-outfit text-gray-300 text-sm mb-4">
                  Sector-A, R.K. Puram,<br />Kota, Rajasthan 324010
                </p>
                <div className="space-y-2 text-xs font-outfit text-gray-500">
                  <div className="flex items-center gap-2"><Clock size={12} /> 8:00 AM - 10:00 PM</div>
                  <div className="flex items-center gap-2"><Phone size={12} /> +91 98765 43210</div>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group/card cursor-pointer">
                <h3 className="font-outfit text-sm tracking-widest uppercase font-bold text-orange-500 mb-4 flex items-center gap-2">
                  <MapPin size={16} /> Talwandi
                </h3>
                <p className="font-outfit text-gray-300 text-sm mb-4">
                  Main Market, Talwandi,<br />Kota, Rajasthan 324005
                </p>
                <div className="space-y-2 text-xs font-outfit text-gray-500">
                  <div className="flex items-center gap-2"><Clock size={12} /> 9:00 AM - 11:00 PM</div>
                  <div className="flex items-center gap-2"><Phone size={12} /> +91 98765 01234</div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right">
            <div className="w-full max-w-sm">
              <h3 className="font-outfit text-sm tracking-widest uppercase font-bold text-orange-500 mb-6 block">
                Newsletter
              </h3>
              <div className="flex items-center border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none font-outfit text-lg w-full placeholder:text-white/20"
                />
                <button className="font-outfit text-xs font-bold tracking-widest uppercase ml-4 text-orange-500 hover:text-orange-400 transition-colors">JOIN</button>
              </div>
              <p className="font-outfit text-gray-500 mt-4 leading-relaxed text-sm">
                Join 5,000+ coffee enthusiasts for daily updates.
              </p>
            </div>
            
            <div className="mt-24 lg:mt-0">
              <p className="font-outfit text-[10px] tracking-[0.3em] uppercase opacity-40">
                &copy; 2024 Happy Kona — All Rights Reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

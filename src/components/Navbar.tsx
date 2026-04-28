import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Magnetic Button Component for the "MENU" and "CLOSE" buttons
function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide Navbar on scroll down, Show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const navLinks = [
    { name: 'Bakery', href: '#bakery' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'The Vibe', href: '#vibe' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 pointer-events-none"
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-3 items-center">
          
          {/* Left - Empty for balance */}
          <div className="flex justify-start"></div>

          {/* Center - Logo */}
          <div className="flex justify-center pointer-events-auto">
            <a href="#" className="flex flex-col items-center group mix-blend-multiply">
              <img 
                src="/logo.jpg" 
                alt="Happy Kona Logo" 
                className="h-20 md:h-24 object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            </a>
          </div>

          {/* Right - Menu Button */}
          <div className="flex justify-end pointer-events-auto">
            <Magnetic>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="font-outfit text-xs md:text-sm tracking-[0.2em] font-bold uppercase relative group px-6 py-3 bg-[#1A1A1A] text-white rounded-full hover:bg-orange-500 transition-colors shadow-lg border border-black/10 flex items-center justify-center"
              >
                <span>MENU</span>
              </button>
            </Magnetic>
          </div>

        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] text-white flex flex-col justify-between p-6 py-12 md:p-12 overflow-hidden"
          >
            {/* Background Vibe Image */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
                alt="Menu Vibe" 
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Menu Header */}
            <div className="relative z-10 flex justify-between items-center max-w-screen-2xl mx-auto w-full">
              <span className="font-playfair text-2xl md:text-3xl font-bold">HAPPY KONA</span>
              <Magnetic>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-outfit text-sm tracking-[0.2em] font-bold uppercase relative group p-4 text-orange-500"
                >
                  <span>CLOSE</span>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Magnetic>
            </div>
            
            {/* Menu Links with Staggered Reveal */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-4 md:space-y-8">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (i * 0.1) }}
                    className="block font-playfair text-5xl md:text-[8vw] font-black uppercase leading-none hover:italic hover:text-orange-500 transition-all cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="relative z-10 flex justify-between items-end max-w-screen-2xl mx-auto w-full font-outfit text-[10px] md:text-sm tracking-widest uppercase opacity-60">
              <div>
                <p>123, Bakery Street</p>
                <p>Kota, Rajasthan</p>
              </div>
              <div className="text-right">
                <a href="https://www.instagram.com/happykonakota/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Instagram</a>
                <p className="mt-2">+91 98765 43210</p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

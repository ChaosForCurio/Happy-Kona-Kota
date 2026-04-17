import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bakery', href: '#bakery' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'The Vibe', href: '#vibe' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="font-playfair text-2xl md:text-3xl font-bold tracking-tight leading-none">
              HAPPY KONA
            </span>
            <span className="font-outfit text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-70">
              Baking & Brewing Happiness
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-outfit text-sm font-medium tracking-widest uppercase hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/happykonakota/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-black text-white rounded-full hover:bg-orange-500 transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-playfair text-2xl font-bold">HAPPY KONA</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-playfair text-5xl font-bold hover:italic transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto flex justify-between items-center">
              <span className="font-outfit text-sm tracking-widest uppercase opacity-50">KOTA, RAJASTHAN</span>
              <a 
                href="https://www.instagram.com/happykonakota/" 
                className="flex items-center space-x-2 font-outfit text-sm font-bold"
              >
                <InstagramIcon size={18} />
                <span>FOLLOW US</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

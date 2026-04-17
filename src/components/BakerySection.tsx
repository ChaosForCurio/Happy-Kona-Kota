import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
  {
    title: "Signature Sourdough",
    image: "/images/sourdough.jpg",
    desc: "48-hour fermentation, stone-ground flour, and a crust that sings."
  },
  {
    title: "Viennoiserie",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    desc: "Buttery, flaky croissants made with 100% French butter."
  },
  {
    title: "Artisanal Tarts",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
    desc: "Seasonal fruits and delicate patisserie work."
  }
];

export default function BakerySection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        x: -200,
        opacity: 0,
        duration: 2
      });

      gsap.from(".bakery-item", {
        scrollTrigger: {
          trigger: ".bakery-grid",
          start: "top 70%",
          end: "top 20%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="bakery" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
          <div className="max-w-2xl" ref={titleRef}>
            <span className="font-outfit text-xs md:text-sm tracking-widest uppercase text-orange-500 font-bold mb-4 block">
              Handcrafted Daily
            </span>
            <h2 className="font-playfair text-6xl md:text-[10vw] font-bold leading-tight">
              The <span className="italic">Bakery</span>
            </h2>
          </div>
          <p className="max-w-sm font-outfit text-lg text-gray-600 mt-8 md:mt-0 leading-relaxed">
            Our bakery is a labor of love. We use traditional techniques to create breads and pastries that are as beautiful as they are delicious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 bakery-grid">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`bakery-item group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden rounded-none aspect-[3/4.5] mb-8">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-20 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="font-outfit text-xs tracking-widest uppercase">Fresh Daily</span>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -left-8 top-0 font-playfair italic text-4xl text-orange-500/20 group-hover:text-orange-500 transition-colors duration-500">0{index + 1}</span>
                <h3 className="font-playfair text-4xl font-black mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
                <p className="font-outfit text-gray-500 text-lg tracking-tight leading-relaxed max-w-[80%]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

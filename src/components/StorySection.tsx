import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    title: "Our Roots",
    subtitle: "Born in Kota.",
    desc: "It started with a simple idea: bringing authentic, world-class pastries and specialty coffee to the heart of Rajasthan.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "The Ambience",
    subtitle: "A Sanctuary.",
    desc: "We designed every corner of Happy Kona to be your escape. Warm lighting, the aroma of fresh dough, and the gentle hum of our espresso machines.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "The Craft",
    subtitle: "Baked with Love.",
    desc: "From our sourdough pizzas to our delicate cheesecakes, every item is crafted daily with precision, passion, and the finest ingredients.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.story-panel');

      // Horizontal scrolling
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => "+=" + containerRef.current!.offsetWidth * (sections.length - 1)
        }
      });

      // Parallax for images inside sections
      sections.forEach((section: any) => {
        const img = section.querySelector('.parallax-img');
        if(img) {
          gsap.fromTo(img, 
            { xPercent: -20 },
            {
              xPercent: 20, 
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1,
                start: "top top",
                end: () => "+=" + containerRef.current!.offsetWidth * (sections.length - 1)
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="story-section-wrapper">
      <div ref={containerRef} className="story-section-trigger relative z-20">
        <section className="overflow-hidden bg-[#0A0A0A] h-screen text-white">
          <div ref={wrapperRef} className="flex h-full w-[300vw]">
            {stories.map((story, i) => (
              <div key={i} className="story-panel relative w-screen h-full flex-shrink-0 overflow-hidden flex items-center">
              
              {/* Background Image with Parallax */}
              <div className="absolute inset-0 w-[140%] h-full -left-[20%] z-0">
                 <img 
                   src={story.img} 
                   alt={story.title}
                   className="parallax-img w-full h-full object-cover opacity-50 scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                 <span className="font-outfit text-sm tracking-[0.4em] uppercase text-orange-500 font-bold mb-6 block">
                   {story.title}
                 </span>
                 <h2 className="font-playfair text-6xl md:text-[8vw] font-black italic mb-8 leading-[0.9] drop-shadow-2xl">
                   {story.subtitle}
                 </h2>
                 <p className="font-outfit text-xl md:text-3xl text-gray-300 max-w-3xl font-light leading-relaxed drop-shadow-md">
                   {story.desc}
                 </p>
                 
                 {/* Progress Indicator */}
                 <div className="mt-20 flex items-center gap-4">
                   <div className="h-[2px] w-32 bg-white/20 relative rounded-full overflow-hidden">
                     <div className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-300" style={{ width: `${((i + 1) / stories.length) * 100}%` }} />
                   </div>
                   <span className="font-outfit text-sm text-gray-400 tracking-widest font-bold">
                     0{i + 1} / 0{stories.length}
                   </span>
                 </div>
              </div>

            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}

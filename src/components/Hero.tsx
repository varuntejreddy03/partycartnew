import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const heroImages = [
  { url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1000", title: "Authentic Legacy" },
  { url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1000", title: "Master Craft" },
  { url: "https://images.unsplash.com/photo-1519671482749-fd09be4cce4e?w=1000", title: "Grand Celebration" }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms for mobile background and cards
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const cardsY = useTransform(scrollY, [0, 500], [0, -40]);
  const cardsRotate = useTransform(scrollY, [0, 500], [0, -10]);

  const handleOrder = () => {
    window.location.href = "https://yumzy.page.link/UfaY";
  };

  return (
    <section ref={containerRef} className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-bg-primary">
      {/* Immersive 'Attracting' Background for Mobile with Parallax */}
      <motion.div 
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{ y: bgY }}
      >
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800" 
          alt="Luxury Catering" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/80 to-bg-primary" />
      </motion.div>
      
      {/* Subtle Grainy Overlay for Luxury Feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

      {/* Background radial gradient blob (Desktop) */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
        style={{ 
          background: 'radial-gradient(circle, var(--accent-gold-light) 0%, transparent 70%)',
          opacity: 0.15
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 md:mb-8">
             <div className="w-12 h-[1px] bg-accent-gold/40" />
             <span className="micro-label text-accent-gold font-bold">Hyderabadi Legacy</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 md:mb-8">
            <span className="font-brand text-text-primary text-[clamp(56px,8vw,80px)] font-bold block leading-[0.8] tracking-tight">
              PartyCart
            </span>
            <span className="font-accent font-semibold italic text-[clamp(24px,3vw,36px)] text-accent-gold block tracking-[0.02em] mt-6 leading-tight max-w-lg">
              Hyderabad's Premium Party Food Provider
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-accent italic text-text-muted text-[clamp(18px,2vw,24px)] max-w-xl mb-10 md:mb-14 leading-relaxed opacity-80">
            "You host the party. We'll handle the food."
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-16">
            <button
              onClick={handleOrder}
              className="group relative bg-accent-gold px-8 py-5 rounded-full font-sans font-black text-white hover:bg-accent-gold-light transition-all duration-500 shadow-[0_20px_60px_rgba(200,134,26,0.3)] flex items-center justify-center gap-3 text-sm xl:text-base active:scale-95 w-full md:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Order for your party <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button className="px-8 py-5 rounded-full font-sans font-bold text-text-primary border-2 border-border-warm hover:border-accent-gold hover:bg-bg-secondary transition-all duration-500 text-sm xl:text-base active:scale-95 w-full md:w-auto">
              Explore Menus
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-8 md:gap-12">
             {[
               { val: "100+", label: "Master Chefs" },
               { val: "4.9/5", label: "Client Rating" },
               { val: "10K+", label: "Events Served" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col">
                  <span className="font-brand text-xl text-text-primary mb-1">{stat.val}</span>
                  <span className="micro-label text-[9px] opacity-60 tracking-wider font-bold">{stat.label}</span>
               </div>
             ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Components */}
        <div className="relative h-[480px] md:h-[650px] mt-12 lg:mt-0 flex items-center justify-center overflow-visible">
          {/* Mobile 3-Card Parallax Stack */}
          <motion.div 
            style={{ y: cardsY, rotate: cardsRotate }}
            className="md:hidden relative w-full h-full flex items-center justify-center overflow-visible"
          >
              {heroImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 100, rotate: i * 5 - 5 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    x: i * 20 - 20,
                    rotate: i * 6 - 6,
                    zIndex: i
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring", damping: 15 }}
                  className="absolute w-[260px] h-[360px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[6px] border-white"
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1">{img.title}</p>
                    <div className="w-8 h-1 bg-accent-gold rounded-full" />
                  </div>
                </motion.div>
              ))}
          </motion.div>
          
          {/* Desktop Visual Layout (Collage) */}
          <div className="hidden md:block relative w-full h-full">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-12 right-0 w-[80%] h-[80%] z-0 rounded-[24px] overflow-hidden border-[3px] border-accent-gold shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800" 
                alt="Dum Biryani" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Overlapping Bottom Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-4 left-0 w-[60%] h-[55%] z-10 rounded-[24px] overflow-hidden border-[3px] border-accent-gold shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
                alt="Party setup" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Floating Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 1 }}
              className="absolute bottom-20 -right-4 z-30 bg-white p-4 rounded-2xl shadow-xl border border-border-warm flex flex-col items-center animate-float whitespace-nowrap"
            >
              <div className="flex text-accent-gold mb-1 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="text-text-primary font-bold text-sm">4.9 Rating</span>
              <span className="text-text-muted text-[10px] font-sans">500+ Parties Served</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

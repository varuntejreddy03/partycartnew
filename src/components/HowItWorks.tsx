import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Download, ShoppingBag, Utensils, PartyPopper } from 'lucide-react';

const steps = [
  { num: "01", label: "Select Cuisine & Date", icon: <Utensils size={24} className="text-accent-gold" /> },
  { num: "02", label: "Customize Menu", icon: <PartyPopper size={24} className="text-accent-gold" /> },
  { num: "03", label: "Place Order", icon: <ShoppingBag size={24} className="text-accent-gold" /> },
  { num: "04", label: "Enjoy the Party", icon: <PartyPopper size={24} className="text-accent-gold" /> }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "85%"]);

  return (
    <section className="bg-bg-dark py-24 px-6 overflow-hidden relative" id="how-it-works" ref={containerRef}>
      {/* Real Celebration Background Image at 15% opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600")',
          opacity: 0.15
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="uppercase tracking-widest text-accent-gold text-xs font-bold mb-4">Simple Process</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">How It Works</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-10 rounded-full" />
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="relative mb-24 hidden md:block px-12">
          {/* Main Track Line */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-white/10 -translate-y-1/2" />
          
          {/* Progress Line */}
          <motion.div 
            className="absolute top-1/2 left-[10%] h-[2px] bg-accent-gold -translate-y-1/2 origin-left"
            style={{ width: lineWidth }}
          />
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-56 text-center group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full border-4 border-accent-gold bg-bg-dark flex items-center justify-center font-display text-white text-3xl font-bold mb-8 group-hover:bg-accent-gold group-hover:text-bg-dark transition-all duration-300 shadow-xl"
                >
                  {step.num}
                </motion.div>
                <div className="mb-4">{step.icon}</div>
                <p className="font-sans text-white text-xl font-bold px-4">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative flex flex-col gap-16 items-center mb-20 py-8">
          <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px] bg-accent-gold/30 -z-10" />
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-bg-dark p-6 rounded-3xl border border-white/10 z-10 w-full max-w-[280px]"
            >
              <div className="w-16 h-16 rounded-full border-4 border-accent-gold bg-bg-dark flex items-center justify-center font-display text-white text-2xl font-bold mb-4 shadow-lg">
                {step.num}
              </div>
              <div className="mb-3">{step.icon}</div>
              <p className="font-sans text-white text-lg font-bold text-center">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

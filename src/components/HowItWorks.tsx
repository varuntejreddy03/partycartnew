import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Download, CookingPot } from 'lucide-react';

const steps = [
  { num: "01", label: "Select Cuisine & Date" },
  { num: "02", label: "Customize Menu" },
  { num: "03", label: "Place Order" },
  { num: "04", label: "Enjoy the Party" }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Animate the line width based on scroll progress
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const handleOrder = () => window.location.href = "https://yumzy.page.link/UfaY";

  return (
    <section className="bg-walnut py-24 px-6 overflow-hidden" id="how-it-works" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="uppercase tracking-widest text-gold text-sm font-semibold mb-4">Simple Process</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">How It Works</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
        </motion.div>

        {/* Steps track */}
        <div className="relative mb-24 hidden md:block">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-ink -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-[10%] h-[2px] bg-gold -translate-y-1/2 origin-left"
            style={{ width: lineWidth, left: '10%' }}
            // We set the width to reach up to ~80% of the container (adjust visually as needed)
          />
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-40 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2 }}
                  className="w-16 h-16 rounded-full border-2 border-gold bg-walnut flex items-center justify-center font-display text-gold text-2xl font-bold mb-6"
                >
                  {step.num}
                </motion.div>
                <p className="font-sans text-cream text-lg font-medium">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden relative flex flex-col gap-12 items-center mb-20 py-4">
          <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px] bg-gold/50 -z-10" />
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center bg-walnut z-10 px-4">
              <div className="w-12 h-12 rounded-full border-2 border-gold bg-ink flex items-center justify-center font-display text-gold text-xl font-bold mb-4 shadow-lg">
                {step.num}
              </div>
              <p className="font-sans text-cream text-lg font-medium text-center">{step.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-ink p-12 md:p-16 rounded-lg border border-gold/20 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl text-cream font-bold mb-6 leading-tight">
            Ready to Plan Your Party?
          </h2>
          <p className="font-sans text-muted text-lg mb-10 max-w-2xl mx-auto">
            Experience the finest culinary masters of Hyderabad at your next gathering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleOrder}
              className="bg-gold text-ink font-sans font-medium px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:brightness-110 transition"
            >
              <Download size={20} /> Get The App
            </button>
            <button 
              onClick={handleOrder}
              className="border border-gold text-cream font-sans font-medium px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-gold/10 transition"
            >
              <CookingPot size={20} /> Order Online
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

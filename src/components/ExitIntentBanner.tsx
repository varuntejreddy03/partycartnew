import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Gift, X } from 'lucide-react';

export default function ExitIntentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show when cursor moves to the top (exit intent)
      if (e.clientY <= 10 && !dismissed && !showBanner) {
        setShowBanner(true);
      }
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed, showBanner]);

  const handleOrder = () => {
    window.open("https://order.yumzy.in", "_blank", "noopener,noreferrer");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: -100, opacity: 0 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="fixed top-0 left-0 right-0 z-[110] bg-accent-gold-light border-b-4 border-accent-gold p-4 md:p-6 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4 text-bg-dark">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent-gold shadow-lg shrink-0">
                   <Gift size={24} />
                </div>
                <div>
                   <h3 className="font-display text-2xl md:text-3xl font-black italic">Wait! Get 10% off your first catering order</h3>
                   <p className="font-sans text-sm md:text-base font-bold opacity-80 uppercase tracking-widest">Flash Offer: Valid for the next 24 hours</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={handleOrder}
                  className="grow md:grow-0 bg-bg-dark text-white font-sans font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl text-lg animate-pulse-ring"
                >
                  Claim Offer <ArrowRight size={20} />
                </button>
                <button 
                   onClick={() => { setShowBanner(false); setDismissed(true); }}
                   className="w-12 h-12 rounded-full bg-bg-dark/10 flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-white transition-all shrink-0"
                >
                   <X size={24} />
                </button>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

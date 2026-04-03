import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

const examples = [
  "Rahul from Banjara Hills just booked Biryani for 50 🎊",
  "Priya from Jubilee Hills just booked Party Boxes for 12 🎊",
  "Arun from Gachibowli just booked a Bawarchi for 75 🎊",
  "Sneha from Kondapur just booked Mughlai feast for 30 🎊"
];

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 8 seconds
    const initialShow = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Rotate through examples
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % examples.length);
        setIsVisible(true);
      }, 5000); // Hide for 5 seconds between rotations
    }, 15000); // Show for 10 seconds total cycle

    return () => {
      clearTimeout(initialShow);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="hidden md:block fixed top-28 md:top-auto md:bottom-10 right-6 z-[100] max-w-[280px] md:max-w-md w-full"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(200,134,26,0.15)] border border-border-warm p-4 flex items-center gap-4 relative overflow-hidden group">
            <div className="absolute top-2 right-2 cursor-pointer text-text-muted hover:text-accent-gold transition-colors" onClick={() => setIsVisible(false)}>
              <X size={14} />
            </div>
            <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
               <ShoppingBag size={24} />
            </div>
            <div>
               <p className="font-sans text-text-primary text-sm font-bold leading-tight">
                 {examples[currentIndex]}
               </p>
               <p className="font-sans text-accent-gold text-[10px] uppercase tracking-widest font-bold mt-1">
                 Recently Booked
               </p>
            </div>
            {/* Sliding progress bar */}
            <motion.div 
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gold origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

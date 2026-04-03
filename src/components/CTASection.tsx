import { motion } from 'framer-motion';
import { Download, ShoppingBag } from 'lucide-react';

export default function CTASection() {
  const handleOrder = () => window.location.href = "https://yumzy.page.link/UfaY";

  return (
    <section className="bg-accent-gold py-24 px-6 relative overflow-hidden">
      {/* Floating Food Emoji Decorations */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-[10%] text-5xl md:text-7xl opacity-30 select-none z-0"
      >
        🍖
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-12 right-[15%] text-5xl md:text-7xl opacity-30 select-none z-0"
      >
        🍛
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[5%] text-4xl md:text-6xl opacity-30 select-none z-0"
      >
        🥘
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 0.9, 1], y: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[20%] left-[5%] text-4xl md:text-6xl opacity-30 select-none z-0"
      >
        🍗
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-bg-dark font-black mb-8 leading-tight">
            Ready to Plan Your Party?
          </h2>
          <p className="font-sans text-bg-dark/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Experience the finest culinary masters of Hyderabad at your next gathering.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <motion.button 
              whileHover={{ scale: 1.05, shadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOrder}
              className="bg-bg-dark text-white font-sans font-bold px-10 py-5 rounded-full flex items-center justify-center gap-3 shadow-xl hover-sweep text-lg"
            >
              <Download size={24} /> Get The App
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOrder}
              className="bg-white text-bg-dark border-2 border-bg-dark font-sans font-bold px-10 py-5 rounded-full flex items-center justify-center gap-3 shadow-xl hover:bg-bg-dark hover:text-white transition-all text-lg"
            >
              <ShoppingBag size={24} /> Order Online
            </motion.button>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-bg-dark/60 font-sans text-sm tracking-wide uppercase font-bold"
          >
            No advance payment. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

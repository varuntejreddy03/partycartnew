import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

export default function Hero() {
  const handleOrder = () => {
    window.location.href = "https://yumzy.page.link/UfaY";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-ink pt-20">
      {/* Animated Mesh Background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          background: 'radial-gradient(circle at center, rgba(201,146,42,0.1) 0%, rgba(13,11,8,1) 60%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-6">
            The Premium Standard
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="flex flex-col items-center mb-6">
            <span className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-bold mb-2">
              PartyCart
            </span>
            <span className="font-editorial italic text-3xl md:text-5xl lg:text-6xl text-gold">
              Hyderabad's Party Food App
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-sans text-muted/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Curated catering connecting hosts with authentic Khandani Bawarchis, 
            heritage home kitchens, and the city's finest regional culinary experts.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-2 sm:px-0">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOrder}
              className="bg-gold text-ink font-sans font-medium px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover-sweep w-full sm:w-auto"
            >
              Order for your party <ArrowRight size={18} />
            </motion.button>
            <motion.a 
              href="#cuisines"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gold/30 text-cream font-sans font-medium px-8 py-4 rounded-sm flex items-center justify-center hover:bg-gold/10 transition-colors w-full sm:w-auto"
            >
              Explore Menus
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-4 sm:gap-8 md:gap-12 mt-4 sm:mt-8 w-fit mx-auto">
            {['100+ Verified Chefs', 'Authentic Hyderabadi', 'Zero Stress Planning'].map((text, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-2 text-cream font-sans text-base sm:text-sm md:text-base">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle2 className="text-gold" size={20} />
                </motion.div>
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Phone, ArrowRight, Sparkles } from 'lucide-react';
import logo from '../assets/partycart-logo.png';

const navLinks = [
  { name: 'Story', href: '#story' },
  { name: 'Offerings', href: '#offerings' },
  { name: 'Cuisines', href: '#cuisines' },
  { name: 'How it works', href: '#how-it-works' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleOrder = () => {
    window.location.href = "https://yumzy.page.link/UfaY";
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b border-border-warm py-0.5 md:py-1'
            : 'bg-white/50 backdrop-blur-sm border-b border-border-warm/30 py-1.5 md:py-2'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-accent-gold z-10"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-14 md:h-16 flex items-center justify-between">
          {/* Logo Container (Original Branding) */}
          <a href="/" className="cursor-pointer flex items-center transition-transform active:scale-95 group">
            <img 
              src={logo} 
              alt="PartyCart" 
              className="w-32 md:w-44 h-auto object-contain transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.02]" 
            />
          </a>

          {/* Desktop Links (Premium DM Sans) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-[14px] font-semibold text-text-muted hover:text-accent-gold transition-all duration-500 tracking-[0.05em] uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Section: Premium Support + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <a href="tel:+917396737700" className="flex items-center gap-3 text-text-muted hover:text-accent-gold transition-all duration-300 font-body text-[14px] font-bold group">
               <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center border border-border-warm group-hover:border-accent-gold/30 transition-colors shadow-sm">
                  <Phone size={16} className="text-accent-gold" />
               </div>
               <span className="tracking-wide">Support</span>
            </a>
            
            <button
              onClick={handleOrder}
              className="bg-accent-gold text-white font-body font-bold px-8 py-3.5 rounded-full hover:bg-accent-gold-light transition-all shadow-[0_10px_30px_rgba(200,134,26,0.2)] hover:shadow-[0_15px_40px_rgba(200,134,26,0.3)] active:scale-95 text-[15px] tracking-wide animate-pulse-ring"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
             <a 
               href="tel:+917396737700" 
               className="w-11 h-11 rounded-full bg-accent-gold text-white flex items-center justify-center shadow-[0_4px_15px_rgba(200,134,26,0.3)] active:scale-95 transition-all border-2 border-white"
             >
                <Phone size={20} />
             </a>
             <button
               className="text-text-primary w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-border-warm shadow-md active:scale-95 transition-all"
               onClick={() => setIsOpen(!isOpen)}
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-bg-dark/40 backdrop-blur-sm z-[45] lg:hidden"
               onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed inset-y-0 right-0 w-[85%] bg-white z-[55] flex flex-col p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-border-warm">
                <img src={logo} alt="PartyCart" className="h-10 object-contain brightness-0" />
                <button onClick={() => setIsOpen(false)} className="text-text-primary p-2"><X size={28} /></button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="font-brand text-3xl text-text-primary hover:text-accent-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-gold" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="bg-bg-secondary p-6 rounded-3xl border border-border-warm">
                   <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="text-accent-gold" size={18} />
                      <span className="font-body font-semibold text-[11px] uppercase tracking-[0.1em] text-text-muted">Special Offer</span>
                   </div>
                   <p className="font-brand text-xl text-text-primary font-bold">10% Off Your First Order</p>
                </div>
                
                <button
                  onClick={handleOrder}
                  className="bg-accent-gold text-white font-body font-bold px-6 py-5 rounded-full w-full text-lg shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                  Start Ordering <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

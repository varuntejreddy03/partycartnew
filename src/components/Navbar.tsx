import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/partycart-logo.png';

const navLinks = [
  { name: 'Cuisines', href: '#cuisines' },
  { name: 'Services', href: '#services' },
  { name: 'How it Works', href: '#how-it-works' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleOrder = () => {
    window.location.href = "https://yumzy.page.link/UfaY";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/90 border-b border-gold/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer flex items-center h-full py-4">
            <img src={logo} alt="PartyCart" className="w-32 sm:w-40 h-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-sans text-muted hover:text-gold transition-colors py-2"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button onClick={handleOrder} className="bg-gold text-ink font-sans font-medium px-6 py-2 rounded-sm hover-sweep transition-transform">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cream p-2 outline-none focus:outline-none focus:ring-0 active:outline-none rounded-md"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 top-[80px] bg-ink z-40 flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name} href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="font-editorial italic text-5xl text-cream hover:text-gold transition-colors block border-b border-gold/10 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-auto pt-12 flex flex-col gap-6">
               <button onClick={handleOrder} className="bg-gold text-ink font-sans font-medium px-6 py-4 rounded-sm w-full text-lg shadow-[0_0_20px_rgba(201,146,42,0.3)]">
                 Start Ordering
               </button>
               <div className="flex justify-center gap-6 mt-4 pb-8">
                  <a href="#" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors">
                    <Facebook size={20} />
                  </a>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

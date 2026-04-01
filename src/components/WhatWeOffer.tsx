import { motion } from 'framer-motion';
import { PartyPopper, Utensils, Flame } from 'lucide-react';

const offerings = [
  {
    icon: "🎉",
    badge: "10-50 Guests",
    title: "Party Boxes",
    features: [
      "Curated pre-set menus",
      "Perfect for house parties",
      "Ready to serve packaging",
      "Hassle-free cleanup"
    ]
  },
  {
    icon: "🥘",
    badge: "50-500+ Guests",
    title: "Catering Orders",
    features: [
      "Bespoke menu planning",
      "Full buffet setup available",
      "Professional service staff",
      "Premium chafing dishes"
    ]
  },
  {
    icon: "🔥",
    badge: "Dynamic Sizing",
    title: "Live Counters",
    features: [
      "Live Chat & Dosa stations",
      "Fresh Kebab grills",
      "Interactive dessert bar",
      "Specialty beverage mixing"
    ]
  }
];

export default function WhatWeOffer() {
  return (
    <section className="bg-ink py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-gold text-sm font-semibold mb-4">Our Services</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">What We Offer</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(201,146,42,0.6)',
                boxShadow: '0 0 30px rgba(201,146,42,0.15)'
              }}
              className="rounded-lg bg-walnut border border-gold/20 p-8 relative overflow-hidden transition-all duration-300"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
              
              <div className="text-6xl mb-6">{offer.icon}</div>
              
              <div className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
                {offer.badge}
              </div>
              
              <h3 className="font-display text-3xl text-cream font-bold mb-6">{offer.title}</h3>
              
              <ul className="space-y-4">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-muted font-sans text-lg">
                    <span className="text-gold mt-1 text-sm">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Sparkles, UtensilsCrossed, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={32} className="text-gold" />,
    title: "Curated Excellence",
    description: "Every bawarchi and home-chef is meticulously vetted for authenticity, hygiene, and unmatched flavor."
  },
  {
    icon: <UtensilsCrossed size={32} className="text-gold" />,
    title: "Authentic Menus",
    description: "From Dum Biryani to Shikampuri Kebabs, experience true Hyderabadi heritage delivered to your gathering."
  },
  {
    icon: <CalendarCheck size={32} className="text-gold" />,
    title: "Seamless Hosting",
    description: "We handle the culinary logistics end-to-end so you can focus entirely on entertaining your guests."
  }
];

export default function WhatIsPartyCart() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-muted text-sm font-semibold mb-4">Discover</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink font-bold mb-6">What is PartyCart?</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-sans text-ink/80 max-w-2xl mx-auto text-lg">
            We are redefining the catering experience for discerning hosts. A platform designed to connect you with the culinary masters of Hyderabad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 0 30px rgba(201,146,42,0.15)', borderColor: 'rgba(201,146,42,0.6)' }}
              className="bg-walnut text-cream rounded-md p-8 border border-transparent transition-colors duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="font-sans text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

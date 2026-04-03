import { motion } from 'framer-motion';
import { Sparkles, UtensilsCrossed, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={32} className="text-accent-gold" />,
    title: "Curated Excellence",
    description: "Every bawarchi and home-chef is meticulously vetted for authenticity, hygiene, and unmatched flavor."
  },
  {
    icon: <UtensilsCrossed size={32} className="text-accent-gold" />,
    title: "Authentic Menus",
    description: "From Dum Biryani to Shikampuri Kebabs, experience true Hyderabadi heritage delivered to your gathering."
  },
  {
    icon: <CalendarCheck size={32} className="text-accent-gold" />,
    title: "Seamless Hosting",
    description: "We handle the culinary logistics end-to-end so you can focus entirely on entertaining your guests."
  }
];

export default function WhatIsPartyCart() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-text-muted text-xs font-bold mb-4">Discover</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold mb-6">What is PartyCart?</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-10 rounded-full" />
          <p className="font-sans text-text-muted max-w-2xl mx-auto text-lg md:text-xl md:leading-relaxed">
            We are redefining the catering experience for discerning hosts. A platform designed to connect you with the culinary masters of Hyderabad.
          </p>
        </motion.div>

        {/* Real Food Spread Image Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative mb-20 p-4 md:p-6 bg-accent-gold rounded-[32px] overflow-hidden group shadow-card"
        >
          <div className="rounded-[24px] overflow-hidden aspect-[21/9] md:aspect-[2.4/1]">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600" 
              alt="Food spread" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent pointer-events-none" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(200,134,26,0.15)' }}
              className="bg-white rounded-2xl p-8 md:p-10 border-t-4 border-t-accent-gold shadow-card transition-all duration-300"
            >
              <div className="mb-6 bg-bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
              <p className="font-sans text-text-muted leading-relaxed text-[17px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

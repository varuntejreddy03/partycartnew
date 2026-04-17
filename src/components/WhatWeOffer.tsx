import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChefHat, Star, Users, Briefcase } from 'lucide-react';

const offerings = [
  {
    badge: "Specialized for 10-50 Guests",
    price: "From ₹1,400",
    title: "The Signature Party Box",
    description: "Ideal for intimate house parties and gatherings. Heritage flavors delivered in vacuum-insulated, ready-to-serve luxury boxes.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    features: [
      "Curated Heritage Menus",
      "Ready-to-Serve Presentation",
      "No Cleanup Required",
      "Vacuum-Insulated Freshness"
    ],
    icon: <Sparkles className="text-accent-gold" size={20} />
  },
  {
    badge: "Curated for 50-500+ Guests",
    price: "Bespoke Plans",
    title: "Managed Event Catering",
    description: "Professional full-scale event catering including live counters, service staff, and end-to-end culinary logistics.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    features: [
      "Signature Live Counters",
      "Professional Service Staff",
      "Complete Buffet Setup",
      "Menu Architect Consultation"
    ],
    icon: <ChefHat className="text-accent-gold" size={20} />
  }
];

export default function WhatWeOffer() {
  const handleOrder = () => window.open("https://order.yumzy.in", "_blank", "noopener,noreferrer");

  return (
    <section className="bg-bg-secondary py-20 px-6 relative overflow-hidden" id="offer">
      {/* Decorative Branding */}
      <div className="absolute top-1/2 left-0 font-brand text-[20vw] text-bg-primary select-none pointer-events-none -translate-x-1/2 -z-0">
        Expert
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 md:mb-32"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
             <Star className="text-accent-gold fill-accent-gold" size={16} />
             <span className="micro-label">The Portfolio</span>
          </div>
          <h2 className="font-brand text-4xl md:text-5xl lg:text-7xl text-text-primary mb-8 max-w-4xl mx-auto leading-tight">
            Our Offerings: <span className="font-accent italic text-accent-gold">Expertly Managed</span> Services.
          </h2>
          <p className="font-body text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to massive celebrations, we provide the ultimate culinary infrastructure for your peace of mind.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {offerings.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-white rounded-[48px] overflow-hidden shadow-2xl border border-border-warm relative flex flex-col hover:shadow-accent-gold/10 transition-all duration-700 h-full"
            >
              {/* Image Section with Overlay */}
              <div className="relative h-[280px] md:h-[350px] overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
                
                {/* Float Badges */}
                <div className="absolute inset-x-6 top-6 flex items-start justify-between">
                   <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold shadow-2xl border border-accent-gold/10">
                      {offer.badge}
                   </div>
                   <div className="bg-accent-gold text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                      {offer.price}
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                   <h3 className="font-brand text-3xl md:text-4xl leading-tight transition-colors group-hover:text-accent-gold-light">{offer.title}</h3>
                </div>
              </div>
              
              {/* Detailed Content */}
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <p className="font-body text-text-muted text-[17px] mb-10 leading-relaxed italic border-l-2 border-accent-gold/30 pl-5">
                  {offer.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 text-text-primary font-body text-sm font-medium items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  className="mt-auto bg-text-primary text-white font-body font-bold px-8 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-accent-gold shadow-2xl hover:shadow-accent-gold/20 transition-all duration-500 w-full"
                >
                  Configure My Feast <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate / Large Scale Trust Hook */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 md:mt-40 grid md:grid-cols-3 gap-12 bg-white/50 backdrop-blur-md rounded-[48px] p-10 md:p-16 border border-white max-w-5xl mx-auto shadow-2xl"
        >
           <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-accent-gold mb-6">
                 <Users size={24} />
              </div>
              <h4 className="font-brand text-xl text-text-primary mb-2">Dedicated Manager</h4>
              <p className="text-text-muted text-sm leading-relaxed">One direct line for every detail of your massive celebration.</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-accent-gold mb-6">
                 <Briefcase size={24} />
              </div>
              <h4 className="font-brand text-xl text-text-primary mb-2">Corporate Contracts</h4>
              <p className="text-text-muted text-sm leading-relaxed">Streamlined culinary logistics for high-velocity business events.</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center text-accent-gold mb-6">
                 <Sparkles size={24} />
              </div>
              <h4 className="font-brand text-xl text-text-primary mb-2">Bespoke Curation</h4>
              <p className="text-text-muted text-sm leading-relaxed">Custom menus architected by our master heritage chefs.</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

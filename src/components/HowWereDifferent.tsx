import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Sparkles, Clock } from 'lucide-react';

const standards = [
  {
    id: "01",
    title: "Khandani Heritage",
    desc: "Our kitchens are lead by Khandani Bawarchis who carry the oral traditions of 400 years of Hyderabadi cuisine.",
    icon: <Award size={24} />
  },
  {
    id: "02",
    title: "The 4-Layer Check",
    desc: "From sourcing to serving, every plate passes through our rigorous 4-step hygiene and taste benchmark.",
    icon: <ShieldCheck size={24} />
  },
  {
    id: "03",
    title: "Pure Sourcing",
    desc: "We use only hormone-free meats and stone-ground spices. No chemical additives, no compromises.",
    icon: <Heart size={24} />
  },
  {
    id: "04",
    title: "Punctual Delivery",
    desc: "Your feast arrives in vacuum-insulated premium packaging, ensuring it's fresh and exactly on time.",
    icon: <Clock size={24} />
  }
];

export default function HowWereDifferent() {
  return (
    <section className="bg-bg-primary py-20 px-6 relative overflow-hidden" id="different">
      {/* Background Architectural Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
               <Sparkles className="text-accent-gold" size={20} />
               <span className="micro-label text-accent-gold font-bold">The Standard of Excellence</span>
            </div>
            <h2 className="font-brand text-4xl md:text-6xl text-text-primary leading-[1.1] mb-8">
              We aren't just another food app. We are <span className="font-accent italic text-accent-gold">Custodians</span> of Craft.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pb-4"
          >
            <p className="font-body text-text-muted text-lg md:text-xl leading-relaxed max-w-sm">
              Behind every order is a network of heritage kitchens dedicated to preserving the authentic flavors that define Hyderabad.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {standards.map((s, i) => (
             <motion.div
               key={s.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.6 }}
               className="group relative p-10 bg-white rounded-[32px] border border-border-warm hover:border-accent-gold/30 hover:shadow-2xl hover:shadow-accent-gold/5 transition-all duration-500 overflow-hidden"
             >
                {/* Background ID */}
                <div className="absolute top-2 right-3 font-brand text-7xl font-black opacity-5 transition-colors duration-500 select-none pointer-events-none">
                  {s.id}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-all duration-500 mb-8">
                    {s.icon}
                  </div>
                  <h3 className="font-brand text-2xl text-text-primary mb-4 group-hover:text-accent-gold transition-colors">{s.title}</h3>
                  <p className="font-body text-text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-accent-gold transition-all duration-500 group-hover:w-full" />
             </motion.div>
           ))}
        </div>

        {/* The Oath Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 rounded-[48px] bg-bg-dark p-12 md:p-24 relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
           
           <div className="relative z-10 max-w-2xl mx-auto text-center">
              <div className="w-12 h-12 rounded-full border border-[#C89B3C]/40 flex items-center justify-center mx-auto mb-10">
                 <Sparkles className="text-accent-gold" size={20} />
              </div>
              <h3 className="font-accent italic text-2xl text-[#C89B3C] mb-8 leading-snug">
                "Our commitment is simple: We host your party like it's our own home."
              </h3>
              <p className="font-body text-white/60 tracking-[0.2em] font-bold uppercase text-xs">
                The PartyCart Quality Oath
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

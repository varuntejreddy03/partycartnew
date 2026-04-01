import { motion } from 'framer-motion';
import { Leaf, Clock, Award, ShieldCheck } from 'lucide-react';

const differentiators = [
  {
    icon: <Award size={24} className="text-gold" />,
    title: "Khandani Bawarchis",
    description: "Our chefs have generations of culinary heritage, preparing dishes the traditional way."
  },
  {
    icon: <Leaf size={24} className="text-gold" />,
    title: "Premium Ingredients",
    description: "Locally sourced, high-quality ingredients with absolutely no compromises."
  },
  {
    icon: <Clock size={24} className="text-gold" />,
    title: "Punctual Delivery",
    description: "Your food arrives fresh and right on time, exactly as planned for your event."
  },
  {
    icon: <ShieldCheck size={24} className="text-gold" />,
    title: "Quality Assured",
    description: "Stringent hygiene protocols and taste checks ensure a standard of excellence."
  }
];

export default function HowWereDifferent() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="uppercase tracking-widest text-gold text-sm font-semibold mb-4">The Standard</div>
          <h2 className="font-editorial italic text-5xl md:text-6xl text-cream mb-10">How We're Different</h2>
          
          <div className="pl-6 border-l-2 border-gold py-2">
            <p className="font-editorial text-gold italic text-3xl md:text-4xl leading-tight">
              "You focus on your guests. We take care of the food."
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-4 sm:gap-6 items-start p-4 sm:p-6 rounded-lg hover:bg-walnut transition-colors group"
            >
              <div className="mt-1 bg-ink border border-gold/30 p-2 sm:p-3 rounded-md group-hover:border-gold group-hover:bg-gold/10 transition-colors flex-shrink-0">
                {diff.icon}
              </div>
              <div>
                <h3 className="font-display text-xl text-cream font-bold mb-2">{diff.title}</h3>
                <p className="font-sans text-muted">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

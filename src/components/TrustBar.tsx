import { motion } from 'framer-motion';

const stats = [
  { label: "500+ Parties Catered" },
  { label: "100+ Verified Bawarchis" },
  { label: "4.9★ Average Rating" },
  { label: "Same-Day Booking Available" }
];

export default function TrustBar() {
  return (
    <div className="bg-bg-secondary py-10 md:py-16 overflow-hidden border-y border-border-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-between gap-y-8 md:gap-4 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-brand text-lg md:text-2xl font-bold text-text-primary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Logos Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border-warm/50">
        <div className="flex flex-col items-center">
          <span className="micro-label mb-8">As seen in</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
             {["Telugu One", "Hans India", "The Siasat Daily", "New Indian Express"].map((name, i) => (
                <span key={i} className="text-text-primary font-accent text-xl md:text-2xl font-medium italic !tracking-normal">
                  {name}
                </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

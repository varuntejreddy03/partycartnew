import { motion } from 'framer-motion';

const stats = [
  { val: "500+", label: "Parties Catered" },
  { val: "100+", label: "Verified Bawarchis" },
  { val: "4.9★", label: "Average Rating" },
  { val: "Same-Day", label: "Booking Available" }
];

export default function TrustBar() {
  return (
    <div className="bg-bg-secondary py-14 overflow-hidden border-y border-[#e8dcc8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center px-4 py-4 md:py-0 ${i !== stats.length - 1 ? 'md:border-r border-[#e0d5c0]' : ''}`}
            >
              <div className="font-brand text-2xl font-bold text-text-primary mb-1">
                {stat.val}
              </div>
              <div className="font-sans text-sm text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Logos Strip */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-border-warm/50">
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

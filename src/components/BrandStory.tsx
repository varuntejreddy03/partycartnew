import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="story" className="relative py-16 md:py-24 bg-bg-primary overflow-hidden border-b border-border-warm/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Side: Immersive Visuals */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <motion.div 
              style={{ y: y1 }}
              className="relative rounded-[32px] overflow-hidden aspect-[4/5] w-full max-w-md shadow-2xl border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" 
                alt="Heritage Hyderabadi Feast" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/10 to-transparent" />
            </motion.div>

            {/* Floating Detail Card */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-56 bg-white p-3 md:p-5 rounded-2xl shadow-2xl border border-border-warm z-20"
            >
              <div className="rounded-xl overflow-hidden mb-3 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=500" 
                  alt="Traditional Spices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-accent italic text-accent-gold text-xs md:text-sm leading-tight">
                "Secrets passed through generations."
              </p>
            </motion.div>
          </div>

          {/* Right Side: Narrative */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="micro-label mb-4">Our Legacy</div>
              <h2 className="font-brand text-3xl md:text-5xl text-text-primary mb-6 leading-tight">
                The Hearth is the Heart of the Home.
              </h2>
              
              <div className="space-y-5 md:space-y-6">
                <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
                  For centuries, the true masters of Hyderabadi cuisine — the <span className="text-text-primary font-bold">Khandani Bawarchis</span> — operated in the shadows of legacy home kitchens. Their secrets weren't for the masses; they were for the chosen few.
                </p>
                
                <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
                  PartyCart was born to preserve this heritage, connecting discerning hosts with the city's finest culinary descendants through <span className="text-accent-gold font-bold italic">Curated Excellence.</span>
                </p>

                <p className="font-accent italic text-text-primary text-xl md:text-2xl leading-snug border-l-4 border-accent-gold pl-5 py-1">
                  "We believe that a party is defined by the flavors that linger long after guests leave."
                </p>

                <div className="pt-4">
                  <div className="font-brand text-2xl text-text-primary mb-1">PartyCart</div>
                  <div className="font-body text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">Heritage Preservation</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

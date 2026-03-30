import { useState } from "react";
import brandData from "@/data/partycart.json";

const iconMap: Record<string, string> = {
  "party-boxes": "🎁",
  "catering-orders": "🍱",
  "live-food-counters": "🔥",
};

const Offerings = () => {
  const [expandedCounter, setExpandedCounter] = useState(false);

  return (
    <section id="offerings" className="relative py-24 bg-secondary diagonal-clip-reverse">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            What We Offer
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Three ways to make your celebration unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {brandData.offerings.map((offering) => (
            <div
              key={offering.id}
              className="bg-card rounded-2xl p-8 border-l-[4px] border-l-[#A8843A] shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex flex-col"
            >
              <div className="text-4xl mb-4">{iconMap[offering.id]}</div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{offering.title}</h3>
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold w-fit">
                {offering.idealFor}
              </span>
              <p className="font-body text-muted-foreground text-sm mb-6 flex-grow">{offering.description}</p>

              {offering.features && (
                <ul className="space-y-2 mb-4">
                  {offering.features.map((f) => (
                    <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-[#C8920A] mt-0.5">✦</span> {f}
                    </li>
                  ))}
                </ul>
              )}

              {offering.id === "live-food-counters" && offering.counters && (
                <div>
                  <button
                    onClick={() => setExpandedCounter(!expandedCounter)}
                    className="font-body text-sm text-gold hover:text-gold-light transition-colors"
                    aria-label="Show live counter details"
                  >
                    {expandedCounter ? "Hide counters ▲" : "View counters ▼"}
                  </button>
                  <div className={`enquire-content ${expandedCounter ? 'open' : ''}`}>
                    <div className="mt-4 space-y-3 pt-1">
                      {offering.counters.map((c) => (
                        <div key={c.name} className="p-3 rounded-xl bg-secondary border border-border">
                          <h4 className="font-body text-sm font-semibold text-[#1A1208]">{c.name}</h4>
                          <p className="font-body text-xs text-muted-foreground mt-1">{c.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;

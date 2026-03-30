import brandData from "@/data/partycart.json";

const emojiMap: Record<string, string> = {
  "Signature Dishes": "🍽️",
  "Regional Cuisines": "🌍",
  "Zero Vendor Chaos": "✨",
};

const iconMap: Record<string, string> = {
  "Pre-Booked Catering Orders": "📋",
  "Authentic Chef Partners": "👨‍🍳",
  "Strict Quality Benchmarks": "✅",
  "End-to-End Logistics": "🚚",
};

const About = () => {
  return (
    <section className="relative py-24 bg-cream diagonal-clip">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal mb-4">
            {brandData.about.headline}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            {brandData.about.body}
          </p>
        </div>

        {/* 3-column highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {brandData.about.highlights.map((h) => (
            <div
              key={h.title}
              className="bg-card rounded-2xl p-8 text-center card-gold-glow border border-border"
            >
              <div className="text-4xl mb-4">{emojiMap[h.title] || "🔥"}</div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">{h.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {brandData.differentiators.headline}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {brandData.differentiators.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {brandData.differentiators.points.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
            >
              <span className="text-2xl flex-shrink-0">{iconMap[p.title] || "📌"}</span>
              <div>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1">{p.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA quote */}
        <p className="text-center font-display text-2xl md:text-3xl italic text-gold-dark font-bold">
          "{brandData.differentiators.cta}"
        </p>
      </div>
    </section>
  );
};

export default About;

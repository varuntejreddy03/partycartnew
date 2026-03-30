import brandData from "@/data/partycart.json";

const OurPromise = () => {
  return (
    <section className="relative py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal mb-4">
            {brandData.promise.headline}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            {brandData.promise.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {brandData.promise.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
            >
              <span className="text-gold text-xl flex-shrink-0">✓</span>
              <div>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1">{pillar.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;

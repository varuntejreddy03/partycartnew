import brandData from "@/data/partycart.json";

const HowItWorks = () => {
  const steps = brandData.howItWorks.steps;

  return (
    <section id="how-it-works" className="relative py-24 bg-dark diagonal-clip">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
            {brandData.howItWorks.headline}
          </h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto">
            {brandData.howItWorks.subtext}
          </p>
        </div>

        {/* Desktop horizontal / Mobile vertical */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5">
            <div className="h-full bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
                  <span className="font-display text-2xl font-black text-gold">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2">{step.title}</h3>
                <p className="font-body text-sm text-cream/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

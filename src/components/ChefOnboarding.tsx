import brandData from "@/data/partycart.json";

const ChefOnboarding = () => {
  const data = brandData.chefOnboarding;

  return (
    <section id="join-us" className="relative py-24 bg-dark">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
            {data.headline}
          </h2>
          <p className="font-body text-cream/60 max-w-2xl mx-auto">{data.body}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Who can join */}
          <div>
            <h3 className="font-display text-xl font-bold text-gold mb-6">Who Can Join?</h3>
            <ul className="space-y-3">
              {data.whoCanOnboard.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-cream/80">
                  <span className="text-gold">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-display text-xl font-bold text-gold mb-6">How to Get Started</h3>
            <div className="space-y-4">
              {data.steps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-sm font-bold text-gold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-cream">{step.title}</h4>
                    <p className="font-body text-sm text-cream/50">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-cream/60 mb-6">
            Reach out at{" "}
            <a href={`mailto:${data.contact.email}`} className="text-gold hover:text-gold-light transition-colors">
              {data.contact.email}
            </a>{" "}
            or WhatsApp us
          </p>
          <a
            href={`https://wa.me/917396737700?text=${encodeURIComponent("Hi! I'm a chef interested in joining PartyCart.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 rounded-full bg-gradient-to-r from-gold to-gold-light font-body font-semibold text-dark hover:shadow-lg hover:shadow-gold/20 transition-all"
            aria-label="Join PartyCart as a chef via WhatsApp"
          >
            Join as a Chef 👨‍🍳
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChefOnboarding;

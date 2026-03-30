import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(168,132,58,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,26,0.5)_0%,rgba(26,26,26,0.95)_100%)]" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        opacity: 0.15
      }} />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-kicker text-[#A8843A] mb-4 tracking-widest uppercase font-semibold text-sm">Party Catering Reimagined</p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#A8843A] to-transparent mx-auto mb-8" />

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            PartyCart
            <span className="block text-[#A8843A] text-3xl md:text-5xl lg:text-6xl mt-2">Hyderabad's Party Food App</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-white/90 mb-6 font-medium">
            Authentic chefs. Curated menus. Delivered to your celebration.
          </p>

          <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            No kitchen chaos. No last-minute catering stress. Just handcrafted food — delivered fresh to your party.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/order"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#A8843A] font-body font-bold text-white hover:bg-[#8B6A1D] transition-all shadow-lg"
              aria-label="Order Now"
            >
              Order Now
            </Link>
            <a
              href="#cuisines"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-[#A8843A] font-body font-bold text-[#A8843A] hover:bg-[#A8843A]/10 transition-all"
              aria-label="Explore Menu"
            >
              Explore Menu
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 border-t border-white/10 pt-8">
            <span className="flex items-center gap-2 text-white/80 text-sm md:text-base font-body font-medium">
              <span className="text-[#A8843A]">✓</span> 10 to 500+ Guests
            </span>
            <span className="flex items-center gap-2 text-white/80 text-sm md:text-base font-body font-medium">
              <span className="text-[#A8843A]">✓</span> Chef Verified Menus
            </span>
            <span className="flex items-center gap-2 text-white/80 text-sm md:text-base font-body font-medium">
              <span className="text-[#A8843A]">✓</span> Fast Party Ordering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

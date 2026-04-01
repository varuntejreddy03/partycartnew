import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, MessageCircle } from 'lucide-react';

const filters = [
  { label: "All", value: "all" },
  { label: "Kebabs", value: "kebab" },
  { label: "Biryani", value: "biryani" },
  { label: "Telugu", value: "telugu" },
  { label: "Mughlai", value: "mughlai" },
  { label: "Seafood", value: "godavari" },
  { label: "Chicken", value: "chicken" },
  { label: "Vegetarian", value: "veg" },
  { label: "Beverages", value: "coffee" },
];

interface CategoryItem {
  name: string;
  price: number | null;
  isVeg: boolean;
  description: string;
  imageUrl?: string;
  ribbon?: string;
}

interface Category {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  items: CategoryItem[];
}

export default function SignatureCuisines() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuLoading, setMenuLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const loadMenu = async () => {
      setMenuLoading(true);
      try {
        const data = await import("@/data/partycart-menu.json");
        if (mounted) {
          setCategories(data.default.menuCategories ?? []);
        }
      } finally {
        if (mounted) setMenuLoading(false);
      }
    };
    loadMenu();
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    const nonEmptyCategories = categories.filter((c) => Array.isArray(c.items) && c.items.length > 0);

    const filteredByPill = activeFilter === "all" ? nonEmptyCategories : nonEmptyCategories.filter((c) => {
      const id = c.id.toLowerCase();
      const title = c.title.toLowerCase();
      const tagline = c.tagline.toLowerCase();
      const term = activeFilter.toLowerCase();

      if (term === "veg") return c.items.some((item) => item.isVeg);
      if (term === "coffee") {
        return (
          id.includes("coffee") ||
          title.includes("coffee") ||
          c.items.some((item) => item.name.toLowerCase().includes("coffee") || item.name.toLowerCase().includes("mocktail"))
        );
      }

      return (
        id.includes(term) ||
        title.includes(term) ||
        tagline.includes(term) ||
        c.items.some((item) => item.name.toLowerCase().includes(term))
      );
    });

    const query = searchTerm.trim().toLowerCase();
    if (!query) return filteredByPill;

    return filteredByPill.filter((c) => {
      const inHeading = c.title.toLowerCase().includes(query) || c.tagline.toLowerCase().includes(query);
      if (inHeading) return true;
      return c.items.some((item) => item.name.toLowerCase().includes(query));
    });
  }, [activeFilter, categories, searchTerm]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, searchTerm]);

  const handleOrder = () => window.location.href = "https://yumzy.page.link/UfaY";

  const getBadgeStyle = (badge?: string) => {
    if (!badge) return 'border border-cream/40 text-cream';
    const lower = badge.toLowerCase();
    if (lower.includes('popular')) return 'bg-gold text-ink font-bold';
    if (lower.includes('try') || lower.includes('new')) return 'bg-saffron text-ink font-bold';
    return 'border border-cream/40 text-cream';
  };

  return (
    <section className="bg-ink py-24 px-6" id="cuisines">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="uppercase tracking-widest text-gold text-sm font-semibold mb-4">Taste of Hyderabad</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">Signature Cuisines</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-10" />
        </motion.div>

        {/* Search & Tabs */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input 
              type="text" 
              placeholder="Search kitchens, dishes, cuisines..."
              className="bg-walnut border border-gold/20 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-cream rounded-sm pl-12 pr-4 py-3 w-full transition-colors font-sans"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex sm:flex-wrap sm:justify-center gap-3 w-full sm:w-auto overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2 sm:px-0">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-6 py-2 rounded-full font-sans text-sm transition-colors snap-center whitespace-nowrap flex-shrink-0 ${
                  activeFilter === f.value 
                    ? 'bg-gold text-ink font-semibold' 
                    : 'border border-gold/30 text-muted hover:border-gold'
                }`}
              >
                {activeFilter === f.value && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gold rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Loading Skeletons */}
        {menuLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
               <div key={idx} className="h-96 rounded-lg border border-gold/10 bg-walnut animate-pulse" />
            ))}
          </div>
        )}

        {/* Grid */}
        {!menuLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visibleCount).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
                className="bg-walnut rounded-lg border border-transparent hover:border-gold/40 transition-colors duration-300 p-6 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6 gap-4 min-h-[4rem]">
                  <h3 className="font-display text-2xl text-cream font-bold leading-tight line-clamp-2">{cat.title}</h3>
                  {cat.badge && (
                    <span className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap mt-1 ${getBadgeStyle(cat.badge)}`}>
                      {cat.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-8 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    {cat.items.slice(0, 3).map((dish, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-16 h-12 bg-ink rounded-sm flex-shrink-0 flex items-center justify-center text-xs text-muted font-sans border border-gold/10 overflow-hidden mt-1">
                          {dish.imageUrl ? (
                            <img src={dish.imageUrl} alt={dish.name} className="w-full h-full object-cover" loading="lazy" />
                          ) : (
                            "Dish"
                          )}
                        </div>
                        <div className="flex flex-col flex-grow">
                          <span className="font-sans text-cream text-lg leading-snug line-clamp-2 min-h-[3rem]">{dish.name}</span>
                          {dish.price ? (
                            <span className="font-sans text-gold font-medium text-sm mt-1">₹{dish.price}</span>
                          ) : (
                            <span className="font-sans text-gold font-medium text-sm mt-1">Market Price</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {cat.items.length > 3 ? (
                     <div className="text-muted font-sans text-sm italic mt-4 text-center">
                        + {cat.items.length - 3} more dishes...
                     </div>
                  ) : (
                     <div className="text-transparent font-sans text-sm italic mt-4 text-center select-none" aria-hidden="true">
                        .
                     </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
                  <button onClick={handleOrder} className="bg-gold text-ink font-sans font-medium py-2.5 rounded-sm hover:brightness-110 transition text-sm sm:text-base px-1">
                    Order App
                  </button>
                  <button onClick={handleOrder} className="border border-gold text-gold font-sans font-medium py-2.5 rounded-sm hover:bg-gold/10 transition text-sm sm:text-base px-1">
                    Order Online
                  </button>
                  <a href="tel:+917396737700" className="flex items-center justify-center gap-1.5 sm:gap-2 text-muted hover:text-gold transition font-sans text-xs sm:text-sm py-2">
                    <Phone size={14} /> Call
                  </a>
                  <a href="https://wa.me/917396737700" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 text-muted hover:text-gold transition font-sans text-xs sm:text-sm py-2">
                    <MessageCircle size={14} /> Enquire
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!menuLoading && visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filtered.length))}
              className="border border-gold text-gold font-sans font-medium px-8 py-3 rounded-sm hover:bg-gold hover:text-ink transition-colors cursor-pointer"
            >
              Load More Kitchens
            </button>
          </div>
        )}

        {!menuLoading && filtered.length === 0 && (
          <div className="text-center font-sans text-muted py-12">
            No specific menus match this filter. Please try a different category or search term!
          </div>
        )}
      </div>
    </section>
  );
}

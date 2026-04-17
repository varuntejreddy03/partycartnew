import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, MessageCircle, Star, ArrowRight } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

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
    const query = searchTerm.trim().toLowerCase();
    const nonEmptyCategories = categories.filter((c) => Array.isArray(c.items) && c.items.length > 0);

    let list = nonEmptyCategories;
    if (activeFilter !== "all") {
       list = list.filter((c) => {
          const id = c.id.toLowerCase();
          const title = c.title.toLowerCase();
          const tagline = c.tagline.toLowerCase();
          const term = activeFilter.toLowerCase();
          if (term === "veg") return c.items.some((item) => item.isVeg);
          if (term === "coffee") return id.includes("coffee") || title.includes("coffee") || c.items.some((item) => item.name.toLowerCase().includes("coffee") || item.name.toLowerCase().includes("mocktail"));
          return id.includes(term) || title.includes(term) || tagline.includes(term) || c.items.some((item) => item.name.toLowerCase().includes(term));
       });
    }

    if (query) {
       list = list.filter((c) => {
         const inHeading = c.title.toLowerCase().includes(query) || c.tagline.toLowerCase().includes(query);
         if (inHeading) return true;
         return c.items.some((item) => item.name.toLowerCase().includes(query));
       });
    }

    return list;
  }, [activeFilter, categories, searchTerm]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, searchTerm]);

  const handleOrder = () => window.open("https://order.yumzy.in", "_blank", "noopener,noreferrer");

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCategory(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCategory]);

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-6 overflow-hidden" id="cuisines">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-accent-gold text-xs font-bold mb-4">Taste of Hyderabad</div>
          <h2 className="font-brand text-4xl md:text-5xl lg:text-7xl text-text-primary font-bold mb-6">Signature Cuisines</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Search & Tabs */}
        <div className="flex flex-col items-center gap-10 mb-16">
          <div className="relative w-full max-w-xl group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-hover:text-accent-gold" size={20} />
            <input 
              type="text" 
              placeholder="Search kitchens, dishes, cuisines..."
              className="bg-white border-2 border-border-warm focus:border-accent-gold focus:outline-none text-text-primary rounded-full pl-14 pr-4 py-4 w-full transition-all duration-300 font-sans shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex sm:flex-wrap sm:justify-center gap-3 w-full overflow-x-auto pb-4 no-scrollbar px-2 snap-x">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-8 py-3 rounded-full font-sans text-sm font-bold transition-all duration-300 snap-center whitespace-nowrap flex-shrink-0 border-2 ${
                  activeFilter === f.value 
                    ? 'bg-accent-gold border-accent-gold text-white shadow-xl translate-y-[-2px]' 
                    : 'bg-white border-border-warm text-text-muted hover:border-accent-gold/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
           <AnimatePresence mode="popLayout">
           {filtered.slice(0, visibleCount).map((cat, i) => (
             <motion.div
               key={cat.id}
               layout
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
               className="bg-white rounded-[48px] border border-border-warm hover:shadow-[0_40px_80px_-20px_rgba(200,134,26,0.12)] transition-all duration-700 flex flex-col group relative overflow-hidden"
             >
                {/* Visual Anchor: Hybrid Background/Image Overlay */}
                <div className="relative aspect-[16/8] overflow-hidden bg-bg-secondary">
                   <img 
                      src={cat.items[0]?.imageUrl || "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                   
                   <div className="absolute top-6 left-6 flex gap-3 z-10">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                        <Star size={14} className="text-accent-gold fill-accent-gold" />
                        <span className="text-text-primary font-black text-xs">4.8</span>
                      </div>
                      {i % 3 === 0 && (
                        <div className="bg-text-primary text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-2xl">
                           <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-white">Master Kitchen</span>
                        </div>
                      )}
                   </div>

                   <div className="absolute bottom-6 left-8 right-8">
                      <h3 className="font-brand text-2xl md:text-3xl text-white mb-1 drop-shadow-md">{cat.title}</h3>
                      <p className="font-brand text-white/70 italic text-sm truncate">{cat.tagline}</p>
                   </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                   {/* 3-Item Visual List with Resolved Mobile Overlap */}
                   <div className="flex flex-col gap-6 mb-10">
                      {cat.items.slice(0, 3).map((dish, idx) => (
                        <div key={idx} className="flex gap-4 items-start group/item">
                           <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex-shrink-0 overflow-hidden border border-border-warm shadow-md transition-transform group-hover/item:scale-110">
                              <img 
                                 src={dish.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"} 
                                 alt={dish.name} 
                                 className="w-full h-full object-cover" 
                              />
                           </div>
                           <div className="flex-1 flex justify-between gap-4 border-b border-border-warm/30 pb-4 min-w-0">
                              <div className="flex flex-col min-w-0">
                                 <span className="font-brand text-lg text-text-primary group-hover/item:text-accent-gold transition-colors leading-tight mb-1">{dish.name}</span>
                                 <span className="font-body text-[8px] text-text-muted uppercase tracking-[0.25em] font-black opacity-60">Masterpiece</span>
                              </div>
                              <span className="font-brand text-accent-gold font-bold text-xl whitespace-nowrap pt-0.5">₹{dish.price || "1400"}</span>
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="flex flex-wrap gap-4 items-center justify-between mt-auto pt-6 border-t border-border-warm/30">
                      <div className="flex gap-3">
                        <a href="tel:+917396737700" className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center text-text-muted hover:border-accent-gold hover:text-accent-gold transition-all duration-300">
                          <Phone size={18} />
                        </a>
                        <a href="https://wa.me/917396737700" target="_blank" className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center text-text-muted hover:border-accent-gold hover:text-accent-gold transition-all duration-300">
                          <MessageCircle size={18} />
                        </a>
                      </div>
                      <div className="flex gap-2">
                         <button onClick={() => setSelectedCategory(cat)} className="bg-white border-2 border-accent-gold text-accent-gold font-body font-black px-5 py-3 rounded-full hover:bg-accent-gold hover:text-white transition-all duration-500 text-[9px] uppercase tracking-widest active:scale-95">
                            Menu
                         </button>
                         <button onClick={handleOrder} className="bg-text-primary text-white font-body font-black px-6 py-3 rounded-full hover:bg-accent-gold transition-all duration-500 text-[9px] uppercase tracking-widest shadow-lg active:scale-95">
                            Order Now
                         </button>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
           </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md px-4 py-6 sm:px-6 flex items-end sm:items-center justify-center"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', damping: 28, stiffness: 240 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[88vh] overflow-hidden rounded-[32px] bg-[#FFFDF7] shadow-[0_30px_100px_rgba(0,0,0,0.35)] border border-white flex flex-col"
              >
                <div className="p-5 md:p-8 border-b border-[#E8D5B7] bg-gradient-to-r from-[#FFF8EA] via-white to-[#FFFDF7]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-3xl">
                      <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.35em] text-[#9B8560] mb-3">Full Menu</p>
                      <h3 className="font-brand text-4xl md:text-5xl text-[#1A1208] font-bold leading-[0.9]">
                        {selectedCategory.title}
                      </h3>
                      <p className="font-body text-base md:text-lg text-[#5C4A1E] mt-3 max-w-2xl leading-relaxed">
                        {selectedCategory.tagline}
                      </p>
                    </div>
                    {selectedCategory.badge && (
                      <span className="px-4 py-2 rounded-full bg-[#FFF3D7] text-[#A8843A] text-xs md:text-sm font-body font-semibold whitespace-nowrap border border-[#E8C97A] shadow-sm">
                        {selectedCategory.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="overflow-y-auto p-5 md:p-8 space-y-4 md:space-y-5 flex-1">
                  {selectedCategory.items.map((dish, index) => (
                    <div key={`${selectedCategory.id}-${dish.name}-${index}`} className="flex items-start gap-4 rounded-[24px] border border-[#F0E2C8] bg-white p-4 md:p-5 shadow-[0_8px_20px_rgba(26,18,8,0.04)]">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-[#FFF8F0] flex-shrink-0 border border-[#E8D5B7] shadow-sm">
                        <img
                          src={dish.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"}
                          alt={dish.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h4 className="font-brand text-xl md:text-2xl text-[#1A1208] font-bold leading-tight">{dish.name}</h4>
                            <p className="font-body text-sm md:text-[15px] text-[#5C4A1E] mt-2 leading-relaxed line-clamp-2 md:line-clamp-3">{dish.description}</p>
                          </div>
                          <div className="text-right shrink-0">
                            {dish.price != null && (
                              <div className="font-brand text-2xl md:text-3xl text-[#C8920A] font-bold leading-none">₹{dish.price.toLocaleString()}</div>
                            )}
                            <div className="mt-2 inline-flex items-center rounded-full bg-[#FFF3D7] px-3 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B8560] border border-[#E8C97A]/70">
                              {dish.isVeg ? 'Veg' : 'Non-Veg'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E8D5B7] bg-[#FFFDF7] px-5 py-4 md:px-8 md:py-5 flex items-center justify-between gap-3">
                  <a
                    href="https://order.yumzy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#A8843A] px-5 py-2.5 text-sm md:text-base font-body font-semibold text-[#A8843A] hover:bg-[#FFF8F0] transition-colors"
                  >
                    Visit Website
                  </a>

                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="rounded-full bg-[#1A1208] px-5 py-2.5 text-sm md:text-base font-body font-semibold text-white hover:bg-[#2b2015] transition-colors"
                  >
                    Close Menu
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filtered.length))}
              className="bg-white border-2 border-accent-gold text-accent-gold font-body font-black px-12 py-5 rounded-full hover:bg-accent-gold hover:text-white transition-all shadow-xl uppercase text-xs tracking-widest"
            >
              Discover More Kitchens
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

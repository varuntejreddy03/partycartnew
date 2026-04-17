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
    <section className="bg-white py-20 px-6 overflow-hidden relative" id="cuisines">
      <div className="max-w-6xl mx-auto">
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

          <div className="flex sm:flex-wrap sm:justify-center gap-3 w-full overflow-x-auto flex-nowrap scrollbar-hide pb-4 px-2 snap-x">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 snap-center flex-shrink-0 whitespace-nowrap ${
                  activeFilter === f.value 
                    ? 'bg-[#C89B3C] text-white shadow-xl translate-y-[-2px]' 
                    : 'border border-[#C89B3C] text-[#C89B3C] bg-transparent hover:bg-[#C89B3C]/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           <AnimatePresence mode="popLayout">
           {filtered.slice(0, visibleCount).map((cat, i) => (
             <motion.div
               key={cat.id}
               layout
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
               className="bg-white rounded-[28px] border border-border-warm hover:shadow-[0_20px_40px_-15px_rgba(200,134,26,0.12)] transition-all duration-500 flex flex-col group relative overflow-hidden"
             >
                {/* Visual Anchor: Hybrid Background/Image Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
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
                   </div>

                   <div className="absolute bottom-6 left-8 right-8">
                      <h3 className="font-brand text-2xl md:text-3xl text-white mb-1 drop-shadow-md">{cat.title}</h3>
                      <p className="font-brand text-white/70 italic text-sm truncate">{cat.tagline}</p>
                   </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                   {/* 3-Item Visual List */}
                   <div className="flex flex-col mb-6 gap-0">
                      {cat.items.slice(0, 3).map((dish, idx) => (
                        <div key={idx} className="flex justify-between items-center gap-3 group/item border-b border-[#F0F0F5] py-3.5 first:pt-0 last:border-b-0 last:pb-0">
                           <div className="flex-1 flex flex-col min-w-0 pr-2">
                              <div className={`w-[12px] h-[12px] border-[1px] flex items-center justify-center rounded-[2px] mb-2 ${dish.isVeg ? 'border-[#1BA672]' : 'border-[#E23744]'}`}>
                                <div className={`w-[6px] h-[6px] rounded-full ${dish.isVeg ? 'bg-[#1BA672]' : 'bg-[#E23744]'}`}></div>
                              </div>
                              <span className="font-body font-bold text-[14px] sm:text-[15px] text-[#3E4152] group-hover/item:text-accent-gold transition-colors leading-[1.3] mb-1 line-clamp-2">{dish.name}</span>
                              <span className="font-body text-[#3E4152] font-semibold text-[13px]">₹{dish.price || "140"}</span>
                           </div>
                           <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-bg-secondary border border-[#F0F0F5] shadow-sm relative transition-transform duration-500 group-hover/item:scale-105">
                                 <img 
                                    src={dish.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"} 
                                    alt={dish.name} 
                                    className="w-full h-full object-cover" 
                                 />
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="flex flex-wrap gap-4 items-center justify-between mt-auto pt-6 border-t border-border-warm/30">
                       <div className="flex gap-3">
                         <a href="tel:+917396737700" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300">
                           <Phone size={14} />
                         </a>
                         <a href="https://wa.me/917396737700" target="_blank" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300">
                           <MessageCircle size={14} />
                         </a>
                       </div>
                       <div className="flex gap-2">
                          <button onClick={() => setSelectedCategory(cat)} className="h-9 px-4 text-xs font-semibold rounded-full border border-[#C89B3C] text-[#C89B3C] uppercase tracking-wide active:scale-95 transition-all">
                             Menu
                          </button>
                          <button onClick={handleOrder} className="h-9 px-4 text-xs font-semibold rounded-full bg-[#1a1208] text-white uppercase tracking-wide shadow-md active:scale-95 transition-all">
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

                <div className="overflow-y-auto p-4 md:p-8 flex-1 bg-[#F5F6F8]">
                  <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {selectedCategory.items.map((dish, index) => (
                      <div key={`${selectedCategory.id}-${dish.name}-${index}`} className="flex justify-between items-start gap-4 bg-white p-4 md:p-5 rounded-2xl border border-[#E9E9EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all">
                        <div className="flex-1 min-w-0 pr-2">
                          <div className={`w-[16px] h-[16px] border-[1.5px] flex items-center justify-center rounded-sm mb-2 ${dish.isVeg ? 'border-[#1BA672]' : 'border-[#E23744]'}`}>
                            <div className={`w-[8px] h-[8px] rounded-full ${dish.isVeg ? 'bg-[#1BA672]' : 'bg-[#E23744]'}`}></div>
                          </div>
                          <h4 className="font-body text-[15px] md:text-[17px] text-[#3E4152] font-bold leading-[1.3] mb-1">{dish.name}</h4>
                          {dish.price != null && (
                            <div className="font-body text-[14px] md:text-[15px] text-[#3E4152] font-semibold">₹{dish.price.toLocaleString()}</div>
                          )}
                          <p className="font-body text-[13px] text-[#686B78] mt-2 leading-relaxed line-clamp-2">{dish.description}</p>
                        </div>
                        <div className="w-[110px] md:w-[130px] flex-shrink-0 flex flex-col items-center">
                          <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-[16px] overflow-hidden bg-gray-50 shadow-sm border border-gray-100 relative group">
                             <img
                               src={dish.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"}
                               alt={dish.name}
                               className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                             />
                          </div>
                          <button className="-mt-4 z-10 bg-white text-[#1BA672] font-bold px-7 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-[#E9E9EB] text-[13px] uppercase tracking-wide hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition-all font-body active:scale-95">
                            ADD
                          </button>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
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

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import CuisineCard from "./CuisineCard";

const emojiMap: Record<string, string> = {
  "kebabs-biryanis": "🍖",
  "kilo-kart": "⚖️",
  "telugu-ruchulu": "🍛",
  "rayalaseema-ruchulu": "🌶️",
  "mughlai-kitchens": "👑",
  "godavari-ruchulu": "🐟",
  "ankapur-chicken": "🔥",
  "home-kitchens": "🏠",
  "dakhni-home-chefs": "🥘",
  "corporate-bites-daru-party": "🥂",
  "grazing-tables-live-kebabs": "🌿",
  "live-coffee-mocktail": "☕",
};

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

const CuisineGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
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
        if (mounted) {
          setMenuLoading(false);
        }
      }
    };

    loadMenu();

    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const nonEmptyCategories = categories.filter((c) => Array.isArray(c.items) && c.items.length > 0);

    const filteredByPill = activeFilter === "all" ? nonEmptyCategories : nonEmptyCategories.filter((c) => {
      const id = c.id.toLowerCase();
      const title = c.title.toLowerCase();
      const tagline = c.tagline.toLowerCase();
      const term = activeFilter.toLowerCase();

      if (term === "veg") {
        return c.items.some((item) => item.isVeg);
      }

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

    const query = searchText.trim().toLowerCase();
    if (!query) {
      return filteredByPill;
    }

    return filteredByPill.filter((c) => {
      const inHeading = c.title.toLowerCase().includes(query) || c.tagline.toLowerCase().includes(query);
      if (inHeading) return true;
      return c.items.some((item) => item.name.toLowerCase().includes(query));
    });
  }, [activeFilter, categories, searchText]);

  // Reset infinite load on filter change
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, searchText]);

  // Infinite scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 6, filtered.length));
        }
      },
      { rootMargin: "200px" }
    );
    const trigger = document.getElementById("load-more-trigger");
    if (trigger) observer.observe(trigger);
    return () => observer.disconnect();
  }, [filtered.length]);

  return (
    <section id="cuisines" className="relative py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-kicker mb-2">Curated Kitchens</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal mb-3 leading-[0.96]">
            Signature Cuisines
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Explore Hyderabad's most authentic culinary traditions — curated for your celebration
          </p>
        </div>

        {/* Filter pills */}
        <div className="sticky top-[64px] z-40 mb-8 bg-[#FFFDF7]/95 backdrop-blur-sm py-4 border-y border-[#E8C97A]/60">
          <div className="mb-3">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search cuisine or dish (e.g. biryani, kebab, paneer)"
              className="w-full md:w-[520px] mx-auto block rounded-full border border-[#E8C97A] bg-white px-5 py-3 text-sm text-[#1A1208] placeholder:text-[#9B8560] outline-none focus:ring-2 focus:ring-[#C8920A]/35"
              aria-label="Search cuisines or menu items"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-4 py-2 rounded-full font-body text-sm font-semibold transition-colors ${
                  activeFilter === f.value
                    ? "text-dark"
                    : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                }`}
                aria-label={`Filter by ${f.label}`}
              >
                {activeFilter === f.value && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-gold rounded-full shadow-lg shadow-gold/20 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {!menuLoading && (
          <p className="text-sm font-body text-[#9B8560] mb-5">
            Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} curated kitchens
          </p>
        )}

        {menuLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="h-[420px] rounded-2xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: menuLoading ? "none" : "grid" }}>
          {filtered.slice(0, visibleCount).map((cat) => (
            <CuisineCard
              key={cat.id}
              title={cat.title}
              emoji={emojiMap[cat.id] || "🍽️"}
              tagline={cat.tagline}
              badge={cat.badge}
              items={cat.items}
            />
          ))}
        </div>

        {visibleCount < filtered.length && (
          <>
            <div id="load-more-trigger" className="h-20 w-full" aria-hidden="true" />
            <div className="flex justify-center -mt-4 mb-4">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filtered.length))}
                className="px-6 py-3 rounded-lg border-2 border-[#A8843A] text-[#1A1A1A] font-body text-sm font-bold hover:bg-[#A8843A] hover:text-white transition-all shadow-sm"
              >
                Browse More Kitchens →
              </button>
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="text-center font-body text-muted-foreground py-12">
            No cuisines match this filter. Try another category!
          </p>
        )}
      </div>
    </section>
  );
};

export default CuisineGrid;

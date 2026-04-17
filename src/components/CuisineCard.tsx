import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnquireForm from "./EnquireForm";

interface MenuItem {
  name: string;
  price: number | null;
  isVeg: boolean;
  description: string;
  imageUrl?: string;
  ribbon?: string;
}

interface CuisineCardProps {
  title: string;
  emoji: string;
  tagline: string;
  badge?: string;
  items: MenuItem[];
}

const CuisineCard = ({ title, emoji, tagline, badge, items }: CuisineCardProps) => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false);

  const orderLinkUrl = "https://order.yumzy.in";

  useEffect(() => {
    if (!showMenuPopup) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenuPopup(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMenuPopup]);

  const renderItem = (item: MenuItem, itemIndex: number) => (
    <div
      key={item.name}
      className={`flex items-start gap-3 rounded-xl p-2 ${itemIndex % 2 === 0 ? "bg-[#FAFAFA]" : "bg-transparent"}`}
    >
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width="64"
          height="64"
          style={{ contentVisibility: "auto" }}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-cream flex items-center justify-center flex-shrink-0 text-2xl">
          {emoji}
        </div>
      )}
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2">
          {item.isVeg ? (
            <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm flex-shrink-0" aria-label="Vegetarian">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
            </div>
          ) : (
            <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center rounded-sm flex-shrink-0" aria-label="Non-Vegetarian">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-red-600" />
            </div>
          )}
          <h4 className="font-body text-sm font-semibold text-charcoal truncate">{item.name}</h4>
        </div>
        <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
        <div className="flex items-center gap-2 mt-1">
          {item.price != null && <span className="font-body text-sm font-bold text-[#C8920A]">₹{item.price.toLocaleString()}</span>}
          {item.ribbon && (
            <span className="px-2 py-0.5 rounded bg-gold/10 text-gold-dark text-[10px] font-body font-medium">
              {item.ribbon}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <article
      className="cuisine-card bg-white rounded-[32px] border border-[#E8D5B7] overflow-hidden flex flex-col shadow-[0_18px_48px_rgba(26,18,8,0.08)] card-gold-glow"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 360px" }}
    >
      {/* Header */}
      <div className="p-6 pb-4 md:p-7 md:pb-5">
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-3xl md:text-[2.15rem] leading-none shrink-0">{emoji}</span>
            <h3 className="font-brand text-2xl md:text-[2rem] font-bold text-[#1A1208] leading-[0.95] tracking-tight">{title}</h3>
          </div>
          {badge && (
            <span className="px-3 py-1.5 rounded-full bg-[#FFF3D7] text-[#A8843A] text-[11px] md:text-xs font-body font-bold whitespace-nowrap border border-[#E8C97A]/70 shadow-sm">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body text-sm md:text-[15px] text-[#5C4A1E] leading-relaxed max-w-[92%]">{tagline}</p>
        <p className="font-body text-xs md:text-sm text-[#9B8560] mt-3 font-semibold uppercase tracking-[0.12em]">{items.length} dishes available</p>
      </div>

      {/* Menu items */}
      <div className="px-6 md:px-7 flex-grow">
        <div className="border-t border-[#E8D5B7]/70 pt-4 space-y-4">
          {items.slice(0, 2).map(renderItem)}
        </div>

        {items.length > 2 && (
          <button
            onClick={() => setShowMenuPopup(true)}
            className="font-body text-sm md:text-[15px] text-[#A8843A] font-bold mt-4 hover:text-[#8B6A1D] transition-colors"
          >
            View full menu ▼
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="p-6 md:p-7 pt-5 space-y-3 border-t border-[#E8D5B7]/70 mt-5 bg-[#FFFCF8]">
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => window.open(orderLinkUrl, "_blank", "noopener,noreferrer")}
            className="flex-1 py-3 rounded-full bg-[#A8843A] font-body text-[11px] md:text-xs font-bold text-white text-center hover:bg-[#8B6A1D] transition-colors shadow-sm"
            aria-label={`Order ${title} online`}
          >
            📱 Order Now
          </button>

          <a
            href={orderLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-full border border-[#A8843A] font-body text-[11px] md:text-xs font-bold text-[#1A1A1A] text-center hover:bg-[#FFF8F0] transition-colors"
            aria-label={`Order ${title} online`}
          >
            🌐 Order Online
          </a>

          <a
            href="tel:+917396737700"
            className="flex-1 py-3 rounded-full border border-[#1A1A1A] font-body text-[11px] md:text-xs font-bold text-[#1A1A1A] text-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            aria-label={`Call to order ${title}`}
          >
            📞 Call
          </a>

          <button
            onClick={() => setShowEnquiry(!showEnquiry)}
            className="flex-1 py-3 rounded-full bg-[#FFF8F0] font-body text-[11px] md:text-xs font-bold text-[#A8843A] hover:bg-[#F3E5CC] transition-colors"
            aria-label={`Enquire about ${title}`}
          >
            {showEnquiry ? "Close ▲" : "💬 Enquire ▼"}
          </button>
        </div>

        <div className={`enquire-content ${showEnquiry ? "open" : ""}`}>
          <div>

          <AnimatePresence>
            {showMenuPopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md px-4 py-6 sm:px-6 flex items-end sm:items-center justify-center"
                onClick={() => setShowMenuPopup(false)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.98 }}
                  transition={{ type: "spring", damping: 28, stiffness: 240 }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative w-full max-w-4xl max-h-[88vh] overflow-hidden rounded-[32px] bg-[#FFFDF7] shadow-[0_30px_100px_rgba(0,0,0,0.35)] border border-white flex flex-col"
                >
                  <div className="p-5 md:p-7 border-b border-[#E8D5B7] bg-gradient-to-r from-[#FFF8EA] to-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#9B8560] mb-2">Full Menu</p>
                        <h3 className="font-display text-3xl md:text-4xl text-[#1A1208] font-bold leading-tight">{title}</h3>
                        <p className="font-body text-sm md:text-base text-[#5C4A1E] mt-2 max-w-2xl">{tagline}</p>
                      </div>
                      {badge && (
                        <span className="px-3 py-1.5 rounded-full bg-[#FFF3D7] text-[#A8843A] text-xs font-body font-semibold whitespace-nowrap border border-[#E8C97A]">
                          {badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="overflow-y-auto p-5 md:p-7 space-y-4 flex-1">
                    {items.map((item, itemIndex) => renderItem(item, itemIndex))}
                  </div>

                  <div className="border-t border-[#E8D5B7] bg-[#FFFDF7] px-5 py-4 md:px-7 md:py-5 flex items-center justify-between gap-3">
                    <a
                      href={orderLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#A8843A] px-4 py-2 text-sm font-body font-semibold text-[#A8843A] hover:bg-[#FFF8F0] transition-colors"
                    >
                      Visit Website
                    </a>

                    <button
                      onClick={() => setShowMenuPopup(false)}
                      className="rounded-full bg-[#1A1208] px-5 py-2.5 text-sm font-body font-semibold text-white hover:bg-[#2b2015] transition-colors"
                    >
                      Close Menu
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
            <EnquireForm categoryName={title} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(CuisineCard);

import { memo, useState } from "react";
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
  const [showAllItems, setShowAllItems] = useState(false);

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.yumzy.orderfood";
  const appStoreUrl = "https://apps.apple.com/in/app/yumzy-online-food-delivery/id1476665049";
  const orderLinkUrl = "https://yumzy.page.link/UfaY";

  const getAppOrderUrl = () => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIOS) return appStoreUrl;
    if (isAndroid) return playStoreUrl;
    return orderLinkUrl;
  };

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
      className="cuisine-card bg-card rounded-2xl border border-gold-border overflow-hidden flex flex-col shadow-[0_8px_24px_rgba(26,18,8,0.06)] card-gold-glow"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 360px" }}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{emoji}</span>
            <h3 className="font-display text-xl font-bold text-charcoal leading-tight">{title}</h3>
          </div>
          {badge && (
            <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{tagline}</p>
        <p className="font-body text-xs text-[#9B8560] mt-2">{items.length} dishes available</p>
      </div>

      {/* Menu items */}
      <div className="px-6 flex-grow">
        <div className="border-t border-border pt-4 space-y-3">
          {items.slice(0, 2).map(renderItem)}
          
          <div className={`enquire-content ${showAllItems ? "open" : ""}`}>
            <div className="space-y-3 pt-3">
              {showAllItems && items.slice(2).map(renderItem)}
            </div>
          </div>
        </div>

        {items.length > 2 && (
          <button
            onClick={() => setShowAllItems(!showAllItems)}
            className="font-body text-sm text-gold font-semibold mt-3 hover:text-gold-light transition-colors"
          >
            {showAllItems ? "Show less ▲" : `View all ${items.length} items ▼`}
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="p-6 pt-4 space-y-2 border-t border-border mt-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => window.open(getAppOrderUrl(), "_blank", "noopener,noreferrer")}
            className="flex-1 py-2.5 rounded-lg bg-[#A8843A] font-body text-xs font-semibold text-white text-center hover:bg-[#8B6A1D] transition-colors"
            aria-label={`Order ${title} from mobile app`}
          >
            📱 Order App
          </button>

          <a
            href={orderLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-lg border border-[#A8843A] font-body text-xs font-semibold text-[#1A1A1A] text-center hover:bg-[#FFF8F0] transition-colors"
            aria-label={`Order ${title} online`}
          >
            🌐 Order Online
          </a>

          <a
            href="tel:+917396737700"
            className="flex-1 py-2.5 rounded-lg border border-[#1A1A1A] font-body text-xs font-semibold text-[#1A1A1A] text-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            aria-label={`Call to order ${title}`}
          >
            📞 Call
          </a>

          <button
            onClick={() => setShowEnquiry(!showEnquiry)}
            className="flex-1 py-2.5 rounded-lg bg-[#FFF8F0] font-body text-xs font-semibold text-[#A8843A] hover:bg-[#F3E5CC] transition-colors"
            aria-label={`Enquire about ${title}`}
          >
            {showEnquiry ? "Close ▲" : "💬 Enquire ▼"}
          </button>
        </div>

        <div className={`enquire-content ${showEnquiry ? "open" : ""}`}>
          <div>
            <EnquireForm categoryName={title} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(CuisineCard);

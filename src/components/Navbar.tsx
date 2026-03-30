import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/partycart-logo.png";
import { Menu, X } from "lucide-react";

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" className={`h-[18px] w-[18px] ${active ? "text-[#C8920A]" : "text-[#7a6340]"}`} fill="none" aria-hidden="true">
    <path d="M3 10.5L12 3l9 7.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 9.5V20h13V9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" className={`h-[18px] w-[18px] ${active ? "text-[#C8920A]" : "text-[#7a6340]"}`} fill="none" aria-hidden="true">
    <path d="M4 7h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M4 17h10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
);

const CallIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#7a6340]" fill="none" aria-hidden="true">
    <path d="M5 4h4l1.5 4-2.3 2.2a15.2 15.2 0 0 0 5.6 5.6l2.2-2.3L20 15v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(location.pathname === "/order" ? "order" : "home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomeTop = location.pathname === "/" && !scrolled;
  const isHome = location.pathname === "/";
  const isOrder = location.pathname === "/order";

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleAppDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    if (isIOS) {
      window.open("https://apps.apple.com/in/app/yumzy-online-food-delivery/id1476665049", "_blank", "noopener,noreferrer");
    } else {
      window.open("https://play.google.com/store/apps/details?id=com.yumzy.orderfood", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0" aria-label="Go to home">
            <img
              src={logo}
              alt="PartyCart by Yumzy"
              className="h-10 md:h-12 w-auto object-contain flex-shrink-0"
              style={{ filter: 'brightness(0)' }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/order" className="font-body text-[15px] font-medium text-dark hover:text-gold transition-colors">Browse Menu</Link>
            <a href="#how-it-works" className="font-body text-[15px] font-medium text-dark hover:text-gold transition-colors">How It Works</a>
            <a href="#contact" className="font-body text-[15px] font-medium text-dark hover:text-gold transition-colors">Contact Us</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+917396737700" className="flex items-center gap-2 font-body text-[15px] font-medium text-dark hover:text-gold transition-colors">
              <CallIcon />
              <span>+91 73967 37700</span>
            </a>
            <a href="#" onClick={handleAppDownload} className="font-body text-[15px] font-medium text-gold hover:text-gold-light transition-colors">
              Download App
            </a>
            <Link
              to="/order"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-body text-base font-bold bg-[#A8843A] text-white hover:bg-[#8B6A1D] transition-colors shadow-sm"
              aria-label="Order Now"
            >
              Order Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1A1A1A] p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link onClick={() => setMobileMenuOpen(false)} to="/order" className="font-body text-base font-medium text-dark hover:text-gold transition-colors py-2 border-b border-gray-50">Browse Menu</Link>
            <a onClick={() => setMobileMenuOpen(false)} href="#how-it-works" className="font-body text-base font-medium text-dark hover:text-gold transition-colors py-2 border-b border-gray-50">How It Works</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="font-body text-base font-medium text-dark hover:text-gold transition-colors py-2 border-b border-gray-50">Contact Us</a>
            <a onClick={() => setMobileMenuOpen(false)} href="tel:+917396737700" className="flex items-center gap-2 font-body text-base font-medium text-dark hover:text-gold transition-colors py-2 border-b border-gray-50">
              <CallIcon />
              <span>+91 73967 37700</span>
            </a>
            <a href="#" onClick={(e) => { setMobileMenuOpen(false); handleAppDownload(e); }} className="font-body text-base font-medium text-gold hover:text-gold-light transition-colors py-2">
              Download App
            </a>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Link
          to="/order"
          className="flex w-full items-center justify-center rounded-xl bg-[#A8843A] px-4 py-3.5 font-body text-[15px] font-bold text-white shadow-md active:bg-[#8B6A1D]"
          aria-label="Order Now CTA"
        >
          ORDER NOW
        </Link>
      </div>
    </>
  );
};

export default Navbar;

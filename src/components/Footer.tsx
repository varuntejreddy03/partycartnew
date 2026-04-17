import { Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import logo from '../assets/partycart-logo.png';

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Services", href: "#services" },
      { name: "Partner With Us", href: "#" },
      { name: "Careers", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  },
  {
    title: "Explore",
    links: [
      { name: "Signature Cuisines", href: "#cuisines" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Contact Support", href: "#" },
      { name: "FAQs", href: "#" }
    ]
  }
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-bg-dark border-t border-[#e2efff] pt-20 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-12 md:gap-8 mb-16 border-b border-white/5 pb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-8">
          <div className="cursor-pointer" onClick={scrollToTop}>
            <img src={logo} alt="PartyCart" className="w-40 md:w-52 h-auto object-contain brightness-0 invert" />
          </div>
          <p className="font-sans text-white/50 text-base leading-relaxed max-w-xs">
            Hyderabad's definitive platform for premium curations, home-grown culinary experts, and Khandani Bawarchis.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent-gold hover:text-accent-gold transition-colors duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((column, i) => (
          <div key={i} className="flex flex-col gap-6">
            <h4 className="font-display text-white text-lg font-bold tracking-wide uppercase">{column.title}</h4>
            <ul className="flex flex-col gap-4">
              {column.links.map((link, j) => (
                <li key={j}>
                  <a href={link.href} className="font-sans text-white/40 hover:text-accent-gold transition-colors text-[15px]">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-display text-white text-lg font-bold tracking-wide uppercase">Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="text-accent-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-white/50 text-xs leading-relaxed">Jubilee Hills, Hyderabad,<br/>Telangana 500033</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-accent-gold flex-shrink-0" />
              <a href="tel:+917396737700" className="font-sans text-white/50 hover:text-accent-gold transition-colors text-xs">+91 73967 37700</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-accent-gold flex-shrink-0" />
              <a href="mailto:hello@partycart.com" className="font-sans text-white/50 hover:text-accent-gold transition-colors text-xs">hello@partycart.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-white/30 text-[11px] tracking-widest uppercase font-bold">
        <p>© 2026 PartyCart by Yumzy. All rights reserved. | Designed for the culture of Hyderabad.</p>
        <button 
          onClick={scrollToTop} 
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-all duration-300"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

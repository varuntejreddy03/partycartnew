import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';
import logo from '../assets/partycart-logo.png';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/20 pt-16 md:pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1.5fr_1.5fr_2fr] gap-10 md:gap-12 mb-12 md:mb-16 border-b border-gold/10 pb-12 md:pb-16">
        
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-6 flex items-center">
            <img src={logo} alt="PartyCart" className="w-40 sm:w-48 h-auto object-contain" />
          </div>
          <p className="font-sans text-muted mb-8 md:pr-4">
            Hyderabad's definitive platform for premium curations, home-grown culinary experts, and Khandani Bawarchis.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-sans text-cream font-bold mb-6">Company</h4>
          <ul className="space-y-4 font-sans text-muted">
            <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Partner With Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-cream font-bold mb-6">Legal</h4>
          <ul className="space-y-4 font-sans text-muted">
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-cream font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 font-sans text-muted">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
              <span>Jubilee Hills, Hyderabad,<br/>Telangana 500033</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-gold flex-shrink-0" />
              <a href="tel:+917396737700" className="hover:text-gold transition-colors">+91 73967 37700</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-gold flex-shrink-0" />
              <a href="mailto:hello@partycart.com" className="hover:text-gold transition-colors">hello@partycart.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-muted/50 text-sm">
        <p>© {new Date().getFullYear()} PartyCart by Yumzy. All rights reserved.</p>
        <p>Designed for the culture of Hyderabad.</p>
      </div>
    </footer>
  );
}

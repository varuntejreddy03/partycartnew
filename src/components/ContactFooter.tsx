import brandData from "@/data/partycart.json";
import logo from "@/assets/partycart-logo.png";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  const contact = brandData.contact;

  return (
    <footer id="contact" className="relative pt-16 pb-8 bg-[#FFF8F0] border-t border-[#A8843A]/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="PartyCart by Yumzy" 
                className="h-16 md:h-20 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold text-[#1A1A1A] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/order" className="font-body text-sm font-medium text-[#2D2D2D] hover:text-[#A8843A] transition-colors">Browse Menu</Link></li>
              <li><a href="#how-it-works" className="font-body text-sm font-medium text-[#2D2D2D] hover:text-[#A8843A] transition-colors">How It Works</a></li>
              <li><a href="#download" className="font-body text-sm font-medium text-[#2D2D2D] hover:text-[#A8843A] transition-colors">Download App</a></li>
              <li><a href="#join-us" className="font-body text-sm font-medium text-[#2D2D2D] hover:text-[#A8843A] transition-colors">For Chefs</a></li>
              <li><a href="#contact" className="font-body text-sm font-medium text-[#2D2D2D] hover:text-[#A8843A] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-bold text-[#1A1A1A] mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm font-medium text-[#2D2D2D]">
              <li className="flex items-center gap-2">📞 {contact.phone}</li>
              <li className="flex items-center gap-2">📧 chefs@partycart.in</li>
              <li className="flex items-center gap-2">📍 Hyderabad</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl font-bold text-[#1A1A1A] mb-4">Social</h4>
            <ul className="space-y-3 font-body text-sm font-medium text-[#2D2D2D]">
              <li className="text-[#A8843A] font-semibold">#party_cart</li>
              <li>
                <a 
                  href="https://instagram.com/partycarthyderabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#A8843A] transition-colors inline-flex items-center gap-2"
                >
                  📸 Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[#A8843A]/20">
          <p className="font-body text-xs font-medium text-[#9B8560]">
            Copyright © 2026 Partycart_Houseparty_orderingapp
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

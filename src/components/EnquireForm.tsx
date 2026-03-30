import { useState } from "react";
import { toast } from "sonner";

interface EnquireFormProps {
  categoryName: string;
}

const EnquireForm = ({ categoryName }: EnquireFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi PartyCart! I'd like to order ${categoryName} for my party.\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}`;
    const url = `https://wa.me/917396737700?text=${encodeURIComponent(message)}`;
    toast.success("Opening WhatsApp... 🎉 We'll confirm your order shortly!");
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border font-body text-sm text-charcoal placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border font-body text-sm text-charcoal placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none"
      />
      <input
        type="number"
        placeholder="Number of Guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-border font-body text-sm text-charcoal placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none"
      />
      <button
        type="submit"
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light font-body font-semibold text-sm text-dark hover:shadow-lg hover:shadow-gold/20 transition-all"
        aria-label="Submit enquiry via WhatsApp"
      >
        Send via WhatsApp 💬
      </button>
    </form>
  );
};

export default EnquireForm;

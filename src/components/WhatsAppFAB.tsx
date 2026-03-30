const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/917396737700?text=Hi%20PartyCart!%20I'd%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-3xl shadow-xl transition-transform hover:scale-110"
      style={{ animation: "pulse-ring 2s infinite" }}
      aria-label="Order on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppFAB;

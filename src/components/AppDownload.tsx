import qrCode from "@/assets/p[artycart QR.jpg.jpeg";

const AppDownload = () => {
  return (
    <section id="download" className="relative py-20 bg-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(168,132,58,0.15),transparent_50%)]" />
      <div className="max-w-6xl relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          {/* QR Code */}
          <div className="flex-shrink-0 bg-white p-4 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
            <img src={qrCode} alt="Download App QR Code" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl border border-gray-100" />
            <p className="text-center mt-3 font-body text-[#1A1A1A] font-bold text-sm">Scan to Download</p>
          </div>

          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              PartyCart by Yumzy
            </h2>
            <p className="font-body text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0">
              Choose your preferred way to order
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-sm md:max-w-md mx-auto md:mx-0">
              <a
                href="https://apps.apple.com/in/app/yumzy-online-food-delivery/id1476665049"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#A8843A] font-body font-bold text-white text-center hover:bg-[#8B6A1D] transition-colors"
                aria-label="Download from App Store"
              >
                🍏 App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.yumzy.orderfood"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#A8843A] font-body font-bold text-white text-center hover:bg-[#8B6A1D] transition-colors"
                aria-label="Download from Google Play"
              >
                📱 Google Play
              </a>
              <a
                href="https://yumzy.page.link/UfaY"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg border-2 border-[#A8843A] font-body font-bold text-[#A8843A] text-center hover:bg-[#A8843A]/10 transition-colors"
                aria-label="Order on Website"
              >
                🌐 Order Online
              </a>
              <a
                href="tel:+917396737700"
                className="px-6 py-3.5 rounded-lg border-2 border-white/20 font-body font-bold text-white text-center hover:bg-white/10 transition-colors"
                aria-label="Call Now"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

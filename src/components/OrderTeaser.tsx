import { Link } from "react-router-dom";

const OrderTeaser = () => {
  return (
    <section id="cuisines" className="py-20 bg-[#FFFDF7]">
      <div className="container mx-auto px-4">
        <div className="surface-card max-w-5xl mx-auto rounded-3xl p-8 md:p-12">
          <p className="section-kicker mb-3">Order Experience</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#1A1208] mb-3 leading-[0.96]">Your Full Menu, Built for Fast Ordering</h2>
          <p className="font-body text-[#5C4A1E] text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            We moved all cuisine cards and menu items to a separate order page to keep home scrolling smooth and fast, especially on mobile devices.
          </p>
          <Link
            to="/order"
            className="inline-flex items-center px-7 py-3 rounded-full bg-[#C8920A] text-white font-body font-semibold hover:bg-[#F0C040] hover:text-[#1A1208] transition-colors"
            aria-label="Open full order menu"
          >
            Open Order Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderTeaser;

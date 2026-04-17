import Navbar from "@/components/Navbar";
import CuisineGrid from "@/components/CuisineGrid";
import EnquireForm from "@/components/EnquireForm";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="overflow-x-hidden bg-[#FFFDF7] pb-24 md:pb-0">
      <Navbar />
      <section className="pt-28 pb-10 bg-gradient-to-b from-[#fff8e8] to-[#FDF4E3]">
        <div className="container mx-auto px-4">
          <div className="surface-card max-w-6xl mx-auto rounded-3xl p-6 md:p-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
              <div>
                <p className="section-kicker mb-2">Fast Order Menu</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A1208] mb-3 leading-[0.94]">Plan Your Party Menu in Minutes</h1>
                <p className="font-body text-[#5C4A1E] max-w-2xl leading-relaxed mb-5">
                  Browse curated kitchens, share your details, and let us confirm the right food for your party.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#fff3d7] border border-[#E8C97A] px-3 py-1.5 text-xs font-body font-semibold text-[#5C4A1E]">200+ Dishes</span>
                  <span className="rounded-full bg-[#fff3d7] border border-[#E8C97A] px-3 py-1.5 text-xs font-body font-semibold text-[#5C4A1E]">Chef Verified</span>
                  <span className="rounded-full bg-[#fff3d7] border border-[#E8C97A] px-3 py-1.5 text-xs font-body font-semibold text-[#5C4A1E]">10 to 500+ Guests</span>
                </div>
              </div>
              <div className="rounded-2xl border border-[#E8C97A] bg-white p-4 md:p-5">
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-[#9B8560] mb-3">Share your details</p>
                <EnquireForm categoryName="Party Menu" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CuisineGrid />
      <footer className="bg-[#1A1208] text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-4xl mb-2">PartyCart by Yumzy</p>
          <p className="font-body text-sm text-white/70 mb-6">Order directly from our website.</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
            <a
              href="https://order.yumzy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#A8843A] text-white font-body font-bold hover:bg-[#8B6A1D]"
            >
              Order Online
            </a>
            <a
              href="https://order.yumzy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#A8843A] text-white font-body font-bold hover:bg-[#8B6A1D]"
            >
              Open Website
            </a>
            <a
              href="https://order.yumzy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#A8843A] text-[#A8843A] font-body font-bold hover:bg-[#A8843A]/10"
            >
              Order Online
            </a>
            <a
              href="tel:+917396737700"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white text-white font-body font-bold hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Order;

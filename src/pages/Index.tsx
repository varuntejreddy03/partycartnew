import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const WhatIsPartyCart = lazy(() => import("@/components/WhatIsPartyCart"));
const HowWereDifferent = lazy(() => import("@/components/HowWereDifferent"));
const WhatWeOffer = lazy(() => import("@/components/WhatWeOffer"));
const SignatureCuisines = lazy(() => import("@/components/SignatureCuisines"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Index() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-ink text-cream">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <WhatIsPartyCart />
        <HowWereDifferent />
        <WhatWeOffer />
        <SignatureCuisines />
        <HowItWorks />
        <Footer />
      </Suspense>
    </div>
  );
}

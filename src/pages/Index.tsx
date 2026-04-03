import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofToast from "@/components/SocialProofToast";
import ExitIntentBanner from "@/components/ExitIntentBanner";
import TrustBar from "@/components/TrustBar";

const BrandStory = lazy(() => import("@/components/BrandStory"));
const WhatIsPartyCart = lazy(() => import("@/components/WhatIsPartyCart"));
const AboutExperience = lazy(() => import("@/components/AboutExperience"));
const HowWereDifferent = lazy(() => import("@/components/HowWereDifferent"));
const WhatWeOffer = lazy(() => import("@/components/WhatWeOffer"));
const SignatureCuisines = lazy(() => import("@/components/SignatureCuisines"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Index() {
  return (
    <div className="min-h-screen bg-bg-primary overflow-x-hidden selection:bg-accent-gold/20 selection:text-accent-gold">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <div className="space-y-0 relative z-20">
          <Suspense fallback={<div className="min-h-screen bg-bg-primary flex items-center justify-center p-12"><div className="w-16 h-16 border-4 border-accent-gold border-t-transparent rounded-full animate-spin"></div></div>}>
            {[
              { component: <BrandStory />, id: "story" },
              { component: <WhatIsPartyCart />, id: "what-is" },
              { component: <AboutExperience />, id: "about" },
              { component: <TrustBar />, id: "trust" },
              { component: <HowWereDifferent />, id: "different" },
              { component: <WhatWeOffer />, id: "offer" },
              { component: <SignatureCuisines />, id: "cuisines" },
              { component: <HowItWorks />, id: "how-it-works" },
              { component: <CTASection />, id: "cta" }
            ].map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i % 2 === 0 ? 0 : 0.1 }}
              >
                {section.component}
              </motion.div>
            ))}
          </Suspense>
        </div>
      </main>

      <Footer />
      
      {/* CRO Elements */}
      <ExitIntentBanner />
      
    </div>
  );
}

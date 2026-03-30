import { Suspense, lazy, useEffect, useState, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Offerings = lazy(() => import("@/components/Offerings"));
const CuisineGrid = lazy(() => import("@/components/CuisineGrid"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const OurPromise = lazy(() => import("@/components/OurPromise"));
const ChefOnboarding = lazy(() => import("@/components/ChefOnboarding"));
const AppDownload = lazy(() => import("@/components/AppDownload"));
const ContactFooter = lazy(() => import("@/components/ContactFooter"));

interface DeferredSectionProps {
  children: ReactNode;
  minHeight?: number;
}

const DeferredSection = ({ children, minHeight = 420 }: DeferredSectionProps) => {
  const [rendered, setRendered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "280px 0px" });

  useEffect(() => {
    if (inView) {
      setRendered(true);
    }
  }, [inView]);

  return (
    <section ref={ref} style={rendered ? undefined : { minHeight }}>
      {rendered ? children : null}
    </section>
  );
};

const Index = () => {
  return (
    <div className="overflow-x-hidden pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <DeferredSection minHeight={760}>
        <Suspense fallback={<div className="min-h-[760px]" />}>
          <About />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={640}>
        <Suspense fallback={<div className="min-h-[640px]" />}>
          <Offerings />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={380}>
        <Suspense fallback={<div className="min-h-[380px]" />}>
          <CuisineGrid />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={620}>
        <Suspense fallback={<div className="min-h-[620px]" />}>
          <HowItWorks />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={560}>
        <Suspense fallback={<div className="min-h-[560px]" />}>
          <OurPromise />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={760}>
        <Suspense fallback={<div className="min-h-[760px]" />}>
          <ChefOnboarding />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={620}>
        <Suspense fallback={<div className="min-h-[620px]" />}>
          <AppDownload />
        </Suspense>
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <Suspense fallback={<div className="min-h-[420px]" />}>
          <ContactFooter />
        </Suspense>
      </DeferredSection>
    </div>
  );
};

export default Index;

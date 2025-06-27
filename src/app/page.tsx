"use client";
import About from "@/components/OurMission";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import WhoAreWe from "@/components/WhoAreWe";

import OurMission from "@/components/OurMission";
import HeroSection from "@/components/Trying/Hero1";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/TeamSection";
import { ProductShowcaseSection } from "@/components/ProductShowcase";

// export const metadata: Metadata = {
//   title: "Rahi Industries",
//   description: "Quality with Integrity",
// };

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <ScrollUp />
      <HeroSection />
      <div className="container mx-auto max-w-6xl py-10">
        <WhoAreWe />
      </div>
      <div className="container mx-auto max-w-6xl py-10">
        <OurMission />
      </div>
      {/* <Products /> */}
      <ProductShowcaseSection />
      {/* <Team /> */}
      <TeamSection />
      <Clients />
      <CallToAction
        buttons={[
          { name: "Download Resource", path: "/download" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
      <Contact />
    </main>
  );
}

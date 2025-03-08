"use client";
import About from "@/components/OurMission";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import WhoAreWe from "@/components/WhoAreWe";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Team from "@/components/Team";
import { Metadata } from "next";
import OurMission from "@/components/OurMission";
import HeroSection from "@/components/Trying/Hero1";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductCarousel from "@/components/ProductCarousel";
import menuData from "@/components/Header/menuData";
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
      <HeroSection />x
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

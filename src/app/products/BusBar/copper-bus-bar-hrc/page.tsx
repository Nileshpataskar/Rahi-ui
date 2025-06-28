import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Zap } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const CopperBusBarHRC: React.FC = () => {
  // Sample carousel images (replace with actual copper bus bar images)
  const carouselImages = [
    "/products/busbar/hrc/bushrc (7).png",
    "/products/busbar/hrc/bushrc (8).png",
    "/products/busbar/hrc/bushrc (6).png",
  ];

  // Updated features for Copper Bus Bar products
  const features = [
    "Electrolyte-grade copper material for excellent conductivity",
    "Various amperage ratings available",
    "Durable and corrosion-resistant construction",
    "Suitable for industrial and commercial applications",
  ];

  const busBarProducts: Product[] = [
    {
      id: "1",
      code: "HBC25",
      title: "63Amp/415V HRC Bus Bar",
      description:
        "High-performance 63Amp copper bus bar system for efficient power distribution.",
      image: "/products/busbar/hrc/bushrc (1).png",
      specifications: {
        Material: "Electrolyte-grade copper",
        Voltage: "415V",
        Type: "HRC Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Copper Bus Bar",
    },
    {
      id: "2",
      code: "HBC100",
      title: "100Amp/415V HRC Bus Bar",
      description:
        "Heavy-duty 100Amp copper bus bar for demanding power distribution needs.",
      image:
        "/products/busbar/hrc/bushrc (4).png",
      specifications: {
        Material: "Electrolyte-grade copper",
        Voltage: "415V",
        Type: "HRC Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Copper Bus Bar",
    },
    {
      id: "3",
      code: "HBC200",
      title: "200Amp/415V HRC Bus Bar",
      description:
        "Professional-grade 200Amp copper bus bar system for high-capacity power distribution.",
      image:
        "/products/busbar/hrc/bushrc (7).png",
      specifications: {
        Material: "Electrolyte-grade copper",
        Voltage: "415V",
        Type: "HRC Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Copper Bus Bar",
    },
  ];

  // Updated benefits for Copper Bus Bar products
  const benefits = [
    {
      title: "Superior Conductivity",
      description:
        "Electrolyte-grade copper ensures excellent electrical conductivity and minimal power loss.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Zap className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Reliable Performance",
      description:
        "Engineered for long-term reliability and consistent electrical distribution.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Industrial Grade",
      description:
        "Designed to meet demanding industrial and commercial power distribution requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={busBarProducts}
      heroTitle="Copper Bus Bar with HRC"
      heroDescription="High-performance copper bus bars for reliable power distribution"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default CopperBusBarHRC;

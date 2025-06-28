import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Zap } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const CopperBusBar: React.FC = () => {
  // Sample carousel images (replace with actual copper bus bar images)
  const carouselImages = [
    "/products/busbar/copper/copper (8).png",
    "/products/busbar/copper/copper (9).png",
    "/products/busbar/copper/copper (10).png",
  ];

  // Updated features for Copper Bus Bar products
  const features = [
    "High-quality copper construction",
    "415V rating for industrial applications",
    "Multiple amperage options available",
    "Robust and reliable performance",
  ];

  const busBarProducts: Product[] = [
    {
      id: "1",
      code: "BC32",
      title: "32 Amp 415v BUS Bar",
      description:
        "32 Amp copper bus bar system designed for efficient power distribution.",
      image: "/products/busbar/copper/copper (1).png",
      specifications: {
        Material: "Copper",
        "Current Rating": "32 Amp",
        Voltage: "415V",
        Type: "Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Bus Bar",
    },
    {
      id: "2",
      code: "BC63",
      title: "63 Amp 415v Bus Bar",
      description:
        "63 Amp copper bus bar for medium-duty power distribution applications.",
      image: "/products/busbar/copper/copper (2).png",
      specifications: {
        Material: "Copper",
        "Current Rating": "63 Amp",
        Voltage: "415V",
        Type: "Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Bus Bar",
    },
    {
      id: "3",
      code: "BC100",
      title: "100 Amp 415v Bus Bar",
      description:
        "100 Amp copper bus bar for heavy-duty power distribution needs.",
      image: "/products/busbar/copper/copper (3).png",
      specifications: {
        Material: "Copper",
        "Current Rating": "100 Amp",
        Voltage: "415V",
        Type: "Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Bus Bar",
    },
    {
      id: "4",
      code: "BC200",
      title: "200 Amp 415v Bus Bar",
      description:
        "200 Amp copper bus bar system for high-capacity industrial applications.",
      image: "/products/busbar/copper/copper (4).png",
      specifications: {
        Material: "Copper",
        "Current Rating": "200 Amp",
        Voltage: "415V",
        Type: "Bus Bar",
        Application: "Industrial/Commercial",
      },
      category: "Bus Bar",
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
      heroTitle="Bus Bar Systems"
      heroDescription="High-quality copper bus bars for reliable power distribution"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default CopperBusBar;

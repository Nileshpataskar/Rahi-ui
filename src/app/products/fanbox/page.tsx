import React from "react";
import ModernProductLayout from "../ModernProductLayout";
import { Product } from "../types";
import { ArrowRight, Box, Shield } from "lucide-react";

const fanboxProducts: Product[] = [
  {
    id: "1",
    code: "FBGI",
    title: "Metal Fan Box",
    description: "10 Fan Box GI (10mm Rod)",
    specifications: {
      Code: "FBGI",
      Type: "Metal Fan Box",
      Description: "10 Fan Box GI (10mm Rod)",
    },
    category: "Fan Box",
    image: "/products/fanbox/fanbox.png", // <-- Replace with your actual image path
    carouselImages: [],
  },
];

const features = [
  "High-quality GI metal construction",
  "Includes 10mm rod for secure installation",
  "Corrosion resistant finish",
  "Durable and reliable for ceiling fans",
];

const benefits = [
  {
    title: "Sturdy Build",
    description: "Ensures safe and long-lasting support for ceiling fans.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Box className="h-6 w-6" />
      </div>
    ),
  },
  {
    title: "Easy Installation",
    description: "Comes with a 10mm rod for hassle-free mounting.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
        <Shield className="h-6 w-6" />
      </div>
    ),
  },
  {
    title: "Corrosion Resistant",
    description: "GI finish protects against rust and corrosion.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <ArrowRight className="h-6 w-6" />
      </div>
    ),
  },
];

const FanBoxPage = () => {
  return (
    <ModernProductLayout
      products={fanboxProducts}
      heroTitle="Fan Box"
      heroDescription="Metal Fan Box with 10mm Rod - Durable GI Construction"
      features={features}
      benefits={benefits}
    />
  );
};

export default FanBoxPage;

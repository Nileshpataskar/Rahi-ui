import React from "react";
import { ArrowRight, Network, Shield } from "lucide-react";
import { Product } from "../../types";
import ModernProductLayout from "../../ModernProductLayout";

const DeepJunctionBox: React.FC = () => {
  const carouselImages = [
    ""
  ];

  const features = [
    "Deep design for extra wiring space",
    "Available in 20mm and 25mm sizes",
    "Durable PVC construction",
    "Standard 10-piece packaging",
  ];

  const deepJunctionBoxProducts: Product[] = [
    {
      id: "1",
      code: "DJB120",
      title: "1 Way Deep Junction Box ",
      description:
        " single way deep junction box for enhanced wiring space.",
      image: "/products/pipe_accesories/dji/img (5).png",
      specifications: {
        "Size": "20mm -25mm",
        Type: "1 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },

    {
      id: "2",
      code: "DJB225",
      title: "2 Way Deep Junction Box ",
      description: " Two way deep junction box for enhanced wiring space.",
      image: "/products/pipe_accesories/dji/img (3).png",
      specifications: {
        "Size ": "20mm - 25mm",
        Type: "2 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },
    {
      id: "3",
      code: "DJB320",
      title: "3 Way Deep Junction Box ",
      description:
        " three way deep junction box for enhanced wiring space.",
      image: "/products/pipe_accesories/dji/img (4).png",

      specifications: {
        "Size": "20mm - 25mm",
        Type: "3 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },

    {
      id: "4",
      code: "DJB420",
      title: "4 Way Deep Junction Box ",
      description: " four way deep junction box for enhanced wiring space.",
      image: "/products/pipe_accesories/dji/img (6).png",

      specifications: {
        "Size ": "20mm - 25mm",
        Type: "4 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },
  ];

  const benefits = [
    {
      title: "Extra Depth Design",
      description:
        "Deep construction provides additional space for complex wiring requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Network className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Configurations",
      description:
        "Available in 1-way, 2-way, 3-way, and 4-way options with 20mm and 25mm sizes.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Standard Packaging",
      description:
        "Conveniently packaged in sets of 10 pieces for professional use.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={deepJunctionBoxProducts}
      heroTitle="Deep Junction Box"
      heroDescription="Professional-grade deep junction boxes for enhanced wiring space"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default DeepJunctionBox;

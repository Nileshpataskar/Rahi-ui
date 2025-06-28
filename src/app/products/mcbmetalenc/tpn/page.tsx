import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const TPNMetalMCBEnclosures: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1mLpXY0Uli4yXl9Ls-9hTLO3_gusuNWO8/view?usp=drive_link",
    "https://drive.google.com/file/d/1nR0hOsVt1hRlyZ6BfT-XutX3FU4xuuBa/view?usp=drive_link"
  ];

  const features = [
    "Single door design for easy access",
    "Durable metal construction",
    "Multiple way configurations",
    "Professional grade finish",
    "Suitable for MCB Switches",
    "Superior powder Coated"

  ];

  const tpnProducts: Product[] = [
    {
      id: "1",
      code: "TPSD04",
      title: "4 Way TPN MCB Metal Enclosure Single Door",
      description: "Premium 4 way TPN metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1Q2PaKLjRwhzEYFEd4wJoISL5PbO7rxxN/view?usp=drive_link",
      specifications: {
        Model: "4 Way",
        Type: "TPN Metal Enclosure",
        Code: "TPSD04",
        Application: "MCB installation"
      },
      category: "TPN Metal MCB Enclosure"
    },
    {
      id: "2",
      code: "TPSD06",
      title: "6 Way TPN MCB Metal Enclosure Single Door",
      description: "Premium 6 way TPN metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1mLpXY0Uli4yXl9Ls-9hTLO3_gusuNWO8/view?usp=drive_link",
      specifications: {
        Model: "6 Way",
        Type: "TPN Metal Enclosure",
        Code: "TPSD06",
        Application: "MCB installation"
      },
      category: "TPN Metal MCB Enclosure"
    },
    {
      id: "3",
      code: "TPSD08",
      title: "8 Way TPN MCB Metal Enclosure Single Door",
      description: "Premium 8 way TPN metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/18gKB72wDGm8oYpfKwc-awZvtzUq6Y9G1/view?usp=drive_link",
      specifications: {
        Model: "8 Way",
        Type: "TPN Metal Enclosure",
        Code: "TPSD08",
        Application: "MCB installation"
      },
      category: "TPN Metal MCB Enclosure"
    },
    {
      id: "4",
      code: "TPSD12",
      title: "12 Way TPN MCB Metal Enclosure Single Door",
      description: "Premium 12 way TPN metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1nR0hOsVt1hRlyZ6BfT-XutX3FU4xuuBa/view?usp=drive_link",
      specifications: {
        Model: "12 Way",
        Type: "TPN Metal Enclosure",
        Code: "TPSD12",
        Application: "MCB installation"
      },
      category: "TPN Metal MCB Enclosure"
    }
  ];

  const benefits = [
    {
      title: "Durable Construction",
      description: "Made from high-quality metal for long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Flexible Configurations",
      description: "Available in 4, 6, 8, and 12 way configurations to suit various installation needs.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Design",
      description: "Designed for easy installation and professional-grade finishes.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={tpnProducts}
      heroTitle="TPN Metal MCB Enclosures"
      heroDescription="High-quality metal enclosures available in multiple sizes for MCBs"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default TPNMetalMCBEnclosures;

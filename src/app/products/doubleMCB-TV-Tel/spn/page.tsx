import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const SPNDoubleDoorTVTelBox: React.FC = () => {

  const carouselImages: string[] = [];

  const features = [
    "Integrated TV and Telephone compartments",
    "Double door design",
    "Prime series premium quality",
    "Multiple way configurations",
    "Professional grade finish",
    "Superior Powder Coated"
  ];

  const spnProducts: Product[] = [
    {
      id: "1",
      code: "PMSPN08TV-TEL",
      title: "8 way SPN Double Door MCB Box With TV-TEL",
      description:
        "Premium 8 way Single Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "/products/tvtel/tv (1).png",
      specifications: {
        Type: "SPN Double Door with TV-TEL",
        Ways: "8",
        Series: "Prime",
        Code: "PMSPN08TV-TEL",
        "Additional Features": "TV and Telephone compartments",
        Application: "MCB distribution with media connections"
      },
      carouselImages: [
        "/products/tvtel/tv (8).png"
      ],
      category: "SPN Double Door MCB Box with TV-TEL"
    },
    {
      id: "2",
      code: "PMSPN12TV-TEL",
      title: "12 way TPN Double Door MCB Box With TV-TEL",
      description:
        "Premium 12 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "/products/tvtel/tv (9).png",
      carouselImages: [
        "/products/tvtel/tv (10).png"
      ],
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "12",
        Series: "Prime",
        Code: "PMSPN12TV-TEL",
        "Additional Features": "TV and Telephone compartments",
        Application: "MCB distribution with media connections"
      },
      category: "TPN Double Door MCB Box with TV-TEL"
    },
    {
      id: "3",
      code: "PMSPN16TV-TEL",
      title: "16 way TPN Double Door MCB Box with TV-TEL",
      description:
        "Premium 16 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "/products/tvtel/tv (12).png",
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "16",
        Series: "Prime",
        "Additional Features": "TV and Telephone compartments",
        Code: "PMSPN16TV-TEL",
        Application: "MCB distribution with media connections"
      },
      carouselImages: [
        "/products/tvtel/tv (13).png"
      ],
      category: "TPN Double Door MCB Box with TV-TEL"
    }
  ];

  const benefits = [
    {
      title: "Integrated Media Connections",
      description: "Built-in TV and Telephone compartments for organized media connectivity.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Flexible Configuration",
      description: "Available in 8, 12, and 16 way configurations to suit various installation requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Series",
      description: "Part of the Prime series, featuring double door design and premium construction quality.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={spnProducts}
      heroTitle="SPN MCB Box With TV-TEL"
      heroDescription="Professional-grade MCB distribution boxes with integrated TV and Telephone compartments"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SPNDoubleDoorTVTelBox;

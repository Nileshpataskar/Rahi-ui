import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const TPNPrimeDoubleDoorBox: React.FC = () => {
  const carouselImages = [
    "/products/doublemcb/tpn/tpn (5).webp",
    "/products/doublemcb/tpn/tpn (7).webp",
    "/products/doublemcb/tpn/tpn (8).webp",
  ];

  const features = [
    "Premium Prime series quality",
    "Three Phase Neutral design",
    "Double door configuration",
    "Multiple way options",
    "Professional grade finish",
    "Superior Powder Coated"
  ];

  const tpnProducts: Product[] = [
    {
      id: "1",
      code: "PMTPN04",
      title: "4 way TPN Prime Series Double Door MCB Box",
      description:
        "Premium 4 way Three Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "/products/doublemcb/tpn/tpn (4).webp",
      specifications: {
        Type: "TPN Double Door",
        Ways: "4",
        Series: "Prime",
        Code: "PMTPN04",
        Application: "Three Phase distribution",
      },
      category: "TPN Prime Double Door Box",
    },
    {
      id: "2",
      code: "PMTPN06",
      title: "6 way TPN Prime Series Double Door MCB Box",
      description:
        "Premium 6 way Three Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "/products/doublemcb/tpn/tpn (4).webp",

      specifications: {
        Type: "TPN Double Door",
        Ways: "6",
        Series: "Prime",
        Code: "PMTPN06",
        Application: "Three Phase distribution",
      },
      category: "TPN Prime Double Door Box",
    },
    {
      id: "3",
      code: "PMTPN08",
      title: "8 way TPN Prime Series Double Door MCB Box",
      description:
        "Premium 8 way Three Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "/products/doublemcb/tpn/tpn (4).webp",

      specifications: {
        Type: "TPN Double Door",
        Ways: "8",
        Series: "Prime",
        Code: "PMTPN08",
        Application: "Three Phase distribution",
      },
      category: "TPN Prime Double Door Box",
    },
    {
      id: "4",
      code: "PMTPN12",
      title: "12 way TPN Prime Series Double Door MCB Box",
      description:
        "Premium 12 way Three Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "/products/doublemcb/tpn/tpn (4).webp",

      specifications: {
        Type: "TPN Double Door",
        Ways: "12",
        Series: "Prime",
        Code: "PMTPN12",
        Application: "Three Phase distribution",
      },
      category: "TPN Prime Double Door Box",
    },
  ];

  const benefits = [
    {
      title: "Premium Three Phase Design",
      description:
        "Prime series quality specifically designed for three phase electrical distribution systems.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Configurations",
      description:
        "Available in 4, 6, 8, and 12 way configurations for various installation needs.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Prime Series Excellence",
      description:
        "Premium construction and finish with double door design for superior access.",
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
      heroTitle="TPN Prime Series Double Door MCB Box"
      heroDescription="Premium-grade Three Phase Neutral MCB distribution boxes with double door design"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default TPNPrimeDoubleDoorBox;

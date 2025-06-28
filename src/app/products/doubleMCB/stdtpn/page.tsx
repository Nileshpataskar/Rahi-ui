import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const TPNDoubleDoorBox: React.FC = () => {
  const carouselImages = [
    "/products/doublemcb/stdtpn/tpn (5).webp",
    "/products/doublemcb/stdtpn/tpn (6).webp",
    "/products/doublemcb/stdtpn/tpn (7).webp",
  ];

  const features = [
    "Three Phase Neutral design",
    "Double door configuration",
    "Multiple way options",
    "Durable construction",
    "Professional finish",
    "Superior Powder Coated"
  ];

  const tpnProducts: Product[] = [
    {
      id: "1",
      code: "TPDD04",
      title: "4 way TPN DD",
      description:
        "4 way Three Phase Neutral Double Door MCB distribution box from Standard series.",
      image: "/products/doublemcb/stdtpn/tpn (1).webp",
      specifications: {
        Type: "TPN Double Door",
        Ways: "4",
        Series: "Standard",
        Code: "TPDD04",
        Application: "Three Phase distribution",
      },
      category: "TPN Double Door Box",
    },
    {
      id: "2",
      code: "TPDD06",
      title: "6 way TPN DD",
      description:
        "6 way Three Phase Neutral Double Door MCB distribution box from Standard series.",
      image: "/products/doublemcb/stdtpn/tpn (3).webp",

      specifications: {
        Type: "TPN Double Door",
        Ways: "6",
        Series: "Standard",
        Code: "TPDD06",
        Application: "Three Phase distribution",
      },
      category: "TPN Double Door Box",
    },
    {
      id: "3",
      code: "TPDD08",
      title: "8 way TPN DD",
      description:
        "8 way Three Phase Neutral Double Door MCB distribution box from Standard series.",
      image: "/products/doublemcb/stdtpn/tpn (4).webp",

      specifications: {
        Type: "TPN Double Door",
        Ways: "8",
        Series: "Standard",
        Code: "TPDD08",
        Application: "Three Phase distribution",
      },
      category: "TPN Double Door Box",
    },
    {
      id: "4",
      code: "TPDD12",
      title: "12 way TPN DD",
      description:
        "12 way Three Phase Neutral Double Door MCB distribution box from Standard series.",
      image: "/products/doublemcb/stdtpn/tpn (5).webp",
      specifications: {
        Type: "TPN Double Door",
        Ways: "12",
        Series: "Standard",
        Code: "TPDD12",
        Application: "Three Phase distribution",
      },
      category: "TPN Double Door Box",
    },
  ];

  const benefits = [
    {
      title: "Three Phase Design",
      description:
        "Specifically designed for three phase electrical distribution systems.",
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
      title: "Easy Access",
      description:
        "Double door design provides convenient access for installation and maintenance.",
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
      heroTitle="TPN Double Door Box"
      heroDescription="Standard series Three Phase Neutral distribution boxes with double door design"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default TPNDoubleDoorBox;

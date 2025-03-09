import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const SPNDoubleDoorBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1OL6WNx_jmTa0rkYxso1XIZq5-qu_ExEF/view?usp=drive_link",
    "https://drive.google.com/file/d/1-nOoESdsfjPLFbyHhKcWvCU1ENZnwbtM/view?usp=drive_link",
  ];

  const features = [
    "Double door design",
    "Prime series premium quality",
    "Multiple way configurations",
    "Durable construction",
    "Professional grade finish"
  ];

  const spnProducts: Product[] = [
    {
      id: "1",
      code: "ME06",
      title: "6/8 way SPN Double Door MCB Box Prime series",
      description: 
        "Premium 6/8 way Single Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "https://drive.google.com/file/d/14FpjiiigyoRqVl7uSIUpQlVw2rBMD6dL/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "6/8",
        Series: "Prime",
        Code: "ME06",
        Application: "MCB distribution"
      },
      category: "SPN Double Door MCB Box"
    },
    {
      id: "2",
      code: "ME08",
      title: "10/12 way SPN Double Door MCB Box Prime series",
      description: 
        "Premium 10/12 way Single Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "https://drive.google.com/file/d/1IrLFw6nKdjk3Q08U14r8cMNlCdoIz9r7/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "10/12",
        Series: "Prime",
        Code: "ME08",
        Application: "MCB distribution"
      },
      category: "SPN Double Door MCB Box"
    },
    {
      id: "3",
      code: "ME10",
      title: "14/16 way SPN Double Door MCB Box Prime series",
      description: 
        "Premium 14/16 way Single Phase Neutral Double Door MCB distribution box from Prime series.",
      image: "https://drive.google.com/file/d/17sM0fPJywp1aloTjomV1ESG5pOq3WOcS/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "14/16",
        Series: "Prime",
        Code: "ME10",
        Application: "MCB distribution"
      },
      category: "SPN Double Door MCB Box"
    }
  ];

  const benefits = [
    {
      title: "Premium Design",
      description: "Double door design from Prime series offering superior access and professional installation.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Flexible Configuration",
      description: "Available in 6/8, 10/12, and 14/16 way configurations for various installation needs.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Series",
      description: "Part of the Prime series, ensuring high-quality construction and reliable performance.",
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
      heroTitle="SPN Double Door MCB Box Prime Series"
      heroDescription="Professional-grade Single Phase Neutral MCB distribution boxes with double door design"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SPNDoubleDoorBox;

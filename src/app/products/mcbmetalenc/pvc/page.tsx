import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const PVCMCBBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1uHScU8-zSSl1oL6nKUSD1O0ugVOzTsbx/view?usp=drive_link",
    "https://drive.google.com/file/d/1XSs562gaTL-4e7N8a4xVVV_rZEoU-y-a/view?usp=drive_link"
  ];

  const features = [
    "Metal back for enhanced durability",
    "Multiple way configurations",
    "Professional grade finish",
    "Easy installation",
    "Suitable for modular switches"
  ];

  const pvcProducts: Product[] = [
    {
      id: "1",
      code: "MB01",
      title: "1/2 way PVC MCB Box",
      description: "Premium 1/2 way PVC MCB box with metal back designed for modular switches.",
      image: "https://drive.google.com/file/d/18LrFm75B_j59MsE9OQrDdpPUJUHZreJP/view?usp=drive_link",
      specifications: {
        Model: "1/2 way",
        Type: "PVC MCB Box with Metal Back",
        Code: "MB01",
        Application: "Modular switch mounting"
      },
      category: "PVC MCB Box"
    },
    {
      id: "2",
      code: "MB03",
      title: "3/4 way PVC MCB Box",
      description: "Premium 3/4 way PVC MCB box with metal back designed for modular switches.",
      image: "https://drive.google.com/file/d/16tJIsndPx_6DExE0PABvFfHNXyk4FqIB/view?usp=drive_link",
      specifications: {
        Model: "3/4 way",
        Type: "PVC MCB Box with Metal Back",
        Code: "MB03",
        Application: "Modular switch mounting"
      },
      category: "PVC MCB Box"
    }
  ];

  const benefits = [
    {
      title: "Durable Construction",
      description: "Made from high-quality PVC with a metal back for long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Flexible Configurations",
      description: "Available in 1/2 way and 3/4 way configurations to suit various installation needs.",
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
      products={pvcProducts}
      heroTitle="PVC MCB Box With Metal Back"
      heroDescription="High-quality PVC MCB boxes with metal back available in multiple sizes for modular switches"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default PVCMCBBox;

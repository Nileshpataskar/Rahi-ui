import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const ABSMCBBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1q2vWYfodskjqYl6P4r9diILcIiX3kclo/view?usp=drive_link"
  ];

  const features = [
    "Double door design",
    "Durable ABS material",
    "Multiple way configurations",
    "Professional grade finish",
    "Easy installation"
  ];

  const absProducts: Product[] = [
    {
      id: "1",
      code: "P002",
      title: "1/2 way ABS MCB Box",
      description: "Premium 1/2 way ABS MCB box designed for modular switches.",
      image: "https://drive.google.com/file/d/1bfHDN8mbwwzrKHs1wBN2omM3WRkQK0zz/view?usp=drive_link",
      specifications: {
        Model: "1/2 way",
        Type: "ABS MCB Box",
        Code: "P002",
        Application: "Modular switch mounting"
      },
      category: "ABS MCB Box"
    },
    {
      id: "2",
      code: "P004",
      title: "3/4 way ABS MCB Box",
      description: "Premium 3/4 way ABS MCB box designed for modular switches.",
      image: "https://drive.google.com/file/d/1sG0MOU6B07XmuW9eIuPR24jJxb5f1nvK/view?usp=drive_link",
      specifications: {
        Model: "3/4 way",
        Type: "ABS MCB Box",
        Code: "P004",
        Application: "Modular switch mounting"
      },
      category: "ABS MCB Box"
    }
  ];

  const benefits = [
    {
      title: "Durable Construction",
      description: "Made from high-quality ABS material for long-lasting performance.",
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
      products={absProducts}
      heroTitle="ABS Double Door MCB Box"
      heroDescription="High-quality ABS MCB boxes available in multiple sizes for modular switches"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default ABSMCBBox;

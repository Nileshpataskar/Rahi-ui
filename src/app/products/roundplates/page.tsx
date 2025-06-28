import React from "react";
import { ArrowRight, Shield, Circle } from "lucide-react";
import ModernProductLayout from "../ModernProductLayout";
import { Product } from "../types";

const RoundPlates: React.FC = () => {
  // Sample carousel images (replace with actual round plate images)
  const carouselImages = [
    "/products/plate/plate (4).png",
    "/products/plate/plate (5).png",
  ];

  // Updated features for Round Plates products
  const features = [
    "Precision-engineered round plates",
    "Multiple size options available",
    "Standard packing quantities",
    "Durable construction for long-lasting use",
  ];

  const roundPlateProducts: Product[] = [
    {
      id: "1",
      code: "RP04",
      title: "4.25 inch Round Plate",
      description:
        "4.25 inch round plate perfect for standard electrical installations.",
      image: "/products/plate/plate (1).png",

      specifications: {
        Size: "4.25 inch",
        Type: "Round Plate",
        "Standard Packing": "100nos",
        Material: "High-quality material",
        Application: "Electrical installations",
      },
      category: "Round Plate",
    },
    {
      id: "2",
      code: "RP05",
      title: "5 inch Round Plate",
      description:
        "5 inch round plate suitable for various electrical applications.",
      image: "/products/plate/plate (3).png",

      specifications: {
        Size: "5 inch",
        Type: "Round Plate",
        "Standard Packing": "100nos",
        Material: "High-quality material",
        Application: "Electrical installations",
      },
      category: "Round Plate",
    },
    {
      id: "3",
      code: "RP06",
      title: "6 inch Fan Plate",
      description:
        "6 inch fan plate specifically designed for ceiling fan installations.",
      image: "/products/plate/plate (5).png",
      specifications: {
        Size: "6 inch",
        Type: "Fan Plate",
        "Standard Packing": "50nos",
        Material: "High-quality material",
        Application: "Fan installations",
      },
      category: "Round Plate",
    },
  ];

  // Updated benefits for Round Plates products
  const benefits = [
    {
      title: "Versatile Sizing",
      description:
        "Available in multiple sizes to suit different installation requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Circle className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Easy Installation",
      description:
        "Designed for straightforward installation and secure mounting.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Bulk Packaging",
      description:
        "Conveniently packaged in standard quantities for professional use.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={roundPlateProducts}
      heroTitle="Round Plates"
      heroDescription="High-quality round plates for electrical and fan installations"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default RoundPlates;

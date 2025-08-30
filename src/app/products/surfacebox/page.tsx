import React from "react";
import { Product } from "../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../ModernProductLayout";

const SurfaceBox: React.FC = () => {
  // const carouselImages = [
  //   "https://drive.google.com/file/d/16N4tpv9DK032C-djRf2xWKV0Z1lPZ2wZ/view?usp=drive_link"
  // ];

  const features = [
    "Double wall construction",
    "Multiple model configurations",
    "Premium surface finish",
    "Durable material",
    "Professional installation ready"
  ];

  const surfaceBoxProducts: Product[] = [
    {
      id: "1",
      code: "SB01",
      title: "1/2 Model Surface Box",
      description: "Premium 1 or 2 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/IMG_7308.png",
      specifications: {
        Model: "1/2 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "20 pieces",
        Code: "SB01",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },
    {
      id: "2",
      code: "SB03",
      title: "3 Model Surface Box",
      description: "Premium 3 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/IMG_7308.png",
      specifications: {
        Model: "3 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "20 pieces",
        Code: "SB03",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },
    {
      id: "3",
      code: "SB04",
      title: "4 Model Surface Box",
      description: "Premium 4 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/IMG_7310.png",
      carouselImages: [
        "/products/surfaceBox/img_7311.png"
      ],
      specifications: {
        Model: "4 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "20 pieces",
        Code: "SB04",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },
    {
      id: "4",
      code: "SB06",
      title: "6 Model Surface Box",
      description: "Premium 6 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/img_7313.png",
      carouselImages: [
        "/products/surfaceBox/img_7314.png"
      ],
      specifications: {
        Model: "6 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "10 pieces",
        Code: "SB06",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },

    {
      id: "6",
      code: "SB08",
      title: "8 Model SQ Surface Box",
      description: "Premium 8 model square double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/img_7316.png",
      carouselImages: [
        "/products/surfaceBox/img_7319.png"
      ],
      specifications: {
        Model: "8 Model SQ",
        Type: "Double Wall Surface Box",
        "Standard Packing": "10 pieces",
        Code: "SB08",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },
    {
      id: "7",
      code: "SB12",
      title: "12 Model Surface Box",
      description: "Premium 12 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/img_7320.png",
      carouselImages: [
        "/products/surfaceBox/img_7321.png"
      ],
      specifications: {
        Model: "12 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "10 pieces",
        Code: "SB12",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    },
    {
      id: "8",
      code: "SB18",
      title: "18 Model Surface Box",
      description: "Premium 18 model double wall surface box for MCB Switches.",
      image: "/products/surfaceBox/img_7324.png",
      carouselImages: [
        "/products/surfaceBox/img_7325.png"
      ],
      specifications: {
        Model: "18 Model",
        Type: "Double Wall Surface Box",
        "Standard Packing": "5 pieces",
        Code: "SB18",
        Application: "MCB Mounting"
      },
      category: "Surface Box"
    }
  ];

  const benefits = [
    {
      title: "Double Wall Construction",
      description: "Enhanced durability and protection with double wall design.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Configurations",
      description: "Available in various models from 1/2 to 18 modules, including horizontal and square options.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Installation",
      description: "Designed for easy and professional modular switch installation.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={surfaceBoxProducts}
      heroTitle="Modular Double Wall Surface Box"
      heroDescription="Premium quality surface boxes for MCB Switches with double wall construction"
      // carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SurfaceBox;

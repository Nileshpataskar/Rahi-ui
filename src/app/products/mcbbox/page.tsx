import React from "react";

import { Shield, ArrowRight } from "lucide-react";
import ModernProductLayout from "../ModernProductLayout";
import { Product } from "../types";

const MCBBoxPage: React.FC = () => {
  // Sample carousel images
  // const carouselImages = [
  //   "https://drive.google.com/file/d/167GAi30TTh9CP0HiWKKaVvzyt00diIgB/view?usp=drive_link",
  //   "https://drive.google.com/file/d/1hzrSI3reJWCbI4dHiPjavmgn_R7UVgKA/view?usp=drive_link",
  //   "https://drive.google.com/file/d/1f479cPdl2IzSLAPyWNRzo-riR-jHOVib/view?usp=drive_link",
  // ];
  const carouselImages = [
    "/products/abs/abs (4).png",
    "/products/abs/abs (5).png",
    "/products/abs/abs (6).png",
  ];

  // Custom features for MCB Box productsA
  const features = [
    "Flame retardant ABS material for enhanced safety",
    "IP54 protection rating for dust and water resistance",
    "Shock-proof and impact-resistant design",
  ];

  const mcbBoxSingleProducts: Product[] = [
    {
      id: "1",
      code: "PD04",
      title: " 2/4 way ABS Door MCB Box",
      description:
        "Durable 4 way single-phase MCB box with ABS door for residential use.",
      image: "/products/abs/abs (1).png",
      specifications: {
        Material: "ABS Plastic",
        Ways: "4",
        "Door Type": "ABS Door",
        "Protection Rating": "IP54",
        Mounting: "Surface",
        Dimensions: "200 x 150 x 80 mm",
      },
      category: "ABS Door MCB Box",
    },
    {
      id: "2",
      code: "PD06",
      title: "6/8 Way ABS Door MCB Box",
      description:
        "Medium-sized 8 way single-phase MCB box for residential and small commercial applications.",
      image: "/products/abs/abs (2).png",
      specifications: {
        Material: "ABS Plastic",
        Ways: "8",
        "Door Type": "ABS Door",
        "Protection Rating": "IP54",
        Mounting: "Surface",
        Dimensions: "280 x 200 x 80 mm",
      },
      category: "ABS Door MCB Box",
    },
    {
      id: "3",
      code: "PD10",
      title: "10/12 Way ABS Door MCB Box",
      description:
        "Large capacity 12 way single-phase MCB box for commercial applications.",
      image: "/products/abs/abs (3).png",
      specifications: {
        Material: "ABS Plastic",
        Ways: "12",
        "Door Type": "ABS Door",
        "Protection Rating": "IP54",
        Mounting: "Surface",
        Dimensions: "350 x 250 x 100 mm",
      },
      category: "ABS Door MCB Box",
    },
  ];
  // Custom benefits for MCB Box products
  const benefits = [
    {
      title: "Superior Protection",
      description:
        "Our MCB boxes provide excellent protection for electrical circuits, ensuring safety and reliability.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Durability",
      description:
        "Made from high-quality materials that withstand harsh conditions and provide long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Versatile Applications",
      description:
        "Suitable for residential, commercial, and industrial applications with various configuration options.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={mcbBoxSingleProducts}
      heroTitle="ABS Door MCB Box"
      heroDescription="Premium quality electrical distribution boxes designed for safety and reliability"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default MCBBoxPage;

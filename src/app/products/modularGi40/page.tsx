import React from "react";
import { ArrowRight, Shield, Box } from "lucide-react";
import { Product } from "../types";
import ModernProductLayout from "../ModernProductLayout";

const ModularGIBox: React.FC = () => {
  const features = [
    "Multiple model configurations",
    "Four thickness series available",
    "Premium 120 GSM GI metal used",
    "40 mm Depth - suitable for MIVAN construction type",
    "Durable and reliable",
  ];

  const metalBoxProducts: Product[] = [
    {
      id: "1",
      code: "",
      title: "1/2 Model GI Metal Box",
      description:
        "Modular GI Metal Box available in Diamond (1.20mm), Platinum (1.00mm)",
      image: "/products/modular_gi/img_7268.png",
      carouselImages: [
        "/products/modular_gi/img_7270.png"
      ],
      specifications: {
        Model: "1/2 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "2",
      code: "",
      title: "3 Model GI Metal Box",
      description:
        "3 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7268.png",
      carouselImages: [
        "/products/modular_gi/img_7270.png"
      ],
      specifications: {
        Model: "3 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "3",
      code: "",
      title: "4 Model GI Metal Box",
      description:
        "4 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7275.png",
      carouselImages: [],
      specifications: {
        Model: "4 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "4",
      code: "",
      title: "6 Model GI Metal Box",
      description:
        "6 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7276.png",
      carouselImages: [
        "/products/modular_gi/img_7278.png"
      ],
      specifications: {
        Model: "6 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "5",
      code: "",
      title: "8 Model HZ GI Metal Box",
      description:
        "8 Model Horizontal Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7279.png",
      carouselImages: [
        "/products/modular_gi/img_7280.png"
      ],
      specifications: {
        Model: "8 Model HZ",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "6",
      code: "",
      title: "8 Model SQ GI Metal Box",
      description:
        "8 Model Square Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7279.png",
      carouselImages: [
        "/products/modular_gi/img_7280.png"
      ],
      specifications: {
        Model: "8 Model SQ",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "7",
      code: "",
      title: "9 Model GI Metal Box",
      description:
        "9 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7302.png",
      carouselImages: [
        "/products/modular_gi/img_7305.png"
      ],
      specifications: {
        Model: "9 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "8",
      code: "",
      title: "12 Model GI Metal Box",
      description:
        "12 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7302.png",
      carouselImages: [
        "/products/modular_gi/img_7305.png"
      ],
      specifications: {
        Model: "12 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "9",
      code: "",
      title: "16 Model GI Metal Box",
      description:
        "16 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7302.png",
      carouselImages: [
        "/products/modular_gi/img_7305.png"
      ],
      specifications: {
        Model: "16 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "10",
      code: "",
      title: "18 Model GI Metal Box",
      description:
        "18 Model Modular GI Metal Box with multiple thickness options.",
      image: "/products/modular_gi/img_7302.png",
      carouselImages: [
        "/products/modular_gi/img_7305.png"
      ],
      specifications: {
        Model: "18 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
      },
      category: "Modular GI Metal Box",
    },
  ];

  const benefits = [
    {
      title: "Multiple Series",
      description:
        "Available in Diamond (1.20mm), Platinum (1.00mm) thickness options.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Versatile Models",
      description:
        "Wide range of models from 1/2 to 18 models, including horizontal and square configurations.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Premium Quality",
      description:
        "Made with high-quality GI metal for durability and long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={metalBoxProducts}
      heroTitle="Modular GI Metal Box - 40 mm Depth MIVAN Construction"
      heroDescription="Premium quality metal boxes available in multiple models and thickness series"
      features={features}
      benefits={benefits}
    />
  );
};

export default ModularGIBox;

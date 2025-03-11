import React from "react";
import { ArrowRight, Shield, Box } from "lucide-react";
import { Product } from "../types";
import ModernProductLayout from "../ModernProductLayout";

const ModularGIBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",
    "https://drive.google.com/file/d/1gS6ZD3ldPaAzeVdVx0RafvC2iXTdh5Dq/view?usp=drive_link",
    "",
  ];

  const features = [
    "Multiple model configurations",
    "Four thickness series available",
    "Premium GI metal construction",
    "Professional finish",
    "Durable and reliable design",
  ];

  const metalBoxProducts: Product[] = [
    {
      id: "1",
      code: "MB12",
      title: "1/2 Model GI Metal Box",
      description:
        "Modular GI Metal Box available in Diamond (1.20mm), Platinum (1.00mm), Gold (0.80mm), and Silver (0.70mm) series.",
      image:
        "https://drive.google.com/file/d/101dOOjHf-pJsrr21FeG5iWbmfckIuOL0/view?usp=drive_link",
      specifications: {
        Model: "1/2 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "2",
      code: "MB3",
      title: "3 Model GI Metal Box",
      description:
        "3 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/1Y2Xp4ps3FYsSXYha7R62iMAHTkHgz-mW/view?usp=drive_link",
      specifications: {
        Model: "3 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "3",
      code: "MB4",
      title: "4 Model GI Metal Box",
      description:
        "4 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/1YqER7HRn9vK7j2dbFUtBUA5AwWMrVoVt/view?usp=drive_link",
      specifications: {
        Model: "4 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    // Continue with other models...
    {
      id: "4",
      code: "MB6",
      title: "6 Model GI Metal Box",
      description:
        "6 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/1i4SXtXP6QQAHWhqPWxcls8ukuziC8yXq/view?usp=drive_link",
      specifications: {
        Model: "6 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "5",
      code: "MB8HZ",
      title: "8 Model HZ GI Metal Box",
      description:
        "8 Model Horizontal Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",
      specifications: {
        Model: "8 Model HZ",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "6",
      code: "MB8SQ",
      title: "8 Model SQ GI Metal Box",
      description:
        "8 Model Square Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",
      specifications: {
        Model: "8 Model SQ",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "7",
      code: "MB9",
      title: "9 Model GI Metal Box",
      description:
        "9 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",
      specifications: {
        Model: "9 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "8",
      code: "MB12",
      title: "12 Model GI Metal Box",
      description:
        "12 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",
      specifications: {
        Model: "12 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "9",
      code: "MB16",
      title: "16 Model GI Metal Box",
      description:
        "16 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",

      specifications: {
        Model: "16 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
    {
      id: "10",
      code: "MB18",
      title: "18 Model GI Metal Box",
      description:
        "18 Model Modular GI Metal Box with multiple thickness options.",
      image:
        "https://drive.google.com/file/d/15nLvs0bNmDKA6T8RBBNmJAO4qz8QWkn8/view?usp=drive_link",

      specifications: {
        Model: "18 Model",
        "Diamond Series": "1.20mm",
        "Platinum Series": "1.00mm",
        "Gold Series": "0.80mm",
        "Silver Series": "0.70mm",
      },
      category: "Modular GI Metal Box",
    },
  ];

  const benefits = [
    {
      title: "Multiple Series",
      description:
        "Available in Diamond (1.20mm), Platinum (1.00mm), Gold (0.80mm), and Silver (0.70mm) thickness options.",
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
      heroTitle="Modular GI Metal Box"
      heroDescription="Premium quality metal boxes available in multiple models and thickness series"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default ModularGIBox;

import React from "react";
import { ArrowRight, Network, Shield } from "lucide-react";
import { Product } from "../../types";
import ModernProductLayout from "../../ModernProductLayout";

const JunctionBox: React.FC = () => {
  const carouselImages = [
    ""
  ];

  const features = [
    "Multiple way configurations",
    "Available in 20mm and 25mm sizes",
    "Durable PVC construction",
    "Easy installation and access",
    "Secure cable management",
  ];

  const junctionBoxProducts: Product[] = [
    {
      id: "1",
      code: "JB120",
      title: "1 Way Junction Box ",
      description: "Single way junction box conduit connections.",
      image: "/products/pipe_accesories/jb/img (2).png",

      specifications: {
        Size: "20mm - 25mm",
        Type: "1 Way",
        "Standard Packing": "20 pieces",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Junction Box",
    },

    {
      id: "2",
      code: "JB220",
      title: "2 Way Junction Box ",
      description: "Two way junction box conduit connections.",
      image: "/products/pipe_accesories/jb/img (1).png",
      specifications: {
        Size: "20mm - 25mm",
        Type: "2 Way",
        "Standard Packing": "20 pieces",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Junction Box",
    },

    {
      id: "3",
      code: "JB320",
      title: "3 Way Junction Box ",
      description: "Three way junction box conduit connections.",
      image: "/products/pipe_accesories/jb/img (5).png",
      specifications: {
        Size: "20mm - 25mm",
        Type: "3 Way",
        "Standard Packing": "20 pieces",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Junction Box",
    },

    {
      id: "7",
      code: "JB420",
      title: "4 Way Junction Box ",
      description: "Four way junction box conduit connections.",
      image: "/products/pipe_accesories/jb/img (4).png",
      specifications: {
        Size: "20mm -25mm",
        Type: "4 Way",
        "Standard Packing": "20 pieces",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Junction Box",
    },
  ];

  const benefits = [
    {
      title: "Versatile Configuration",
      description:
        "Available in 1-way, 2-way, 3-way, and 4-way configurations for various installation needs.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Network className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Quality Construction",
      description:
        "Made from durable PVC material ensuring long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Packaging",
      description:
        "Standard packaging of 20 pieces per box for convenient handling.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={junctionBoxProducts}
      heroTitle="Junction Box"
      heroDescription="High-quality PVC junction boxes for electrical installations"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default JunctionBox;

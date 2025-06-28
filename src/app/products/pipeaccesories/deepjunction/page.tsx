import React from "react";
import { ArrowRight, Network, Shield } from "lucide-react";
import { Product } from "../../types";
import ModernProductLayout from "../../ModernProductLayout";

const DeepJunctionBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1GGli3f8BVUPJD5kc0glSnY2aXSaY6QFN/view?usp=drive_link",
    "https://drive.google.com/file/d/1c8HaT3fzoFmvp4gOvU2mQdGR1Fow76Fl/view?usp=drive_link",
    "https://drive.google.com/file/d/1kbXeWYDkDURv51vqy8dRmKZjLfATcUf4/view?usp=drive_link",
  ];

  const features = [
    "Deep design for extra wiring space",
    "Available in 20mm and 25mm sizes",
    "Durable PVC construction",
    "Standard 10-piece packaging",
  ];

  const deepJunctionBoxProducts: Product[] = [
    {
      id: "1",
      code: "DJB120",
      title: "1 Way Deep Junction Box ",
      description:
        " single way deep junction box for enhanced wiring space.",
      image:
        "https://drive.google.com/file/d/1B69YT9xmra9H8mbobIgj12GiF-9nO7Tb/view?usp=drive_link",
      specifications: {
        "Size": "20mm -25mm",
        Type: "1 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },

    {
      id: "2",
      code: "DJB225",
      title: "2 Way Deep Junction Box ",
      description: " Two way deep junction box for enhanced wiring space.",
      image:
        "https://drive.google.com/file/d/1bk0aOBLh_tcYPazVMkNtwKcEN8S25va0/view?usp=drive_link",
      specifications: {
        "Size ": "20mm - 25mm",
        Type: "2 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },
    {
      id: "3",
      code: "DJB320",
      title: "3 Way Deep Junction Box ",
      description:
        " three way deep junction box for enhanced wiring space.",
      image:
        "https://drive.google.com/file/d/1ciiqrSZwwaDUcKy8qFuWE3-FKKxKjcad/view?usp=drive_link",
      specifications: {
        "Size": "20mm - 25mm",
        Type: "3 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },

    {
      id: "4",
      code: "DJB420",
      title: "4 Way Deep Junction Box ",
      description: " four way deep junction box for enhanced wiring space.",
      image:
        "https://drive.google.com/file/d/1d-xFh_41uAstYoKHk64wCDKNX4AuaM-h/view?usp=drive_link",
      specifications: {
        "Size ": "20mm - 25mm",
        Type: "4 Way Deep",
        "Std.Packaging": "10",
        Color: "Black, Gray, Ivory, White",
        Material: "PVC",
        Application: "Electrical junction",
      },
      category: "Deep Junction Box",
    },
  ];

  const benefits = [
    {
      title: "Extra Depth Design",
      description:
        "Deep construction provides additional space for complex wiring requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Network className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Configurations",
      description:
        "Available in 1-way, 2-way, 3-way, and 4-way options with 20mm and 25mm sizes.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Standard Packaging",
      description:
        "Conveniently packaged in sets of 10 pieces for professional use.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={deepJunctionBoxProducts}
      heroTitle="Deep Junction Box"
      heroDescription="Professional-grade deep junction boxes for enhanced wiring space"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default DeepJunctionBox;

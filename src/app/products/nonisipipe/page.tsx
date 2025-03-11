import React from "react";
import { ArrowRight, Shield, Pipette } from "lucide-react";
import { Product } from "../types";
import ModernProductLayout from "../ModernProductLayout";

const NonISIPipe: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1EpDNDPCI5DC3DCjOMWgzDhiami5PNUWF/view?usp=drive_link",
    "https://drive.google.com/file/d/1W6NDB1EeAxG7Oll_gWEgSkdRUjzOzMzZ/view?usp=drive_link",
    "https://drive.google.com/file/d/1K0PTrhu3QHmZQH21_kYRquFBaEmr6FIE/view?usp=drive_link"
  ];

  const features = [
    "Multiple size options",
    "Three stress level variants",
    "Three color choices",
    "NOVA series quality",
    "Durable PVC construction",
  ];

  const pipeProducts: Product[] = [
    {
      id: "1",
      code: "NP20H",
      title: "20mm NOVA PVC Pipe ",
      description:
        "20mm High Mechanical Stress PVC conduit pipe from NOVA series.",
      image:
        "https://drive.google.com/file/d/1EiyqZtw_AogxZDyezHKNrtAQJqcO81yd/view?usp=drive_link",
      specifications: {
        Size: "20mm",
        Type: "Non-ISI PVC Pipe",
        Series: "NOVA",
        "Stress Level Available": "LMS - MMS - HMS",
        "Available Colors": "Ivory, Grey, Black",
      },
      category: "PVC Conduit Pipe",
    },
    {
      id: "2",
      code: "NP25H",
      title: "25mm NOVA PVC Pipe ",
      description:
        "25mm High Mechanical Stress PVC conduit pipe from NOVA series.",
      image:
        "https://drive.google.com/file/d/1GD0Xr4EHKP7J_HCijyrTUae9YsKYCtFK/view?usp=drive_link",
      specifications: {
        Size: "25mm",
        Type: "Non-ISI PVC Pipe",
        Series: "NOVA",
        "Stress Level Available": "LMS - MMS - HMS",
        "Available Colors": "Ivory, Grey, Black",
      },
      category: "PVC Conduit Pipe",
    },
    // 32mm variants

    {
      id: "3",
      code: "NP32H",
      title: "32mm NOVA PVC Pipe ",
      description:
        "32mm High Mechanical Stress PVC conduit pipe from NOVA series.",
      image:
        "https://drive.google.com/file/d/10_bUfBaCm9lnvk-qbrlwfdSAH7z8d3e5/view?usp=drive_link",
      specifications: {
        Size: "32mm",
        Type: "Non-ISI PVC Pipe",
        Series: "NOVA",
        "Stress Level Available": "LMS - MMS - HMS",
        "Available Colors": "Ivory, Grey, Black",
      },
      category: "PVC Conduit Pipe",
    },
  ];

  const benefits = [
    {
      title: "Versatile Options",
      description:
        "Available in three sizes (20mm, 25mm, 32mm) and three stress levels to suit various applications.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Pipette className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Stress Levels",
      description:
        "Choose from LMS, MMS, or HMS variants based on your mechanical stress requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Color Options",
      description:
        "Available in Ivory, Grey, and Black to match your installation requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={pipeProducts}
      heroTitle="NOVA Series Non-ISI PVC Conduit Pipe"
      heroDescription="High-quality PVC conduit pipes available in multiple sizes, stress levels, and colors"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default NonISIPipe;

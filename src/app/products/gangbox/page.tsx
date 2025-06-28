"use client"
import React from "react";
import { ArrowRight, Box, Shield } from "lucide-react";
import { Product } from "../types";
import ModernProductLayout from "../ModernProductLayout";

const SilverLineGangBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1lxRUnJK-tZHaNxYdu8co4RB1vC87Spw5/view?usp=drive_link",
    "https://drive.google.com/file/d/10mImO3BBVVOFDabKX8wctMeZ52SliaMW/view?usp=drive_link",
  ];

  const features = [
    "Premium Silver Line finish",
    "Multiple model configurations",
    "Surface mounting design",
    "Durable construction",
  ];

  const gangBoxProducts: Product[] = [
    {
      id: "1",
      code: "B01",
      title: "1 Model Gang Box",
      description: "Single model silver line gang box for basic installations.",
      image:
        "https://drive.google.com/file/d/1yG5joybjmEN5OWq7LUj1Zhgn5hyWm7M_/view?usp=drive_link",
      specifications: {
        Model: "1 model",
        "STD Packing": "20",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "2",
      code: "B02",
      title: "2 Model Gang Box",
      description:
        "Dual model silver line gang box for expanded installations.",
      image:
        "https://drive.google.com/file/d/16MQ4PjWgt8NfMcfAXUrr8xdV51iAEQki/view?usp=drive_link",
      specifications: {
        Model: "2 model",
        "STD Packing": "20",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "3",
      code: "B03",
      title: "3 Model Gang Box",
      description:
        "Triple model silver line gang box for multiple switches or sockets.",
      image:
        "https://drive.google.com/file/d/1JwbVHmX8iI0u3MbmQ361IeOcuJYQ8XPv/view?usp=drive_link",
      specifications: {
        Model: "3 model",
        "STD Packing": "20",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "4",
      code: "B04",
      title: "4 Model Gang Box",
      description:
        "Four model silver line gang box for multiple electrical points.",
      image:
        "https://drive.google.com/file/d/1BOpEJq4xDFdvLDNRP3qpDpB80uZc1bqy/view?usp=drive_link",
      specifications: {
        Model: "4 model",
        "STD Packing": "20",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "5",
      code: "B06",
      title: "6 Model Gang Box",
      description: "Six model silver line gang box for larger installations.",
      image:
        "https://drive.google.com/file/d/1OWEPCHTYc2r8_Vy0CWdW48-THwHeS50b/view?usp=drive_link",
      specifications: {
        Model: "6 model",
        "STD Packing": "10",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "6",
      code: "B07",
      title: "8 Model HZ Gang Box",
      description: "Eight model horizontal silver line gang box configuration.",
      image:
        "https://drive.google.com/file/d/10XVhFOMLGXy_U0UrctfvOTWlzEKzBAee/view?usp=drive_link",
      specifications: {
        Model: "8 model HZ",
        "STD Packing": "10",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "7",
      code: "B08",
      title: "8 Model SQ Gang Box",
      description: "Eight model square silver line gang box configuration.",
      image:
        "https://drive.google.com/file/d/15eChtbJ862wWgHKRev947LUklyDUGSoJ/view?usp=drive_link",
      specifications: {
        Model: "8 model SQ",
        "STD Packing": "10",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
    {
      id: "8",
      code: "B12",
      title: "12 Model Gang Box",
      description:
        "Twelve model silver line gang box for extensive installations.",
      image:
        "https://drive.google.com/file/d/10mImO3BBVVOFDabKX8wctMeZ52SliaMW/view?usp=drive_link",
      specifications: {
        Model: "12 model",
        "STD Packing": "10",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },

    {
      id: "10",
      code: "B18",
      title: "18 Model Gang Box",
      description:
        "Eighteen model silver line gang box for maximum configuration needs.",
      image:
        "https://drive.google.com/file/d/1lxRUnJK-tZHaNxYdu8co4RB1vC87Spw5/view?usp=drive_link",
      specifications: {
        Model: "18 model",
        "STD Packing": "5",
        Type: "Silver Line Gang Box",
        Application: "Electrical mounting",
      },
      category: "Silver Line Gang Box",
    },
  ];

  const benefits = [
    {
      title: "Versatile Options",
      description:
        "Available in multiple configurations from 1 to 18 models to suit any installation requirement.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Premium Finish",
      description:
        "Silver Line series offers a professional and elegant appearance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Convenient Packaging",
      description:
        "Standard packaging varies by size: 20pcs for smaller models, 10pcs for medium, and 5pcs for larger models.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={gangBoxProducts}
      heroTitle="Silver Line Gang Box"
      heroDescription="Premium quality gang boxes with silver line finish for professional electrical installations"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SilverLineGangBox;

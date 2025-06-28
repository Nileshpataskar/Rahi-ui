import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const SPNMetalMCBEnclosures: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1uHScU8-zSSl1oL6nKUSD1O0ugVOzTsbx/view?usp=drive_link",
    "https://drive.google.com/file/d/1XSs562gaTL-4e7N8a4xVVV_rZEoU-y-a/view?usp=drive_link"
  ];

  const features = [
    "Single door design for easy access",
    "Durable metal construction",
    "Multiple way configurations",
    "Professional grade finish",
    "Suitable for MCB Switches",
    "Superior powder Coated"

  ];

  const spnProducts: Product[] = [
    {
      id: "1",
      code: "ME02",
      title: "2 Pole MCB Metal Enclosure",
      description: "Premium 2 pole metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1cGB24jXZTVKCGhDG1mbui-6mzG8SeiQY/view?usp=drive_link",
      specifications: {
        Model: "2 Pole",
        Type: "Metal Enclosure",
        Code: "ME02",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "2",
      code: "ME04",
      title: "4 Pole MCB Metal Enclosure",
      description: "Premium 4 pole metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1e1c4c1QWz1mbOD6z4oW9YuCicwMJ1DaV/view?usp=drive_link",
      specifications: {
        Model: "4 Pole",
        Type: "Metal Enclosure",
        Code: "ME04",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "3",
      code: "ME02L",
      title: "2 Pole Long MCB Metal Enclosure",
      description: "Premium 2 pole long metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1vewTkOI2liRhrjZIux62X9TDsBbTUGzK/view?usp=drive_link",
      specifications: {
        Model: "2 Pole Long",
        Type: "Metal Enclosure",
        Code: "ME02L",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "4",
      code: "ME04L",
      title: "4 Pole Long MCB Metal Enclosure",
      description: "Premium 4 pole long metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1e1c4c1QWz1mbOD6z4oW9YuCicwMJ1DaV/view?usp=drive_link",
      specifications: {
        Model: "4 Pole Long",
        Type: "Metal Enclosure",
        Code: "ME04L",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "5",
      code: "ME06",
      title: "6 Pole MCB Metal Enclosure",
      description: "Premium 6 pole metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1yEQ0iy7RrqBKVUXH8-8k9lGJfFfuqPo2/view?usp=drive_link",
      specifications: {
        Model: "6 Pole",
        Type: "Metal Enclosure",
        Code: "ME06",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "6",
      code: "ME26",
      title: "6 Way MCB Metal Enclosure",
      description: "Premium 6 way metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/1BYsgSM2krYz_UQJEuCk0BEF-MRk-HePG/view?usp=drive_link",
      specifications: {
        Model: "6 Way",
        Type: "Metal Enclosure",
        Code: "ME26",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "7",
      code: "ME08",
      title: "8 Way MCB Metal Enclosure",
      description: "Premium 8 way metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/18noxCDTq0PVaUqiSJDWqfYIoRfkhh5_V/view?usp=drive_link",
      specifications: {
        Model: "8 Way",
        Type: "Metal Enclosure",
        Code: "ME08",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "8",
      code: "ME10",
      title: "10 Way MCB Metal Enclosure",
      description: "Premium 10 way metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/18noxCDTq0PVaUqiSJDWqfYIoRfkhh5_V/view?usp=drive_link",
      specifications: {
        Model: "10 Way",
        Type: "Metal Enclosure",
        Code: "ME10",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "9",
      code: "ME12",
      title: "12 Way MCB Metal Enclosure",
      description: "Premium 12 way metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/15gkKQn2BkpX0YcBDR-4_L9xZDM2q_a-y/view?usp=drive_link",
      specifications: {
        Model: "12 Way",
        Type: "Metal Enclosure",
        Code: "ME12",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    },
    {
      id: "10",
      code: "ME16",
      title: "16 Way MCB Metal Enclosure",
      description: "Premium 16 way metal enclosure designed for MCBs.",
      image: "https://drive.google.com/file/d/15gkKQn2BkpX0YcBDR-4_L9xZDM2q_a-y/view?usp=drive_link",
      specifications: {
        Model: "16 Way",
        Type: "Metal Enclosure",
        Code: "ME16",
        Application: "MCB installation"
      },
      category: "SPN Metal MCB Enclosure"
    }
  ];

  const benefits = [
    {
      title: "Durable Construction",
      description: "Made from high-quality metal for long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Flexible Configurations",
      description: "Available in various configurations to suit different installation needs.",
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
      products={spnProducts}
      heroTitle="SPN Metal MCB Enclosures"
      heroDescription="High-quality metal enclosures available in multiple sizes for MCBs"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SPNMetalMCBEnclosures;

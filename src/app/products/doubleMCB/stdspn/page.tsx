import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const SPNDoubleDoorBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1Wan3hhXG_TTrGKddz6GkYka6JQycjQqn/view?usp=drive_link",
    "https://drive.google.com/file/d/121DzaqcwgGyBKjd2x2s9h39hckd_Q4nF/view?usp=drive_link",
  ];

  const features = [
    "Standard series double door design",
    "Multiple way configurations",
    "Durable construction",
    "Easy installation access",
    "Professional finish",
  ];

  const spnProducts: Product[] = [
    {
      id: "1",
      code: "DD06",
      title: "6 way SPN DD",
      description:
        "6 way Single Phase Neutral Double Door MCB distribution box from Standard series.",
      image:
        "https://drive.google.com/file/d/1Q6o9jliOOfeslkoWJdxHiDO_EaS3ITzg/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "6",
        Series: "Standard",
        Code: "DD06",
        Application: "MCB distribution",
      },
      category: "SPN Double Door Box",
    },
    {
      id: "2",
      code: "DD08",
      title: "8 way SPN DD",
      description:
        "8 way Single Phase Neutral Double Door MCB distribution box from Standard series.",
      image:
        "https://drive.google.com/file/d/19GBRGd5InvrDTfuN7q7fY_hxXuG9gJ44/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "8",
        Series: "Standard",
        Code: "DD08",
        Application: "MCB distribution",
      },
      category: "SPN Double Door Box",
    },
    {
      id: "3",
      code: "DD10",
      title: "10 way SPN DD",
      description:
        "10 way Single Phase Neutral Double Door MCB distribution box from Standard series.",
      image:
        "https://drive.google.com/file/d/17sM0fPJywp1aloTjomV1ESG5pOq3WOcS/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "10",
        Series: "Standard",
        Code: "DD10",
        Application: "MCB distribution",
      },
      category: "SPN Double Door Box",
    },
    {
      id: "4",
      code: "DD12",
      title: "12 way SPN DD",
      description:
        "12 way Single Phase Neutral Double Door MCB distribution box from Standard series.",
      image:
        "https://drive.google.com/file/d/121DzaqcwgGyBKjd2x2s9h39hckd_Q4nF/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "12",
        Series: "Standard",
        Code: "DD12",
        Application: "MCB distribution",
      },
      category: "SPN Double Door Box",
    },
    {
      id: "5",
      code: "DD16",
      title: "16 way SPN DD",
      description:
        "16 way Single Phase Neutral Double Door MCB distribution box from Standard series.",
      image:
        "https://drive.google.com/file/d/184xjlrbcK9VVz7URxA9ydRUvgiIKo1SM/view?usp=drive_link",
      specifications: {
        Type: "SPN Double Door",
        Ways: "16",
        Series: "Standard",
        Code: "DD16",
        Application: "MCB distribution",
      },
      category: "SPN Double Door Box",
    },
  ];

  const benefits = [
    {
      title: "Multiple Configurations",
      description:
        "Available in 6, 8, 10, 12, and 16 way configurations to suit various requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Double Door Design",
      description:
        "Double door design offering convenient access and professional installation.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Standard Series",
      description:
        "Part of the Standard series, providing reliable performance at competitive value.",
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
      heroTitle="SPN Double Door Box"
      heroDescription="Standard series Single Phase Neutral distribution boxes with double door design"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default SPNDoubleDoorBox;

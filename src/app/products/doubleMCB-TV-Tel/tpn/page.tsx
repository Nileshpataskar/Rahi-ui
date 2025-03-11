import React from "react";
import { Product } from "../../types";
import { ArrowRight, Shield, Box } from "lucide-react";
import ModernProductLayout from "../../ModernProductLayout";

const TPNDoubleDoorTVTelBox: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1i51DwNalzp_9VRfAUySemFlXSIZb_s6x/view?usp=drive_link",
    "https://drive.google.com/file/d/1PdAZ43_uq5m1MuqP7R04iDF_zE1KzlLp/view?usp=drive_link"
  ];

  const features = [
    "Three Phase Neutral design",
    "Integrated TV and Telephone compartments",
    "Double door configuration",
    "Prime series premium quality",
    "Multiple way options"
  ];

  const tpnProducts: Product[] = [
    {
      id: "1",
      code: "METVT4T",
      title: "4 way TPN Double Door MCB Box With TV-TEL",
      description: 
        "Premium 4 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "https://drive.google.com/file/d/1IEasq5L8VM_nxJS9jVXStI4DUtIPPwHV/view?usp=drive_link",
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "4",
        Series: "Prime",
        "Additional Features": "TV and Telephone compartments",
        Code: "METVT4T",
        Application: "Three Phase MCB distribution with media connections"
      },
      category: "TPN Double Door MCB Box with TV-TEL"
    },
    {
      id: "2",
      code: "METVT6T",
      title: "6 way TPN Double Door MCB Box With TV-TEL",
      description: 
        "Premium 6 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "https://drive.google.com/file/d/1DYn8ZUW3mh9EwFCtQAM7qeMOlpJ1vBkx/view?usp=drive_link",
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "6",
        Series: "Prime",
        "Additional Features": "TV and Telephone compartments",
        Code: "METVT6T",
        Application: "Three Phase MCB distribution with media connections"
      },
      category: "TPN Double Door MCB Box with TV-TEL"
    },
    {
      id: "3",
      code: "METVT8T",
      title: "8 way TPN Double Door MCB Box with TV-TEL",
      description: 
        "Premium 8 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "https://drive.google.com/file/d/1i51DwNalzp_9VRfAUySemFlXSIZb_s6x/view?usp=drive_link",
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "8",
        Series: "Prime",
        "Additional Features": "TV and Telephone compartments",
        Code: "METVT8T",
        Application: "Three Phase MCB distribution with media connections"
      },
      category: "TPN Double Door MCB Box with TV-TEL"
    },
    {
      id: "4",
      code: "METVT12T",
      title: "12 way TPN Double Door MCB Box with TV-TEL",
      description: 
        "Premium 12 way Three Phase Neutral Double Door MCB distribution box with TV and Telephone compartments from Prime series.",
      image: "https://drive.google.com/file/d/1mToYfH3LCMruYbxsZHcOfRhZLGrp4veR/view?usp=drive_link",
      specifications: {
        Type: "TPN Double Door with TV-TEL",
        Ways: "12",
        Series: "Prime",
        "Additional Features": "TV and Telephone compartments",
        Code: "METVT12T",
        Application: "Three Phase MCB distribution with media connections"
      },
      category: "TPN Double Door MCB Box with TV-TEL"
    }
  ];

  const benefits = [
    {
      title: "Three Phase Configuration",
      description: "Designed specifically for three-phase electrical systems with integrated media connections.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Box className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Multiple Size Options",
      description: "Available in 4, 6, 8, and 12 way configurations to meet various installation needs.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Integrated Media Support",
      description: "Features dedicated TV and Telephone compartments for organized cable management.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={tpnProducts}
      heroTitle="TPN Double Door MCB Box With TV-TEL"
      heroDescription="Professional-grade Three Phase Neutral MCB distribution boxes with integrated TV and Telephone compartments"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default TPNDoubleDoorTVTelBox;

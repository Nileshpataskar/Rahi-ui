import React from "react";
import { ArrowRight, Shield, Pipette } from "lucide-react";
import { Product } from "../types";
import ModernProductLayout from "../ModernProductLayout";

const ISIPipe: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1EpDNDPCI5DC3DCjOMWgzDhiami5PNUWF/view?usp=drive_link",
    "https://drive.google.com/file/d/1W6NDB1EeAxG7Oll_gWEgSkdRUjzOzMzZ/view?usp=drive_link",
    "https://drive.google.com/file/d/1K0PTrhu3QHmZQH21_kYRquFBaEmr6FIE/view?usp=drive_link"
  ];

  const features = [
    "ISI certified quality",
    "Multiple size options",
    "High-grade PVC material",
    "Professional installation compatibility",
    "Durable construction",
  ];

  const pipeProducts: Product[] = [
    {
      id: "1",
      code: "ISI20",
      title: "20MM ISI PVC Conduit Pipe",
      description:
        "20MM ISI certified PVC conduit pipe for professional electrical installations.",
      image:
        "https://drive.google.com/file/d/1EiyqZtw_AogxZDyezHKNrtAQJqcO81yd/view?usp=drive_link",
      specifications: {
        Size: "20MM",
        Type: "LMS,MMS,HMS",
        Color: "Black, Gray, Ivory, White",
        Certification: "ISI Marked",
        Standard: "IS:9537 Part-III",
        Application: "Electrical conduit installations"
      },
      category: "ISI PVC Conduit Pipe"
    },
    {
      id: "2",
      code: "ISI25",
      title: "25MM ISI PVC Conduit Pipe",
      description:
        "25MM ISI certified PVC conduit pipe for professional electrical installations.",
      image:
        "https://drive.google.com/file/d/1GD0Xr4EHKP7J_HCijyrTUae9YsKYCtFK/view?usp=drive_link",
      specifications: {
        Size: "25MM",
        Type: "LMS,MMS,HMS",
        Color: "Black, Gray, Ivory, White",
        Certification: "ISI Marked",
        Standard: "IS:9537 Part-III",
        Application: "Electrical conduit installations"
      },
      category: "ISI PVC Conduit Pipe"
    },
    {
      id: "3",
      code: "ISI32",
      title: "32MM ISI PVC Conduit Pipe",
      description:
        "32MM ISI certified PVC conduit pipe for professional electrical installations.",
      image:
        "https://drive.google.com/file/d/10_bUfBaCm9lnvk-qbrlwfdSAH7z8d3e5/view?usp=drive_link",
      specifications: {
        Size: "32MM",
        Type: "LMS,MMS,HMS",
        Color: "Black, Gray, Ivory, White",
        Certification: "ISI Marked",
        Standard: "IS:9537 Part-III",
        Application: "Electrical conduit installations"
      },
      category: "ISI PVC Conduit Pipe"
    },
    {
      id: "4",
      code: "ISI40",
      title: "40MM ISI PVC Conduit Pipe",
      description:
        "40MM ISI certified PVC conduit pipe for professional electrical installations.",
      image:
        "https://drive.google.com/file/d/1q_SPTH-PFY2xYuzAGR1FJaaKtM-hsreS/view?usp=drive_link",
      specifications: {
        Size: "40MM",
        Type: "LMS,MMS,HMS",
        Color: "Black, Gray, Ivory, White",
        Certification: "ISI Marked",
        Standard: "IS:9537 Part-III",
        Application: "Electrical conduit installations"
      },
      category: "ISI PVC Conduit Pipe"
    },
    {
      id: "5",
      code: "ISI50",
      title: "50MM ISI PVC Conduit Pipe",
      description:
        "50MM ISI certified PVC conduit pipe for professional electrical installations.",
      image:
        "https://drive.google.com/file/d/1l_mygR_Rt6nqbWYZr0S14LbviKrPWqSw/view?usp=drive_link",
      specifications: {
        Size: "50MM",
        Type: "LMS,MMS,HMS",
        Color: "Black, Gray, Ivory, White",
        Certification: "ISI Marked",
        Standard: "IS:9537 Part-III",
        Application: "Electrical conduit installations"
      },
      category: "ISI PVC Conduit Pipe"
    }
  ];

  const benefits = [
    {
      title: "ISI Certified Quality",
      description:
        "Manufactured according to strict ISI standards ensuring reliable performance and safety.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Size Range",
      description:
        "Available in multiple sizes from 20MM to 50MM to accommodate various installation requirements.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Pipette className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Professional Grade",
      description:
        "Designed for professional electrical installations with superior durability and reliability.",
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
      heroTitle="ISI PVC Conduit Pipe"
      heroDescription="ISI certified PVC conduit pipes available in multiple sizes for professional electrical installations"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default ISIPipe;

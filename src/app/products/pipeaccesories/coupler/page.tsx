import React from "react";
import { ArrowRight, Link, Shield } from "lucide-react";
import { Product } from "../../types";
import ModernProductLayout from "../../ModernProductLayout";

const PVCCoupler: React.FC = () => {
  const carouselImages = [
    "https://drive.google.com/file/d/1pgqH0773xgqdnoXQ2Z462lNs-qehKzEP/view?usp=drive_link",
    "https://drive.google.com/file/d/1GLwUn83FPjSFPGqUuyhFArtust3cclTC/view?usp=drive_link",
    "https://drive.google.com/file/d/1w6lvM62hfZ-DFNz0bvbqpw09c6b7OJ0k/view?usp=drive_link",
  ];

  const features = [
    "High-quality PVC material",
    "Precise fitting dimensions",
    "Available in multiple sizes",
    "Secure pipe connection",
    "Easy installation",
  ];

  const couplerProducts: Product[] = [
    {
      id: "1",
      code: "PC20",
      title: "20mm Coupler",
      description:
        "20mm PVC coupler for joining electrical conduit pipes with secure connection.",
      image:
        "https://drive.google.com/file/d/1TMzE3HsPzBgzhZlIRrKItEgWjz1rSHy0/view?usp=drive_link",
      specifications: {
        Size: "20mm",
        Material: "PVC",
        "Standard Packing": "100 pieces",
        Type: "Electrical Conduit Coupler",
        Application: "Pipe joining",
      },
      category: "Coupler",
    },
    {
      id: "2",
      code: "PC25",
      title: "25mm Coupler",
      description:
        "25mm PVC coupler designed for reliable electrical conduit pipe connections.",
      image:
        "https://drive.google.com/file/d/1vtsrKEj-HqxUThJNVHKeHRnUUHv8ysiF/view?usp=drive_link",
      specifications: {
        Size: "25mm",
        Material: "PVC",
        "Standard Packing": "100 pieces",
        Type: "Electrical Conduit Coupler",
        Application: "Pipe joining",
      },
      category: "Coupler",
    },
  ];

  const benefits = [
    {
      title: "Perfect Connection",
      description:
        "Ensures secure and reliable joining of conduit pipes for electrical installations.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Link className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Quality Material",
      description:
        "Manufactured using high-grade PVC for durability and long-lasting performance.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Bulk Packaging",
      description:
        "Conveniently packaged in standard quantities of 100 pieces for professional use.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={couplerProducts}
      heroTitle="Coupler"
      heroDescription="High-quality PVC couplers for electrical conduit connections"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default PVCCoupler;

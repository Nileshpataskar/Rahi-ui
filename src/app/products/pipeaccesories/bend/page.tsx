import React from "react";
import { ArrowRight, Blend, Shield } from "lucide-react";
import { Product } from "../../types";
import ModernProductLayout from "../../ModernProductLayout";
const PVCBend: React.FC = () => {
  const carouselImages = [
    "/products/pipe_accesories/pipe_acc/img (2).png",
    "/products/pipe_accesories/pipe_acc/img (3).png",
    "/products/pipe_accesories/pipe_acc/img (4).png",
  ];

  const features = [
    "High-quality PVC material",
    "Precise 90-degree bends",
    "Available in multiple sizes",
    "Durable and long-lasting construction"
  ];

  const pvcBendProducts: Product[] = [
    {
      id: "1",
      code: "PB20",
      title: "20mm PVC Bend",
      description:
        "20mm PVC bend for electrical conduit installations.",
      image: "/products/pipe_accesories/pipe_acc/img (1).png",
      specifications: {
        Size: "20mm",
        Material: "PVC",
        "Standard Packing": "50 pieces",
        Type: "Electrical Conduit Bend",
        Color: "Black, Gray, Ivory, White",
      },
      category: "PVC Bend"
    },
    {
      id: "2",
      code: "PB25",
      title: "25mm PVC Bend",
      description:
        "25mm PVC bend designed for electrical conduit systems.",
      image: "/products/pipe_accesories/pipe_acc/img (1).png",
      specifications: {
        Size: "25mm",
        Material: "PVC",
        "Standard Packing": "50 pieces",
        Type: "Electrical Conduit Bend",
        Color: "Black, Gray, Ivory, White",
      },
      category: "PVC Bend"
    }
  ];

  const benefits = [
    {
      title: "ISI Certified Quality",
      description:
        "Manufactured according to ISI 3419/1988 standards ensuring high quality and reliability.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Shield className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Perfect Bending",
      description:
        "Precisely engineered 90-degree bends for smooth cable routing and installation.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Blend className="h-6 w-6" />
        </div>
      ),
    },
    {
      title: "Standard Packaging",
      description:
        "Conveniently packaged in standard quantities of 50 pieces for professional use.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <ModernProductLayout
      products={pvcBendProducts}
      heroTitle="PVC Bend"
      heroDescription="ISI certified PVC bends for electrical conduit systems"
      carouselImages={carouselImages}
      features={features}
      benefits={benefits}
    />
  );
};

export default PVCBend;

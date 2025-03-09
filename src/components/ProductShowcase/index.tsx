import HorizontalProductScroll from "./HorizontalProductScroll";

// Add interface for Product
interface Product {
  id: string;
  title: string;
  image: string;
  path: string;
  category?: string;
}

export interface ShowcaseProduct {
  id: string;
  title: string;
  image: string;
  path: string;
  category?: string;
}

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "1",
    title: "ABS Door MCB Box",
    image:
      "https://drive.google.com/file/d/1sOcjR1VAaw3CC520D8xdWy5toFsTs5y8/view?usp=drive_link",
    path: "/products/mcbbox",
    category: "MCB Box",
  },
  {
    id: "2",
    title: "Bus Bar Chambers",
    image:
      "https://drive.google.com/file/d/10-UxeyA2Ud-73yROGFwJh1yxIs6JNPoQ/view?usp=drive_link",
    path: "/products/BusBar/copper-bus-bar",
    category: "Bus Bar",
  },
  {
    id: "3",
    title: "Bus Bar Chamber - HRC",
    image:
      "https://drive.google.com/file/d/17GLjQQsl8m2PU2pE2coHizKlWr_Fb86l/view?usp=sharing",
    path: "/products/BusBar/copper-bus-bar-hrc",
    category: "Bus Bar",
  },
  {
    id: "4",
    title: "Double Door MCB Box",
    image:
      "https://drive.google.com/file/d/1S5uEd4kWMF0JxVjHhrwjca1VjiGOhc_n/view?usp=drive_link",
    path: "/products/doubleMCB/spn",
    category: "Double Door MCB Box",
  },
  {
    id: "5",
    title: "SPN Double Door MCB Box TV-TEL",
    image:
      "https://drive.google.com/file/d/1i51DwNalzp_9VRfAUySemFlXSIZb_s6x/view?usp=drive_link",
    path: "/products/doubleMCB-TV-Tel/spn",
    category: "Double door Mcb box with TV-TEL",
  },
  {
    id: "6",
    title: "Conduit Pipe",
    image:
      "https://drive.google.com/file/d/1l4MrwAc5VN3Pck7h7I2tTqvSLjlXheKv/view?usp=drive_link",
    path: "/products/conduitpipe",
    category: "ISI PVC Conduit Pipe",
  },
  {
    id: "7",
    title: "MCB Metal Enclosures",
    image:
      "https://drive.google.com/file/d/1q2vWYfodskjqYl6P4r9diILcIiX3kclo/view?usp=drive_link",
    path: "/products/mcbmetalenc/abs",
    category: "MCB Metal Enclosures",
  },
  {
    id: "8",
    title: "Modular Double Wall Surface box",
    image:
      "https://drive.google.com/file/d/1qZqZx0IRR1_qwwxCaLqFptiTBnzfL769/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "Surface Box",
  },
  {
    id: "9",
    title: "Modular GI Metal Box",
    image:
      "https://drive.google.com/file/d/1gS6ZD3ldPaAzeVdVx0RafvC2iXTdh5Dq/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "Metal Box",
  },
  {
    id: "10",
    title: "Modular Silver Line Gang Box",
    image:
      "https://drive.google.com/file/d/1lxRUnJK-tZHaNxYdu8co4RB1vC87Spw5/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "Gang Box",
  },
  {
    id: "11",
    title: "NOVA SERIES NON ISI PVC Conduit Pipe",
    image:
      "https://drive.google.com/file/d/1sy6W5OTsywWp6qCubB8vkCj8gl9Z80oL/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "PVC Conduit Pipe",
  },
  {
    id: "12",
    title: "Conduit Pipe Accesorise",
    image:
      "https://drive.google.com/file/d/1jzZ_N6Z--YRDIwZeMH6qKRWDQ_BQrRBm/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "PVC Conduit Pipe Accesories",
  },
  {
    id: "13",
    title: "Round Plates",
    image:
      "https://drive.google.com/file/d/1jsgxhLYRvbAw-KrgZT9aOOFeA-zO5DEj/view?usp=drive_link",
    path: "/products/surfacebox",
    category: "Round Plates",
  },
];

export const ProductShowcaseSection: React.FC = () => {
  // Convert Google Drive links to direct image URLs
  const processedProducts = showcaseProducts.map((product) => ({
    ...product,
    image: product.image,
  }));

  return (
    <div className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <HorizontalProductScroll
          products={processedProducts}
          title="Our Products"
          autoScroll={true}
          scrollInterval={4000}
        />
      </div>
    </div>
  );
};

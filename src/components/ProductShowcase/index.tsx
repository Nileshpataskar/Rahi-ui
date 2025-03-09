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
      "https://drive.google.com/file/d/1sOcjR1VAaw3CC520D8xdWy5toFsTs5y8/view?usp=drive_link",
    path: "/products/BusBar/copper-bus-bar-hrc",
    category: "Bus Bar",
  },
  {
    id: "4",
    title: "Double Door MCB Box",
    image:
      "https://drive.google.com/file/d/17sM0fPJywp1aloTjomV1ESG5pOq3WOcS/view?usp=sharing",
    path: "/products/BusBar/copper-bus-bar-hrc",
    category: "Double Door MCB Box",
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

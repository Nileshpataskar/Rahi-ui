"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Download,
  ChevronRight,
  ChevronLeft,
  Shield,
  Dot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModernProductLayoutProps, Product } from "./types";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import { cn } from "@/lib/utils";
import { convertImageHelper } from "../convertImageHelper";
import Link from "next/link";
import ImageLoader from "../ImageLoader";

const ModernProductLayout: React.FC<ModernProductLayoutProps> = ({
  products,
  selectedProduct,
  heroTitle,
  heroDescription,
  carouselImages = [],
  features = [],
  benefits = [],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [activeProduct, setActiveProduct] = React.useState<Product | undefined>(
    selectedProduct || products[0],
  );

  // Ensure we have a product selected
  React.useEffect(() => {
    if (!activeProduct && products.length > 0) {
      setActiveProduct(products[0]);
    }
  }, [products, activeProduct]);

  if (!activeProduct) {
    return <div>Loading...</div>;
  }

  // Combine provided images with product image
  const allImages = carouselImages.length > 0 
    ? [activeProduct.image, ...carouselImages].filter(Boolean)
    : activeProduct.carouselImages && activeProduct.carouselImages.length > 0
    ? [activeProduct.image, ...activeProduct.carouselImages].filter(Boolean)
    : [activeProduct.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  };

  // Default features if none provided
  const displayFeatures =
    features.length > 0
      ? features
      : [
          "High-quality construction",
          "Durable and long-lasting",
          "Easy installation",
        ];

  // Default benefits if none provided
  const displayBenefits =
    benefits.length > 0
      ? benefits
      : [
          {
            title: "Superior Quality",
            description:
              "Made from premium materials to ensure long-lasting performance and reliability.",
            icon: (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Check className="h-6 w-6" />
              </div>
            ),
          },
          {
            title: "Easy Installation",
            description:
              "Designed for quick and hassle-free installation with simple mounting options.",
            icon: (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <ArrowRight className="h-6 w-6" />
              </div>
            ),
          },
          {
            title: "Versatile Applications",
            description:
              "Suitable for a wide range of applications in residential, commercial, and industrial settings.",
            icon: (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Shield className="h-6 w-6" />
              </div>
            ),
          },
        ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden  bg-[#f8f8f8] pb-32 pt-44 text-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]" />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-light uppercase tracking-widest text-white">
                {activeProduct.category || "Premium Collection"}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              {heroTitle || activeProduct.title}
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-white/20"></div>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300">
              {heroDescription || activeProduct.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selection Tabs (if multiple products) */}
      {products.length > 1 && (
        <div className="border-b border-gray-100 bg-[#f8f8f8] py-10">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <span className="mb-2 block text-xs uppercase tracking-widest text-gray-500">
                Collection
              </span>
              <h2 className="text-2xl font-light text-gray-900">
                Select Your Model
              </h2>
            </div>
            <Tabs
              defaultValue={activeProduct.id}
              onValueChange={(value) => {
                const product = products.find((p) => p.id === value);
                if (product) {
                  setActiveProduct(product);
                  setCurrentImageIndex(0); // Reset image index when changing products
                }
              }}
              className="w-full"
              id="model"
            >
              <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-3 bg-transparent">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="h-auto rounded-none border border-gray-200 px-6 py-3 text-xs font-light uppercase tracking-widest transition-all duration-300 hover:border-black data-[state=active]:bg-black data-[state=active]:text-white"
                  >
                    {product.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      )}

      {/* Product Overview Section */}
      <section className="bg-white px-4 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            {/* Product Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1 lg:col-span-7"
            >
              <div className="relative aspect-[4/3] overflow-hidden  rounded-2xl">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={activeProduct.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover shadow-xl"
                />
                {/* <ImageLoader
                  src={convertImageHelper(allImages[currentImageIndex])}
                  alt={activeProduct.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover shadow-xl"
                /> */}

                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-black/70 p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-black/40"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-black/70 p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-black/40"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-1.5 w-10 transition-all duration-300 ${index === currentImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail navigation */}
              {allImages.length > 1 && (
                <div className="mt-6 flex justify-center gap-4 overflow-x-auto pb-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-20 w-20 flex-shrink-0 overflow-hidden transition-all duration-300 ${index === currentImageIndex ? "scale-105 ring-1 ring-black" : "opacity-60 hover:opacity-100"}`}
                    >
                      <Image
                        width={800}
                        height={600}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <ImageLoader
                        width={800}
                        height={600}
                        src={convertImageHelper(img)}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 space-y-8 lg:sticky lg:top-32 lg:order-2 lg:col-span-5"
            >
              <div>
                <span className="mb-2 block text-xs uppercase tracking-widest text-gray-500">
                  The Collection
                </span>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900">
                  {activeProduct.title}
                </h2>
                {activeProduct.code && (
                  <div className="mb-6 inline-block bg-black px-4 py-1 text-xs font-light uppercase tracking-widest text-white">
                    Ref. {activeProduct.code}
                  </div>
                )}
                <div className="mb-6 h-px w-16 bg-gray-200"></div>
                <p className="text-base font-light leading-relaxed text-gray-600">
                  {activeProduct.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-light tracking-wide text-gray-900">
                  Distinctive Features
                </h3>
                <div className="mb-4 h-px w-12 bg-gray-200"></div>
                <div className="grid grid-cols-1 gap-3">
                  {displayFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center border-b border-gray-100 px-2 py-3 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-3 flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-3xl bg-black text-xs text-white">
                        {/* <Dot className="h-2.5 w-2.5" /> */}
                      </div>
                      <span className="font-light text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Preview */}
              {activeProduct.specifications &&
                Object.keys(activeProduct.specifications).length > 0 && (
                  <div className="bg-[#f8f8f8] p-6">
                    <h3 className="mb-4 text-lg font-light tracking-wide text-gray-900">
                      Technical Specifications
                    </h3>
                    <div className="mb-6 h-px w-12 bg-gray-300"></div>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(activeProduct.specifications)
                        .slice(0, 4)
                        .map(([key, value], index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between border-b border-gray-200 px-3 py-2 transition-colors hover:bg-white"
                          >
                            <span className="text-xs uppercase tracking-widest text-gray-500">
                              {key}
                            </span>
                            <span className="text-base font-light text-gray-900">
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                    {Object.keys(activeProduct.specifications).length > 4 && (
                      <div className="mt-6 text-center">
                        <a
                          href="#specifications"
                          className="inline-flex items-center border-b border-black pb-1 text-xs uppercase tracking-widest text-black transition-colors duration-300 hover:text-gray-600"
                        >
                          View Complete Specifications
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Specifications Section */}
      {activeProduct.specifications &&
        Object.keys(activeProduct.specifications).length > 0 && (
          <section
            id="specifications"
            className="bg-black px-4 py-32 text-white"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
                  Details
                </span>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-white">
                  Technical Specifications
                </h2>
                <div className="mx-auto mb-6 h-px w-16 bg-white/20"></div>
                <p className="mx-auto max-w-2xl text-base font-light text-gray-300">
                  Complete technical specifications for the{" "}
                  {activeProduct.title}
                </p>
              </div>

              <div className="mx-auto max-w-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="px-8 py-4 text-left text-xs font-light uppercase tracking-widest">
                          Specification
                        </th>
                        <th className="px-8 py-4 text-left text-xs font-light uppercase tracking-widest">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {Object.entries(activeProduct.specifications).map(
                        ([key, value], index) => (
                          <tr
                            key={index}
                            className="transition-colors duration-150 hover:bg-white/5"
                          >
                            <td className="px-8 py-5 text-sm font-light text-white">
                              {key}
                            </td>
                            <td className="px-8 py-5 text-sm font-light text-gray-300">
                              {value}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>
        )}

      {/* Key Benefits Section */}
      <section className="bg-[#f8f8f8] px-4 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-xs uppercase tracking-widest text-gray-500">
              Excellence
            </span>
            <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900">
              Exceptional Benefits
            </h2>
            <div className="mx-auto mb-6 h-px w-16 bg-gray-300"></div>
            <p className="mx-auto max-w-2xl text-base font-light text-gray-600">
              Why the {activeProduct.title} stands as the definitive choice for
              discerning professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {displayBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-0 bg-white transition-all duration-500 hover:shadow-xl">
                  <div className="h-1 w-0 bg-black transition-all duration-700 group-hover:w-full"></div>
                  <CardContent className="p-8">
                    <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                      {benefit.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-light tracking-tight text-gray-900">
                      {benefit.title}
                    </h3>
                    <div className="mb-4 h-px w-10 bg-gray-200 transition-all duration-500 group-hover:w-16"></div>
                    <p className="font-light leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Related Products Section */}
      {products.length > 1 && (
        <section className="bg-white px-4 py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="mb-2 block text-xs uppercase tracking-widest text-gray-500">
                Collection
              </span>
              <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900">
                Explore The Collection
              </h2>
              <div className="mx-auto mb-6 h-px w-16 bg-gray-300"></div>
              <p className="mx-auto max-w-2xl text-base font-light text-gray-600">
                Discover other exceptional pieces from our curated selection
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {products
                .filter((product) => product.id !== activeProduct.id)
                .slice(0, 3)
                .map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="group h-full cursor-pointer overflow-hidden border-0 transition-all duration-500 hover:shadow-xl"
                      onClick={() => {
                        setActiveProduct(product);
                        setCurrentImageIndex(0);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
                        <Image
                          width={800}
                          height={450}
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* <ImageLoader  
                          width={800}
                          height={450}
                          src={convertImageHelper(product.image)}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        /> */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                      <CardContent className="relative p-8">
                        <div className="absolute left-0 right-0 top-0 h-1 w-0 bg-black transition-all duration-700 group-hover:w-full"></div>
                        <div className="mb-2">
                          <span className="text-xs uppercase tracking-widest text-gray-500">
                            {product.code}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-light tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-black">
                          {product.title}
                        </h3>
                        <div className="mb-4 h-px w-10 bg-gray-200 transition-all duration-500 group-hover:w-16"></div>
                        <p className="mb-6 line-clamp-2 font-light text-gray-600">
                          {product.description}
                        </p>
                        <div className="text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full rounded-none border-black text-xs font-light uppercase tracking-widest text-black transition-colors duration-300 hover:bg-black hover:text-white"
                          >
                            Discover
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}
      <CallToAction
        buttons={[
          { name: "Download Resource", path: "/download" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
    </div>
  );
};

export default ModernProductLayout;

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { convertImageHelper } from "@/app/convertImageHelper";
import ImageLoader from "@/app/ImageLoader";

export interface Product {
  id: string;
  title: string;
  image: string;
  path: string;
  category?: string;
}

interface HorizontalProductScrollProps {
  products: Product[];
  className?: string;
  title?: string;
  autoScroll?: boolean;
  scrollInterval?: number;
}

const HorizontalProductScroll: React.FC<HorizontalProductScrollProps> = ({
  products,
  className,
  title = "Our Products",
  autoScroll = true,
  scrollInterval = 3000,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto scroll functionality
  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);

      if (scrollRef.current) {
        const itemWidth = scrollRef.current.scrollWidth / products.length;
        scrollRef.current.scrollTo({
          left: itemWidth * ((activeIndex + 1) % products.length),
          behavior: "smooth",
        });
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, isPaused, products.length, activeIndex, scrollInterval]);

  // Scroll to specific product
  const scrollToProduct = (index: number) => {
    setActiveIndex(index);

    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / products.length;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  // Scroll to next/previous product
  const scrollNext = () => {
    const nextIndex = (activeIndex + 1) % products.length;
    scrollToProduct(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = (activeIndex - 1 + products.length) % products.length;
    scrollToProduct(prevIndex);
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-16 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-black">
          {title}
        </h2>
        <div className="mx-auto h-[3px] w-12 bg-[#c0a062]"></div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="mx-4 w-[300px] flex-shrink-0 snap-start transition-transform duration-300 md:w-[340px] lg:w-[400px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={product.path} className="group block">
                <div className="relative mb-4 aspect-square overflow-hidden ">
                  {/* Product image with grayscale effect that turns to color on hover */}
                  <Image
                    src={convertImageHelper(product.image)}
                    alt={product.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"></div>

                  {/* Red line that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 h-0 bg-[#c0a062] transition-all duration-300 group-hover:h-1"></div>

                  {/* Category tag */}
                  {product.category && (
                    <div className="absolute right-4 top-4 z-20 bg-[#c0a062] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                      {product.category}
                    </div>
                  )}

                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-2 transform p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-white">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                        Discover
                      </span>
                      <div className="flex h-8 w-8 scale-0 transform items-center justify-center bg-[#c0a062] transition-transform duration-500 group-hover:scale-100">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-black/80 text-white transition-all duration-300 hover:bg-[#c0a062]"
          aria-label="Previous product"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center bg-black/80 text-white transition-all duration-300 hover:bg-[#c0a062]"
          aria-label="Next product"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Product indicators */}
      <div className="mt-10 flex justify-center space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProduct(index)}
            className={`transition-all duration-300 ${index === activeIndex ? "h-3 w-3 bg-[#c0a062]" : "h-3 w-3 bg-gray-300 hover:bg-[#c0a062]/50"} rounded-full`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalProductScroll;

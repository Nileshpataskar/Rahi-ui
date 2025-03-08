import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ProductCarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  category?: string;
}

interface ProductCarouselProps {
  items: ProductCarouselItem[];
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  items,
  autoRotate = true,
  rotationInterval = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (autoRotate && !isHovering) {
      const interval = setInterval(nextSlide, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovering, nextSlide, rotationInterval]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>

      {/* Main carousel */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute inset-0 z-10 bg-black/40"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)",
                }}
              ></div>
              <Image
                width={800}
                height={450}
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                className="duration-10000 h-full w-full scale-105 object-cover object-center transition-transform ease-in-out"
              />

              <div className="absolute bottom-0 left-0 right-0 z-20 p-10 text-white">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-4 opacity-90">
                    {items[currentIndex].category && (
                      <span className="text-xs font-light uppercase tracking-[0.3em]">
                        {items[currentIndex].category}
                      </span>
                    )}
                  </div>
                  <h2 className="mb-4 text-3xl font-extralight leading-tight tracking-tight md:text-5xl">
                    {items[currentIndex].title}
                  </h2>
                  <div className="mx-auto mb-6 h-px w-16 bg-white/30"></div>
                  <p className="mx-auto mb-8 max-w-2xl text-base font-light text-white/80 md:text-lg">
                    {items[currentIndex].description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-white px-10 py-6 text-xs font-light uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-white hover:tracking-[0.25em] hover:text-black"
                  >
                    <a href={items[currentIndex].path}>Discover More</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${index === currentIndex ? "w-10 bg-white" : "w-3 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 z-30 -translate-y-1/2 transform bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-30 -translate-y-1/2 transform bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;

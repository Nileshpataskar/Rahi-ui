"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection = ({
  title = "Leading Electrical Solutions",
  subtitle = "Transform your electrical infrastructure with our cutting-edge components and smart technology",
  ctaText = "Explore Products",
}: HeroSectionProps) => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  const floatingComponents = [
    { x: -30, y: -22, delay: 0, size: "lg" },
    { x: 30, y: 10, delay: 0.1, size: "md" },
    { x: -38, y: 25, delay: 0.1, size: "sm" },
    { x: -60, y: 20, delay: 0.3, size: "xl" },
  ];

  const getSize = (size: string) => {
    const sizes = {
      sm: "h-16 w-16 sm:h-20 sm:w-20",
      md: "h-20 w-20 sm:h-24 sm:w-24",
      lg: "h-24 w-24 sm:h-28 sm:w-28",
      xl: "h-28 w-28 sm:h-32 sm:w-32",
    };
    return sizes[size as keyof typeof sizes] || sizes.md;
  };

  const getIconSize = (size: string) => {
    const sizes = {
      sm: "h-6 w-6 sm:h-8 sm:w-8",
      md: "h-8 w-8 sm:h-10 sm:w-10",
      lg: "h-10 w-10 sm:h-12 sm:w-12",
      xl: "h-12 w-12 sm:h-14 sm:w-14",
    };
    return sizes[size as keyof typeof sizes] || sizes.md;
  };

  return (
    <div className="relative min-h-[600px] h-[80vh] lg:h-[900px] w-full overflow-hidden bg-gray-400">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]" />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
        }}
      />

      {/* Floating Components - Hidden on smallest screens */}
      <div className="hidden sm:block">
        {floatingComponents.map((component, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${50 + component.x}%`,
              top: `${50 + component.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [0.8, 0.9, 0.8],
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              delay: component.delay,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className={`flex items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-xl ${getSize(component.size)}`}>
              <Zap className={`text-blue-300 ${getIconSize(component.size)}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ y, opacity }}
      >
        <motion.h1
          className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-[90%] sm:max-w-[80%] lg:max-w-[1200px] leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mb-8 sm:mb-12 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Scroll Indicator - Hidden on small screens */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 transform hidden sm:block"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="flex h-8 w-5 sm:h-10 sm:w-6 justify-center rounded-full border-2 border-white/30">
            <motion.div
              className="mt-2 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-white/70"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

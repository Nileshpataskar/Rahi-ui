import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Utility function for conditional classnames

interface ImageLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Aesthetic Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-gray-600"></div>
        </div>
      )}

      {/* Image with smooth transition */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-700 ease-in-out",
          loading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageLoader;

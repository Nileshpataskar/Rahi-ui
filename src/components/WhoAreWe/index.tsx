"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const WhoAreWe = () => {
  return (
    <>
      <section className="bg-muted/30">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                width={800}
                height={450}
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Founding"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute left-0 top-0 bg-[#c0a062] px-8 py-4 text-sm font-extralight tracking-[0.3em] text-white">
                2000
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="font-['Playfair_Display',serif] text-4xl font-extralight text-gray-900">
              Who are we
            </h3>
            <div className="h-px w-20 bg-[#c0a062]"></div>
            <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
              Rahi Industries is a leading innovator in the electrical
              accessories and solutions market. Since our inception, we have
              been dedicated to providing top-tier, high-performance products
              that meet the demands of modern electrical infrastructure. Our
              extensive range of products includes cable clips, modular gang
              boxes, MCB distribution units, junction boxes, and more.
            </p>
            <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
              We prioritize innovation, quality, and customer satisfaction,
              ensuring that every product meets rigorous industry standards.
              With a strong commitment to excellence, we have earned a
              reputation for reliability and cutting-edge technology. Whether
              for residential, commercial, or industrial applications, our
              products provide seamless integration and superior performance.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;

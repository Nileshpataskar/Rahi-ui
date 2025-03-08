import { motion } from "framer-motion";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2 md:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:order-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              width={800}
              height={450}
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
              alt="Today"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute left-0 top-0 bg-[#c0a062] px-8 py-4 text-sm font-extralight tracking-[0.3em] text-white">
              TODAY
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="space-y-10 md:order-1"
        >
          <h3 className="font-['Playfair_Display',serif] text-4xl font-extralight text-gray-900">
            Our Mission
          </h3>
          <div className="h-px w-20 bg-[#c0a062]"></div>
          <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
            To provide innovative and high-quality electrical solutions that
            meet the evolving needs of our customers while maintaining the
            highest standards of safety and reliability.
          </p>
          <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
            We are committed to sustainable manufacturing practices and
            continuous improvement in our products and processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;

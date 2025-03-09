"use client";
import React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import TeamSection from "@/TeamSection";
import CallToAction from "@/components/CallToAction";
import WhoAreWe from "@/components/WhoAreWe";
import OurMission from "@/components/OurMission";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f8f8f8] pb-32 pt-40 text-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]" />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-light uppercase tracking-widest text-white">
                Know more
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              About us
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-white/20"></div>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300">
              We&apos;re here to assist you with any inquiries about our
              products and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 text-center">
            <span className="mb-8 block text-xs font-medium uppercase tracking-[0.4em] text-[#c0a062]">
              Our Journey
            </span>
            <h2 className="mb-10 font-['Playfair_Display',serif] text-5xl font-extralight tracking-tight text-gray-900">
              A Legacy of Excellence
            </h2>
            <div className="mx-auto mb-12 h-px w-32 bg-[#c0a062]"></div>
            <p className="mx-auto max-w-2xl text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
              For decades, we have been at the forefront of innovation, setting
              new standards in the industry
            </p>
          </div>

          <div className="space-y-10">
            {/* Timeline Item 1 */}
            <WhoAreWe />

            <OurMission />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 text-center">
            <span className="mb-8 block text-xs font-medium uppercase tracking-[0.4em] text-[#c0a062]">
              Our Principles
            </span>
            <h2 className="mb-10 font-['Playfair_Display',serif] text-5xl font-extralight tracking-tight text-gray-900">
              Core Values
            </h2>
            <div className="mx-auto mb-12 h-px w-32 bg-[#c0a062]"></div>
            <p className="mx-auto max-w-2xl text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
              The guiding principles that define our approach and commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group border-b-2 border-transparent bg-white p-16 shadow-xl transition-all duration-700 hover:border-[#c0a062] hover:shadow-2xl"
            >
              <div className="mb-10 flex h-24 w-24 items-center justify-center bg-[#0a0a0a] text-[#c0a062] transition-all duration-700 group-hover:bg-[#c0a062] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="mb-8 font-['Playfair_Display',serif] text-3xl font-extralight text-gray-900">
                Excellence
              </h3>
              <div className="mb-10 h-px w-16 bg-[#c0a062] transition-all duration-700 group-hover:w-24"></div>
              <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
                We are committed to excellence in everything we do, from the
                materials we select to the craftsmanship of our products and the
                service we provide to our customers.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="group border-b-2 border-transparent bg-white p-16 shadow-xl transition-all duration-700 hover:border-[#c0a062] hover:shadow-2xl"
            >
              <div className="mb-10 flex h-24 w-24 items-center justify-center bg-[#0a0a0a] text-[#c0a062] transition-all duration-700 group-hover:bg-[#c0a062] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="mb-8 font-['Playfair_Display',serif] text-3xl font-extralight text-gray-900">
                Integrity
              </h3>
              <div className="mb-10 h-px w-16 bg-[#c0a062] transition-all duration-700 group-hover:w-24"></div>
              <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
                We conduct our business with the highest standards of integrity,
                honesty, and transparency, building trust with our customers,
                partners, and employees.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="group border-b-2 border-transparent bg-white p-16 shadow-xl transition-all duration-700 hover:border-[#c0a062] hover:shadow-2xl"
            >
              <div className="mb-10 flex h-24 w-24 items-center justify-center bg-[#0a0a0a] text-[#c0a062] transition-all duration-700 group-hover:bg-[#c0a062] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mb-8 font-['Playfair_Display',serif] text-3xl font-extralight text-gray-900">
                Innovation
              </h3>
              <div className="mb-10 h-px w-16 bg-[#c0a062] transition-all duration-700 group-hover:w-24"></div>
              <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
                We continuously push the boundaries of whats possible, embracing
                new technologies and ideas to create products that set new
                standards in the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className=" my-20">
        <TeamSection />
      </div>
      {/* Team Section */}

      <CallToAction
        buttons={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
    </div>
  );
};

export default About;

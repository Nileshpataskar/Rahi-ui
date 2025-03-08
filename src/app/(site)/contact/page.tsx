"use client";
import React from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Contact = () => {
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
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-light uppercase tracking-widest text-white">
                Connect
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              Contact us
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-[#c0a062]"></div>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300">
              We&apos;re here to assist you with any inquiries about our
              products and services
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-4 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4  text-3xl font-light tracking-tight text-gray-900">
                  Get in Touch
                </h2>
                <div className="mb-8 h-px w-16 bg-[#c0a062]"></div>
                <p className="font-light leading-relaxed text-gray-600">
                  Complete the form below, and our team will respond to your
                  inquiry as soon as possible.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-light text-gray-900"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="h-12 rounded-none border-gray-200 focus:border-[#fff] focus:ring-[#fff]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-light text-gray-900"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="h-12 rounded-none border-gray-200 focus:border-[#fff] focus:ring-[#fff]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-light text-gray-900"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="h-12 rounded-none border-gray-200 focus:border-[#fff] focus:ring-[#fff]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-light text-gray-900"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="resize-none rounded-none border-gray-200 focus:border-[#fff] focus:ring-[#fff]"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="rounded-none bg-[#0f0f0f] px-12 py-6 text-xs font-light uppercase tracking-[0.3em] text-white transition-all duration-500  hover:text-[#f2f2f2]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="mb-4  text-3xl font-light tracking-tight text-gray-900">
                  Contact Information
                </h2>
                <div className="mb-8 h-px w-16 bg-[#c0a062]"></div>
                <p className="font-light leading-relaxed text-gray-600">
                  Our team is available to assist you with any inquiries about
                  our products, services, or partnership opportunities.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#1b1f27] text-[#fff]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2  text-xl font-light text-gray-900">
                      Our Location
                    </h3>
                    <p className="font-light leading-relaxed text-gray-600">
                      Sr No 323, 3A, Uruli Devachi, Pune, Maharashtra 412308
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#0f0f0f] text-[#fff]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2  text-xl font-light text-gray-900">
                      Phone
                    </h3>
                    <p className="font-light leading-relaxed text-gray-600">
                      +91 90114 46161
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#0f0f0f] text-[#fff]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2  text-xl font-light text-gray-900">
                      Email
                    </h3>
                    <p className="font-light leading-relaxed text-gray-600">
                      Sales: sales@rahiindustries.in
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#1b1f27] text-[#fff]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2  text-xl font-light text-gray-900">
                      Business Hours
                    </h3>
                    <p className="font-light leading-relaxed text-gray-600">
                      9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <h3 className="mb-6  text-xl font-light text-gray-900">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center bg-[#0f0f0f] text-[#fff] transition-colors duration-500  hover:scale-105 hover:text-[#f2f2f2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center bg-[#0f0f0f] text-[#fff] transition-colors duration-500  hover:scale-105 hover:scale-105 hover:text-[#f2f2f2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center bg-[#0f0f0f] text-[#fff] transition-colors duration-500  hover:scale-105 hover:text-[#f2f2f2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center bg-[#0f0f0f] text-[#fff] transition-colors duration-500  hover:scale-105 hover:text-[#f2f2f2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.3em] text-[#c0a062]">
              Visit Us
            </span>
            <h2 className="mb-8  text-4xl font-light tracking-tight text-gray-900">
              Our Location
            </h2>
            <div className="mx-auto mb-10 h-px w-24 bg-[#c0a062]" />
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-600">
              We invite you to visit our headquarters to experience our products
              firsthand
            </p>
          </div>

          <div className="relative aspect-[16/6] overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.552438235369!2d73.9496603747759!3d18.458619382623006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e96daf88352b%3A0x79dd33b1d5acbdd0!2sRahi%20Industries!5e0!3m2!1sen!2sin!4v1741450793462!5m2!1sen!2sin"
                className="h-full w-full border-0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Rahi+Industries/@18.4586194,73.9522353,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2e96daf88352b:0x79dd33b1d5acbdd0!8m2!3d18.4586194!4d73.9522353!16s%2Fg%2F11h5rrb6pw?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
            >
              <Button
                variant="outline"
                className="inline-flex items-center rounded-none border-[#1b1e26] px-12 py-6 text-xs font-light uppercase tracking-[0.3em] text-[#1b1e26] transition-all duration-500 hover:bg-[#bcbec0] hover:text-[#1b1e26]"
              >
                Get Directions
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

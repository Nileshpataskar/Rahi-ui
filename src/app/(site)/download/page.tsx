"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Search,
  Filter,
  FileText,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import CallToAction from "@/components/CallToAction";
import { DownloadItem, downloadItems } from "./downloadItems";
import { convertGoogledriveImage } from "@/app/convertImageHelper";

const DownloadsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Sample download items

  // Filter items based on search query and filters
  const filteredItems = downloadItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesYear =
      yearFilter === "all" ||
      new Date(item.date).getFullYear().toString() === yearFilter;

    return matchesSearch && matchesCategory && matchesYear;
  });

  // Get unique categories and years for filters
  const categories = [
    "all",
    ...Array.from(new Set(downloadItems.map((item) => item.category))),
  ];

  const years = [
    "all",
    ...Array.from(
      new Set(
        downloadItems.map((item) =>
          new Date(item.date).getFullYear().toString(),
        ),
      ),
    ),
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
                Resource Collection
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              Download Center
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-white/20"></div>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-300">
              Access our premium collection of resources, documentation, and
              specifications
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              <a href="#model">
                <Button
                  size="lg"
                  className="rounded-none bg-white px-8 py-6 text-sm font-light uppercase tracking-widest text-black hover:bg-white/90"
                >
                  Discover Details
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section
        className="border-t border-gray-100 bg-white px-4 py-16"
        id="model"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="border border-gray-200 bg-[#f9f9f9] p-10 shadow-lg">
            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Search Resources
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by title or description..."
                    className="rounded-none border-gray-300 bg-white py-6 pl-12 text-gray-900 focus-visible:border-gray-400 focus-visible:ring-gray-400 focus-visible:ring-offset-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Category
                </label>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="h-[50px] rounded-none border-gray-300 bg-white text-gray-900 focus:ring-gray-400 focus:ring-offset-0">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-gray-200 bg-white text-gray-900">
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="focus:bg-gray-100 focus:text-gray-900"
                      >
                        {category === "all"
                          ? "All Categories"
                          : category.charAt(0).toUpperCase() +
                            category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-3">
                <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Year
                </label>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="h-[50px] rounded-none border-gray-300 bg-white text-gray-900 focus:ring-gray-400 focus:ring-offset-0">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-gray-200 bg-white text-gray-900">
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year}
                        className="focus:bg-gray-100 focus:text-gray-900"
                      >
                        {year === "all" ? "All Years" : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="bg-white px-4 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#c0a062]">
              Documentation
            </span>
            <h2 className="mb-5 text-3xl font-extralight tracking-tight text-gray-900">
              Available Resources
            </h2>
            <div className="mx-auto mb-8 h-px w-16 bg-[#c0a062]"></div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto mb-16 flex h-auto w-full max-w-3xl flex-wrap justify-center gap-4 bg-transparent">
              <TabsTrigger
                value="all"
                className="h-auto rounded-none border border-gray-200 px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-gray-900 transition-all duration-300 hover:border-black data-[state=active]:border-[#c0a062] data-[state=active]:bg-black data-[state=active]:text-white"
              >
                All Resources
              </TabsTrigger>
              <TabsTrigger
                value="catalogue"
                className="h-auto rounded-none border border-gray-200 px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-gray-900 transition-all duration-300 hover:border-black data-[state=active]:border-[#c0a062] data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Catalogue
              </TabsTrigger>
              <TabsTrigger
                value="brochure"
                className="h-auto rounded-none border border-gray-200 px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-gray-900 transition-all duration-300 hover:border-black data-[state=active]:border-[#c0a062] data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Brochure
              </TabsTrigger>
              <TabsTrigger
                value="guides"
                className="h-auto rounded-none border border-gray-200 px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-gray-900 transition-all duration-300 hover:border-black data-[state=active]:border-[#c0a062] data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Guides
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <DownloadCard key={item.id} item={item} />
                  ))
                ) : (
                  <div className="col-span-1 border border-gray-200 bg-gray-50 py-20 text-center md:col-span-2 lg:col-span-3">
                    <p className="font-light text-gray-500">
                      No resources match your search criteria.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="catalogue" className="mt-6">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.filter((item) => item.category === "catalogue")
                  .length > 0 ? (
                  filteredItems
                    .filter((item) => item.category === "catalogue")
                    .map((item) => <DownloadCard key={item.id} item={item} />)
                ) : (
                  <div className="col-span-1 border border-gray-200 bg-gray-50 py-20 text-center md:col-span-2 lg:col-span-3">
                    <p className="font-light text-gray-500">
                      No catalogue resources match your search criteria.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="brochure" className="mt-6">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.filter((item) => item.category === "brochure")
                  .length > 0 ? (
                  filteredItems
                    .filter((item) => item.category === "brochure")
                    .map((item) => <DownloadCard key={item.id} item={item} />)
                ) : (
                  <div className="col-span-1 border border-gray-200 bg-gray-50 py-20 text-center md:col-span-2 lg:col-span-3">
                    <p className="font-light text-gray-500">
                      No brochures match your search criteria.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-6">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.filter((item) => item.category === "guides")
                  .length > 0 ? (
                  filteredItems
                    .filter((item) => item.category === "guides")
                    .map((item) => <DownloadCard key={item.id} item={item} />)
                ) : (
                  <div className="col-span-1 border border-gray-200 bg-gray-50 py-20 text-center md:col-span-2 lg:col-span-3">
                    <p className="font-light text-gray-500">
                      No guide resources match your search criteria.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Request Section */}
      <CallToAction
        buttons={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
    </div>
  );
};

// Download Card Component
const DownloadCard: React.FC<{ item: DownloadItem }> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group h-full cursor-pointer overflow-hidden border  border-gray-200 bg-white transition-all duration-700 hover:shadow-2xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
          <Image
            src={
              item.thumbnail
                ? convertGoogledriveImage(item.thumbnail)
                : `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80`
            }
            width={800}
            height={450}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          <div className="absolute right-4 top-4 z-20">
            <Badge
              variant="outline"
              className="border-gray-300 bg-white/80 px-3 py-1 text-xs uppercase tracking-wider text-black backdrop-blur-sm"
            >
              {item.fileType.toUpperCase()}
            </Badge>
          </div>
        </div>
        <CardContent className="relative p-8">
          <div className="absolute left-0 right-0 top-0 h-1 w-0 bg-[#c0a062] transition-all duration-1000 group-hover:w-full"></div>
          <div className="mb-4 flex items-center space-x-2 text-xs text-gray-500">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h3 className="mb-3 text-xl font-extralight tracking-tight text-gray-900 transition-colors duration-500 group-hover:text-black">
            {item.title}
          </h3>
          <div className="mb-4 h-px w-10 bg-gray-200 transition-all duration-700 group-hover:w-20"></div>
          <p className="mb-8 line-clamp-2 text-sm font-light text-gray-600">
            {item.description}
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(item.downloadUrl, "_blank")}
            className="flex w-full items-center justify-center space-x-2 rounded-none border-black/70 py-6 text-xs font-light uppercase tracking-[0.2em] text-black transition-all duration-500 hover:bg-black hover:text-white group-hover:border-black"
          >
            <Download className="mr-2 h-4 w-4" />
            <span>View & Download</span>
            <ChevronRight className="ml-2 h-4 w-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DownloadsPage;

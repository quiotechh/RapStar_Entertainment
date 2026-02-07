"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter, Grid3x3, LayoutGrid, Rows } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  // Maternity
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=1000&fit=crop",
    alt: "Maternity 1",
    category: "maternity",
    aspect: "portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493882657176-db2a2e57c3c8?w=800&h=1000&fit=crop",
    alt: "Maternity 2",
    category: "maternity",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578842196942-a883b03b0f05?w=1200&h=800&fit=crop",
    alt: "Maternity 3",
    category: "maternity",
    aspect: "landscape",
  },

  // Newborn
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1000&fit=crop",
    alt: "Newborn 1",
    category: "newborn",
    aspect: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=800&fit=crop",
    alt: "Newborn 2",
    category: "newborn",
    aspect: "square",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&h=1000&fit=crop",
    alt: "Newborn 3",
    category: "newborn",
    aspect: "portrait",
  },

  // Baby
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=1000&fit=crop",
    alt: "Baby 1",
    category: "baby",
    aspect: "portrait",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=800&fit=crop",
    alt: "Baby 2",
    category: "baby",
    aspect: "landscape",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1578842196942-a883b03b0f05?w=800&h=800&fit=crop",
    alt: "Baby 3",
    category: "baby",
    aspect: "square",
  },

  // Cake Smash
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=1000&fit=crop",
    alt: "Cake Smash 1",
    category: "cake-smash",
    aspect: "portrait",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=800&h=800&fit=crop",
    alt: "Cake Smash 2",
    category: "cake-smash",
    aspect: "square",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=800&fit=crop",
    alt: "Cake Smash 3",
    category: "cake-smash",
    aspect: "landscape",
  },

  // Family
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop",
    alt: "Family 1",
    category: "family",
    aspect: "portrait",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1543699539-33f54bcee410?w=1200&h=800&fit=crop",
    alt: "Family 2",
    category: "family",
    aspect: "landscape",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=800&h=800&fit=crop",
    alt: "Family 3",
    category: "family",
    aspect: "square",
  },

  // More images
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1200&h=800&fit=crop",
    alt: "Maternity 4",
    category: "maternity",
    aspect: "landscape",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=800&fit=crop",
    alt: "Newborn 4",
    category: "newborn",
    aspect: "square",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=1000&fit=crop",
    alt: "Baby 4",
    category: "baby",
    aspect: "portrait",
  },
];

const categories = [
  { id: "all", name: "All", icon: "🎨" },
  { id: "maternity", name: "Maternity", icon: "🤰" },
  { id: "newborn", name: "Newborn", icon: "👶" },
  { id: "baby", name: "Baby", icon: "👼" },
  { id: "cake-smash", name: "Cake Smash", icon: "🎂" },
  { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦" },
];

type LayoutType = "masonry" | "grid" | "rows";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [layout, setLayout] = React.useState<LayoutType>("masonry");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage,
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage,
      );
      const prevIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  const getGridClass = () => {
    switch (layout) {
      case "masonry":
        return "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6";
      case "grid":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
      case "rows":
        return "grid grid-cols-1 gap-6 max-w-4xl mx-auto";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-purple-50/20 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-100/50 to-purple-100/50" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-violet-600 to-transparent mx-auto mb-6" />

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Portfolio
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-violet-600 italic font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Moments Captured, Memories Treasured
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Explore our collection of beautiful maternity, newborn, baby, and
              family photography
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Layout Controls */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full"
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                Filter
              </motion.button>

              <div
                className={`${isFilterOpen ? "flex" : "hidden"} md:flex flex-wrap gap-2`}
              >
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Layout Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2 hidden md:inline">
                View:
              </span>
              {[
                {
                  type: "masonry" as LayoutType,
                  icon: <Grid3x3 className="w-5 h-5" />,
                  label: "Masonry",
                },
                {
                  type: "grid" as LayoutType,
                  icon: <LayoutGrid className="w-5 h-5" />,
                  label: "Grid",
                },
                {
                  type: "rows" as LayoutType,
                  icon: <Rows className="w-5 h-5" />,
                  label: "Rows",
                },
              ].map((layoutOption) => (
                <motion.button
                  key={layoutOption.type}
                  onClick={() => setLayout(layoutOption.type)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    layout === layoutOption.type
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={layoutOption.label}
                >
                  {layoutOption.icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${layout}`}
              className={getGridClass()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    layout === "masonry" ? "mb-6 break-inside-avoid" : ""
                  } ${
                    layout === "rows"
                      ? "aspect-[16/9]"
                      : image.aspect === "landscape"
                        ? "aspect-[4/3]"
                        : image.aspect === "square"
                          ? "aspect-square"
                          : "aspect-[3/4]"
                  }`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => openLightbox(image.id)}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />

                  {/* Overlay */}
                  <motion.div className="absolute inset-0 bg-linear-to-t from-violet-900/90 via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.div
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-block mb-3"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ZoomIn className="w-6 h-6 text-white" />
                      </motion.div>
                      <p className="text-white text-sm font-light">
                        {image.alt}
                      </p>
                    </div>
                  </motion.div>

                  {/* Border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-400 transition-all duration-300 rounded-2xl" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl text-gray-500">
                No images found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null &&
          (() => {
            const currentImage = filteredImages.find(
              (img) => img.id === selectedImage,
            );
            if (!currentImage) return null;

            return (
              <motion.div
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-violet-400 transition-colors z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                >
                  <X className="w-8 h-8 md:w-10 md:h-10" />
                </motion.button>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 text-white hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <motion.div whileHover={{ x: -5, scale: 1.2 }}>
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <button
                  className="absolute right-4 text-white hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <motion.div whileHover={{ x: 5, scale: 1.2 }}>
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Image */}
                <motion.div
                  className="relative max-w-6xl max-h-[85vh] w-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    width={1200}
                    height={1500}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                    unoptimized
                  />
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
}

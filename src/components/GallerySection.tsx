"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/services/maternity/maternity.jpeg",
    alt: "Maternity Photoshoot",
    category: "Maternity",
    size: "large", // Takes 2 columns
  },
  {
    id: 2,
    src: "services/newborn/newborn.jpeg",
    alt: "Newborn Photoshoot",
    category: "newborn",
    size: "medium",
  },
  {
    id: 3,
    src: "/services/baby/baby1.jpeg",
    alt: "Baby Photoshoot",
    category: "Baby",
    size: "medium",
  },
  {
    id: 4,
    src: "/services/family/family2.jpg",
    alt: "Family Photoshoot",
    category: "Family",
    size: "medium",
  },
  {
    id: 5,
    src: "/services/maternity/maternity8.jpg",
    alt: "Maternity Portraits",
    category: "Maternity",
    size: "medium",
  },
  {
    id: 6,
    src: "services/newborn/newborn1.jpeg",
    alt: "family",
    category: "newborn",
    size: "large", // Takes 2 columns
  },
  {
    id: 7,
    src: "/services/baby/baby2.jpeg",
    alt: "Baby Moments",
    category: "Baby",
    size: "medium",
  },
  {
    id: 8,
    src: "/services/family/family5.jpg",
    alt: "Family Love",
    category: "Family",
    size: "medium",
  },
  {
    id: 9,
    src: "/services/newborn/newborn3.jpeg",
    alt: "Newborn Care",
    category: "Newborn",
    size: "medium",
  },
  {
    id: 10,
    src: "services/newborn/newborn4.jpeg",
    alt: "Family Bonds",
    category: "Family",
    size: "medium",
  },
];

function GalleryImageCard({
  image,
  index,
}: {
  image: (typeof galleryImages)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getSizeClass = () => {
    if (image.size === "large") {
      return "md:col-span-2 md:row-span-2";
    }
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, rotate: 0 }
          : { opacity: 0, scale: 0, rotate: -10 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        bounce: 0.4,
      }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${getSizeClass()} aspect-square`}
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-block mb-3"
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <ZoomIn className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-white text-lg font-medium">{image.category}</p>
          <p className="text-purple-200 text-sm mt-1">{image.alt}</p>
        </div>
      </motion.div>

      {/* Border effect with glow */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 rounded-2xl"
        initial={{ boxShadow: "0 0 0 rgba(168, 85, 247, 0)" }}
        whileHover={{
          boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ease-in-out" />

      {/* Category tag */}
      <motion.div
        className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full"
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ delay: index * 0.12 + 0.3 }}
      >
        <p className="text-white text-xs font-medium">{image.category}</p>
      </motion.div>

      {/* Pulsing corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-purple-500/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default function HomeGallerySection() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const gridRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Purple linear Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />

      {/* Animated Decorative Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="h-px w-16 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR GALLERY
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A glimpse into our world of capturing life&apos;s most precious
            moments
          </motion.p>
        </motion.div>

        {/* Collage Grid - Images appear one by one */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={isGridInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {galleryImages.map((image, index) => (
            <GalleryImageCard key={image.id} image={image} index={index} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link href="/gallery">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium text-base md:text-lg tracking-wide rounded-full overflow-hidden shadow-lg shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-700 to-violet-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Glow effect */}
              <motion.div className="absolute inset-0 bg-linear-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

              <span className="relative z-10">View Full Gallery</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

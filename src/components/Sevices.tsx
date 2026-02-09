"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-purple-500/20"
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-purple-600/20 to-transparent transition-all duration-500 z-10 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-80 md:h-96 overflow-hidden rounded-t-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index < 3}
        />

        {/* Purple Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-purple-600/50 to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-sm md:text-base font-light text-center leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {service.description}
          </p>
        </div>

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 via-violet-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Title Section */}
      <div className="p-6 md:p-8 text-center relative">
        <h3 className="text-2xl md:text-3xl font-normal text-white tracking-wider mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Decorative underline */}
        <div className="h-0.5 w-12 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      id: 1,
      title: "MATERNITY PHOTOSHOOT",
      image: "/services/maternity/maternity.jpeg",
      description:
        "Celebrate the beauty of pregnancy with elegant maternity portraits",
    },
    {
      id: 2,
      title: "BABY PHOTOSHOOT",
      image: "/services/baby/baby photoshoot.jpeg",
      description: "Adorable milestone sessions for growing babies",
    },
    {
      id: 3,
      title: "NEWBORN PHOTOSHOOT",
      image: "/services/newborn/new born.webp",
      description: "Capture precious first moments of your newborn baby",
    },
    {
      id: 4,
      title: "FAMILY PHOTOSHOOT",
      image: "/services/family/sonakshi familyshoot.jpg",
      description: "Timeless family portraits that celebrate togetherness",
    },
    {
      id: 5,
      title: "PORTFOLIO SHOOTS",
      image: "/services/portfolio/modular-kitchen-portfolio.jpg",
      description:
        "Professional portfolio photography for aspiring models and actors",
    },
    {
      id: 6,
      title: "EVENTS SHOOTS",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=800&fit=crop",
      description:
        "Capture every special moment of your events and celebrations",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            OUR PHOTOGRAPHY SERVICES
          </h2>

          <p className="text-lg md:text-xl text-purple-400 italic font-light mb-4 tracking-wide">
            Global Award winning images
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            {'"'}Explore our portfolio of timeless photography, where every
            image tells a unique and beautiful story.{'"'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            href={"/services"}
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium text-base md:text-lg tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 rounded-full"
          >
            <span className="relative z-10">VIEW ALL SERVICES</span>
            <div className="absolute inset-0 bg-linear-to-r from-violet-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative frame - shifted behind and to the right */}
              <div className="absolute top-3 -right-3 md:top-4 md:-right-4 w-full h-full border-2 border-violet-300 rounded-2xl" />
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
                {/* Placeholder - replace with your photo later */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-200 flex items-center justify-center">
                  <span className="text-violet-400 text-sm font-medium tracking-wide">Your Photo Here</span>
                </div>
                {/* Uncomment and update path when you have the photo */}
                {/* <Image
                  src="/images/about-photo.jpg"
                  alt="Rapstar Entertainment"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-violet-600 font-medium tracking-widest uppercase text-sm">
                Welcome to Rapstar Entertainment
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Capturing the Most{" "}
                <span className="font-semibold text-violet-700">Beautiful Chapter</span>{" "}
                of Your Life
              </h2>
            </div>

            <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600" />

            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                We believe that every moment of motherhood is extraordinary. Our passion lies
                in creating timeless photographs that celebrate the beauty, strength, and grace
                of this incredible journey.
              </p>
              <p>
                With a warm and personalized approach, we ensure every session feels comfortable,
                natural, and uniquely yours. From the glow of maternity to the tiny details of
                your newborn, we&apos;re here to preserve these fleeting moments forever.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-violet-700">500+</p>
                <p className="text-sm text-gray-500 mt-1">Happy Families</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-violet-700">5+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-violet-700">1000+</p>
                <p className="text-sm text-gray-500 mt-1">Photos Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

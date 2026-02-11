"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

function Counter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, duration, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + "+";
      }
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <div ref={counterRef}>
      <p ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
        0+
      </p>
    </div>
  );
}

export default function WelcomeSection() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });
  const isTaglineInView = useInView(taglineRef, {
    once: true,
    margin: "-100px",
  });
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });
  const isParagraphsInView = useInView(paragraphsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative frame - shifted behind and to the right */}
              <div className="absolute top-3 -right-3 md:top-4 md:-right-4 w-full h-full border-2 border-purple-500/40 rounded-2xl" />
              {/* Photo */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 z-10 border border-purple-500/30">
                {/* Placeholder - replace with your photo later */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 to-violet-900/60 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-purple-300 text-sm font-medium tracking-wide">
                    Your Photo Here
                  </span>
                </div>
                {/* Uncomment and update path when you have the photo */}
                <Image
                  src="/Debina-and-Gurmeet.jpg"
                  alt="Rapstar Entertainment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-6">
            {/* Tagline */}
            <motion.div
              ref={taglineRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTaglineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
                Welcome to Rapstar Entertainment
              </p>
            </motion.div>

            {/* Heading */}
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                Capturing the Most{" "}
                <span className="font-semibold text-purple-400">
                  Beautiful Chapter
                </span>{" "}
                of Your Life
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isHeadingInView
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-16 h-0.5 bg-linear-to-r from-purple-500 to-violet-600 origin-left"
            />

            {/* Paragraphs */}
            <motion.div
              ref={paragraphsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isParagraphsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg"
            >
              <p>
                We believe that every moment of motherhood is extraordinary. Our
                passion lies in creating timeless photographs that celebrate the
                beauty, strength, and grace of this incredible journey.
              </p>
              <p>
                With a warm and personalized approach, we ensure every session
                feels comfortable, natural, and uniquely yours. From the glow of
                maternity to the tiny details of your newborn, we&apos;re here
                to preserve these fleeting moments forever.
              </p>
            </motion.div>

            {/* Counter Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-4"
            >
              <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <Counter to={500} duration={2.5} />
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Happy Families</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <Counter to={5} duration={2} />
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <Counter to={1000} duration={2.5} />
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Photos Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

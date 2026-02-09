"use client";

import { motion, useInView } from "framer-motion";
import {
  Camera,
  Heart,
  Award,
  Clock,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "We use top-of-the-line cameras, lenses, and studio lighting to ensure every shot is crisp, vibrant, and gallery-worthy.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Heart,
    title: "Gentle & Patient Approach",
    description:
      "We take our time with every session, especially with newborns and babies, ensuring comfort and safety above all.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Our work has been recognized globally, reflecting our dedication to artistic excellence and storytelling.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Receive your beautifully edited photos within days, not weeks. We know you can't wait to see the results.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Creative Vision",
    description:
      "Every session is uniquely styled and art-directed to reflect your personality and tell your family's story.",
    color: "from-purple-600 to-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable Studio",
    description:
      "Our studio is designed with families in mind — clean, warm, and equipped with everything for a smooth session.",
    color: "from-violet-600 to-purple-700",
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 50, rotateX: -15 }
      }
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      className="group relative p-8 md:p-10 rounded-2xl border border-purple-500/20 bg-linear-to-br from-gray-900 to-black hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
    >
      {/* Animated linear background on hover */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-purple-500/10 to-transparent transition-all duration-1000 ease-in-out" />

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-purple-500/20 to-transparent rounded-bl-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon with animated background */}
      <motion.div
        className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-20`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <reason.icon className="w-8 h-8 text-purple-400 relative z-10 group-hover:text-purple-300 transition-colors duration-300" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-wide group-hover:text-purple-300 transition-colors duration-300 relative z-10">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
        {reason.description}
      </p>

      {/* Animated bottom line */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${reason.color}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Particle effect on hover */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 20, 0], opacity: [0, 0.5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </motion.div>
  );
}

function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay, type: "spring", bounce: 0.4 }}
      className="relative group"
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-500 to-violet-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative">
        <motion.p
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-400"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.p>
        <p className="text-purple-300 text-sm mt-2 font-light">{label}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Animated background linears */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="h-px w-16 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"
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
            WHY CHOOSE US
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We pour love and artistry into every frame, creating photographs
            that your family will treasure for a lifetime.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          ref={statsRef}
          className="mt-16 md:mt-20 py-12 px-6 md:px-12 bg-linear-to-r from-gray-900 to-black rounded-2xl border border-purple-500/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-purple-600/5 via-violet-600/10 to-purple-600/5"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <StatCard value="500+" label="Happy Families" delay={0.2} />
            <StatCard value="5+" label="Years Experience" delay={0.3} />
            <StatCard value="1000+" label="Photos Delivered" delay={0.4} />
            <StatCard value="100%" label="Client Satisfaction" delay={0.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

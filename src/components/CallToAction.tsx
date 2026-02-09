"use client";

import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, LucideIcon } from "lucide-react";
import { useRef } from "react";

function ContactCard({
  icon: Icon,
  title,
  subtitle,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
    >
      {/* Animated background linear */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-purple-400/10 to-transparent transition-all duration-1000 ease-in-out" />

      {/* Icon with pulse animation */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-purple-500 to-violet-500 rounded-full blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Icon className="w-6 h-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300 relative z-10" />
      </motion.div>

      <p className="text-white font-medium relative z-10">{title}</p>
      <p className="text-purple-300 text-sm font-light relative z-10 group-hover:text-purple-200 transition-colors duration-300">
        {subtitle}
      </p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-violet-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

export default function CallToAction() {
  const headerRef = useRef(null);
  const buttonsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isButtonsInView = useInView(buttonsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background - matching purple linear theme */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />

      {/* Animated decorative orbs */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Top decorative line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="h-px w-16 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"
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
            LET&apos;S CREATE MAGIC
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto font-light leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to capture your most precious moments? Book a session with us
            today and let&apos;s create beautiful memories together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://wa.me/918383913667"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium text-base md:text-lg tracking-wide rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
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

              <svg
                className="w-6 h-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Book via WhatsApp</span>
            </motion.a>

            <motion.a
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-purple-500/30 text-white font-medium text-base md:text-lg tracking-wide rounded-full backdrop-blur-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Glow effect */}
              <motion.div className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              <span className="relative z-10">Contact Us</span>
            </motion.a>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <ContactCard
              icon={Phone}
              title="+91 83839 13667"
              subtitle="Call or WhatsApp"
              delay={0.2}
            />
            <ContactCard
              icon={Mail}
              title="hello@rapstar.com"
              subtitle="Email Us"
              delay={0.35}
            />
            <ContactCard
              icon={MapPin}
              title="H No F 621, Palam Extension, Ramphal Chowk Rd, Sector 7 Dwarka, Delhi 110077"
              subtitle="Visit Our Studio"
              delay={0.5}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

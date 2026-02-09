"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/30 relative overflow-hidden"
    >
      {/* Animated border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/20 via-violet-500/20 to-purple-500/20 animate-pulse" />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-in-out" />

      {/* Quote Icon with blink animation */}
      <motion.div
        className="mb-6"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Quote className="w-12 h-12 text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-violet-200" />
      </motion.div>

      {/* Rating Stars with staggered animation */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
          >
            <Star className="w-5 h-5 fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110 animate-pulse" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 min-h-30 relative z-10">
        {'"'}
        {testimonial.text}
        {'"'}
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
        <div className="relative">
          <div
            className="w-14 h-14 rounded-full bg-cover bg-center ring-2 ring-violet-400/50 group-hover:ring-violet-300 transition-all duration-300"
            style={{ backgroundImage: `url(${testimonial.image})` }}
          />
          <div className="absolute inset-0 rounded-full bg-violet-600/20 group-hover:bg-violet-500/30 transition-colors duration-300" />

          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>

        <div>
          <h4 className="text-white font-medium text-lg tracking-wide">
            {testimonial.name}
          </h4>
          <p className="text-violet-300 text-sm font-light">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headerRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ravi Shrivas",
      role: "Maternity Shoot",
      image: "avatar_men.png",
      text: "Loved the maternity shoot experience! Studio was clean, well-decorated, and the team is super polite and creative. They even helped with small details like hair, expressions, and poses. Pictures came out exactly like I wanted — natural and glowing! ✨",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Rajak",
      role: "New Parents",
      image: "avatar_men.png",
      text: "It was my first professional shoot and I couldn't have asked for a better team. They made me smile, laugh, and feel confident. Thank you Jyoti and team for creating such lovely memories for me and my family. You guys are the best! 💕. The photos are treasures we'll cherish forever.",
      rating: 5,
    },
    {
      id: 3,
      name: "Reenu Chauhan",
      role: "Maternity Shoot",
      image: "avatar_women.avif",
      text: "I did my maternity shoot here after seeing their Instagram work, and I'm so glad I chose them! From outfit selection to editing, everything was handled perfectly. The photos came out dreamy 😍 Highly recommend Milaanaa Maven if you want classy, elegant pictures!",
      rating: 5,
    },
    {
      id: 4,
      name: "Mayank Singh",
      role: "Maternity Shoot",
      image: "avatar_men.png",
      text: "My maternity shoot experience was really good. All the photos were delivered on time without any delay. The team is very active on WhatsApp and calls, and all my queries were resolved quickly. Overall, the service was professional and reliable. Highly recommended😍❤️",
      rating: 5,
    },
    {
      id: 5,
      name: "Babi Pandey",
      role: "Maternity Shoot",
      image: "avatar_men.png",
      text: "1 st time maternity shoot done , i was hassitating how it will be? but my experience was awesome.only bcoz of jyoti mam she is the 1 man army,makeup ,hairdo n shoot done was by her , she made me more comfortable.she has a friendly nature, now i will also do my baby shoot with her at rapstar entertainment",
      rating: 5,
    },
    {
      id: 6,
      name: "Ankit Chauhan",
      role: "Maternity Shoot",
      image: "avatar_men.png",
      text: "I'm so glad I chose Milaanaa Maven for my maternity shoot. The ambience, the guidance, the vibes everything was perfect. The pictures came out stunning, 😍",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />

      {/* Animated Decorative Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header with scroll animation */}
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
            <motion.div
              className="h-px w-16 bg-linear-to-r from-transparent via-violet-300 to-transparent mx-auto mb-6"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="text-base md:text-lg text-violet-200 max-w-2xl mx-auto font-light leading-relaxed">
            Hear from the families who trusted us to capture their most precious
            moments
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA with scroll animation */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-violet-200 text-lg md:text-xl font-light mb-6">
            Ready to create your own story?
          </p>
          <Link
            href={
              "https://wa.me/98383913667?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services"
            }
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium text-base md:text-lg tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 rounded-full"
          >
            <span className="relative z-10">BOOK YOUR SESSION</span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-violet-700 to-purple-700 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

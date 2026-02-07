"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Award, Clock, Palette, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "We use top-of-the-line cameras, lenses, and studio lighting to ensure every shot is crisp, vibrant, and gallery-worthy.",
  },
  {
    icon: Heart,
    title: "Gentle & Patient Approach",
    description:
      "We take our time with every session, especially with newborns and babies, ensuring comfort and safety above all.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Our work has been recognized globally, reflecting our dedication to artistic excellence and storytelling.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Receive your beautifully edited photos within days, not weeks. We know you can't wait to see the results.",
  },
  {
    icon: Palette,
    title: "Creative Vision",
    description:
      "Every session is uniquely styled and art-directed to reflect your personality and tell your family's story.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable Studio",
    description:
      "Our studio is designed with families in mind — clean, warm, and equipped with everything for a smooth session.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-600 to-transparent mx-auto mb-6" />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-wide">
            WHY CHOOSE US
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            We pour love and artistry into every frame, creating photographs that
            your family will treasure for a lifetime.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group relative p-8 md:p-10 rounded-2xl border border-gray-100 hover:border-violet-200 bg-white hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-violet-600 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 tracking-wide group-hover:text-violet-700 transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-light leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative bottom line on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-16 md:mt-20 py-10 px-6 md:px-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-violet-200 text-sm mt-1 font-light">
                Happy Families
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">5+</p>
              <p className="text-violet-200 text-sm mt-1 font-light">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                1000+
              </p>
              <p className="text-violet-200 text-sm mt-1 font-light">
                Photos Delivered
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-violet-200 text-sm mt-1 font-light">
                Client Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

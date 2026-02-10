"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Maternity Photoshoot",
    description:
      "Celebrate the beauty and strength of motherhood with stunning, timeless maternity portraits that capture this extraordinary chapter of your life.",
    href: "/services/maternity-photoshoot",
    image: "/services/maternity/maternity1.jpg",
  },
  {
    title: "Baby Photoshoot",
    description:
      "Capture every adorable milestone — from tiny toes and first smiles to cake smash celebrations — with heartwarming portraits your family will treasure.",
    href: "/services/baby-photoshoot",
    image: "/services/baby/baby1.jpg",
  },
  {
    title: "Newborn Photoshoot",
    description:
      "Preserve the tiniest details of your newborn's first days with delicate, artistic portraits crafted with the utmost care and safety.",
    href: "/services/newborn-photoshoot",
    image: "/services/newborn/newborn.jpeg",
  },
  {
    title: "Family Photoshoot",
    description:
      "Celebrate the love, laughter, and togetherness of your family with timeless portraits that capture who you are right now.",
    href: "/services/family-photoshoot",
    image: "/services/family/family1.jpg",
  },
  {
    title: "Portfolio Shoots",
    description:
      "Professional portfolio photography for models, actors, influencers, and entrepreneurs looking to elevate their personal brand.",
    href: "/services/portfolio-shoots",
    image: "/services/portfolio/portfolio.jpg",
  },
  {
    title: "Events Photography",
    description:
      "Professional event photography that captures the energy, emotion, and unforgettable moments of your special occasions.",
    href: "/services/events-shoots",
    image: "/services/family/family2.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
              OUR SERVICES
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              From the glow of maternity to the joy of family gatherings, we
              offer a range of professional photography services to capture
              life&apos;s most beautiful moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block group">
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-3">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-purple-600/20 to-transparent transition-all duration-500 z-10 pointer-events-none" />

                    {/* Service Image */}
                    <div className="relative aspect-4/3 bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Purple Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Top border accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 via-violet-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>

                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
              NOT SURE WHICH SERVICE?
            </h2>
            <p className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              No worries! Reach out to us and we&apos;ll help you choose the
              perfect photoshoot package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918383913667"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 text-sm sm:text-base overflow-hidden"
              >
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">WhatsApp Us</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-purple-500/30 text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 text-sm sm:text-base backdrop-blur-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

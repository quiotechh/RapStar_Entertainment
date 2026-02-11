"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Star,
  Layers,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Camera,
    title: "Professional Quality",
    description:
      "Studio-grade lighting, backdrops, and equipment to create polished, industry-standard portfolio images.",
  },
  {
    icon: Star,
    title: "Personal Branding",
    description:
      "We help you build a visual identity that communicates confidence, professionalism, and authenticity.",
  },
  {
    icon: Layers,
    title: "Multiple Looks",
    description:
      "Variety of outfit changes, poses, and setups to give you a diverse and versatile portfolio.",
  },
  {
    icon: Briefcase,
    title: "Industry Ready",
    description:
      "Images formatted and optimized for social media, websites, acting portfolios, and professional use.",
  },
];

const includes = [
  "Pre-session consultation to discuss your goals and vision",
  "1.5 to 2 hour professional studio session",
  "Professional hair and makeup guidance",
  "Multiple outfit and look changes",
  "Variety of lighting setups and backdrops",
  "Professional retouching and skin editing",
  "20-30 high-resolution edited digital images",
  "Web-optimized versions for social media and online use",
];

const portfolioTypes = [
  {
    title: "Model Portfolios",
    description:
      "Build a stunning comp card and portfolio with versatile images showcasing your range — from commercial to editorial looks. Perfect for aspiring and professional models.",
  },
  {
    title: "Actor Headshots",
    description:
      "Professional headshots that capture your essence and range. We create images that casting directors notice — natural, expressive, and character-driven.",
  },
  {
    title: "Corporate Portraits",
    description:
      "Polished professional headshots and branding photos for LinkedIn, company websites, business cards, and corporate profiles. Look your best in the professional world.",
  },
  {
    title: "Influencer & Content Creator",
    description:
      "Eye-catching, on-brand imagery for your social media, blog, or YouTube channel. We help you create a cohesive visual identity that resonates with your audience.",
  },
];

const faqs = [
  {
    question: "Who is a portfolio shoot for?",
    answer:
      "Portfolio shoots are for anyone who needs professional imagery — models, actors, influencers, entrepreneurs, corporate professionals, artists, and anyone looking to elevate their personal or professional brand.",
  },
  {
    question: "How should I prepare for my portfolio session?",
    answer:
      "Bring 3-5 outfit options that reflect different aspects of your personality or brand. We'll discuss looks during the consultation. Come with clean, moisturized skin and we'll guide you on hair and makeup.",
  },
  {
    question: "Do you provide hair and makeup services?",
    answer:
      "We can recommend professional hair and makeup artists who work with us regularly. This is an optional add-on service. Many clients also choose to do their own styling.",
  },
  {
    question: "Can I use these photos commercially?",
    answer:
      "Yes! All delivered images come with a personal and commercial usage license. You're free to use them on your website, social media, business materials, and professional profiles.",
  },
];

export default function PortfolioShootsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-purple-950 to-black" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-purple-300 font-medium tracking-widest uppercase text-sm mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
              PORTFOLIO SHOOTS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
              Professional portfolio photography that showcases your best self
              — whether you&apos;re a model, actor, influencer, or entrepreneur
              looking to elevate your personal brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the Service */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute top-3 -right-3 md:top-4 md:-right-4 w-full h-full border-2 border-purple-500/40 rounded-2xl" />
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 z-10 border border-purple-500/30">
                  <Image
                    src="/services/portfolio/modular-kitchen-portfolio.jpg"
                    alt="Portfolio photoshoot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
                  Elevate Your Image
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Your Brand,{" "}
                  <span className="font-semibold text-purple-400">
                    Your Vision
                  </span>
                </h2>
              </div>

              <div className="w-16 h-0.5 bg-linear-to-r from-purple-500 to-violet-600" />

              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  First impressions matter, and great photography makes all the
                  difference. Our portfolio shoots are designed to create
                  powerful, professional imagery that opens doors and leaves a
                  lasting impression.
                </p>
                <p>
                  Whether you need headshots for casting calls, polished
                  corporate portraits, or creative editorial images for your
                  brand, we bring the expertise, equipment, and artistic vision
                  to make you look your absolute best.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-sm sm:text-base"
              >
                Book Your Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
              THE EXPERIENCE
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              A collaborative session focused on bringing out your confidence
              and personality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 bg-gray-900 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-900/40 flex items-center justify-center mb-5 group-hover:bg-purple-800/50 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
              WHO WE WORK WITH
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Tailored portfolio sessions for every professional need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {portfolioTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 md:p-10 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 bg-gray-900 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {type.description}
                </p>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-purple-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
                  Session Details
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  What&apos;s{" "}
                  <span className="font-semibold text-purple-400">
                    Included
                  </span>
                </h2>
              </div>
              <div className="w-16 h-0.5 bg-linear-to-r from-purple-500 to-violet-600" />

              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300 font-light text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute top-3 -left-3 md:top-4 md:-left-4 w-full h-full border-2 border-purple-500/40 rounded-2xl" />
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 z-10 border border-purple-500/30">
                  <Image
                    src="/services/portfolio/portfolio1.jpg"
                    alt="Portfolio session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
              OUR WORK
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Professional portfolios that make a lasting impression.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              "/services/portfolio/modular-kitchen-milaanaa-maven.jpg",
              "/services/portfolio/modular-kitchen-milaanaa-maven1.jpg",
              "/services/portfolio/modular-kitchen-milaanaa-maven4.jpg",
              "/services/portfolio/modular-kitchen-milaanaa-maven5.jpg",
              "/services/portfolio/modular-kitchen-milaanaa-maven6.jpg",
              "/services/portfolio/modular-kitchen-portfolio.jpg",
            ].map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-purple-500/20"
              >
                <Image
                  src={src}
                  alt={`Portfolio gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/40 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
              COMMON QUESTIONS
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 bg-gray-900 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-medium text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
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
              READY TO BOOK?
            </h2>
            <p className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Invest in your image and take your professional presence to the
              next level. Let&apos;s create a portfolio that opens doors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:from-purple-700 hover:to-violet-700 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 text-sm sm:text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-purple-500/30 text-white font-medium tracking-wide rounded-full backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 text-sm sm:text-base"
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
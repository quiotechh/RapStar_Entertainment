"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-800 to-violet-950" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent mx-auto mb-8" />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            LET&apos;S CREATE MAGIC
          </h2>

          <p className="text-base md:text-lg text-violet-200 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Ready to capture your most precious moments? Book a session with us
            today and let&apos;s create beautiful memories together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-green-500 hover:bg-green-600 text-white font-medium text-base md:text-lg tracking-wide rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>

            <a
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/10 border border-white/30 text-white font-medium text-base md:text-lg tracking-wide rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-violet-400/20 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
              <Phone className="w-6 h-6 text-violet-300" />
              <p className="text-white font-medium">+91 XXXXX XXXXX</p>
              <p className="text-violet-300 text-sm font-light">Call or WhatsApp</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
              <Mail className="w-6 h-6 text-violet-300" />
              <p className="text-white font-medium">hello@rapstar.com</p>
              <p className="text-violet-300 text-sm font-light">Email Us</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="w-6 h-6 text-violet-300" />
              <p className="text-white font-medium">Your Studio Location</p>
              <p className="text-violet-300 text-sm font-light">Visit Our Studio</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      link: "tel:+919876543210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@photography.com", "bookings@photography.com"],
      link: "mailto:hello@photography.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["New Delhi, India", "Available for travel"],
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sun: By Appointment"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", link: "#" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", link: "#" },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Purple Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1920&h=1080&fit=crop')",
          }}
        />
        {/* Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-900/70 via-purple-800/60 to-violet-950/70" />
        {/* Additional Light Purple Hue */}
        <div className="absolute inset-0 bg-violet-500/20" />

        {/* Animated Blur Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-violet-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-violet-300 to-transparent mx-auto mb-6" />

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let{"'"}s Connect
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-violet-200 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to capture your precious moments? Get in touch with us today
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="text-violet-200 text-sm font-medium mb-2 block">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-violet-300/50 focus:border-violet-400 focus:ring-violet-400/50 h-12 rounded-xl"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="text-violet-200 text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-violet-300/50 focus:border-violet-400 focus:ring-violet-400/50 h-12 rounded-xl"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="text-violet-200 text-sm font-medium mb-2 block">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-violet-300/50 focus:border-violet-400 focus:ring-violet-400/50 h-12 rounded-xl"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>

                {/* Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="text-violet-200 text-sm font-medium mb-2 block">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white h-12 rounded-xl px-4 focus:border-violet-400 focus:ring-violet-400/50 focus:outline-none"
                  >
                    <option value="" className="bg-violet-900">
                      Select a service
                    </option>
                    <option value="maternity" className="bg-violet-900">
                      Maternity Photography
                    </option>
                    <option value="newborn" className="bg-violet-900">
                      Newborn Photography
                    </option>
                    <option value="baby" className="bg-violet-900">
                      Baby Photography
                    </option>
                    <option value="cake-smash" className="bg-violet-900">
                      Cake Smash
                    </option>
                    <option value="family" className="bg-violet-900">
                      Family Photography
                    </option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <label className="text-violet-200 text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-violet-300/50 focus:border-violet-400 focus:ring-violet-400/50 rounded-xl resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white h-14 rounded-xl text-lg font-medium transition-all duration-300 shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : submitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 cursor-pointer group"
                    onClick={() => info.link && window.open(info.link, "_self")}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="bg-violet-500/20 p-3 rounded-xl text-violet-200 group-hover:bg-violet-500/30 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-lg mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-violet-200 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-white font-medium text-xl mb-6 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 p-4 rounded-xl text-violet-200 hover:bg-violet-500/30 transition-all duration-300 border border-white/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-linear-to-r from-violet-600/30 to-purple-600/30 backdrop-blur-xl rounded-2xl p-6 border border-violet-400/30 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl mb-3"
                >
                  ⚡
                </motion.div>
                <h4 className="text-white font-medium text-lg mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-violet-200 text-sm">
                  We typically respond within 2-4 hours during business hours
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </div>
  );
}

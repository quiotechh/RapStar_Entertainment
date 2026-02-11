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
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

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
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 83839 13667"],
      link: "tel:+918383913667",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["hello@rapstar.com", "bookings@rapstar.com"],
      link: "mailto:hello@rapstar.com",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: ["H No F 621, Palam Extension", "Sector 7 Dwarka, Delhi 110077"],
      link: "https://maps.google.com/?q=H+No+F+621,+Palam+Extension,+Ramphal+Chowk+Rd,+Sector+7+Dwarka,+Delhi,+New+Delhi,+Delhi+110077",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sun: By Appointment"],
      link: null,
      color: "from-fuchsia-500 to-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "https://www.instagram.com/rapstarentertainments/",
      color: "hover:bg-purple-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      link: "https://www.facebook.com/rapstarentertainments/",
      color: "hover:bg-purple-600",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      link: "https://wa.me/918383913667",
      color: "hover:bg-purple-600",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-purple-950/40 via-purple-900/20 to-black py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-5 py-2 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Let{"'"}s Connect
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>

            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
              Ready to capture your precious moments? We{"'"}re here to bring
              your vision to life with stunning photography
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-purple-950/30 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-200">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/40 border-purple-500/30 text-white placeholder:text-purple-300/30 focus-visible:ring-purple-500 h-12"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-purple-200">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-purple-500/30 text-white placeholder:text-purple-300/30 focus-visible:ring-purple-500 h-12"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-purple-200">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-purple-500/30 text-white placeholder:text-purple-300/30 focus-visible:ring-purple-500 h-12"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-purple-200">
                      Service Interested In *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded-md border border-purple-500/30 bg-black/40 px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <option value="" className="bg-black">
                        Select a service
                      </option>
                      <option value="maternity" className="bg-black">
                        Maternity Photography
                      </option>
                      <option value="newborn" className="bg-black">
                        Newborn Photography
                      </option>
                      <option value="baby" className="bg-black">
                        Baby Photography
                      </option>
                      <option value="cake-smash" className="bg-black">
                        Cake Smash
                      </option>
                      <option value="family" className="bg-black">
                        Family Photography
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-purple-200">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-black/40 border-purple-500/30 text-white placeholder:text-purple-300/30 focus-visible:ring-purple-500 resize-none"
                      placeholder="Tell us about your requirements and vision..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-linear-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-purple-700 text-white h-14 text-lg font-semibold shadow-lg shadow-purple-500/50 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
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
                        Sending Message...
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="bg-purple-950/30 border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors"
                  onClick={() => info.link && window.open(info.link, "_self")}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-linear-to-br ${info.color} p-3 rounded-lg text-white`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-base mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-purple-200/70 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links Card */}
            <Card className="bg-purple-950/30 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-lg text-white text-center">
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-purple-600/20 p-4 rounded-lg text-purple-200 ${social.color} transition-all`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Card */}
            <Card className="bg-linear-to-br from-purple-600/20 to-fuchsia-600/20 border-purple-400/30">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl mb-3"
                >
                  ⚡
                </motion.div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Quick Response
                </h4>
                <p className="text-purple-200 text-sm">
                  We reply within 2-4 hours during business hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="max-w-7xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-purple-950/30 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                Find Our Studio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden h-100 border border-purple-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4822897775634!2d77.0447!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sH%20No%20F%20621%2C%20Palam%20Extension%2C%20Ramphal%20Chowk%20Rd%2C%20Sector%207%20Dwarka%2C%20Delhi%2C%20New%20Delhi%2C%20Delhi%20110077!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="brightness-90"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <motion.a
          href="https://wa.me/918383913667"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/60 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </div>
  );
}

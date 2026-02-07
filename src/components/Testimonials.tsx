"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Expecting Mother",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "The maternity shoot was absolutely magical! Every photo captured the beauty and emotion of this special time. I couldn't be happier with the results.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael & Jessica Chen",
      role: "New Parents",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Our newborn session was perfection. The photographer was so gentle and patient with our baby. The photos are treasures we'll cherish forever.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Mother of Two",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "Both my maternity and newborn sessions exceeded expectations. The attention to detail and creative vision resulted in stunning, timeless photos.",
      rating: 5,
    },
    {
      id: 4,
      name: "David & Emma Wilson",
      role: "Happy Family",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Our family portraits are absolutely beautiful. The photographer made everyone feel comfortable and captured genuine moments of love and joy.",
      rating: 5,
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "First Time Mom",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      text: "From booking to delivery, the entire experience was seamless and professional. The cake smash session was so much fun, and the photos are adorable!",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Proud Father",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "The milestone session at 6 months captured our daughter's personality perfectly. These photos will be treasured for generations to come.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-900 via-purple-800 to-violet-950" />

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-violet-300 to-transparent mx-auto mb-6" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="text-base md:text-lg text-violet-200 max-w-2xl mx-auto font-light leading-relaxed">
            Hear from the families who trusted us to capture their most precious
            moments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-violet-200" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 min-h-30">
                {'"'}
                {testimonial.text}
                {'"'}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center ring-2 ring-violet-400/50 group-hover:ring-violet-300 transition-all duration-300"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div className="absolute inset-0 rounded-full bg-violet-600/20 group-hover:bg-violet-500/30 transition-colors duration-300" />
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-violet-200 text-lg md:text-xl font-light mb-6">
            Ready to create your own story?
          </p>
          <button className="group relative px-8 md:px-12 py-4 md:py-5 bg-white text-violet-900 font-medium text-base md:text-lg tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-400/50 hover:scale-105 rounded-full">
            <span className="relative z-10">BOOK YOUR SESSION</span>
            <div className="absolute inset-0 bg-linear-to-r from-violet-100 to-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
}

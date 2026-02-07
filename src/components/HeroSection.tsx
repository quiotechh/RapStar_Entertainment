"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();
  
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1920&h=1080&fit=crop",
      title: "Celebrate Your Journey",
      subtitle: "Capturing the beauty of motherhood with timeless elegance",
      cta: "Book Your Session"
    },
    {
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1920&h=1080&fit=crop",
      title: "Every Moment Matters",
      subtitle: "Preserve precious memories before your little one arrives",
      cta: "View Gallery"
    },
    {
      image: "https://images.unsplash.com/photo-1578842196942-a883b03b0f05?w=1920&h=1080&fit=crop",
      title: "Radiant & Beautiful",
      subtitle: "Professional maternity photography that celebrates you",
      cta: "Learn More"
    }
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[85vh] min-h-150 w-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      transform: "translateZ(0)",
                    }}
                    key={`bg-${index}-${currentSlide}`}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl will-change-transform" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-2xl will-change-transform" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="max-w-2xl space-y-6">
                      {/* Decorative Line */}
                      <motion.div
                        key={`line-${currentSlide}`}
                        className="w-20 h-0.5 bg-linear-to-r from-violet-500 to-purple-600 shadow-lg shadow-purple-500/50 will-change-[opacity]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      />

                      {/* Title */}
                      <motion.h1
                        key={`title-${currentSlide}`}
                        className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-wide will-change-[transform,opacity]"
                        style={{
                          textShadow: '0 2px 20px rgba(0, 0, 0, 0.3), 0 4px 40px rgba(0, 0, 0, 0.2)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        key={`sub-${currentSlide}`}
                        className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-xl leading-relaxed will-change-[transform,opacity]"
                        style={{
                          textShadow: '0 2px 20px rgba(0, 0, 0, 0.3), 0 4px 40px rgba(0, 0, 0, 0.2)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        key={`cta-${currentSlide}`}
                        className="pt-4 will-change-[transform,opacity]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                      >
                        <Button 
                          size="lg"
                          className="bg-linear-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 px-8 py-6 text-base md:text-lg font-medium rounded-none border-2 border-transparent hover:border-violet-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                          {slide.cta}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Carousel Indicator Dots */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {slides.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => scrollToSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? 'w-10 bg-violet-600' 
                          : 'w-2.5 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                      type="button"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-white/70 text-sm font-light tracking-widest uppercase">Scroll</span>
                    <motion.div 
                      className="w-px h-12 bg-linear-to-b from-white/50 to-transparent"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 bg-black/30 border-white/20 text-white hover:bg-violet-600/30 hover:border-violet-400/50 hover:text-white transition-colors duration-300 w-12 h-12 md:w-14 md:h-14" />
        <CarouselNext className="right-4 md:right-8 bg-black/30 border-white/20 text-white hover:bg-violet-600/30 hover:border-violet-400/50 hover:text-white transition-colors duration-300 w-12 h-12 md:w-14 md:h-14" />
      </Carousel>
    </div>
  );
}
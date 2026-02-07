"use client";

import * as React from "react";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function ServicesSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "MATERNITY",
      image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=800&fit=crop",
      description: "Celebrate the beauty of pregnancy with elegant maternity portraits"
    },
    {
      id: 2,
      title: "NEW BORN",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=800&fit=crop",
      description: "Capture precious first moments of your newborn baby"
    },
    {
      id: 3,
      title: "CAKE SMASH",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=800&fit=crop",
      description: "Fun and messy first birthday cake smash sessions"
    },
    {
      id: 4,
      title: "3 TO 5 MONTHS BABY",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=800&fit=crop",
      description: "Adorable milestone sessions for growing babies"
    },
    {
      id: 5,
      title: "6 TO 9 MONTH BABY",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=800&fit=crop",
      description: "Sitting pretty sessions capturing personality and milestones"
    },
    {
      id: 6,
      title: "FAMILY",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=800&fit=crop",
      description: "Timeless family portraits that celebrate togetherness"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-white via-purple-50/20 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl animate-bounce" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-violet-600 to-transparent mx-auto mb-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-wide">
            BABY AND MATERNITY PHOTOSHOOT PORTFOLIO
          </h2>
          
          <p className="text-lg md:text-xl text-violet-600 italic font-light mb-4 tracking-wide">
            Global Award winning images
          </p>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {'"'}Explore our portfolio of timeless maternity and newborn photography, where every image tells a unique and beautiful story.{'"'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-lg shadow-lg hover:shadow-2xl group cursor-pointer transition-all duration-500 hover:-translate-y-3 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -left-full group-hover:left-full bg-linear-to-r from-transparent via-violet-600/20 to-transparent transition-all duration-500 z-10 pointer-events-none" />

              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-t-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Purple Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-violet-900/80 via-purple-600/40 to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-base font-light text-center leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.description}
                  </p>
                </div>
                
                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-violet-600 via-purple-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Title Section */}
              <div className="p-6 md:p-8 text-center relative">
                <h3 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-wider mb-2 group-hover:text-violet-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Decorative underline */}
                <div className="h-0.5 w-12 bg-linear-to-r from-transparent via-violet-600 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 md:mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 md:px-12 py-4 md:py-5 bg-linear-to-r from-violet-600 to-purple-600 text-white font-medium text-base md:text-lg tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105">
            <span className="relative z-10">VIEW FULL GALLERY</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-violet-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
}
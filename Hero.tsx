import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (headline) {
      headline.style.opacity = '0';
      headline.style.transform = 'translateY(20px)';
      setTimeout(() => {
        headline.style.transition = 'opacity 0.8s, transform 0.8s';
        headline.style.opacity = '1';
        headline.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s, transform 0.8s';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s, transform 0.8s';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 z-0"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')] bg-cover bg-center mix-blend-overlay z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Elevate Your Digital Experience
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Crafting innovative solutions that transform ideas into reality. 
          Discover the future of digital experiences with our cutting-edge platform.
        </p>
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg w-full sm:w-auto">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md transition-all hover:bg-white/10 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
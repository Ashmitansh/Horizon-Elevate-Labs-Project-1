import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current && imageRef.current) {
              imageRef.current.style.opacity = '1';
              imageRef.current.style.transform = 'translateX(0)';
            }
            if (entry.target === contentRef.current && contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateX(0)';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 transition-all duration-1000 opacity-0 transform -translate-x-12"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 rounded-lg -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-purple-100 rounded-lg -z-10"></div>
            </div>
          </div>
          <div 
            ref={contentRef}
            className="w-full lg:w-1/2 transition-all duration-1000 opacity-0 transform translate-x-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Horizon, we believe in the power of technology to transform businesses and enhance lives. Our mission is to provide innovative solutions that make digital experiences more intuitive, efficient, and enjoyable.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded in 2023, we've grown from a small team of passionate developers to a diverse group of creators, strategists, and visionaries united by a common goal: to push the boundaries of what's possible in the digital realm.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">250+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">98%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">15+</h4>
                <p className="text-gray-600">Industry Awards</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">24/7</h4>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useEffect, useRef } from 'react';
import { Zap, Shield, BarChart, Smile } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (featureRef.current) {
                featureRef.current.style.opacity = '1';
                featureRef.current.style.transform = 'translateY(0)';
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={featureRef}
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 opacity-0 transform translate-y-8 hover:shadow-lg"
    >
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Our optimized platform ensures your experience is smooth and responsive, with load times that will blow you away.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure by Design',
      description: 'End-to-end encryption and advanced security protocols keep your data safe and private at all times.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Detailed Analytics',
      description: 'Gain valuable insights with comprehensive analytics that help you make data-driven decisions.',
    },
    {
      icon: <Smile size={24} />,
      title: 'User-Friendly',
      description: 'Intuitive design makes our platform accessible to everyone, regardless of technical expertise.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide innovative solutions designed to meet your needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
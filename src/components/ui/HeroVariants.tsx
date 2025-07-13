import React from 'react';
import { HeroProps } from '../../types';
import Button from './Button';

/**
 * Hero Section Variants
 * 
 * Multiple hero section designs for different use cases.
 * Each variant demonstrates different layouts, styles, and content arrangements.
 */

// Variant 1: Centered with gradient background
export const HeroCentered: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"
      style={backgroundStyle}
    >
      {!backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200 mb-4 font-medium">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <Button
              variant="primary"
              size="lg"
              onClick={primaryButton.onClick}
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
          )}
          
          {secondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Variant 2: Split layout with image
export const HeroSplit: React.FC<HeroProps & { imageUrl?: string }> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  imageUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
}) => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Content Side */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-2xl">
            {subtitle && (
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                {subtitle}
              </p>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={primaryButton.onClick}
                  className="w-full sm:w-auto"
                >
                  {primaryButton.text}
                </Button>
              )}
              
              {secondaryButton && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryButton.onClick}
                  className="w-full sm:w-auto"
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="flex-1 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Variant 3: Minimal with animated background
export const HeroMinimal: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <Button
              variant="primary"
              size="lg"
              onClick={primaryButton.onClick}
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
          )}
          
          {secondaryButton && (
            <Button
              variant="ghost"
              size="lg"
              onClick={secondaryButton.onClick}
              className="w-full sm:w-auto"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

// Variant 4: Business/Corporate style
export const HeroBusiness: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"></div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {subtitle && (
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
                  {subtitle}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {title}
              </h1>
              
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryButton && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={primaryButton.onClick}
                    className="w-full sm:w-auto"
                  >
                    {primaryButton.text}
                  </Button>
                )}
                
                {secondaryButton && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={secondaryButton.onClick}
                    className="w-full sm:w-auto"
                  >
                    {secondaryButton.text}
                  </Button>
                )}
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 w-full h-96 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl shadow-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 w-full h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Variant 5: Video background style
export const HeroVideo: React.FC<HeroProps & { videoUrl?: string }> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  videoUrl = 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200 mb-4 font-medium">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <Button
              variant="primary"
              size="lg"
              onClick={primaryButton.onClick}
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
          )}
          
          {secondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

// Add custom animations to CSS
const heroStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = heroStyles;
  document.head.appendChild(style);
} 
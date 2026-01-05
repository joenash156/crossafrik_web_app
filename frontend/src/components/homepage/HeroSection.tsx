import { useState, useEffect } from 'react';
import CImage1 from "../../assets/hero-section-images/7556692048_e7bb0398bc_b.jpg";
import CImage2 from "../../assets/hero-section-images/AdobeStock_826796197.jpeg";
import CImage3 from "../../assets/hero-section-images/courosel_image1.jpeg";
import CImage4 from "../../assets/hero-section-images/istockphoto-182028838-612x612.jpg";
import { Link } from 'react-router';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);



  const images = [CImage1, CImage2, CImage3, CImage4];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800/50 via-orange-800/30 to-amber-900/50"></div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 py-8 md:py-16">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-fade-in-up">Let Sustain</span>
              <span className="block text-amber-300 animate-fade-in-up animation-delay-200">Your Academic</span>
              <span className="block animate-fade-in-up animation-delay-400">Dream Together</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-light leading-relaxed animate-fade-in-up animation-delay-600">
              Want to learn your subjects well without cramming, or discover academic opportunities? CrossAfrik got you covered with our comprehensive and engaging learning platform and academic opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
              <Link to="/signup" className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 min-w-[200px] justify-center cursor-pointer">
                <span >Get Started</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>

              <Link to="/about-us" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 min-w-[200px] justify-center cursor-pointer">
                <i className="fas fa-play-circle group-hover:scale-110 transition-transform duration-300"></i>
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-xl"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-xl"></i>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-amber-400 scale-125'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 z-20 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 opacity-75">Scroll Down</span>
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;

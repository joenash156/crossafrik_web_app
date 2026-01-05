import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    document.title = "CrossAfrik | Page Not Found";
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-8" data-aos="fade-up">

        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-amber-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <i className="fas fa-search text-white text-4xl"></i>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you're looking for seems to have taken a study break.
            Don't worry, even the best students sometimes get lost!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/"
            className="group bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <i className="fas fa-home"></i>
            <span>Back to Home</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>

          <Link
            to="/contact"
            className="group bg-transparent border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <i className="fas fa-envelope"></i>
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="text-orange-600 hover:text-orange-700 hover:underline transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-orange-600 hover:text-orange-700 hover:underline transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              to="/blog"
              className="text-orange-600 hover:text-orange-700 hover:underline transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="/support"
              className="text-orange-600 hover:text-orange-700 hover:underline transition-colors duration-200"
            >
              Support Us
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-orange-300/30 rounded-full animate-pulse hidden sm:block"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border-2 border-amber-400/30 rounded-full animate-pulse animation-delay-500 hidden sm:block"></div>
        <div className="absolute bottom-20 left-16 w-10 h-10 border-2 border-orange-400/30 rounded-full animate-pulse animation-delay-1000 hidden sm:block"></div>
        <div className="absolute bottom-32 right-12 w-14 h-14 border-2 border-amber-300/30 rounded-full animate-pulse animation-delay-700 hidden sm:block"></div>
      </div>
    </div>
  );
}

export default NotFound;

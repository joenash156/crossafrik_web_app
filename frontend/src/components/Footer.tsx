import { useState } from 'react';
import { Link } from 'react-router-dom';
import CrossAfrikLogo from '../assets/son-logo.png';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={CrossAfrikLogo} alt="CrossAfrik Logo" className="h-20 rounded-full" />
              <div>
                <h3 className="text-2xl font-bold text-amber-400">Cross<span className="text-orange-700">Afrik</span></h3>
                <p className="text-gray-400 text-sm">Empowering Academic Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              We help students achieve their academic dreams through personalized guidance, comprehensive preparation,
              and proven strategies for academic excellence.
            </p>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="group bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-white group-hover:text-white transition-colors duration-300"></i>
                </a>

                <a
                  href="#"
                  className="group bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-white group-hover:text-white transition-colors duration-300"></i>
                </a>

                <a
                  href="#"
                  className="group bg-gray-700 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-white group-hover:text-white transition-colors duration-300"></i>
                </a>

                <a
                  href="#"
                  className="group bg-gray-700 hover:bg-red-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube text-white group-hover:text-white transition-colors duration-300"></i>
                </a>

                <a
                  href="#"
                  className="group bg-gray-700 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Telegram"
                >
                  <i className="fab fa-telegram-plane text-white group-hover:text-white transition-colors duration-300"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
            <div className="grid md:grid-cols-2 gap-y-3 gap-x-4">
              <Link to="/about-us" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">About Us</span>
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">Our Services</span>
              </Link>
              <Link to="/success-stories" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">Success Stories</span>
              </Link>
              <Link to="/contact-us" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">Contact Us</span>
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">Blog</span>
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 inline-flex items-center space-x-2">
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-sm">Privacy Policy</span>
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-amber-400">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest academic tips and opportunities.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 CrossAfrik. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

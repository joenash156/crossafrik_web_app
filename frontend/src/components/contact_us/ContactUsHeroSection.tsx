import ContactUsHSImg from '../../assets/hero-section-images/contact_us_hero_image.jpg';

function ContactUsHeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ContactUsHSImg}
          alt="Contact Us Hero Section"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-orange-800/40 to-orange-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-aos="fade-up">
          Get <span className="text-amber-300">in touch</span> with us
        </h1>
        <p className="text-xl sm:text-3xl text-white mb-6 font-light max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We're here to answer your questions, listen to your feedback, and help you on your academic journey. Reach out to us for support, partnership, or any inquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 font-semibold" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center space-x-2 text-white/90">
            <i className="fas fa-envelope text-amber-300"></i>
            <span>info@crossafrik.com</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <i className="fas fa-phone text-amber-300"></i>
            <span>+233 55 123 4567</span>
          </div>
          <div className="flex items-center space-x-2 text-white/90">
            <i className="fas fa-map-marker-alt text-amber-300"></i>
            <span>Accra, Ghana</span>
          </div>
        </div>
        {/* Decorative divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full mx-auto mb-8"></div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-0 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-75">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsHeroSection;
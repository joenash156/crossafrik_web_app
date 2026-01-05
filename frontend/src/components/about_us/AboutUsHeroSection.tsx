import AboutUsHSImg from '../../assets/hero-section-images/about_us_hero_image.jpg';

function AboutUsHeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={AboutUsHSImg}
          alt="About CrossAfrik"
          className="w-full h-full object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-amber-800/40 to-orange-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in-up">About</span>
            <span className="block text-amber-300 animate-fade-in-up animation-delay-200">CrossAfrik</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-light leading-relaxed animate-fade-in-up animation-delay-600">
            Empowering students to achieve academic excellence through personalized guidance and innovative learning solutions
          </p>

          <div className="animate-fade-in-up animation-delay-800">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-amber-200">Students Helped</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-amber-200">Success Rate</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-amber-200">Year Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-0 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-75">Learn More</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-amber-300/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-orange-300/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-amber-400/30 rounded-full animate-pulse animation-delay-500"></div>
    </section>
  );
}

export default AboutUsHeroSection;
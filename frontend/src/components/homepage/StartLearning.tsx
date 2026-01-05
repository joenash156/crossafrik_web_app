import YouTubeImg from '../../assets/other-images/youtube-image.png'

function StartLearning() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 via-white to-red-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content - Left */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Start <span className="text-red-600">Learning</span>
                <span className="block text-amber-700">For Free</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                Watch our educational content for free on YouTube. Subscribe to CrossAfrik on YouTube and get the most out of your learning. Do not forget to keep the notifications on to get notified when fresh content is uploaded.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-play text-red-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Free educational videos on various subjects</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-red-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Get notified about new content uploads</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-red-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Learn from experienced educators</p>
              </div>
            </div>

            {/* Visit link */}
            <div className="pt-4">
              <a href="http://www.youtube.com/@CrossAfrik" target="_blank" rel="noopener noreferrer" className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 cursor-pointer">
                <i className="fab fa-youtube text-xl"></i>
                <span>Visit Channel</span>
                <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative lg:order-2 order-1" data-aos="fade-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-200/30 to-amber-200/30 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl transform rotate-3 -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl shadow-2xl">
                <img
                  src={YouTubeImg}
                  alt="YouTube educational content and learning platform"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating subscriber stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-red-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">300+</div>
                  <div className="text-sm text-gray-600 font-medium">Subscribers</div>
                </div>
              </div>


              {/* Floating YouTube badge */}
              <div className="absolute -top-4 -right-1 bg-red-600 text-white rounded-full p-4 shadow-lg">
                <i className="fab fa-youtube text-xl"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StartLearning;

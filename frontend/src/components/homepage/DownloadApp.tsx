import AppAndPlaystoreImg_1 from '../../assets/other-images/appstore-playstore.png'
import AppAndPlaystoreImg_2 from '../../assets/other-images/a-and-p-store.png'

function DownloadApp() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"  data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Section - Left */}
          <div className="relative lg:order-1 order-2"  data-aos="fade-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl transform -rotate-3 -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl shadow-2xl">
                <img
                  src={AppAndPlaystoreImg_1}
                  alt="Download our app from App Store and Google Play Store"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Small positioned image - Top right corner */}
              <div className="absolute -top-6 -right-1 w-20 h-20 lg:w-24 lg:h-24">
                <img
                  src={AppAndPlaystoreImg_2}
                  alt="App Store and Play Store icons"
                  className="w-full h-full object-contain rounded-2xl shadow-lg bg-white p-2 transform rotate-12 hover:rotate-0 transition-transform duration-300"
                />
              </div>

              {/* Floating download stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">10</div>
                  <div className="text-sm text-gray-600 font-medium">Downloads</div>
                </div>
              </div>

              {/* Floating rating badge */}
              <div className="absolute top-8 -left-1 bg-amber-500 text-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">4.8★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="space-y-8 lg:order-2 order-1"  data-aos="fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get the <span className="text-amber-600">Best Experience</span>
                <span className="block text-orange-700">On Mobile</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                Download our mobile app and take your academic journey with you wherever you go. Get instant access to resources, personalized guidance, and stay connected with our community of scholars.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Access resources anytime, anywhere</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-bell text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Get instant notifications and updates</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Connect with fellow scholars</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up">
              <a href="#" className="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 justify-center">
                <i className="fab fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a href="#" className="group bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 justify-center">
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>

            {/* App Rating */}
            <div className="pt-4 border-t border-gray-200" data-aos="fade-up">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="flex items-center text-amber-400 text-xl space-x-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.8/5 Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10</div>
                  <p className="text-sm text-gray-600">Happy Users</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
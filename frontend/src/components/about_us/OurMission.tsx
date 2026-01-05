import OurMissionImg from '../../assets/other-images/our_mission.png';

function OurMission() {
  return (
    <section className="py-16 lg:pt-24 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content - Left */}
          <div className="space-y-8" data-aos="fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-orange-600">Mission</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                To empower students across Ghana and beyond by providing accessible, high-quality educational resources and personalized academic guidance that transforms learning experiences and unlocks individual potential.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We are committed to bridging the educational gap by offering innovative teaching methods, comprehensive study materials, and mentorship programs that prepare students for academic excellence and future success.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-orange-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Provide accessible quality education for all students</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-orange-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Foster a supportive learning community</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-lightbulb text-orange-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Inspire lifelong learning and critical thinking</p>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="relative lg:order-2 order-1" data-aos="fade-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl transform rotate-3 -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl shadow-2xl">
                <img
                  src={OurMissionImg}
                  alt="Our mission to empower students through quality education"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating mission badge */}
              <div className="absolute -top-4 -right-2 bg-orange-500 text-white rounded-full p-4 shadow-lg">
                <i className="fas fa-bullseye text-xl"></i>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-orange-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Commitment</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurMission;
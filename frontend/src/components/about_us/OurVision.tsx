import OurVisionImg from '../../assets/other-images/our_vision.jpg';

function OurVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image - Left */}
          <div className="relative lg:order-1 order-1" data-aos="fade-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl transform -rotate-3 -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl shadow-2xl">
                <img
                  src={OurVisionImg}
                  alt="Our vision for transforming education and empowering students"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating vision badge */}
              <div className="absolute -top-4 -right-2 bg-amber-500 text-white rounded-full p-4 shadow-lg">
                <i className="fas fa-eye text-xl"></i>
              </div>

              {/* Floating future card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">2030</div>
                  <div className="text-sm text-gray-600 font-medium">Vision Goal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="space-y-8 lg:order-2" data-aos="fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-amber-600">Vision</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                To become the leading educational platform in West Africa, recognized for transforming lives through innovative learning solutions and creating a generation of confident, skilled, and successful students.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We envision a future where every student, regardless of their background or circumstances, has access to world-class education and the tools they need to achieve their dreams and contribute meaningfully to society.
              </p>
            </div>

            {/* Vision Goals */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-globe-africa text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Leading educational platform across West Africa</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Innovative learning solutions for modern challenges</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Empowering students to become future leaders</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurVision;
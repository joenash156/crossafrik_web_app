import { Link } from 'react-router';
import WhyUsImg from '../../assets/other-images/pile-books-with-color-covers-wooden-table_92795-42.png'

function WhyUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8" data-aos="fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why <span className="text-amber-600">CrossAfrik?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                We help you achieve the academic life you've always dreamed of. At CrossAfrik, we teach you to understand concepts and prepare you to face any challenge which comes your way as you climb the academic ladder.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Personalized academic guidance and mentorship</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Comprehensive preparation for academic challenges</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-amber-600 text-sm"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">Proven strategies for academic excellence</p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link to="/about-us" className="group bg-amber-600 text-white px-8 py-3 rounded-full text-lg w-2/3 font-semibold transition-all duration-300 flex items-center space-x-3 cursor-pointer">
                <span>Learn More</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>

          {/* Image Section*/}
          <div className="relative lg:order-2 order-1" data-aos="fade-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl transform rotate-3 -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl shadow-2xl">
                <img
                  src={WhyUsImg}
                  alt="Stack of colorful books representing academic excellence and learning"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Helped</div>
                </div>
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -top-4 -right-2 bg-amber-500 text-white rounded-full p-4 shadow-lg">
                <i className="fas fa-trophy text-xl"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;

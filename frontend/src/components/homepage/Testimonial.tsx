import { useRef } from 'react';

function Testimonial() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Medical Student",
      testimonial: "CrossAfrik transformed my academic journey completely. Their perCrossAfrikalized guidance helped me achieve my dream of getting into medical school. The support was incredible!"
    },
    {
      id: 2,
      name: "Michael Owusu",
      role: "High School Graduate",
      testimonial: "The resources and mentorship I received from CrossAfrik were invaluable. They didn't just teach me concepts, they prepared me for real-world challenges."
    },
    {
      id: 3,
      name: "Samuel Johnson",
      role: "MIS Student",
      testimonial: "I was struggling with my studies until I found CrossAfrik. Their approach to teaching made complex topics easy to understand. Highly recommended!"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "WASSCE Candidate",
      testimonial: "CrossAfrik's comprehensive preparation strategies helped me excel in my entrance exams. The community support is amazing and motivating."
    },
    {
      id: 5,
      name: "Lisa Smith",
      role: "Computer Science Major",
      testimonial: "The quality of education and personalized attention I received at CrossAfrik is unmatched. They truly care about your academic success."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "High School Student",
      testimonial: "CrossAfrik didn't just help me improve my grades, they helped me develop a love for learning. The impact on my academic life has been phenomenal."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">

        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-amber-600">Students</span>
            <span className="block text-amber-700">Say About Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students who have achieved their academic dreams with our guidance and support.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative" data-aos="fade-up">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-amber-50 text-amber-600 p-3 rounded-full shadow-lg border border-amber-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Previous testimonials"
          >
            <i className="fas fa-chevron-left text-lg"></i>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-amber-50 text-amber-600 p-3 rounded-full shadow-lg border border-amber-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Next testimonials"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>

          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-amber-100 hover:border-amber-200 transform hover:-translate-y-2"
              >
                {/* User Avatar */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                    <i className="fas fa-user text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Quote Icon */}
                <div className="flex justify-end mt-4">
                  <i className="fas fa-quote-right text-amber-300 text-2xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center" data-aos="fade-up">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">500+</div>
            <p className="text-gray-600 font-medium">Happy Students</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">4.8/5</div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">95%</div>
            <p className="text-gray-600 font-medium">Success Rate</p>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Testimonial;

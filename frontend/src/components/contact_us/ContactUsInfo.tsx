function ContactUsInfo() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-up">
      {/* Email Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-orange-100">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-4 mb-4">
          <i className="fas fa-envelope text-white text-2xl"></i>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
        <p className="text-gray-600 mb-2 text-center">info@crossafrik.com</p>
        <a href="mailto:info@crossafrik.com" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-200">
          Send Email
        </a>
      </div>
      {/* Phone Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-orange-100">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-4 mb-4">
          <i className="fas fa-phone-alt text-white text-2xl"></i>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
        <p className="text-gray-600 mb-2 text-center">+233 55 123 4567</p>
        <a href="tel:+233551234567" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-200">
          Call Now
        </a>
      </div>
      {/* Visit Us Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-orange-100">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-4 mb-4">
          <i className="fas fa-map-marker-alt text-white text-2xl"></i>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
        <p className="text-gray-600 mb-2 text-center">Accra, Ghana</p>
        <a href="https://maps.google.com/?q=Accra,Ghana" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-200">
          Get Directions
        </a>
      </div>
      {/* Quick Help Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-orange-100">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-4 mb-4">
          <i className="fas fa-robot text-white text-2xl"></i>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Need Quick Help?</h3>
        <p className="text-gray-600 mb-2 text-center">Use our chatbot for instant answers and support.</p>
        <a href="#" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-200">
          Try Chatbot
        </a>
      </div>
    </section>
  );
}

export default ContactUsInfo;

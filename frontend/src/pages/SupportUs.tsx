import { useState, useEffect } from 'react';
import VisaImg from '../assets/other-images/visa_logo.png';
import MastercardImg from '../assets/other-images/mastercard_logo.png';
import PaypalImg from '../assets/other-images/paypal_logo.png';
import MTMMomoImg from '../assets/other-images/mtn-momo_logo.png';
import TelecelMoneyImg from '../assets/other-images/telecel_logo.png';
import ATMoneyImg from '../assets/other-images/at-money_logo.png';
import CrossAfrikLogo from '../assets/son-logo.png';

const paymentOptions = [
  { id: 'visa', label: 'Visa', img: VisaImg, type: 'card' },
  { id: 'mastercard', label: 'Mastercard', img: MastercardImg, type: 'card' },
  { id: 'paypal', label: 'PayPal', img: PaypalImg, type: 'card' },
  { id: 'mtn', label: 'MTN Mobile Money', img: MTMMomoImg, type: 'momo' },
  { id: 'telecel', label: 'Telecel Money', img: TelecelMoneyImg, type: 'momo' },
  { id: 'atmoney', label: 'AirtelTigo Money', img: ATMoneyImg, type: 'momo' },
];

function SupportUs() {

  useEffect(() => {
    document.title = "CrossAfrik | Support Us";
  }, []);

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selected, setSelected] = useState(paymentOptions[0].id);
  const [form, setForm] = useState({
    name: '',
    amount: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    momoNumber: '',
    momoName: '',
    email: '',
  });

  const selectedOption = paymentOptions.find(opt => opt.id === selected);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (id: string) => setSelected(id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    setForm({
      name: '',
      amount: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
      momoNumber: '',
      momoName: '',
      email: '',
    });
  };


  useEffect(() => {
    document.title = "CrossAfrik | Support Us";
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50/20" data-aos="fade-up">
      {!showPaymentForm ? (
        /* Introduction Screen */
        <div className="max-w-4xl mx-auto px-1 sm:px-6 lg:px-8 py-12 md:py-20" data-aos="fade-up">
          <div className="bg-white rounded-3xl overflow-hidden border border-orange-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <i className="fas fa-heart text-white text-3xl"></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Thank You for Considering to Support 
                <p><img src={CrossAfrikLogo} alt="CrossAfrik Logo" className="inline-block h-10 w-10 mx-2" />CrossAfrik</p>
              </h1>
              <p className="text-amber-50 text-lg">
                Your generosity makes dreams come true
              </p>
            </div>

            {/* Content Section */}
            <div className="px-8 py-10 md:px-12 md:py-12">
              <div className="space-y-8">
                {/* Introduction */}
                <div className="text-center mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At CrossAfrik, we believe every student deserves the opportunity to pursue their academic dreams,
                    regardless of their financial circumstances. Your contribution directly impacts the lives of aspiring
                    scholars across Africa.
                  </p>
                </div>

                {/* How Donations Help */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    How Your Donation Makes a <span className="text-orange-600">Difference</span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Impact Item 1 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-university text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">University Application Fees</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Help students purchase application forms for their dream universities, removing financial
                          barriers to higher education access.
                        </p>
                      </div>
                    </div>

                    {/* Impact Item 2 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-book-open text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Learning Resources</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Provide access to quality educational materials, online courses, and study resources for
                          students who cannot afford them.
                        </p>
                      </div>
                    </div>

                    {/* Impact Item 3 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-laptop text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Technology Access</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Support students with internet data bundles and device access, ensuring they can participate
                          in online learning and research.
                        </p>
                      </div>
                    </div>

                    {/* Impact Item 4 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-chalkboard-teacher text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Mentorship Programs</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Fund personalized academic guidance, career counseling, and mentorship sessions with
                          experienced professionals.
                        </p>
                      </div>
                    </div>

                    {/* Impact Item 5 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-graduation-cap text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Scholarship Opportunities</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Create and maintain our scholarship database, connecting deserving students with funding
                          opportunities worldwide.
                        </p>
                      </div>
                    </div>

                    {/* Impact Item 6 */}
                    <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-users text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Platform Development</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Maintain and improve our platform, ensuring it remains free and accessible to all students
                          seeking academic opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics or Impact */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-orange-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">500+</div>
                      <div className="text-gray-600 text-xs md:text-sm font-medium">Students Supported</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">50+</div>
                      <div className="text-gray-600 text-xs md:text-sm font-medium">Universities Reached</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">100%</div>
                      <div className="text-gray-600 text-xs md:text-sm font-medium">Transparency</div>
                    </div>
                  </div>
                </div>

                {/* Closing Message */}
                <div className="text-center space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Every contribution, no matter the size, brings us closer to our mission of making quality education
                    accessible to all. Together, we can transform lives and build a brighter future for African students.
                  </p>
                  <p className="text-gray-600 italic">
                    "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                  </p>
                </div>

                {/* Proceed Button */}
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => {
                      setShowPaymentForm(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:shadow-xl flex items-center space-x-3 cursor-pointer"
                  >
                    <span>Proceed to Support</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Payment Form - Original Content */
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => {
              setShowPaymentForm(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mb-6 flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Information</span>
          </button>

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Support <span className="text-orange-600">CrossAfrik</span>
            </h1>
            <p className="text-lg text-gray-600">
              Your support helps us empower more students. Choose your preferred payment method and fill in your details to make a contribution.
            </p>
          </div>

          {/* Payment Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {paymentOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl border-2 transition-all cursor-pointer duration-200 shadow-sm bg-white hover:bg-orange-50 ${selected === opt.id ? 'border-orange-500' : 'border-gray-200'
                  }`}
              >
                <img src={opt.img} alt={opt.label} className="w-12 h-12 mb-2 object-contain" />
                <span className={`font-semibold text-sm ${selected === opt.id ? 'text-orange-600' : 'text-gray-700'}`}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          {/* Payment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-8 border border-orange-100" data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {selectedOption?.label} Payment Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name={selectedOption?.type === 'card' ? 'name' : 'momoName'}
                  value={selectedOption?.type === 'card' ? form.name : form.momoName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount (GHS)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  min={1}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="Enter amount"
                />
              </div>
              {selectedOption?.type === 'card' ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      required
                      maxLength={19}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={form.cardExpiry}
                        onChange={handleChange}
                        required
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        name="cardCVV"
                        value={form.cardCVV}
                        onChange={handleChange}
                        required
                        maxLength={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Money Number
                    </label>
                    <input
                      type="tel"
                      name="momoNumber"
                      value={form.momoNumber}
                      onChange={handleChange}
                      required
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                      placeholder="e.g. 0551234567"
                    />
                  </div>
                </>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:shadow-lg cursor-pointer"
            >
              <span>Support Us</span>
              <i className="fas fa-heart"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default SupportUs;

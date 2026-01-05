import { useState } from 'react';

function ContactUsForm() {
  const [form, setForm] = useState({ email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setForm({ email: '', message: '' });
  };

  return (
    <section className="w-full py-8 px-2 sm:px-4 lg:px-8" data-aos="fade-up">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-8 border border-orange-100"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Send Us a Message
        </h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                placeholder="you@example.com"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400 resize-none"
                placeholder="Type your message here..."
              />
              <span className="absolute right-3 top-3 text-orange-400">
                <i className="fas fa-comment-dots"></i>
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <span>Send Message</span>
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </section>
  );
}

export default ContactUsForm;

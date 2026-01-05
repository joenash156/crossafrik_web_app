import { useEffect } from 'react';
import ContactUsHeroSection from '../components/contact_us/ContactUsHeroSection';
import ContactUsInfo from '../components/contact_us/ContactUsInfo';
import ContactUsForm from '../components/contact_us/ContactUsForm';


function ContactUs() {

  useEffect(() => {
    document.title = "CrossAfrik | Contact Us";
  }, []);

  return (
    <div className="pt-16" data-aos="fade-up">
      <ContactUsHeroSection />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Info Cards - Left on md+ */}
        <div className="order-1">
          <ContactUsInfo />
        </div>
        {/* Contact Form - Right on md+ */}
        <div className="order-2">
          <ContactUsForm />
        </div>
      </div>
      {/* Additional contact us sections can be added here */}
    </div>
  );
}

export default ContactUs;

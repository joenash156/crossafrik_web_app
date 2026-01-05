import { useEffect } from 'react';
import HeroSection from '../components/homepage/HeroSection';
import WhyUs from '../components/homepage/WhyUs';
import DownloadApp from '../components/homepage/DownloadApp';
import StartLearning from '../components/homepage/StartLearning';
import Testimonial from '../components/homepage/Testimonial';


function Homepage() {

  useEffect(() => {
    document.title = "CrossAfrik | Homepage";
  })

  return (
    <div className="pt-16" data-aos="fade-up">
      <HeroSection />
      <WhyUs />
      <DownloadApp />
      <StartLearning />
      <Testimonial />
      {/* Additional homepage sections can be added here */}
    </div>
  );
}

export default Homepage;

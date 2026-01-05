import { useEffect } from 'react';
import AboutUsHeroSection from '../components/about_us/AboutUsHeroSection';
import OurMission from '../components/about_us/OurMission';
import OurVision from '../components/about_us/OurVision';
import OurTeam from '../components/about_us/OurTeam';

function AboutUs() {
  useEffect(() => {
    document.title = "CrossAfrik | About Us";
  }, []);

  return (
    <div className="pt-16" data-aos="fade-up">
      <AboutUsHeroSection />
      <OurMission />
      <OurVision />
      <OurTeam />
      {/* Additional about us sections can be added here */}
    </div>
  );
}

export default AboutUs;

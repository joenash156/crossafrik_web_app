import JoshuaImg from '../../assets/team-members-images/joshua.jpg'
import { Link } from 'react-router-dom';

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Francis Serwor",
      role: "Chief Executive Officer",
      image: null,
      bio: "Passionate Software Engineer and educator with over 2 years of experience in transforming students' academic journeys.",
      socialLinks: {
        linkedin: "#",
        email: "francis@crossafrik.com"
      }
    },
    {
      id: 2,
      name: "Samuel Antwi",
      role: "Executive Director of Frontend Developers Team",
      image: null,
      bio: "Expert in frontend development and personalized learning strategies for student success.",
      socialLinks: {
        linkedin: "#",
        email: "samuel@crossafrik.com"
      }
    },
    {
      id: 3,
      name: "Courage Surname",
      role: "Backend Developer",
      image: null,
      bio: "Tech innovator focused on creating cutting-edge backend systems and APIs.",
      socialLinks: {
        linkedin: "#",
        email: "courage@crossafrik.com"
      }
    },
    {
      id: 4,
      name: "Joshua Adjei",
      role: "Frontend Developer",
      image: JoshuaImg,
      bio: "Dedicated to creating seamless user experiences and innovative web applications.",
      socialLinks: {
        linkedin: "#",
        email: "joshua@crossafrik.com"
      }
    },
    {
      id: 5,
      name: "Benjamin Surname",
      role: "Full Stack Developer",
      image: null,
      bio: "Skilled in building responsive and accessible web applications.",
      socialLinks: {
        linkedin: "#",
        email: "benjamin@crossafrik.com"
      }
    }
  ];

  return (
    <section className="py-16 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-6 mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Meet Our <span className="text-orange-600">Amazing</span>
            <span className="block text-amber-700">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of educators, innovators, and student success advocates work together to transform educational experiences.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Profile Image/Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top md:object-center group-hover:scale-110 transition-all duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-user text-white text-3xl"></i>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-200 mt-auto">
                  <a
                    href={member.socialLinks.linkedin}
                    className="w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin-in text-sm"></i>
                  </a>
                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    className="w-8 h-8 bg-gray-100 hover:bg-orange-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <i className="fas fa-envelope text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators and innovators to join our team in transforming education.
            </p>
            <Link to="/join-our-team" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <i className="fas fa-users mr-2"></i>
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
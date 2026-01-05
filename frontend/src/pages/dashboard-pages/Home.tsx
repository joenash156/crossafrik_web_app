import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Home = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education')

  // Sample data - replace with actual API data
  const educationOpportunities = [
    {
      id: 1,
      title: "STEM Scholarship Program 2024",
      organization: "National Science Foundation",
      description: "Full scholarship for undergraduate students pursuing STEM degrees. Covers tuition, books, and living expenses.",
      deadline: "2024-03-15",
      category: "Scholarship",
      applicants: 245
    },
    {
      id: 2,
      title: "Summer Research Fellowship",
      organization: "KNUST Research Lab",
      description: "10-week paid research opportunity for college students interested in AI and Machine Learning.",
      deadline: "2024-02-28",
      category: "Fellowship",
      applicants: 189
    },
    {
      id: 3,
      title: "Graduate Study Grant",
      organization: "Global Education Fund",
      description: "Financial support for students pursuing graduate studies abroad in top universities.",
      deadline: "2024-04-20",
      category: "Grant",
      applicants: 312
    }
  ]

  const workOpportunities = [
    {
      id: 1,
      title: "Software Engineering Internship",
      organization: "Tech Giants Inc.",
      description: "12-week summer internship working on cutting-edge web applications with experienced mentors.",
      deadline: "2024-03-01",
      category: "Internship",
      applicants: 567
    },
    {
      id: 2,
      title: "Junior Data Analyst Position",
      organization: "Analytics Corp",
      description: "Full-time entry-level position analyzing business data and creating actionable insights.",
      deadline: "2024-02-25",
      category: "Full-time",
      applicants: 423
    },
    {
      id: 3,
      title: "Marketing Assistant Role",
      organization: "Creative Solutions Ltd",
      description: "Part-time position assisting with digital marketing campaigns and social media management.",
      deadline: "2024-03-10",
      category: "Part-time",
      applicants: 198
    }
  ]

  const currentOpportunities = activeTab === 'education' ? educationOpportunities : workOpportunities

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return 'Expired'
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays <= 7) return `${diffDays} days left`

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  useEffect(() => {
    document.title = "CrossAfrik | Dashboard Home";
  }, []);

  return (
    <div className="space-y-6 w-full max-w-full" data-aos="fade-up">
      <div className="md:flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Home</h1>
        {/* Visit back to the landing page */}
        <Link to="/" className="text-blue-500 text-sm hover:text-blue-400 transition-all">Back to Landing Page</Link>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards Section - Left side (bigger part) */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Submitted Applications Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Submitted Applications</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">24</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-paper-plane text-blue-600"></i>
                </div>
              </div>
            </div>

            {/* Accepted Opportunities Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Accepted Opportunities</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">8</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <i className="fas fa-check-circle text-green-600"></i>
                </div>
              </div>
            </div>

            {/* Pending Applications Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Applications</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">12</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <i className="fas fa-clock text-orange-600"></i>
                </div>
              </div>
            </div>

            {/* More Stats Link Card */}
            <Link to="/dashboard/statistics" className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-sm font-medium opacity-90">View More</p>
                  <p className="text-lg font-semibold mt-1">Statistics</p>
                </div>
                <div className="bg-opacity-20 p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-200">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Notifications Section - Right side (smaller part) - Hidden on mobile */}
        <div className="hidden md:block space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Notifications</h3>
            <div className="space-y-3">
              {/* Notification Item 1 */}
              <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-blue-500 transition-colors duration-200">
                <p className="text-sm font-medium text-gray-800">New opportunity available</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>

              {/* Notification Item 2 */}
              <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-green-500 transition-colors duration-200">
                <p className="text-sm font-medium text-gray-800">Application approved</p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>

              {/* Notification Item 3 */}
              <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-orange-500 transition-colors duration-200">
                <p className="text-sm font-medium text-gray-800">Interview scheduled</p>
                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
              </div>

              {/* View All Link */}
              <div className="pt-2 border-t border-gray-100">
                <Link to="/dashboard/notifications" className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  View all notifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For You Section */}
      <div className="mt-8" data-aos="fade-up">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">For You</h2>
            <p className="text-sm text-gray-500 mt-1">Personalized opportunities based on your profile</p>
          </div>

          {/* Tabs Navigation */}
          <div className="px-6 pt-4">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'education'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Education
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'work'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
              >
                <i className="fas fa-briefcase mr-2"></i>
                Work
              </button>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-5 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {opportunity.category}
                      </span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 flex items-center">
                      <i className="fas fa-building text-gray-400 mr-2 text-xs"></i>
                      {opportunity.organization}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {opportunity.description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-clock text-orange-500 mr-1.5"></i>
                        <span className="font-medium">{formatDeadline(opportunity.deadline)}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-users text-blue-500 mr-1.5"></i>
                        <span>{opportunity.applicants} applicants</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => navigate(`/dashboard/opportunities/${opportunity.id}`)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                      >
                        <i className="fas fa-paper-plane mr-2"></i>
                        Apply Now
                      </button>
                      <button
                        onClick={() => navigate(`/dashboard/opportunities/${opportunity.id}`)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <i className="fas fa-info-circle"></i>
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1 bg-gray-100">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="mt-8 text-center">
              <Link
                to={`/dashboard/opportunities?type=${activeTab}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View All {activeTab === 'education' ? 'Education' : 'Work'} Opportunities
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

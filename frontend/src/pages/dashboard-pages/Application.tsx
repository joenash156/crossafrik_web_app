import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"

interface Application {
  id: number
  title: string
  organization: string
  type: 'scholarship' | 'internship' | 'job'
  status: 'ongoing' | 'accepted' | 'rejected' | 'pending' | 'interview'
  appliedDate: string
  deadline: string
  amount?: string
  location: string
  image: string
  lastUpdate: string
  notes?: string
}

const Application = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ongoing' | 'accepted' | 'rejected' | 'pending' | 'interview'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedApp, setSelectedApp] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'deadline' | 'status'>('date')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    })
  }, [])

  // Sample data - replace with actual API data
  const applications: Application[] = [
    {
      id: 1,
      title: "Software Engineering Internship",
      organization: "Tech Giants Inc.",
      type: "internship",
      status: "interview",
      appliedDate: "2024-01-15",
      deadline: "2024-02-28",
      amount: "₵8,000/month",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      lastUpdate: "2024-01-20",
      notes: "Interview scheduled for Jan 25th"
    },
    {
      id: 2,
      title: "STEM Scholarship Program 2024",
      organization: "Tech Foundation",
      type: "scholarship",
      status: "ongoing",
      appliedDate: "2024-01-10",
      deadline: "2024-03-15",
      amount: "$50,000/year",
      location: "USA, Canada, UK",
      image: "https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/01/GodspowerOshodinscholarship-1024x514.jpg",
      lastUpdate: "2024-01-18",
      notes: "Awaiting review"
    },
    {
      id: 3,
      title: "Data Analyst Position",
      organization: "Analytics Corp",
      type: "job",
      status: "accepted",
      appliedDate: "2023-12-20",
      deadline: "2024-01-31",
      amount: "$75,000/year",
      location: "Remote",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      lastUpdate: "2024-01-05",
      notes: "Offer letter received"
    },
    {
      id: 4,
      title: "Marketing Assistant Role",
      organization: "Brand Solutions",
      type: "job",
      status: "rejected",
      appliedDate: "2023-12-15",
      deadline: "2024-01-20",
      amount: "₵45,000/year",
      location: "Takoradi, Ghana",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop",
      lastUpdate: "2024-01-08",
      notes: "Position filled by another candidate"
    },
    {
      id: 5,
      title: "Medical Research Fellowship",
      organization: "Health Institute",
      type: "scholarship",
      status: "pending",
      appliedDate: "2024-01-12",
      deadline: "2024-04-01",
      amount: "₵45,000 stipend",
      location: "Kumasi, Ghana",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      lastUpdate: "2024-01-12",
      notes: "Application submitted"
    },
    {
      id: 6,
      title: "UX Designer Position",
      organization: "Design Studio",
      type: "job",
      status: "rejected",
      appliedDate: "2023-11-20",
      deadline: "2023-12-25",
      amount: "₵70,000/year",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      lastUpdate: "2023-12-28",
      notes: "Did not meet experience requirements"
    }
  ]

  const filteredApplications = applications
    .filter(app => selectedFilter === 'all' || app.status === selectedFilter)
    .filter(app =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.organization.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
      if (sortBy === 'deadline') return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      return 0
    })

  const stats = {
    total: applications.length,
    ongoing: applications.filter(a => a.status === 'ongoing').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    pending: applications.filter(a => a.status === 'pending').length,
    interview: applications.filter(a => a.status === 'interview').length
  }

  const getStatusConfig = (status: string) => {
    const configs = {
      ongoing: { color: 'text-blue-600', bg: 'bg-blue-100', icon: 'fa-spinner' },
      accepted: { color: 'text-green-600', bg: 'bg-green-100', icon: 'fa-check-circle' },
      rejected: { color: 'text-red-600', bg: 'bg-red-100', icon: 'fa-times-circle' },
      pending: { color: 'text-orange-600', bg: 'bg-orange-100', icon: 'fa-clock' },
      interview: { color: 'text-purple-600', bg: 'bg-purple-100', icon: 'fa-calendar-alt' }
    }
    return configs[status as keyof typeof configs] || configs.pending
  }

  const handleDeleteApp = (id: number) => {
    setSelectedApp(id)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    // Handle delete logic here
    console.log("Deleting application:", selectedApp)
    setShowDeleteModal(false)
    setSelectedApp(null)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  useEffect(() => {
    document.title = "CrossAfrik | My Applications";
  }, []);

  return (
    <div className="space-y-6 w-full max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" data-aos="fade-up">
        <div>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 inline-block">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">My Applications</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage your application history</p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'deadline' | 'status')}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Application Date</option>
            <option value="deadline">Deadline</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-delay="100">
        <div
          onClick={() => setSelectedFilter('all')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'all' ? 'border-blue-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-list text-gray-500 text-lg"></i>
            <span className="text-2xl font-bold text-gray-800">{stats.total}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">All</p>
        </div>

        <div
          onClick={() => setSelectedFilter('ongoing')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'ongoing' ? 'border-blue-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-spinner text-blue-600 text-lg"></i>
            <span className="text-2xl font-bold text-blue-600">{stats.ongoing}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">Ongoing</p>
        </div>

        <div
          onClick={() => setSelectedFilter('pending')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'pending' ? 'border-orange-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-clock text-orange-600 text-lg"></i>
            <span className="text-2xl font-bold text-orange-600">{stats.pending}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">Pending</p>
        </div>

        <div
          onClick={() => setSelectedFilter('interview')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'interview' ? 'border-purple-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-calendar-alt text-purple-600 text-lg"></i>
            <span className="text-2xl font-bold text-purple-600">{stats.interview}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">Interview</p>
        </div>

        <div
          onClick={() => setSelectedFilter('accepted')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'accepted' ? 'border-green-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-check-circle text-green-600 text-lg"></i>
            <span className="text-2xl font-bold text-green-600">{stats.accepted}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">Accepted</p>
        </div>

        <div
          onClick={() => setSelectedFilter('rejected')}
          className={`bg-white p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${selectedFilter === 'rejected' ? 'border-red-500 shadow-md' : 'border-gray-100'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-times-circle text-red-600 text-lg"></i>
            <span className="text-2xl font-bold text-red-600">{stats.rejected}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">Rejected</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4" data-aos="fade-up" data-aos-delay="200">
        <div className="relative">
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search by title or organization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <i className="fas fa-folder-open text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Applications Found</h3>
            <p className="text-sm text-gray-500 mb-6">
              {searchQuery ? "Try adjusting your search" : "You haven't submitted any applications yet"}
            </p>
            <Link
              to="/dashboard/opportunity"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <i className="fas fa-search mr-2"></i>
              Browse Opportunities
            </Link>
          </div>
        ) : (
          filteredApplications.map((app, index) => {
            const statusConfig = getStatusConfig(app.status)
            return (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-48 h-48 md:h-auto flex-shrink-0 relative overflow-hidden bg-gray-100">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute top-3 left-3 ${statusConfig.bg} ${statusConfig.color} px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm`}>
                      <i className={`fas ${statusConfig.icon} mr-1`}></i>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                          {app.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <i className="fas fa-building text-gray-400"></i>
                          <span className="font-medium">{app.organization}</span>
                          <span className="text-gray-400">•</span>
                          <span className="capitalize">{app.type}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteApp(app.id)}
                        className="ml-2 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete application"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm">
                        <i className="fas fa-calendar text-blue-500"></i>
                        <span className="text-gray-600">Applied:</span>
                        <span className="font-medium text-gray-800">{formatDate(app.appliedDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <i className="fas fa-clock text-orange-500"></i>
                        <span className="text-gray-600">Deadline:</span>
                        <span className="font-medium text-gray-800">{formatDate(app.deadline)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <i className="fas fa-map-marker-alt text-gray-400"></i>
                        <span className="text-gray-600 truncate">{app.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <i className="fas fa-dollar-sign text-green-500"></i>
                        <span className="font-semibold text-gray-800">{app.amount}</span>
                      </div>
                    </div>

                    {/* Notes */}
                    {app.notes && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg mb-3">
                        <p className="text-sm text-gray-700">
                          <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                          {app.notes}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        <i className="far fa-clock mr-1"></i>
                        Updated {formatDate(app.lastUpdate)}
                      </span>
                      <div className="flex-1"></div>
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors">
                        <i className="fas fa-eye mr-2"></i>
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                        <i className="fas fa-edit mr-2"></i>
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl" data-aos="zoom-in">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Delete Application</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Are you sure you want to delete this application from your history? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false)
                  setSelectedApp(null)
                }}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                <i className="fas fa-trash-alt mr-2"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Application

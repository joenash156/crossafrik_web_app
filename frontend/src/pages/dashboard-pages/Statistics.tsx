import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Statistics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month')
  const [animateCharts, setAnimateCharts] = useState(false)

  useEffect(() => {
    setAnimateCharts(true)
  }, [])

  // Sample data - will be replaced with actual API data
  const applicationStats = {
    total: 24,
    accepted: 8,
    pending: 12,
    rejected: 4
  }

  const monthlyData = [
    { month: 'Jan', applications: 3, accepted: 1, pending: 2, rejected: 0 },
    { month: 'Feb', applications: 5, accepted: 2, pending: 2, rejected: 1 },
    { month: 'Mar', applications: 4, accepted: 1, pending: 3, rejected: 0 },
    { month: 'Apr', applications: 6, accepted: 2, pending: 3, rejected: 1 },
    { month: 'May', applications: 4, accepted: 1, pending: 2, rejected: 1 },
    { month: 'Jun', applications: 2, accepted: 1, pending: 0, rejected: 1 },
    { month: 'Jul', applications: 3, accepted: 1, pending: 1, rejected: 1 },
    { month: 'Aug', applications: 4, accepted: 2, pending: 1, rejected: 1 },
    { month: 'Sep', applications: 5, accepted: 2, pending: 2, rejected: 1 },
    { month: 'Oct', applications: 6, accepted: 3, pending: 2, rejected: 1 },
    { month: 'Nov', applications: 7, accepted: 3, pending: 3, rejected: 1 },
    { month: 'Dec', applications: 8, accepted: 4, pending: 2, rejected: 2 }
  ]

  const categoryBreakdown = [
    { name: 'Education', value: 45, color: 'bg-blue-500' },
    { name: 'Work', value: 35, color: 'bg-purple-500' },
    { name: 'Internships', value: 15, color: 'bg-green-500' },
    { name: 'Scholarships', value: 5, color: 'bg-orange-500' }
  ]

  const recentActivity = [
    { action: 'Applied to STEM Scholarship', date: '2024-01-15', status: 'pending' },
    { action: 'Software Engineering Internship - Accepted', date: '2024-01-12', status: 'accepted' },
    { action: 'Applied to MIT Research Fellowship', date: '2024-01-10', status: 'pending' },
    { action: 'Marketing Role - Rejected', date: '2024-01-08', status: 'rejected' },
    { action: 'Applied to Data Analyst Position', date: '2024-01-05', status: 'pending' }
  ]

  const maxApplications = Math.max(...monthlyData.map(d => d.applications))

  //console.log(maxApplications);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-orange-600 bg-orange-100'
      case 'rejected': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return 'fa-check-circle'
      case 'pending': return 'fa-clock'
      case 'rejected': return 'fa-times-circle'
      default: return 'fa-circle'
    }
  }

  useEffect(() => {
    document.title = "CrossAfrik | Statistics";
  }, []);

  return (
    <div className="space-y-6 w-full max-w-full" data-aos="fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 inline-block">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Application Statistics</h1>
          <p className="text-sm text-gray-500 mt-1">Track your application progress and performance</p>
        </div>

        {/* Period Selector */}
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setSelectedPeriod('week')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedPeriod === 'week' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
          >
            Week
          </button>
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedPeriod === 'month' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
          >
            Month
          </button>
          <button
            onClick={() => setSelectedPeriod('year')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedPeriod === 'year' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 font-medium">Total Applications</p>
              <p className="text-3xl font-bold mt-2">{applicationStats.total}</p>
              <p className="text-xs mt-2 opacity-75">+3 from last month</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <i className="fas fa-paper-plane text-2xl text-blue-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 font-medium">Accepted</p>
              <p className="text-3xl font-bold mt-2">{applicationStats.accepted}</p>
              <p className="text-xs mt-2 opacity-75">{((applicationStats.accepted / applicationStats.total) * 100).toFixed(0)}% success rate</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <i className="fas fa-check-circle text-2xl text-green-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 font-medium">Pending</p>
              <p className="text-3xl font-bold mt-2">{applicationStats.pending}</p>
              <p className="text-xs mt-2 opacity-75">Awaiting response</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <i className="fas fa-clock text-2xl text-orange-500"></i>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 font-medium">Rejected</p>
              <p className="text-3xl font-bold mt-2">{applicationStats.rejected}</p>
              <p className="text-xs mt-2 opacity-75">Keep trying!</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <i className="fas fa-times-circle text-2xl text-red-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {/* Bar Chart section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Monthly Applications</h3>
              <p className="text-sm text-gray-500 mt-1">Application trends over time</p>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Applications</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Accepted</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700 w-12">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex items-center space-x-1">
                      {/* Applications Bar */}
                      <div className="relative flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                          style={{
                            width: animateCharts ? `${(data.applications / maxApplications) * 100}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <span className="text-white text-xs font-bold">{data.applications}</span>
                        </div>
                      </div>
                      {/* Accepted Bar */}
                      <div className="relative w-16 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-center"
                          style={{
                            width: animateCharts ? `${(data.accepted / data.applications) * 100}%` : '0%',
                            transitionDelay: `${index * 100 + 200}ms`
                          }}
                        >
                          <span className="text-white text-xs font-bold">{data.accepted}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6" data-aos="fade-up">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Category Breakdown</h3>
          <p className="text-sm text-gray-500 mb-6">Applications by type</p>

          <div className="space-y-4">
            {categoryBreakdown.map((category, index) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm font-bold text-gray-800">{category.value}%</span>
                </div>
                <div className="relative w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${category.color} h-full rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: animateCharts ? `${category.value}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Rate Circle */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">{((applicationStats.accepted / applicationStats.total) * 100).toFixed(0)}%</p>
                    <p className="text-xs text-gray-500 font-medium">Success</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 font-medium">Overall Acceptance Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6" data-aos="fade-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
            <p className="text-sm text-gray-500 mt-1">Your latest application updates</p>
          </div>
          <Link to="/dashboard/applications" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition-all duration-200"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(activity.status)}`}>
                  <i className={`fas ${getStatusIcon(activity.status)}`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <i className="far fa-calendar mr-1"></i>
                    {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(activity.status)}`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics

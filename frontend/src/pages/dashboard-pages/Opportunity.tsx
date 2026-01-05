import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import AOS from "aos"
import { useNavigate } from "react-router-dom"

interface Opportunity {
  id: number
  title: string
  organization: string
  description: string
  category: string
  type: "scholarship" | "internship" | "job"
  deadline: string
  location: string
  salary?: string
  amount?: string
  duration?: string
  applicants: number
  image: string
  tags: string[]
  isFeatured?: boolean
  isUrgent?: boolean
  rating?: number
}

const Opportunity = () => {
  const [selectedTab, setSelectedTab] = useState<"all" | "scholarship" | "internship" | "job">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"newest" | "deadline" | "popular">("newest");
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic"
    })
  }, [])

  // Sample data - replace with actual API data
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: "Global Tech Scholarship 2024",
      organization: "Tech Foundation",
      description: "Full scholarship covering tuition, accommodation, and living expenses for undergraduate students in STEM fields. Includes mentorship program and internship opportunities with leading tech companies.",
      category: "Full Scholarship",
      type: "scholarship",
      deadline: "2024-03-15",
      location: "USA, Canada, UK",
      amount: "$10,000/year",
      duration: "4 years",
      applicants: 1250,
      image: "https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/01/GodspowerOshodinscholarship-1024x514.jpg",
      tags: ["STEM", "Full Scholarship", "International", "Mentorship"],
      isFeatured: true,
      isUrgent: false,
      rating: 4.8
    },
    {
      id: 2,
      title: "Software Engineering Internship",
      organization: "Tech Giants Inc.",
      description: "12-week paid summer internship working on cutting-edge web applications with experienced mentors. Gain hands-on experience with React, Node.js, and cloud technologies. Possibility of full-time conversion.",
      category: "Tech Internship",
      type: "internship",
      deadline: "2024-02-28",
      location: "Ghana, Accra",
      salary: "₵8,000/month",
      duration: "3 months",
      applicants: 890,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      tags: ["Tech", "Remote Option", "Paid", "Full Stack"],
      isFeatured: true,
      isUrgent: true,
      rating: 4.9
    },
    {
      id: 3,
      title: "Medical Research Fellowship",
      organization: "Health Institute",
      description: "Prestigious fellowship program for graduate students interested in medical research. Work alongside leading researchers on groundbreaking studies in oncology and immunology.",
      category: "Research Fellowship",
      type: "scholarship",
      deadline: "2024-04-01",
      location: "Kumasi, Ghana",
      amount: "₵4,000 stipend/month",
      duration: "2 years",
      applicants: 567,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["Healthcare", "Research", "Graduate", "Stipend"],
      isFeatured: true,
      isUrgent: false,
      rating: 4.7
    },
    {
      id: 4,
      title: "Data Analyst Position",
      organization: "Analytics Corp",
      description: "Entry-level data analyst role focusing on business intelligence and data visualization. Work with large datasets using Python, SQL, and modern analytics tools. Comprehensive training provided.",
      category: "Full-time Job",
      type: "job",
      deadline: "2024-02-20",
      location: "UK, Remote",
      salary: "$75,000/year",
      duration: "Full-time",
      applicants: 423,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Remote", "Entry Level", "Data Science", "Python"],
      isFeatured: true,
      isUrgent: true,
      rating: 4.6
    },
    {
      id: 5,
      title: "Creative Writing Scholarship",
      organization: "Arts Foundation",
      description: "Scholarship for aspiring writers to pursue their passion. Includes workshop access with published authors, one-on-one mentorship, and publication opportunities in literary magazines.",
      category: "Arts Scholarship",
      type: "scholarship",
      deadline: "2024-03-30",
      location: "New York, NY",
      amount: "$20,000",
      duration: "1 year",
      applicants: 345,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
      tags: ["Arts", "Writing", "Mentorship", "Publication"],
      isFeatured: false,
      rating: 4.5
    },
    {
      id: 6,
      title: "Marketing Intern",
      organization: "Brand Solutions",
      description: "Dynamic marketing internship focusing on digital marketing, social media strategy, content creation, and brand management. Work with Fortune 500 clients.",
      category: "Marketing Internship",
      type: "internship",
      deadline: "2024-03-10",
      location: "Los Angeles, USA",
      salary: "$5,000/month",
      duration: "6 months",
      applicants: 298,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop",
      tags: ["Marketing", "Social Media", "Creative", "Digital"],
      isFeatured: false,
      rating: 4.4
    },
    {
      id: 7,
      title: "Engineering Excellence Award",
      organization: "Engineering Society",
      description: "Merit-based scholarship for outstanding engineering students with innovative project portfolios. Includes conference attendance, networking opportunities, and industry connections.",
      category: "Engineering Scholarship",
      type: "scholarship",
      deadline: "2024-04-15",
      location: "Multiple Locations",
      amount: "$30,000",
      duration: "2 years",
      applicants: 512,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      tags: ["Engineering", "Merit-based", "Innovation", "Networking"],
      isFeatured: false,
      rating: 4.7
    },
    {
      id: 8,
      title: "UX Designer Position",
      organization: "Design Studio",
      description: "Junior UX designer role working on mobile and web applications. Collaborate with cross-functional teams to create intuitive user experiences. Portfolio review required.",
      category: "Design Job",
      type: "job",
      deadline: "2024-02-25",
      location: "Accra, Ghana",
      salary: "₵70,000/year",
      duration: "Full-time",
      applicants: 387,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Design", "UX/UI", "Creative", "Mobile"],
      isFeatured: false,
      rating: 4.5
    }
  ]

  const featuredOpportunities = opportunities.filter(opp => opp.isFeatured)

  const categories = ["all", ...new Set(opportunities.map(opp => opp.category))]

  const filteredOpportunities = opportunities
    .filter(opp => selectedTab === "all" || opp.type === selectedTab)
    .filter(opp => selectedCategory === "all" || opp.category === selectedCategory)
    .filter(opp =>
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id
      if (sortBy === "deadline") return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      if (sortBy === "popular") return b.applicants - a.applicants
      return 0
    })

  const stats = {
    total: opportunities.length,
    scholarships: opportunities.filter(o => o.type === "scholarship").length,
    internships: opportunities.filter(o => o.type === "internship").length,
    jobs: opportunities.filter(o => o.type === "job").length
  }

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
    document.title = "CrossAfrik | Opportunities";
  }, []);

  return (
    <div className="space-y-8 w-full max-w-full">
      {/* Header */}
      <div className="flex flex-col gap-4" data-aos="fade-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Opportunities</h1>
            <p className="text-sm text-gray-500">Discover {stats.total} opportunities across scholarships, internships, and jobs</p>
          </div>

          {/* View Toggle & Sort */}
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${viewMode === "grid" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
                  }`}
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                onClick={() => setViewMode("list")}
                disabled
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${viewMode === "list" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
                  }`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "deadline" | "popular")}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="deadline">Deadline</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
          <input
            type="text"
            placeholder="Search by title, organization, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
        <div
          onClick={() => setSelectedTab("all")}
          className={`bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedTab === "all" ? "ring-4 ring-blue-300 shadow-xl" : ""
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-border-all text-white text-2xl"></i>
            <span className="text-3xl font-bold text-white">{stats.total}</span>
          </div>
          <p className="text-sm font-medium text-white/90">All Opportunities</p>
        </div>

        <div
          onClick={() => setSelectedTab("scholarship")}
          className={`bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedTab === "scholarship" ? "ring-4 ring-purple-300 shadow-xl" : ""
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-graduation-cap text-white text-2xl"></i>
            <span className="text-3xl font-bold text-white">{stats.scholarships}</span>
          </div>
          <p className="text-sm font-medium text-white/90">Scholarships</p>
        </div>

        <div
          onClick={() => setSelectedTab("internship")}
          className={`bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedTab === "internship" ? "ring-4 ring-green-300 shadow-xl" : ""
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-user-graduate text-white text-2xl"></i>
            <span className="text-3xl font-bold text-white">{stats.internships}</span>
          </div>
          <p className="text-sm font-medium text-white/90">Internships</p>
        </div>

        <div
          onClick={() => setSelectedTab("job")}
          className={`bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedTab === "job" ? "ring-4 ring-orange-300 shadow-xl" : ""
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-briefcase text-white text-2xl"></i>
            <span className="text-3xl font-bold text-white">{stats.jobs}</span>
          </div>
          <p className="text-sm font-medium text-white/90">Jobs</p>
        </div>
      </div>

      {/* Featured Section */}
      {featuredOpportunities.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Featured Opportunities</h2>
                <p className="text-sm text-gray-500">Handpicked opportunities just for you</p>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative w-full">
            <div
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <style>{`
                .flex.gap-6.overflow-x-auto::-webkit-scrollbar { display: none; }
              `}</style>

              {featuredOpportunities.map((opp, index) => (
                <div
                  key={opp.id}
                  className="flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-orange-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group/card h-full relative">
                    {/* Urgent Badge */}
                    {opp.isUrgent && (
                      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                        <i className="fas fa-exclamation-circle mr-1"></i>
                        URGENT
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <span className="text-xs font-bold text-gray-800">{opp.category}</span>
                      </div>

                      {/* Rating */}
                      {opp.rating && (
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                          <i className="fas fa-star text-amber-500 text-sm"></i>
                          <span className="text-sm font-bold text-gray-800">{opp.rating}</span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-bold text-xl line-clamp-2 drop-shadow-lg mb-1">
                          {opp.title}
                        </h3>
                        <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                          <i className="fas fa-building"></i>
                          {opp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-white">
                      <p className="text-sm text-white/90 leading-relaxed line-clamp-2 mb-4">
                        {opp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {opp.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-white/20">
                        <div className="flex items-center gap-2 text-sm">
                          <i className="fas fa-clock text-amber-200"></i>
                          <span className="font-medium">{formatDeadline(opp.deadline)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm justify-end">
                          <i className="fas fa-users text-amber-200"></i>
                          <span>{opp.applicants}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm col-span-2">
                          <i className="fas fa-map-marker-alt text-amber-200"></i>
                          <span className="truncate">{opp.location}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate(`/dashboard/opportunities/${opp.id}`)}
                        className="w-full bg-white text-orange-600 font-bold py-3 rounded-xl hover:bg-amber-50 hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group/btn">
                        <i className="fas fa-paper-plane group-hover/btn:translate-x-1 transition-transform"></i>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2" data-aos="fade-up" data-aos-delay="300">
        <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Filter by:</span>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category === "all" ? "All Categories" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid/List */}
      <div data-aos="fade-up" data-aos-delay="400" className="">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedTab === "all" ? "All Opportunities" : `${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}s`}
            <span className="text-gray-400 text-lg ml-2">({filteredOpportunities.length})</span>
          </h2>
        </div>

        {filteredOpportunities.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <i className="fas fa-search text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No Opportunities Found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We couldn't find any opportunities matching your criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedTab("all")
                setSelectedCategory("all")
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <i className="fas fa-redo"></i>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"}`}
          >
            {filteredOpportunities.map((opp, index) => (
              <div
                key={opp.id}
                className={`bg-white rounded-xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer ${viewMode === "list" ? "flex" : ""
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image */}
                <div className={`relative overflow-hidden bg-gray-100 ${viewMode === "list" ? "w-64 flex-shrink-0" : "h-48"
                  }`}>
                  <img
                    src={opp.image}
                    alt={opp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                      {opp.category}
                    </span>
                    <button className="bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm group/heart">
                      <i className="far fa-heart text-gray-600 group-hover/heart:text-red-500 transition-colors"></i>
                    </button>
                  </div>

                  {opp.rating && (
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <i className="fas fa-star text-amber-500 text-xs"></i>
                      <span className="text-xs font-bold text-gray-800">{opp.rating}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[56px]">
                    {opp.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-building text-gray-400 text-sm"></i>
                    <p className="text-sm text-gray-600 font-medium truncate">{opp.organization}</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 min-h-[40px]">
                    {opp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opp.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2 truncate flex-1">
                        <i className="fas fa-map-marker-alt text-gray-400 flex-shrink-0"></i>
                        <span className="truncate">{opp.location}</span>
                      </span>
                      <span className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <i className="fas fa-clock text-orange-500"></i>
                        <span className="font-medium text-gray-800 whitespace-nowrap">{formatDeadline(opp.deadline)}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <i className="fas fa-dollar-sign text-green-500"></i>
                        <span className="font-semibold text-gray-800">{opp.amount || opp.salary}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <i className="fas fa-users text-blue-500"></i>
                        <span>{opp.applicants} applied</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/dashboard/opportunities/${opp.id}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center gap-2 group/btn">
                      <i className="fas fa-paper-plane group-hover/btn:translate-x-1 transition-transform"></i>
                      Apply
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 text-sm active:scale-95">
                      <i className="fas fa-info-circle"></i>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 text-sm active:scale-95">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredOpportunities.length > 0 && filteredOpportunities.length >= 6 && (
        <div className="text-center pt-4 pb-8" data-aos="fade-up">
          <button className="px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-200 inline-flex items-center gap-3 shadow-lg hover:shadow-2xl active:scale-95">
            <i className="fas fa-plus-circle text-lg"></i>
            <span>Load More Opportunities</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Opportunity
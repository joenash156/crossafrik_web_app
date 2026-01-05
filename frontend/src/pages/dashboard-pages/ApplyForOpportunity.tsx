import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "../../index.css"

interface Opportunity {
  id: number
  title: string
  organization: string
  description: string
  deadline: string
  category: string
  applicants: number
  type: 'education' | 'work'
  image: string
  fullDescription: string
  requirements: string[]
  benefits: string[]
  applicationLink: string
  eligibility: string[]
  location: string
  duration: string
  stipend?: string
}

const ApplyForOpportunity = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null)
  const [referralRequested, setReferralRequested] = useState(false)
  const [isRequestingReferral, setIsRequestingReferral] = useState(false)
  const [showProofDialog, setShowProofDialog] = useState(false)
  const [proofFormData, setProofFormData] = useState({
    referralCode: '',
    proofFile: null as File | null
  })
  const [isSubmittingProof, setIsSubmittingProof] = useState(false)
  const [proofSubmitted, setProofSubmitted] = useState(false)

  useEffect(() => {
    // Dummy data
    const allOpportunities: Opportunity[] = [
      {
        id: 1,
        title: "STEM Scholarship Program 2024",
        organization: "National Science Foundation",
        description: "Full scholarship for undergraduate students pursuing STEM degrees. Covers tuition, books, and living expenses.",
        fullDescription: "The STEM Scholarship Program 2024 is a comprehensive financial aid initiative designed to support exceptional undergraduate students pursuing degrees in Science, Technology, Engineering, and Mathematics. This prestigious scholarship covers full tuition, textbooks, laboratory fees, and provides a generous living stipend. Recipients will also gain access to exclusive networking events, mentorship programs with industry leaders, and internship opportunities at top tech companies. The program aims to foster the next generation of innovators and problem-solvers who will drive technological advancement and scientific discovery.",
        deadline: "2024-03-15",
        category: "Scholarship",
        applicants: 245,
        type: 'education',
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
        requirements: [
          "Must be enrolled in or accepted to an accredited undergraduate STEM program",
          "Minimum GPA of 3.5 on a 4.0 scale",
          "Two letters of recommendation from academic advisors or professors",
          "Personal statement (500-750 words)",
          "Official transcripts from all attended institutions",
          "Proof of citizenship or permanent residency"
        ],
        benefits: [
          "Full tuition coverage for 4 years",
          "Annual stipend of $15,000 for living expenses",
          "Book allowance of $2,000 per academic year",
          "Access to exclusive mentorship program",
          "Guaranteed summer internship opportunities",
          "Conference attendance funding",
          "Professional development workshops"
        ],
        eligibility: [
          "Current high school seniors or undergraduate students",
          "Pursuing a degree in STEM fields (Science, Technology, Engineering, Mathematics)",
          "Demonstrate academic excellence and leadership potential",
          "Show commitment to making a positive impact in their community",
          "U.S. citizens or permanent residents"
        ],
        location: "United States (Any accredited institution)",
        duration: "4 years (Undergraduate program duration)",
        stipend: "$15,000 annually",
        applicationLink: "https://example.com/apply/stem-scholarship-2024"
      },
      {
        id: 2,
        title: "Summer Research Fellowship",
        organization: "KNUST Research Lab",
        description: "10-week paid research opportunity for college students interested in AI and Machine Learning.",
        fullDescription: "Join the cutting-edge research team at KNUST Research Lab for an intensive 10-week summer fellowship focused on Artificial Intelligence and Machine Learning. This program offers hands-on experience with state-of-the-art AI technologies, working alongside renowned researchers on groundbreaking projects. Fellows will contribute to real-world research problems, publish findings, and present at national conferences. The fellowship includes comprehensive training in advanced ML techniques, access to high-performance computing resources, and opportunities to collaborate with industry partners.",
        deadline: "2024-02-28",
        category: "Fellowship",
        applicants: 189,
        type: 'education',
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
        requirements: [
          "Currently enrolled in undergraduate or graduate program in Computer Science, Engineering, or related field",
          "Strong background in programming (Python, R, or Java)",
          "Coursework or experience in machine learning or artificial intelligence",
          "Resume/CV highlighting relevant projects and experience",
          "Statement of research interests (300-500 words)",
          "One letter of recommendation from a professor or research advisor"
        ],
        benefits: [
          "Weekly stipend of $800 for 10 weeks",
          "Housing accommodation provided",
          "Access to state-of-the-art research facilities",
          "Mentorship from leading AI researchers",
          "Opportunity to co-author research publications",
          "Certificate of completion",
          "Networking opportunities with tech industry leaders"
        ],
        eligibility: [
          "Undergraduate or graduate students in Computer Science or related fields",
          "Strong academic record (GPA 3.0 or higher)",
          "Programming experience required",
          "Available for full-time commitment during summer",
          "International students welcome to apply"
        ],
        location: "KNUST Campus, Kumasi, Ghana",
        duration: "10 weeks (June - August 2024)",
        stipend: "$800 per week",
        applicationLink: "https://example.com/apply/knust-research-fellowship"
      },
      {
        id: 3,
        title: "Graduate Study Grant",
        organization: "Global Education Fund",
        description: "Financial support for students pursuing graduate studies abroad in top universities.",
        fullDescription: "The Global Education Fund Graduate Study Grant is designed to support exceptional students pursuing master's or doctoral degrees at prestigious universities worldwide. This competitive grant provides comprehensive financial assistance to cover tuition, living expenses, and research costs. Recipients become part of a global network of scholars committed to addressing critical challenges in their fields and communities. The program emphasizes interdisciplinary research, cross-cultural collaboration, and the development of future leaders who will drive positive change in their home countries and beyond.",
        deadline: "2024-04-20",
        category: "Grant",
        applicants: 312,
        type: 'education',
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
        requirements: [
          "Bachelor's degree with honors from an accredited institution",
          "Acceptance letter from a recognized graduate program abroad",
          "Minimum GPA of 3.7 on a 4.0 scale",
          "Three letters of recommendation",
          "Research proposal or statement of purpose (1000-1500 words)",
          "Proof of English language proficiency (TOEFL/IELTS)",
          "Detailed budget plan for graduate studies"
        ],
        benefits: [
          "Full or partial tuition coverage (up to $50,000 per year)",
          "Monthly living allowance based on location",
          "Round-trip airfare to host institution",
          "Health insurance coverage",
          "Research and conference travel grants",
          "Book and equipment allowance",
          "Alumni network access and mentorship"
        ],
        eligibility: [
          "Outstanding academic record at undergraduate level",
          "Admission to a graduate program at a recognized university abroad",
          "Demonstrate leadership potential and community engagement",
          "Clear career goals aligned with home country development",
          "Citizens of developing countries prioritized"
        ],
        location: "International (Top universities worldwide)",
        duration: "2 years (Master's) or 3-4 years (PhD)",
        stipend: "Varies by location ($1,500-$2,500 monthly)",
        applicationLink: "https://example.com/apply/graduate-study-grant"
      },

    ]

    // Find the opportunity based on ID
    const foundOpportunity = allOpportunities.find(opp => opp.id === Number(id))
    if (foundOpportunity) {
      setOpportunity(foundOpportunity)
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [id])

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const handleGetReferralCode = async () => {
    setIsRequestingReferral(true)
    // Simulate API call - replace with actual backend call
    try {
      //Will be replaced with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      setReferralRequested(true)
    } catch (error) {
      console.error('Error requesting referral code:', error)
    } finally {
      setIsRequestingReferral(false)
    }
  }

  const handleProofFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFormData({ ...proofFormData, proofFile: e.target.files[0] })
    }
  }

  const handleSubmitProof = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingProof(true)

    // Simulate API call - replace with actual backend call
    try {
      // Will be replace with actual API endpoint
      // const formData = new FormData()
      // formData.append('referralCode', proofFormData.referralCode)
      // formData.append('proof', proofFormData.proofFile)
      // formData.append('opportunityId', id)
      // await fetch('/api/submit-proof', { method: 'POST', body: formData })

      await new Promise(resolve => setTimeout(resolve, 2000))
      setProofSubmitted(true)
      setTimeout(() => {
        setShowProofDialog(false)
        setProofSubmitted(false)
        setProofFormData({ referralCode: '', proofFile: null })
      }, 2000)
    } catch (error) {
      console.error('Error submitting proof:', error)
    } finally {
      setIsSubmittingProof(false)
    }
  }

  if (!opportunity) {
    return (
      <div className="flex items-center justify-center min-h-screen" data-aos="fade-up">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
          <p className="text-gray-600">Loading opportunity details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 border border-white/20"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* Title and Basic Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {opportunity.category}
              </span>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/30">
                <i className="fas fa-users mr-2"></i>
                {opportunity.applicants} applicants
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {opportunity.title}
            </h1>
            <p className="text-xl text-gray-200 mb-2">
              <i className="fas fa-building mr-2"></i>
              {opportunity.organization}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <span>
                <i className="fas fa-map-marker-alt mr-2"></i>
                {opportunity.location}
              </span>
              <span>
                <i className="fas fa-clock mr-2"></i>
                {opportunity.duration}
              </span>
              {opportunity.stipend && (
                <span>
                  <i className="fas fa-dollar-sign mr-2"></i>
                  {opportunity.stipend}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-info-circle text-blue-600 mr-3"></i>
                About This Opportunity
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {opportunity.fullDescription}
              </p>
            </div>

            {/* Requirements Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-clipboard-list text-orange-600 mr-3"></i>
                Requirements
              </h2>
              <ul className="space-y-3">
                {opportunity.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-user-check text-purple-600 mr-3"></i>
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {opportunity.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-chevron-right text-purple-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm border border-blue-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-gift text-blue-600 mr-3"></i>
                Benefits & Perks
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {opportunity.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <i className="fas fa-star text-amber-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Application Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <i className="fas fa-calendar-alt text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Application Deadline</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatDeadline(opportunity.deadline)}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium text-gray-900 text-right text-sm">{opportunity.location.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">{opportunity.duration.split('(')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium text-gray-900">{opportunity.category}</span>
                  </div>
                  {opportunity.stipend && (
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600">Stipend</span>
                      <span className="font-medium text-green-600">{opportunity.stipend.split('(')[0]}</span>
                    </div>
                  )}
                </div>

                {/* Get Referral Code Button */}
                <div className="mb-4">
                  <button
                    onClick={handleGetReferralCode}
                    disabled={isRequestingReferral || referralRequested}
                    className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${referralRequested
                      ? 'bg-green-100 text-green-700 border-2 border-green-300 cursor-default'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                      } ${isRequestingReferral ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isRequestingReferral ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : referralRequested ? (
                      <>
                        <i className="fas fa-check-circle"></i>
                        <span>Referral Code Sent</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-ticket-alt"></i>
                        <span>Get Referral Code</span>
                      </>
                    )}
                  </button>
                  {referralRequested && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg animate-fadeIn">
                      <p className="text-sm text-blue-800 text-center flex items-start">
                        <i className="fas fa-info-circle mt-0.5 mr-2 flex-shrink-0"></i>
                        <span>Check your inbox of your registered email for your referral code</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Proceed to Apply Button */}
                <a
                  href={opportunity.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:shadow-xl text-center mb-3"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Proceed to Apply
                </a>
                <p className="text-xs text-gray-500 text-center mb-4">
                  You'll be redirected to the official application portal
                </p>

                {/* Already Applied Section */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">
                    Have already applied to this opportunity?
                  </p>
                  <button
                    onClick={() => setShowProofDialog(true)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-2 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1 text-sm"
                  >
                    <i className="fas fa-upload"></i>
                    <span className="">Show Proof of Application</span>
                  </button>
                </div>
              </div>

              {/* Proof of Application Dialog */}
              {showProofDialog && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowProofDialog(false)}>
                  <div
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeIn hide-scrollbar"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Dialog Header */}
                    <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-file-upload text-xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Submit Proof of Application</h3>
                          <p className="text-sm text-blue-100">For admin verification</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowProofDialog(false)}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>

                    {/* Dialog Body */}
                    <form onSubmit={handleSubmitProof} className="p-6 space-y-6">
                      {proofSubmitted ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-check text-3xl text-green-600"></i>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">Proof Submitted Successfully!</h4>
                          <p className="text-gray-600">Your application proof has been sent for admin verification.</p>
                        </div>
                      ) : (
                        <>
                          {/* Referral Code Input */}
                          <div>
                            <label htmlFor="referralCode" className="block text-sm font-semibold text-gray-700 mb-2">
                              Referral Code <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i className="fas fa-ticket-alt text-gray-400"></i>
                              </div>
                              <input
                                type="text"
                                id="referralCode"
                                required
                                value={proofFormData.referralCode}
                                onChange={(e) => setProofFormData({ ...proofFormData, referralCode: e.target.value })}
                                placeholder="Enter your referral code"
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-2 flex items-center">
                              <i className="fas fa-info-circle mr-1"></i>
                              Enter the referral code sent to your email
                            </p>
                          </div>

                          {/* File Upload */}
                          <div>
                            <label htmlFor="proofFile" className="block text-sm font-semibold text-gray-700 mb-2">
                              Upload Proof <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="file"
                                id="proofFile"
                                required
                                onChange={handleProofFileChange}
                                accept="image/*,.pdf"
                                className="hidden"
                              />
                              <label
                                htmlFor="proofFile"
                                className="w-full border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all bg-gray-50 hover:bg-blue-50"
                              >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                  <i className="fas fa-cloud-upload-alt text-2xl text-blue-600"></i>
                                </div>
                                {proofFormData.proofFile ? (
                                  <div className="text-center">
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                      {proofFormData.proofFile.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {(proofFormData.proofFile.size / 1024).toFixed(2)} KB
                                    </p>
                                    <p className="text-xs text-blue-600 mt-2">Click to change file</p>
                                  </div>
                                ) : (
                                  <div className="text-center">
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                      Click to upload or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      PNG, JPG, PDF (max. 5MB)
                                    </p>
                                  </div>
                                )}
                              </label>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 flex items-center">
                              <i className="fas fa-shield-alt mr-1"></i>
                              Upload screenshot of confirmation email or application page
                            </p>
                          </div>

                          {/* Info Box */}
                          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <div className="flex items-start">
                              <i className="fas fa-exclamation-triangle text-amber-600 mt-1 mr-3"></i>
                              <div className="text-sm text-amber-800">
                                <p className="font-semibold mb-1">Verification Process</p>
                                <p className="text-xs">
                                  Your submission will be reviewed by our admin team. You will receive a confirmation email once verified.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                              type="button"
                              onClick={() => setShowProofDialog(false)}
                              className="flex-1 px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmittingProof}
                              className={`flex-1 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center space-x-2 ${isSubmittingProof ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            >
                              {isSubmittingProof ? (
                                <>
                                  <i className="fas fa-spinner fa-spin"></i>
                                  <span>Submitting...</span>
                                </>
                              ) : (
                                <>
                                  <i className="fas fa-paper-plane"></i>
                                  <span>Submit Proof</span>
                                </>
                              )}
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              )}

              {/* Share Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Opportunity</h3>
                <div className="flex items-center justify-center space-x-3">
                  <button className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors">
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </div>
              </div>

              {/* Save for Later */}
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <i className="far fa-bookmark"></i>
                <span>Save for Later</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyForOpportunity

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security'>('profile')
  const [profileImage, setProfileImage] = useState<string>("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteStep, setDeleteStep] = useState<'feedback' | 'email' | 'verification' | 'complete'>('feedback')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    education: "",
    school: "",
    bio: "",
    dateOfBirth: "",
    country: "",
    state: "",
    city: ""
  })

  // Security form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  // Delete account state
  const [deleteData, setDeleteData] = useState({
    feedback: "",
    email: "",
    token: ""
  })

  const [cvFiles, setCvFiles] = useState<File[]>([])
  const [showPasswordFields, setShowPasswordFields] = useState({
    current: false,
    new: false,
    confirm: false
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      setCvFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeCvFile = (index: number) => {
    setCvFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update logic here
    console.log("Profile data:", profileData)
    console.log("CV files:", cvFiles)
    setIsEditingProfile(false) // Disable editing after save
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password change logic here
    console.log("Password change:", passwordData)
  }

  const handleDeleteAccount = () => {
    if (deleteStep === 'feedback') {
      setDeleteStep('email')
    } else if (deleteStep === 'email') {
      // Send verification email
      setDeleteStep('verification')
    } else if (deleteStep === 'verification') {
      // Verify token and delete account
      setDeleteStep('complete')
    }
  }

  useEffect(() => {
    document.title = "CrossAfrik | Profile";
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
          <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your profile and security settings</p>
        </div>

        {/* Edit Button - Only show for Profile tab */}
        {activeTab === 'profile' && (
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md ${isEditingProfile
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            <i className={`fas ${isEditingProfile ? 'fa-times' : 'fa-edit'} mr-2`}></i>
            {isEditingProfile ? 'Cancel' : 'Edit Profile'}
          </button>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1.5">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${activeTab === 'profile'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <i className="fas fa-user mr-2"></i>
            Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${activeTab === 'security'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <i className="fas fa-shield-alt mr-2"></i>
            Security
          </button>
        </div>
      </div>

      {/* Profile Section */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          {/* Profile Picture Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Profile Picture</h3>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-gray-200">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <i className="fas fa-user text-white text-4xl"></i>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full shadow-lg transition-colors"
                  disabled={!isEditingProfile}
                >
                  <i className="fas fa-camera"></i>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Upload Profile Picture</h4>
                <p className="text-sm text-gray-500 mb-4">
                  JPG, PNG or GIF. Max size 5MB. Recommended size 400x400px.
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={!isEditingProfile}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fas fa-upload mr-2"></i>
                    Upload New
                  </button>
                  <button
                    onClick={() => setProfileImage("")}
                    disabled={!isEditingProfile || !profileImage}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fas fa-trash mr-2"></i>
                    Remove Picture
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information Form */}
          <form onSubmit={handleProfileSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter last name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  value={profileData.gender}
                  onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              {/* Level of Education */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level of Education <span className="text-red-500">*</span>
                </label>
                <select
                  value={profileData.education}
                  onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate/PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* School/Institution */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current School/Institution
                </label>
                <input
                  type="text"
                  value={profileData.school}
                  onChange={(e) => setProfileData({ ...profileData, school: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="University/College name"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={profileData.country}
                  onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter country"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State/Province
                </label>
                <input
                  type="text"
                  value={profileData.state}
                  onChange={(e) => setProfileData({ ...profileData, state: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter state"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={profileData.city}
                  onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                  disabled={!isEditingProfile}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter city"
                />
              </div>

              {/* CV Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Documents (CV/Resume/Transcript etc.)
                </label>

                {/* Uploaded Files List */}
                {cvFiles.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {cvFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-file-pdf text-2xl text-red-500"></i>
                          <div>
                            <p className="font-medium text-gray-800 text-sm">{file.name}</p>
                            <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        {isEditingProfile && (
                          <button
                            type="button"
                            onClick={() => removeCvFile(index)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload Area */}
                <div className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-colors ${isEditingProfile ? 'hover:border-blue-500 cursor-pointer' : 'opacity-60 cursor-not-allowed'
                  }`}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleCvUpload}
                    disabled={!isEditingProfile}
                    className="hidden"
                    id="cv-upload"
                    multiple
                  />
                  <label htmlFor="cv-upload" className={isEditingProfile ? 'cursor-pointer' : 'cursor-not-allowed'}>
                    <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                    <p className="text-sm text-gray-600 mb-1">
                      {isEditingProfile ? (
                        <><span className="text-blue-600 font-medium">Click to upload</span> or drag and drop</>
                      ) : (
                        <span className="text-gray-400">Upload disabled</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 10MB per file)</p>
                    <p className="text-xs text-gray-500 mt-1">You can upload multiple documents</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motivation
              </label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                disabled={!isEditingProfile}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="Tell us about yourself..."
              />
              <p className="text-xs text-gray-500 mt-2">Brief description for your profile. Max 500 characters.</p>
            </div>

            {/* Submit Button */}
            {isEditingProfile && (
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  <i className="fas fa-save mr-2"></i>
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      )}

      {/* Security Section */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          {/* Change Password */}
          <form onSubmit={handlePasswordChange} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="fas fa-lock text-blue-600"></i>
              Change Password
            </h3>

            <div className="space-y-4 max-w-xl">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswordFields.current ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter current password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordFields({ ...showPasswordFields, current: !showPasswordFields.current })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i className={`fas ${showPasswordFields.current ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswordFields.new ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordFields({ ...showPasswordFields, new: !showPasswordFields.new })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i className={`fas ${showPasswordFields.new ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswordFields.confirm ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordFields({ ...showPasswordFields, confirm: !showPasswordFields.confirm })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i className={`fas ${showPasswordFields.confirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                <i className="fas fa-key mr-2"></i>
                Update Password
              </button>
            </div>
          </form>

          {/* Delete Account */}
          <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
            <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              Delete Account
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Once you delete your account, there is no going back. Please be certain.
            </p>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
              <i className="fas fa-trash-alt mr-2"></i>
              Delete My Account
            </button>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            {deleteStep === 'feedback' && (
              <>
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                  <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Delete Account</h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  We're sorry to see you go. Please tell us why you're leaving.
                </p>

                <textarea
                  value={deleteData.feedback}
                  onChange={(e) => setDeleteData({ ...deleteData, feedback: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-6 resize-none"
                  placeholder="Your feedback helps us improve..."
                  required
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowDeleteModal(false)
                      setDeleteStep('feedback')
                      setDeleteData({ feedback: '', email: '', token: '' })
                    }}
                    className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={!deleteData.feedback.trim()}
                    className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {deleteStep === 'email' && (
              <>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Verify Your Email</h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Please enter your email address to receive a verification code.
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={deleteData.email}
                    onChange={(e) => setDeleteData({ ...deleteData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteStep('feedback')}
                    className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={!deleteData.email}
                    className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Code
                  </button>
                </div>
              </>
            )}

            {deleteStep === 'verification' && (
              <>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Enter Verification Code</h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  We've sent a verification code to <span className="font-semibold">{deleteData.email}</span>
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                  <input
                    type="text"
                    value={deleteData.token}
                    onChange={(e) => setDeleteData({ ...deleteData, token: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg tracking-widest font-mono"
                    placeholder="XXXXXX"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteStep('email')}
                    className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={!deleteData.token}
                    className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Delete Account
                  </button>
                </div>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Didn't receive the code? <button className="text-blue-600 hover:underline cursor-pointer">Resend</button>
                </p>
              </>
            )}

            {deleteStep === 'complete' && (
              <>
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <i className="fas fa-check text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Account Deleted</h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Your account has been successfully deleted. We're sorry to see you go!
                </p>

                <button
                  onClick={() => {
                    setShowDeleteModal(false)
                    // Redirect to login or homepage
                  }}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile

import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import CrossAfrikLogo from '../assets/son-logo.png';
import LogoName from "../assets/logo_name.png";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [isLoggedIn] = useState(false); 
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "" 
  });

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function toggleUserMenu() {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed right-0 left-0 top-0 z-50 bg-gradient-to-r from-amber-50 via-white to-amber-50 backdrop-blur-sm border-b border-amber-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to='/' className="flex items-center text-amber-800 hover:text-amber-900 transition-colors duration-200">
              <img src={CrossAfrikLogo} alt="CrossAfrik Logo" className="h-12 rounded-full" />
              <img src={LogoName} alt="Service Online Network" className="h-10 sm:block mt-3" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-1 text-sm">
              <li>
                <Link
                  to='/'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-home text-sm"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-users text-sm"></i>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-cogs text-sm"></i>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/contact-us'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-envelope text-sm"></i>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/support-us'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-amber-700 hover:text-white hover:bg-amber-600 bg-amber-100 transition-all duration-200 font-medium border border-amber-300"
                >
                  <i className="fas fa-heart text-sm"></i>
                  <span>Support Us</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/blog'
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-blog text-sm"></i>
                  <span>Blog</span>
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {/* User Menu Button */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-amber-500 hover:border-amber-600 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="User Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <i className="fas fa-user text-amber-600"></i>
                )}
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  {/* Header Section */}
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3">
                    <p className="text-white font-semibold text-sm">
                      {isLoggedIn ? `Hello, ${user.name}!` : "Hello, Guest!"}
                    </p>
                    {isLoggedIn && (
                      <p className="text-amber-100 text-xs mt-0.5 truncate">{user.email}</p>
                    )}
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/dashboard"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-th-large w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">Dashboard</span>
                        </Link>
                        <Link
                          to="/dashboard/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-user-circle w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">My Profile</span>
                        </Link>
                        <Link
                          to="/dashboard/applications"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-file-alt w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">My Applications</span>
                        </Link>
                        <Link
                          to="/dashboard/settings"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-cog w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">Settings</span>
                        </Link>
                        <hr className="my-2 border-gray-200" />
                        <button
                          onClick={() => {
                            setIsUserMenuOpen(false)
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors duration-150"
                        >
                          <i className="fas fa-sign-out-alt w-5"></i>
                          <span className="font-medium text-sm">Logout</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-sign-in-alt w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">Login</span>
                        </Link>
                        <Link
                          to="/signup"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-user-plus w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">Sign Up</span>
                        </Link>
                        <hr className="my-2 border-gray-200" />
                        <Link
                          to="/about-us"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-info-circle w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">About Us</span>
                        </Link>
                        <Link
                          to="/contact-us"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                        >
                          <i className="fas fa-envelope w-5 text-amber-600"></i>
                          <span className="font-medium text-sm">Contact Us</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* <Link
              to='/login'
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 border border-amber-600"
            >
              <i className="fas fa-rocket text-sm"></i>
              <span>Get Started</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile User Menu Button */}
            <button
              onClick={toggleUserMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-amber-500 hover:border-amber-600 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="User Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <i className="fas fa-user text-amber-600"></i>
              )}
            </button>

            <button
              className="inline-flex items-center justify-center p-2 rounded-lg text-amber-700 hover:text-amber-800 hover:bg-amber-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              onClick={toggleMenu}
              type="button"
              aria-expanded="false"
            >
              <i className={`fas text-xl transition-transform duration-300 ${isOpen ? "fa-times rotate-90" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile User Dropdown Menu */}
      {isUserMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-50 px-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-w-sm mx-auto">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3">
              <p className="text-white font-semibold text-sm">
                {isLoggedIn ? `Hello, ${user.name}!` : "Hello, Guest!"}
              </p>
              {isLoggedIn && (
                <p className="text-amber-100 text-xs mt-0.5 truncate">{user.email}</p>
              )}
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-th-large w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">Dashboard</span>
                  </Link>
                  <Link
                    to="/dashboard/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-user-circle w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">My Profile</span>
                  </Link>
                  <Link
                    to="/dashboard/applications"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-file-alt w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">My Applications</span>
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-cog w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">Settings</span>
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false)
                      // Add logout logic here
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    <i className="fas fa-sign-out-alt w-5"></i>
                    <span className="font-medium text-sm">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-sign-in-alt w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-user-plus w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">Sign Up</span>
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  <Link
                    to="/about-us"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-info-circle w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">About Us</span>
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150"
                  >
                    <i className="fas fa-envelope w-5 text-amber-600"></i>
                    <span className="font-medium text-sm">Contact Us</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
        ? "opacity-100 max-h-[500px] translate-y-0"
        : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-gradient-to-b from-white to-amber-50/30 border-t border-amber-200/30 shadow-lg">
          <Link
            to='/'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-home text-amber-600 w-5"></i>
            <span>Home</span>
          </Link>
          <Link
            to='/about-us'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-users text-amber-600 w-5"></i>
            <span>About Us</span>
          </Link>
          <Link
            to='/services'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-cogs text-amber-600 w-5"></i>
            <span>Our Services</span>
          </Link>
          <Link
            to='/contact-us'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-envelope text-amber-600 w-5"></i>
            <span>Contact Us</span>
          </Link>
          <Link
            to='/support-us'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-amber-700 hover:text-white hover:bg-amber-600 bg-amber-100 transition-all duration-200 font-medium border border-amber-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-heart w-5"></i>
            <span>Support Us</span>
          </Link>
          {/* <Link
            to='/blog'
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-amber-800 hover:bg-amber-100/50 transition-all duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-blog text-amber-600 w-5"></i>
            <span>Blog</span>
          </Link> */}

          {/* Mobile Get Started Button */}
          <div className="pt-4 border-t border-amber-200/50">
            <div className="flex justify-center">
              <Link
                to='/login'
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 border border-amber-600 min-w-[200px] justify-center"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-rocket text-sm"></i>
                <span>Get Started</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import AppLayout from "./AppLayout"
import ScrollToTop from "./components/ScrollToTop"

// Public Pages
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import SupportUs from "./pages/SupportUs"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ForgetPassword from "./components/Cards/ForgetPassword"
import OTP from "./components/Cards/OTP"

// Dashboard Pages
import DashboardLayout from "./DashboardLayout"
import Home from "./pages/dashboard-pages/Home"
import Opportunity from "./pages/dashboard-pages/Opportunity"
import Application from "./pages/dashboard-pages/Application"
import ApplyForOpportunity from "./pages/dashboard-pages/ApplyForOpportunity"
//import Settings from "./pages/dashboard-pages/Settings"
import Statistics from "./pages/dashboard-pages/Statistics"
import Notifications from "./pages/dashboard-pages/Notifications"
import Profile from "./pages/dashboard-pages/Profile"

import "aos/dist/aos.css"; // Import AOS styles
import NotFound from "./pages/NotFound";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    })
    return () => AOS.refresh()
  }, [])

  return (
    <div>
      <ScrollToTop />
      <Routes>
        {/* Public Site */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="support-us" element={<SupportUs />} />
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="otp" element={<OTP />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="opportunities" element={<Opportunity />} />
          <Route path="opportunities/:id" element={<ApplyForOpportunity />} />
          <Route path="applications" element={<Application />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="setting" element={<Settings />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App

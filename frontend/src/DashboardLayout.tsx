import { Link } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "./app-sidebar"
import { BellRing } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import ProPic from "../src/assets/hero-section-images/7556692048_e7bb0398bc_b.jpg";

const DashboardLayout = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const mobileViewSearchRef = useRef<HTMLDivElement>(null);
  //const [trigger, SheetTrigger] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (mobileViewSearchRef.current && !mobileViewSearchRef.current.contains(event.target as Node)) {
      setIsMobileSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="w-full overflow-x-hidden pt-16 sm:pt-0">
        {/* Topbar */}
        <div className={`flex justify-between items-center fixed sm:static right-0 left-0 top-0 bg-white z-10 py-3 shadow-md pr-5`}>
          <SidebarTrigger />

          <div className="flex items-center justify-between flex-1 mx-4">
            {/* Greetings with user profile picture */}
            <div className="flex items-center gap-3 md:w-1/2 bg-orange-100 py-1 pl-2 pr-6 border-l-3 border-orange-600 rounded-lg md:mx-3">
              <img src={ProPic} alt="User Profile" className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm" />
              <div className="">
                <div className="text-sm font-medium text-gray-800">Hello, User!</div>
                <div className="text-xs text-gray-500">Welcome back</div>
              </div>
            </div>
            {/* Search bar - Desktop */}
            <div className="relative hidden md:block">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
            </div>
            {/* Search icon - Mobile */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <i className="fas fa-search text-gray-600"></i>
            </button>
          </div>

          {/* Mobile Search Overlay */}
          {isMobileSearchOpen && (
            <div className="fixed inset-0 bg-gray-800/70 z-50 md:hidden">
              <div className="absolute top-0 left-0 right-0 bg-white p-4 shadow-lg" ref={mobileViewSearchRef}>
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    onClick={() => setIsMobileSearchOpen(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          <Link to="/dashboard/notifications" className="bg-[#f7f7f7] rounded-3xl p-3 hover:bg-[#f0f0f0] cursor-pointer transition-all relative">
            <BellRing className="w-4 h-4 text-gray-600" />
            <div className="absolute bg-orange-600 text-white font-semibold text-xs rounded-full -top-1 -right-3 w-6 h-6 align-center flex items-center justify-center">
              3
            </div>
          </Link>
        </div>

        {/* Render child routes */}
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout


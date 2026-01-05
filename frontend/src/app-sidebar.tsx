import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./components/ui/sidebar"
import { Home, Inbox, Search, ChevronUp, User2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { useState } from "react"
import CrossAfrikLogo from "./assets/son-logo.png";
import CrossAfrikLogoName from "./assets/logo_name_bw.png";


const items: any = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Opportunities",
    url: "/dashboard/opportunities",
    icon: Inbox,
  },
  {
    title: "Applications",
    url: "/dashboard/applications",
    icon: Search,
  }
]

export function AppSidebar() {

  const [selectedTab, setSelectedTab] = useState("Home");
  const { isMobile, setOpenMobile } = useSidebar();

  const handleMenuItemClick = (title: string) => {
    setSelectedTab(title);
    // Close sidebar on mobile when a menu item is clicked
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <div className="flex items-center py-1 px-3">
        <img src={CrossAfrikLogo} alt="CrossAfrik Logo" className="w-12 h-12 object-contain" />
        <img src={CrossAfrikLogoName} alt="CrossAfrik Logo Name" className="w-34 h-10 object-contain" />
      </div>
      <SidebarContent className="flex ml-4 gap-2.5 hover:text-black">
        <SidebarGroup />

        <SidebarGroupLabel className="font-bold text-white text-2xl"> Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item: any) => (<SidebarMenuItem key={item.title} >
              <SidebarMenuButton className="hover:text-black p-4 h-12 w-50 hover:bg-gray-50/40" asChild>
                <Link to={item.url} onClick={() => handleMenuItemClick(item.title)} className={`flex items-center gap-3 ${selectedTab === item.title ? 'bg-white hover:bg-white rounded-lg text-black' : 'text-white'} p-2`}>
                  <item.icon />
                  <span className="">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="text-white hover:text-black h-12 mb-4">
                  <User2 /> Samuel Kwame
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <Link to="/dashboard/profile" onClick={() => isMobile && setOpenMobile(false)}>
                  <DropdownMenuItem>
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={() => isMobile && setOpenMobile(false)}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
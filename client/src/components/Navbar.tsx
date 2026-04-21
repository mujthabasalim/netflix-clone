import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context";
import { logout } from "@/services/auth.service";
import logo from "@/assets/logo.png";
import search_icon from "@/assets/search_icon.svg";
import bell_icon from "@/assets/bell_icon.svg";
import profile_icon from "@/assets/profile_img.png";
import caret_icon from "@/assets/caret_icon.svg";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/tv-shows", label: "Tv & Shows" },
  { path: "/movies", label: "Movies" },
  { path: "/my-list", label: "My List" },
  { path: "/brows-by-language", label: "Brows By Language" },
];

export const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="fixed bg-black/50 z-10 top-0 w-full lg:flex justify-between items-center p-5">
      <div className="pl-11">
        <img src={logo} alt="" width={100} />
      </div>
      <div className="w-full hidden lg:flex justify-center gap-10 text-gray-400">
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.label}
            to={navItem.path}
            className={"hover:text-white"}
          >
            {navItem.label}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-5 mr-10 relative group cursor-pointer">
        <img src={search_icon} alt="Search" width={24} />
        <img src={bell_icon} alt="Notifications" width={24} />

        <div className="flex items-center gap-2">
          <img
            src={profile_icon}
            alt="Profile"
            width={32}
            className="rounded"
          />
          <img src={caret_icon} alt="Dropdown" width={16} />
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-5 right-0 pt-4 hidden group-hover:block z-50">
          <div className="bg-black/90 border border-zinc-800 rounded px-6 py-4 shadow-xl">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-white hover:underline whitespace-nowrap"
              >
                Sign Out of Netflix
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="text-white hover:underline whitespace-nowrap"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

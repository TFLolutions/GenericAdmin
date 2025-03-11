import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleAvatarClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white shadow-md dark:bg-gray-800 h-16">
      <div className="h-full mx-auto px-4 flex items-center justify-between">
        {/* Left side - Logo and toggle */}
        <div className="flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 mr-4 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
          >
            <MenuIcon />
          </button>
          <span className="font-bold text-xl text-gray-800 dark:text-white md:hidden">Admin Panel</span>
          <span className="hidden md:block font-medium text-gray-500 dark:text-gray-400">
            Welcome back, Admin
          </span>
        </div>

        {/* Middle - Search */}
        <div className="hidden md:flex flex-1 mx-10">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="text-gray-500 dark:text-gray-400" fontSize="small" />
            </div>
          </div>
        </div>

        {/* Right side - Notifications and profile */}
        <div className="flex items-center space-x-4">
          <button className="p-1 relative rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            <NotificationsIcon />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          <div className="relative">
            <button 
              onClick={handleAvatarClick}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <div className="h-9 w-9 rounded-full bg-blue-500 overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <img 
                  src="/api/placeholder/100/100" 
                  alt="User avatar" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                Admin User
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl dark:bg-gray-800 z-10">
                <a 
                  href="#profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Your Profile
                </a>
                <a 
                  href="#settings" 
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <SettingsIcon fontSize="small" className="mr-2" />
                  Settings
                </a>
                <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ExitToAppIcon fontSize="small" className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
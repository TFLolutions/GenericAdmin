import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import ListIcon from '@mui/icons-material/List';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BusinessIcon from '@mui/icons-material/Business';
import CloseIcon from '@mui/icons-material/Close';

const routes = [
  { path: '/usercreator', label: 'Users', icon: <PeopleIcon />, description: 'Manage system users' },
  { path: '/products', label: 'Products', icon: <ListIcon />, description: 'View all products' },
  { path: '/getallroles', label: 'Roles', icon: <AssignmentIndIcon />, description: 'Manage user roles' },
  { path: '/get-tenant-users', label: 'Tenants', icon: <BusinessIcon />, description: 'Tenant management' },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar - ahora comienza debajo del navbar (top-16) */}
      <div 
        className={`
          fixed top-16 left-0 z-30 bottom-0
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          transition-transform duration-300 ease-in-out
          w-64 md:w-20 lg:w-64 bg-gradient-to-b from-gray-800 to-gray-900 
          text-white shadow-lg overflow-y-auto
        `}
      >
        {/* Close button - mobile only */}
        <div className="md:hidden absolute top-0 right-0 p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white lg:block md:hidden">Dashboard</h1>
            <h1 className="text-xl font-bold text-white hidden md:block lg:hidden">DB</h1>
            <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full lg:block md:hidden"></div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-3">
              {routes.map((route, index) => {
                const isActive = location.pathname === route.path;
                
                return (
                  <li key={index}>
                    <Link
                      to={route.path}
                      className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                        isActive ? 'bg-blue-500' : 'bg-gray-700 group-hover:bg-gray-600'
                      }`}>
                        {React.cloneElement(route.icon, { 
                          className: `text-lg ${isActive ? 'text-white' : 'text-gray-300'}`,
                          fontSize: "small"
                        })}
                      </div>
                      <div className="ml-3 lg:block md:hidden">
                        <span className="font-medium block">{route.label}</span>
                        <span className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
                          {route.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center p-3 rounded-lg bg-gray-700/30 text-sm">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="font-bold">AC</span>
              </div>
              <div className="ml-3 lg:block md:hidden">
                <p className="font-medium">Admin Console</p>
                <p className="text-xs text-gray-400">v2.0.4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const AuthenticatedLayout = () => {
  return (
    <div className="app flex flex-col min-h-screen">
      <Navbar />
      <div className="main-content flex flex-1">
        <Sidebar />
        <div className="content flex-1 p-4">
          {/* Aquí usamos Outlet, que renderiza las rutas hijas */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

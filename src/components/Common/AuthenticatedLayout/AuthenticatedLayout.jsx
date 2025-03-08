import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
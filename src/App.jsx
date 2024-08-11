import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Overview from './components/Overview/Overview';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" exact element={<Overview />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

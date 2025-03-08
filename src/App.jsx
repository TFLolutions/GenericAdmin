import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import UserCreator from './pages/UserCreator/UserCreator';
import AuthenticatedLayout from './components/Common/AuthenticatedLayout/AuthenticatedLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Unauthenticated routes like Login */}
        <Route path="/login" element={<Login />} />

        {/* Authenticated routes wrapped in the AuthenticatedLayout */}
        <Route 
          path="/home" 
          element={
            <AuthenticatedLayout>
              <Routes>
                <Route path="/overview" element={<Overview />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/usercreator" element={<UserCreator />} />
                <Route path="/" exact element={<Overview />} />
              </Routes>
            </AuthenticatedLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

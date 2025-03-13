import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Overview from './components/Overview/Overview';
import Login from './pages/Login/Login';
import UserCreator from './pages/UserCreator/UserCreator';
import AuthenticatedLayout from './components/Common/AuthenticatedLayout/AuthenticatedLayout';
import ProductsManager from './components/Products/ProductsManager';
import ProtectedRoute from './components/Common/ProtectedRoute';
import { AuthProvider } from './components/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública de login */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<AuthenticatedLayout />}>
              <Route path="home" element={<ProductsManager />} />
              <Route path="overview" element={<Overview />} />
              <Route path="usercreator" element={<UserCreator />} />
              <Route path="products" element={<ProductsManager />} />
              <Route path="getallusers" element={<div>Users Page</div>} />
              <Route path="getallroles" element={<div>Roles Page</div>} />
              <Route path="get-tenant-users" element={<div>Tenants Page</div>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

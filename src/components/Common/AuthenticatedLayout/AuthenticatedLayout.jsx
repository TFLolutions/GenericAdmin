import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const AuthenticatedLayout = () => {
  // Estado compartido para controlar la visibilidad del sidebar
  const { isAuthenticated } = useAuth(); // Verificamos si el usuario está autenticado
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Si no está autenticado, redirigir a /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navbar fijo en la parte superior */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-1 pt-16"> {/* Añadimos pt-16 para dar espacio al navbar */}
        {/* Sidebar ahora tiene top-16 para comenzar debajo del navbar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Overlay para cerrar sidebar en móvil al hacer clic fuera */}
        <div 
          className={`
            fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-200 pt-16
            md:hidden
            ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Contenido principal - Outlet para las rutas anidadas */}
        <main className="flex-1 overflow-auto p-4 transition-all duration-300 md:ml-20 lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handleAvatarClick = () => {
    navigate('/login'); // Redirige a la ruta de login
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Avatar
          alt="User"
          src="/path/to/avatar.jpg"
          style={{ cursor: 'pointer' }} // Cambiamos el cursor para indicar que es clickeable
          onClick={handleAvatarClick} // Llamamos a la función para redirigir
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
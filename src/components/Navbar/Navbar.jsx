import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Avatar alt="User" src="/path/to/avatar.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

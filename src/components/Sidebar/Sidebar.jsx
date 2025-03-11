import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';

const routes = [
  { path: '/getallusers', label: 'Users', icon: <PeopleIcon /> },
  { path: '/products', label: 'Products', icon: <ListIcon /> },
  { path: '/getallroles', label: 'Roles', icon: <ListIcon /> },
  { path: '/get-tenant-users', label: 'Tenants', icon: <PeopleIcon /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <List>
        {routes.map((route, index) => (
          <ListItem
            component={Link}
            to={route.path}
            key={index}
            className={`hover:bg-gray-700 rounded-lg p-2 ${location.pathname === route.path ? 'bg-gray-600' : ''}`}
          >
            <ListItemIcon className="text-white">{route.icon}</ListItemIcon>
            <ListItemText primary={route.label} className="text-white" />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

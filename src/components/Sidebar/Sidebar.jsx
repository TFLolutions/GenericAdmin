import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import BookIcon from '@mui/icons-material/Book';
import GridOnIcon from '@mui/icons-material/GridOn';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem component={Link} to="/overview">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem component={Link} to="/list">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="List Pages" />
        </ListItem>
        <ListItem component={Link} to="/usercreator">
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="User creator" />
        </ListItem>
        <ListItem component={Link} to="/grid">
          <ListItemIcon>
            <GridOnIcon />
          </ListItemIcon>
          <ListItemText primary="Grid Pages" />
        </ListItem>
        <ListItem component={Link} to="/documentation">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

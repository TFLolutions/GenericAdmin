import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h5">Income Yearly</Typography>
            <Typography variant="h4">$34,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h5">Recent Activities</Typography>
            <ul>
              <li>Extended license purchased from France.</li>
              <li>New rating received: ★★★★☆</li>
              <li>Customer's problem solved.</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

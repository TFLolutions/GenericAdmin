import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h5" style={{ padding: 16 }}>
            Congratulations! 🎉 You have reached your monthly sales targets.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Sales</Typography>
          <Typography variant="h4">$34.00</Typography>
          <Typography variant="subtitle1">41.67% increase from last year</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Campaigns</Typography>
          <Typography variant="h4">$3,265.72</Typography>
          <Typography variant="subtitle1">34.69% decrease from last year</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Overview;

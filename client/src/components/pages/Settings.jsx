import React from 'react';

import { Container, Typography, TextField, Button, Grid, Paper,Avatar } from '@mui/material';
import avatar from './avatar.webp';

export const Settings = () => {
 

    return (
      
  
        <Container maxWidth="sm" style={{marginBottom:'100px'}}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h4" gutterBottom>
            User Settings
          </Typography>

          <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} align="center">
            <Avatar alt="User Avatar" src={avatar} sx={{ width: 100, height: 100 }} />
            <Button variant="outlined" color="primary"  style={{ marginTop: '20px',marginBottom:'20px' }} >
              Change Picture
            </Button>
          </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Current Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="New Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" type="email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary"  style={{
             
            }}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );



}


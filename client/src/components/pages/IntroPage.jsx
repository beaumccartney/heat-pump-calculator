import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HomePicture from './HomePicture.png';
import HeatPumpPicture from './HeatPumpPicture.png';


export const IntroPage = () => {
    
    const openNewTab = () => {
        window.open('', '_blank');
    };

    return (
        <>
        <div >
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <Grid container spacing={2} alignItems="right">
              <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
                <img src={HomePicture} alt="Home" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              {/* Right side with text */}
              <Grid item xs={12} sm={6} >
                <Typography  variant="h4" align="left" gutterBottom   >
                  HOW HEAT PUMPS <br /> PAY OFF
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                  Heat pumps can be a cost-effective way to heat and cool homes while reducing climate pollution.
                  <br />
                  This interactive tool allows you to compare the cost of heat pumps to other home heating and cooling options in five cities across Canada.
                </Typography>
              </Grid>
            </Grid>
          </Container>
    
          <Container sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
            border: '2px solid #ccc', // Add border
            borderRadius: '8px', // Add border-radius for rounded corners
            marginBottom: '50px',
            marginTop: '100px'
           
          }}>
         
  <Grid container spacing={2} justifyContent="center" alignItems="center">
  {/* Left side with text and button */}
  <Grid item xs={12} md={6}>
    <Typography variant="h5" align="left" gutterBottom>
   <b>   GET STARTED WITH HEAT PUMPS TODAY!</b>
    </Typography>
    <Typography variant="subtitle1" align="left">
      Start Optimizing Your Process
    </Typography>
    <Button variant="contained"  style={{ backgroundColor: 'black', color: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
      Start
    </Button>
  </Grid>
  {/* Right side with smaller responsive image */}
  <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
    <img src={HeatPumpPicture} alt="HeatPumpPicture" style={{ width: '100%', maxWidth: '300px' }} />
  </Grid>
</Grid>
 
         
        </Container>
        </div>
        </>
    );

};

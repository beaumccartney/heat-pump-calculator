import React from 'react';
import './IntroPage.scss'; 
import HomePicture from './HomePicture.png';
import HeatPumpPicture from './HeatPumpPicture.png';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Intro= () => {
    
    const openNewTab = () => {
        window.open('', '_blank');
    };

    return (
        <Container sx={{ mt: 5 }}>

            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        HOW HEAT PUMPS <br /> PAY OFF
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={HomePicture} alt="HomePicture" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center" paragraph>
                        Heat pumps can be a cost-effective way to heat and cool homes while reducing climate pollution.
                        <br /><br />
                        This interactive tool allows you to compare the cost of heat pumps to other home heating and cooling options in five cities across Canada.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10}>
                    <Typography variant="h6" align="center" gutterBottom>
                        GET STARTED WITH HEAT PUMPS TODAY!
                    </Typography>
                    <img src={HeatPumpPicture} alt="HeatPumpPicture" style={{ width: '100%' }} />
                    <br />
                    <Typography variant="subtitle1" align="center">
                        Start Optimizing Your Process
                    </Typography>
                    <Button variant="contained" color="primary" onClick={openNewTab} fullWidth>
                        Start
                    </Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Intro;

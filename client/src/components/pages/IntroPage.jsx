import React from 'react'; // Importing React library for building UI components
import Button from '@mui/material/Button'; // Importing React library for building UI components
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HomePicture from '../assets/images/HomePicture.png'; // Importing image for Home
import HeatPumpPicture from '../assets/images/HeatPumpPicture.png'; 
import { useHistory } from 'react-router-dom';  // Importing useHistory hook from react-router-dom for navigating

//import axios from 'axios';  // Importing useHistory hook from react-router-dom for navigating
// import Papa from 'papaparse';

export const IntroPage = () => {
    
    //<--> const openNewTab = () => {
    //     window.open('', '_blank');
    // };

    // Initializing useHistory hook for navigation
    let history = useHistory();

    const handleClick = () => {
      // Navigating to '/dashboard' route
      history.push('/dashboard');
    };
    
    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // input json to the api
    //             // schema is defined in server/appRoutes.js
    //             const inputs = {
    //                 buildYear: "1960-1981",
    //                 sizeOfHome: 1500,
    //             }
    //             const response = await axios.post('http://localhost:3001/api/calc', inputs)

    //             // parse the csv data
    //             const config = {} // adjust however works best to parse the data
    //             const parsedCsv = Papa.parse(response.data, config);
    //             setData(parsedCsv.data);
    //             console.log(data)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, [data])


    return (
        <>
        <div >
        {/* Material UI Container component */}
          <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <Grid container spacing={2} alignItems="right">
              <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
                <img src={HomePicture} alt="Home" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              {/* Right side with text */}
              <Grid item xs={12} sm={6} >
                {/* Material UI Typography component */}
                <Typography  variant="h4" align="left" gutterBottom   >
                  HOW HEAT PUMPS <br /> PAY OFF
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                  Heat pumps can be a cost-effective way to heat and cool homes while reducing climate pollution.
                  <br />
                  This interactive tool allows you to compare the cost of heat pumps to other home heating and cooling options.
                </Typography>
              </Grid>
            </Grid>
          </Container>
    {/* Styles for Container */}
          <Container sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            border: '2px solid #ccc', 
            borderRadius: '8px', 
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
    {/* Button  */}
    <Button onClick={handleClick} variant="contained"  style={{ backgroundColor: 'black', marginTop: '30px', color: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
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

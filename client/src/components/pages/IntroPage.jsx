import React from "react"; // Importing React library for building UI components
import Button from "@mui/material/Button"; // Importing React library for building UI components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HomePicture from "../assets/images/HomePicture.png"; // Importing image for Home
import HeatPumpPicture from "../assets/images/HeatPumpPicture.png";
import { useHistory } from "react-router-dom"; // Importing useHistory hook from react-router-dom for navigating

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
    history.push("/calculator");
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
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set height to 100vh for full viewport height
        margin: 'auto', // Optional: to center horizontally
       }}>
        {/* Material UI Container component */}
        <Container
        
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <img
                src={HomePicture}
                alt="Home"
                style={{ width: "100%", maxWidth: "30em" }}
              />
            </Grid>
            {/* Right side with text */}
            <Grid item xs={12} sm={6}>
              {/* Material UI Typography component */}
              <Typography variant="h3" align="left" gutterBottom style={{ fontWeight: "bold", marginBottom: ".5em"}}>
                HOW HEAT PUMPS <br /> PAY OFF
              </Typography>
              <Typography variant="body1" align="left" paragraph style={{fontSize: "20px", color: "#9f9f9f"}}>
                Heat pumps can be a cost-effective way to heat and cool homes
                while reducing climate pollution.
                <br /><br />
                This interactive tool allows you to compare the cost of heat
                pumps to other home heating and cooling options.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {/* Styles for Container */}
        <Container
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(136, 136, 136, 0.266)",
            borderRadius: "8px",
            marginBottom: "50px",
            marginTop: "100px",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* Left side with text and button */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" align="left" gutterBottom style={{ marginBottom: "-.5em"}}>
                <b style={{ fontSize: "1.5em", fontWeight: "500" }}> GET STARTED WITH HEAT PUMPS TODAY!</b>
              </Typography>
              <Typography variant="subtitle1" align="left" style={{ color: "#9f9f9f", fontSize: "18px", margin: "1.5em 0"}}>
                Start Optimizing Your Process
              </Typography>
              {/* Button  */}
              <Button
                onClick={handleClick}
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  width: "10em",
                  fontWeight: "bold",
                  padding: ".5em 0",
                  fontSize: "16px"
                }}
              >
                Start
              </Button>
            </Grid>
            {/* Right side with smaller responsive image */}
            <Grid item xs={12} md={5} style={{ textAlign: "right" }}>
              <img
                src={HeatPumpPicture}
                alt="HeatPumpPicture"
                style={{ width: "100%", maxWidth: "275px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

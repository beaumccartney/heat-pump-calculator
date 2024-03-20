import React from 'react';

import '../FAQ/FAQ.scss';
import ReactDOM from 'react-dom/client';
import FAQPicture from '../assets/images/FAQPicture.jpg'
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQ = () => {
 

    return (
    <>
    <div style={{paddingLeft: "2em"}}>
    <h2 id='Heading'>Frequently Asked Questions</h2>
    <p className='ParagraphText'> Welcome to our FAQ page! Find quick answers to common queries below.</p>
    <br></br></div>
    {/* <Typography variant="h2">Frequently Asked Questions</Typography>
      <Typography variant="body1">Welcome to our FAQ page! Find quick answers to common queries below.</Typography>
       */}
    <Container>
    <Container style={{ display: 'flex', justifyContent: 'center', paddingBottom: "2em" }}>
  <img src={FAQPicture} alt="FAQ Picture" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
</Container>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">How do heat pumps work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Heat pumps transfer heat between the indoors and outdoors, extracting heat from the air, ground, or water source to warm a space.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Include other Accordion items as needed */}
      </Grid>
      <Grid item xs={12}>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Are heat pumps noisy?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Modern heat pumps are designed to operate quietly, but noise levels can vary. Selecting a high-quality model and proper installation can minimize noise.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Grid>

<Grid item xs={12}>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Are there government incentives for installing heat pumps?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Many regions offer incentives or rebates to encourage the installation of energy-efficient heat pump systems. Check local programs for details.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Grid>

<Grid item xs={12}>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">What size heat pump do I need for my home?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Proper sizing depends on factors like square footage, insulation, and climate. Consult with a professional to determine the right size for your specific needs.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Grid>

<Grid item xs={12}>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Can a heat pump be used in conjunction with other heating systems?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Yes, heat pumps can complement other heating systems, providing additional efficiency and flexibility.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Grid>

<Grid item xs={12}>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">How long do heat pumps typically last?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        With proper maintenance, heat pumps can last around 15-20 years. Regular inspections and timely repairs can extend their lifespan.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Grid>
    </Container>
    </>  
    
    );



}


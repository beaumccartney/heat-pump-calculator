import React from 'react';
import ReactDOM from 'react-dom/client';
import FAQPicture from '../assets/images/FAQPicture.jpg';
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../FAQ/FAQ.scss';

export const FAQ = () => {
  const faqItems = {
    heatPumps: {
      title: "How do heat pumps work?",
      details: "Heat pumps transfer heat between the indoors and outdoors, extracting heat from the air, ground, or water source to warm a space."
    },
    noiseLevels: {
      title: "Are heat pumps noisy?",
      details: "Modern heat pumps are designed to operate quietly, but noise levels can vary. Selecting a high-quality model and proper installation can minimize noise."
    },
    governmentIncentives: {
      title: "Are there government incentives for installing heat pumps?",
      details: "Many regions offer incentives or rebates to encourage the installation of energy-efficient heat pump systems. Check local programs for details."
    },
    sizeRequirements: {
      title: "What size heat pump do I need for my home?",
      details: "Proper sizing depends on factors like square footage, insulation, and climate. Consult with a professional to determine the right size for your specific needs."
    },
    conjunctionWithOtherHeating: {
      title: "Can a heat pump be used in conjunction with other heating systems?",
      details: "Yes, heat pumps can complement other heating systems, providing additional efficiency and flexibility."
    },
    lifespan: {
      title: "How long do heat pumps typically last?",
      details: "With proper maintenance, heat pumps can last around 15-20 years. Regular inspections and timely repairs can extend their lifespan."
    }
  };

  return (
    <>
      <Box sx={{ paddingLeft: "2em", paddingTop: "1em" }}>
        <Typography variant="h4" gutterBottom component="div" id='Heading'>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" className='ParagraphText'>
          Welcome to our FAQ page! Find quick answers to common queries below.
        </Typography>
      </Box>

      <Container maxWidth="md">
        <Box my={4} display="flex" justifyContent="center">
          <img src={FAQPicture} alt="FAQ Picture" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
        </Box>

        <Grid container spacing={2}>
          {Object.entries(faqItems).map(([key, { title, details }], index) => (
            <Grid item xs={12} key={key}>
              <Accordion sx={{ marginBottom: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{details}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

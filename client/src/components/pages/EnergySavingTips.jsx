

import '../energySavingTips/EnergySavingTips.scss';


import EnergySavingTipsPicture from '../assets/images/EnergySavingTipsPicture.jpg' 
import EnergySavingTipsPic1 from '../assets/images/EnergySavingTipsPic1.png' 
import EnergySavingTipsPic2 from '../assets/images/EnergySavingTipsPic2.png' 
import EnergySavingTipsPic3 from '../assets/images/EnergySavingTipsPic3.png'
import EnergySavingTipsPic4 from '../assets/images/EnergySavingTipsPic4.png'  

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
export const EnergySavingTips = () => {
//  https://forum.freecodecamp.org/t/centering-bootstrap-cards/489829/3
// https://react-bootstrap.netlify.app/docs/components/cards#link

    return (
        
    
<>
{/* https://reintech.io/blog/creating-a-responsive-card-layout-with-css */}

{/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_cards */}
{/* https://www.youtube.com/watch?v=eYGIIc2FOVI */}
<h2 id='Heading'>Energy Saving Tips</h2>
    <p className='ParagraphText'> Welcome to our Energy Saving Tips page! Find quick Energy Saving Tips below.</p>
    <br></br>
    
    {<img src = {EnergySavingTipsPicture} className = 'EnergySavingTipsPicture' alt="EnergySavingTipsPicture" ></img>}
<Grid
 container
 spacing = {4}
 
// style={{ justifyContent: 'flex-end', paddingLeft: '10px' }}
style={{ justifyContent: 'Center' }}


>
      <Grid item xs = {12} md = {2.4} lg ={2}>
    <Card sx={{ maxWidth: 345, height: '600px' }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={EnergySavingTipsPic1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Heating your Home in Cold Temperatures 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Heat pumps can keep your home warm even in subzero temperatures. Contrary to popular belief, they work efficiently in cold climates. 

In Calgary, heating your home with an air-source heat pump below 10°C may lead to higher utility bills compared to using a high-efficiency natural gas furnace. This is because the blended rate of electricity is currently higher than natural gas per unit of energy consumed.  
        </Typography>
      </CardContent>
    
    </Card>
</Grid>
    <Grid item xs = {12} md = {2.4} lg ={2}>
    <Card sx={{ maxWidth: 345, height: '600px'  }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={EnergySavingTipsPic2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pairing your Heat Pump with a High Efficiency Furnace 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Unless your home has been built with thick interior and exterior insulation and has been professionally air sealed, it is wise to ensure your home has a source of natural gas heating for those very cold winter days and nights.  
        </Typography>
      </CardContent>
    
    </Card>
</Grid>

<Grid item xs = {12} md = {2.4} lg ={2}>
    <Card sx={{ maxWidth: 345, height: '600px'  }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={EnergySavingTipsPic3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pairing your Heat Pump with a Solar Photovoltaic System 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Installing a solar PV system along with your heat pump will allow you to generate electricity credits that you can use in the winter to offset the cost of heating your home with an air-source heat pump.   

This will allow you to operate your heat pump at lower exterior temperatures and at a lower cost.  
        </Typography>
      </CardContent>
    
    </Card>
</Grid>

<Grid item xs = {12} md = {2.4} lg ={2}>
    <Card sx={{ maxWidth: 345, height: '600px'  }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={EnergySavingTipsPic4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        GHG Emissions from Heat Pumps and Furnaces 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        60% of Alberta’s electricity is generated by natural gas power plants. Because of this, the GHG emissions created by a heat pump can be more than emissions created by a natural gas furnace at lower temperatures. As it gets colder outside, the heat pump must work harder to create heat, reducing its efficiency, and causing it to draw more electricity from the grid.  

As cleaner sources of electricity are added to Alberta’s electricity system such as wind, solar, hydro, and nuclear, the GHG emissions created by your heat pump will go down.  
        </Typography>
      </CardContent>
    
    </Card>
</Grid>

    </Grid>
</>

);



}
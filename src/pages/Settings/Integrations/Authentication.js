import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
ListItem,
ListItemAvatar,
ListItemText,
 } from "@material-ui/core";
 import Switch from '@mui/material/Switch';
import Scrollbars from "react-custom-scrollbars";

function Authentication() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
       <>
       <div className="css-1yqw6cw">
       <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1">
          Authentications
          </Typography>
       
      </Grid>



      <Grid
              container
              justify="space-between"
           
            >
           
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
         <Box className="authbox">
<Box>
<ListItem alignItems="flex-start" style={{paddingLeft:0}}>
 <ListItemText><Typography variant="body2">Wrky (Skill Assesment)</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar >
  <Switch {...label} />
    </ListItemAvatar> 
</Box>
</Box>

<Box className="authbox">
<Box>
<ListItem alignItems="flex-start" style={{paddingLeft:0}}>
 <ListItemText><Typography variant="body2">Resume Parsing</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar >
  <Switch {...label} />
    </ListItemAvatar> 
</Box>
</Box>

     </Scrollbars>
    </Box>


</Grid>

    
       </div>
       </>
    )
}

export default Authentication

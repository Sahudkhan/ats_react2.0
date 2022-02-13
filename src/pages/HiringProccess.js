import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Typography, Box, ListItem, ListItemText, Checkbox, ListItemAvatar, Grid, Button} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Scrollbars from "react-custom-scrollbars";
import DropDownHiring from "../component/DropDownHiring";

function HiringProccess() {
  
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Map Activity");
  const [selectTriggerType, setSelectTriggerType] = useState("All");
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>  

<Box
className="css-7551ie h-100"
>
         <Grid
              container
              justify="space-between"
              alignItems="center"
              className="title-bar"
            >
              <Grid
                xs={12}
                sm={12}
                md={12}
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="subtitle1" style={{marginBottom:15}}>
                Job Details
              </Typography>
              
              </Grid>
           
            </Grid>
         <Box>
         <Grid container spacing={2} >
              <Grid item xs={4} >
              <Grid className="borderRIghtnew">
                <Scrollbars style={{height:'65vh', paddingRight:10}}>
         
                <Box className="boxpapper">
        <Box>
           
        <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{minWidth:'20px', marginTop:2}}>
<DragIndicatorIcon/>
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="h6" style={{fontSize:"16px", marginBottom:0}}> Hiring Team Screen</Typography>
  <Typography variant="body1"  > 
  <DropDownHiring
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Resume Screening", "Email /Notification", "Approved / Reject", "Schedule Interview", "Move to Onboarding"]}
                />
  </Typography>
  </ListItemText>
</ListItem>
       
         
</Box>
<Box>  <Checkbox {...label} /></Box>

      </Box>

             
                </Scrollbars>
               
                </Grid>
               
              </Grid>
              

              <Grid item xs={8} >
              <Grid
              container
              justify="space-between"
              alignItems="center"
              className="title-bar"
            >
              <Grid
                xs={4}
                sm={5}
                md={4}
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="h6"  style={{fontSize:"16px", }}>
          Hiring Team
        </Typography>
              </Grid>
              <Grid xs={8} sm={7} md={8} className="flex-end-center">
             
               
                <Link to="/CreateJob">
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                 >
                  Add Member
                </Button>
                </Link>
              </Grid>
            </Grid>

awdafsg
              
              </Grid>
            </Grid>
    </Box>
   
   </Box>
 
     
           
        </>
    )
}

export default HiringProccess

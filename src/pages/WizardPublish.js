import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
ListItem,
Avatar,
ListItemAvatar,
ListItemText,
Popover, 
List,
 } from "@material-ui/core";
 import Switch from '@mui/material/Switch';
 import IconButton from '@material-ui/core/IconButton';
 import Scrollbars from "react-custom-scrollbars";
 import MoreVertIcon from '@material-ui/icons/MoreVert';

function WizardPublish() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
       <>
       <div className="w-100 mt-30">
       <Box sx={{ padding: '0px 20px', overflow: 'hidden' }}>
       <Grid className="flex-between-center mb-20" >
          <Typography variant="subtitle1">
         Publish
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
 <ListItemText>
 <Box className="start-flex flex-start-center">
   <Avatar alt="Zimyo" src="/img/logoicon.png" className="jobicon"/>
   <Typography variant="body2">Totaljobs <span className="paid">free</span></Typography>
   </Box>
   </ListItemText>
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
  
 <ListItemText>
 <Box className="start-flex flex-start-center">
   <Avatar alt="Zimyo" src="/img/logoicon.png" className="jobicon"/>
   <Typography variant="body2">Totaljobs <span className="paid">paid</span></Typography>
   </Box>
   </ListItemText>
</ListItem>
</Box>
 <Box>  
 <Box style={{textAlign:"right"}}>
         <IconButton 
          onClick={handleClick}
        style={{padding:0}}
         >
           <MoreVertIcon />
         </IconButton>
         <Popover
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
     >
      <List className="list-popover">
       <ListItem className="list-item flex-start-center">
         <ListItemText
               primaryTypographyProps={{
                 style: {
                   fontWeight: 500,
                   color: "inherit",
                 },
               }}
              >
              Edit
              </ListItemText>
       </ListItem>

     
      
       </List>
     </Popover>
     </Box>

  <ListItemAvatar >
  <Switch {...label} />
    </ListItemAvatar> 
</Box>
</Box>

     </Scrollbars>
    </Box>


</Grid>

    </Box>
       </div>
       </>
    )
}

export default WizardPublish

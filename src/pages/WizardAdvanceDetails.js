import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
ListItem,
Button,
ListItemAvatar,
ListItemText,
Popover, 
List,
 } from "@material-ui/core";
 import IconButton from '@material-ui/core/IconButton';
 import Scrollbars from "react-custom-scrollbars";
 import AddCircleIcon from '@mui/icons-material/AddCircle';
 import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
 import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
function WizardAdvanceDetails() {
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
       <div className="w-100">
     <Box sx={{ padding: '20px', overflow: 'hidden' }}>
      <Grid className=" mb-20 mt-4" >
          <Typography variant="subtitle1">
          Advance Details
          </Typography>
       <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
      </Grid>
     
<Grid className="cardList">
<Grid className="flex-between-center" >
          <Typography variant="subtitle1">
          Basic Details
          </Typography>
       asdf
      </Grid>
  </Grid>

      <Box>
          <Button 
           onClick={handleClick}
       className="addques"
          >
            <AddCircleIcon />&nbsp; Add Question
          </Button>
          <Popover
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
       <List className="list-popover">
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                    display:'flex',
                    alignItems:'center'
                  },
                }}
               >
              <RadioButtonCheckedIcon/>&nbsp;  Multiple Choice
          </ListItemText>
        </ListItem>

        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                    display:'flex',
                    alignItems:'center'
                  },
                }}
               >
             <AlignHorizontalLeftIcon/>&nbsp;  Single Choice
          </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
    </Box>


    
       </div>
       </>
    )
}

export default WizardAdvanceDetails

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Typography, Box, ListItem, ListItemText, Popper, Paper, Checkbox, List, Fade, ListItemAvatar, Grid, Button, Popover} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import Scrollbars from "react-custom-scrollbars";
import DropDownHiring from "../component/DropDownHiring";

function WizardHiringProccess() {
  
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Map Activity");
  const [selectTriggerType, setSelectTriggerType] = useState("All");
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

<Box
className=" h-100 mt-30">
      
      <Box sx={{ padding: '0px 20px', overflow: 'hidden' }}>
         <Grid container spacing={2} >
              <Grid item xs={6} >
              <Grid className="borderRIghtnew">
              <Grid
              container
              justify="space-between"
              alignItems="center"
              className="title-bar mb-20"
            >
              <Grid
                xs={4}
                sm={5}
                md={4}
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="h6"  style={{fontSize:"16px", }}>
          Workflow
        </Typography>
              </Grid>
              <Grid xs={8} sm={7} md={8} className="flex-end-center dropdmenu">
             
              <DropDownHiring
                            width={135}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Resume Screening", "Email /Notification", "Approved / Reject", "Schedule Interview", "Move to Onboarding"]}
                          />
              </Grid>
            </Grid>


                <Scrollbars style={{height:'54vh', paddingRight:10}}>
         
                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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

                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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


                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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

                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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

                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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
                <Box className="boxpapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:3}}>
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
               
                <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
         
          <Button style={{
            color:'#335AFF', 
            margin:'10px  0px 0px 0px', 
            padding:'7px 3px',
            textDecoration:'none', 
            background:'transparent', 
            fontFamily:'Roboto'
            }} variant="text" {...bindToggle(popupState)}>
          + Add Workflow Steps
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Grid className="flex-between-center">
                  <Typography variant="h6" style={{fontSize:"16px", marginBottom:0}}> Hiring Team Screen</Typography>
                  <CloseIcon/>
                  </Grid>
                <Scrollbars style={{height:'50vh', width:300}}>
                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> Hiring Team</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> Recruiter Screen</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> Final Interview</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> Video Interview</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> On Site Interview</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> Test Assignment</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

                <Box className="flex-between-center ">
                 <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>
                 <Typography variant="body1"> BVG Aadhar</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                  <Box><Checkbox {...label} /></Box>
                </Box>

</Scrollbars>

<Link
  component="button"
  color="primary"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
                </Grid>
               
              
              </Grid>              

              <Grid item xs={6} >
              <Grid
              container
              justify="space-between"
              alignItems="center"
              className="title-bar mb-20"
            >
              <Grid
                xs={6}
                sm={6}
                md={6}
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="h6"  style={{fontSize:"16px", }}>
          Hiring Team
        </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} className="flex-end-center">
             
               
            
             
                <Button 
                style={{
                color:'#335AFF', 
                textDecoration:'none', 
                background:'transparent', 
                fontFamily:'Roboto'
                }} variant="text">
          + Add Member
          </Button>
              
              </Grid>
            </Grid>

            <Grid container spacing={2}>
       <Grid item xs={12} >
         <Grid className="boxpapperteam">
  <Box>
            <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:5,}}> Sahud Khan</Typography>
         <Typography variant="body1">Interviewer</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>

      <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0, marginTop:9}}
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
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>


      <Grid item xs={12} >
         <Grid className="boxpapperteam">
  <Box>
            <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:5,}}> Sahud Khan</Typography>
         <Typography variant="body1">Interviewer</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>

      <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0, marginTop:9}}
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
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>

      <Grid item xs={12} >
         <Grid className="boxpapperteam">
  <Box>
            <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:5,}}> Sahud Khan</Typography>
         <Typography variant="body1">Interviewer</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>

      <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0, marginTop:9}}
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
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>


      </Grid>
              </Grid>
            </Grid>
    </Box>
   
   </Box>
 
     
           
        </>
    )
}

export default WizardHiringProccess

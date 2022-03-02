import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, ListItem, TableRow, ListItemText, Popover, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchComponent from "../component/SearchComponent";
import Scrollbars from "react-custom-scrollbars";
import UiLoader from "../component/app/loader";
import FormBuilder, { MyTable } from "../component/formBuilder";
// import CustomModal from "../component/customModal"
import CustomModalfullwidth from "../component/customModalfullwidth";

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderSpacing:"2px 20px",
      borderCollapse:'inherit'
  
     
    }
   });

function MyInterview() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openAdd, setOpenAdd] = useState(false);
const [values, setValues] = useState({});
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
      };
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const submitForm = (e) => {
        setOpenAdd(false)
       }
    return (
       <>
        <main>
        <Grid className="top_tabs">
         <Box className="start-flex mainheadingall">
        <Typography variant="h2" style={{fontSize:18}}>Interview</Typography></Box> 
        <Grid item align = "center" justify = "center" alignItems = "center" >
        <NavLink exact className="menuneww" activeClassName="active_class" to="/MyApprovals">My Approvals</NavLink>
         <NavLink exact className="menuneww" activeClassName="active_class" to="/MyInterview">My Interview</NavLink>
         <NavLink exact className="menuneww" activeClassName="active_class" to="">Schedule By Me</NavLink>
         <NavLink exact className="menuneww" activeClassName="active_class" to="">All Interviews</NavLink>
       </Grid>
    
        </Grid>
      

<Grid className="allcssmain">
<Box className="w-100 flex-between-center mb-20">
            <Typography variant="subtitle1">My Interview</Typography>
            <div className="flex-center">
            <Box className="mr-20">
               <SearchComponent/>
              </Box>

              <Grid className="flex-start-center  mr-20">
          <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web">Pending</ToggleButton>
      <ToggleButton value="android">Completed</ToggleButton>
    </ToggleButtonGroup>


          </Grid>

            <Box  className="icon-cover flex-center"
                  // onClick={() => setopenDrawer(!openDrawer)}
                >
                  <FilterListIcon className="header-icon" />
                </Box>

               
            </div>
          </Box>
      

          <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Title</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Candidate</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Date & Time</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Interviewer Owner</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Scheduled By</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Step</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Status</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab textright">Source</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow className="bordernewcollumn">
                 
                        <TableCell >
                        <ListItem alignItems="flex-start" style={{padding:0}}>
     
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"18px", marginBottom:8}}>Research Analytics</Typography>
         <Typography variant="body1">Job Id : #JOB7551</Typography>
         </ListItemText>
                      </ListItem>
      </TableCell>

      <TableCell className="tablebody-14-roboto border-bottom-tab">
      <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}>Cameron Williamson</Typography>
         <Typography variant="body1" style={{marginBottom:5}}>UI UX Designer</Typography>
         <Typography variant="body1">Admin</Typography>
         </ListItemText>
                      </ListItem>
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Typography style={{fontWeight:500, marginBottom:7}}>May 05,</Typography> 
         <Typography>12:00-12:45 Pm</Typography>
 </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/img/bitmap.png" />
      <Avatar alt="Travis Howard" src="/img/bitmap2.png" />
      <Avatar alt="Cindy Baker" src="/img/bitmap.png" />
      <Avatar alt="Agnes Walker" src="/img/bitmap2.png" />
      <Avatar alt="Trevor Henderson" src="/img/bitmap.png" />
    </AvatarGroup>
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="body1" style={{fontSize:"14px", marginTop:17,}}>Robert F</Typography>
         </ListItemText>
                      </ListItem>

      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Resume Review</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Scheduled</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab textright">
      
      <Box className="righdrop">
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
              Re-schedule Interview
               </ListItemText>
        </ListItem>

        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >
             Update Status
               </ListItemText>
        </ListItem>

        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >
            Cancel Interview
               </ListItemText>
        </ListItem>

       
        </List>
      </Popover>
      </Box>
     <Typography>LinkedIn</Typography> 
      </TableCell>
     
                   
                  </TableRow>

                  <TableRow className="bordernewcollumn">
                 
                 <TableCell >
                 <ListItem alignItems="flex-start" style={{padding:0}}>

 <ListItemText>
 <Typography variant="h6" style={{fontSize:"18px", marginBottom:8}}>Research Analytics</Typography>
  <Typography variant="body1">Job Id : #JOB7551</Typography>
  </ListItemText>
               </ListItem>
</TableCell>

<TableCell className="tablebody-14-roboto border-bottom-tab">
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}>Cameron Williamson</Typography>
  <Typography variant="body1" style={{marginBottom:5}}>UI UX Designer</Typography>
  <Typography variant="body1">Admin</Typography>
  </ListItemText>
               </ListItem>
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
  <Typography style={{fontWeight:500, marginBottom:7}}>May 05,</Typography> 
  <Typography>12:00-12:45 Pm</Typography>
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
<AvatarGroup max={4}>
<Avatar alt="Remy Sharp" src="/img/bitmap.png" />
<Avatar alt="Travis Howard" src="/img/bitmap2.png" />
<Avatar alt="Cindy Baker" src="/img/bitmap.png" />
<Avatar alt="Agnes Walker" src="/img/bitmap2.png" />
<Avatar alt="Trevor Henderson" src="/img/bitmap.png" />
</AvatarGroup>
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:17,}}>Robert F</Typography>
  </ListItemText>
               </ListItem>

</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">Resume Review</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">Scheduled</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab textright">

<Box className="righdrop">
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
 <ListItem className="list-item flex-start-center"    onClick={() => setOpenAdd(true)}>
   <ListItemText
     
         primaryTypographyProps={{
           style: {
             fontWeight: 500,
             color: "inherit",
           },
         }}
        >
       Re-schedule Interview
        </ListItemText>
 </ListItem>

 <ListItem className="list-item flex-start-center">
   <ListItemText
         primaryTypographyProps={{
           style: {
             fontWeight: 500,
             color: "inherit",
           },
         }}
        >
      Update Status
        </ListItemText>
 </ListItem>

 <ListItem className="list-item flex-start-center">
   <ListItemText
         primaryTypographyProps={{
           style: {
             fontWeight: 500,
             color: "inherit",
           },
         }}
        >
     Cancel Interview
        </ListItemText>
 </ListItem>


 </List>
</Popover>
</Box>
<Typography>LinkedIn</Typography> 
</TableCell>

            
           </TableRow>

                
              
          </TableBody>
        </Table>
      </TableContainer>
     </Scrollbars>
    </Box>
   

</Grid>
       



        <CustomModalfullwidth
          open={openAdd}
          cancelClicked={
            () => {
              setOpenAdd(false)
            }
          }
          confirmClicked={
            submitForm
          }
          // width="700px"
          confirmText="Submit"
          name= "Schedule Interview">
          <div className="p-5">
          <FormBuilder size="md" fields={[
           { type: 'input', name: 'RULE_NAME', label: 'Attribute Name', required: false },
           { type: 'input', name: 'RULE_NAME', label: 'Applicable To', required: false },
         
            ]} values={values} inputHandler={handleChange} />
            
            </div>
        </CustomModalfullwidth>

        </main>
       </>
    )
}

export default MyInterview

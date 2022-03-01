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

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderSpacing:"1px 20px",
      borderCollapse:'inherit'
  
     
    }
   });

function MyApprovals() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [alignment, setAlignment] = React.useState('web');
  
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
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
            <Typography variant="subtitle1">My Approvals</Typography>
            <div className="flex-center">
            <Box className="mr-20">
               <SearchComponent/>
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
             <TableCell className="tablehead-14-roboto border-bottom-tab">Candidate Details </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Designation</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Department</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Steps</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Sent By</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Status</TableCell>

         
            </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow hover className="bordernewcollumn">
                 
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
        <Typography variant="body1" style={{fontSize:"14px", marginTop:16,}}>Robert F</Typography>
         </ListItemText>
       </ListItem>
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      Senior Developer
 </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      IT Dep
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      Hirng Team
    

      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="body1" style={{fontSize:"14px", marginTop:16,}}>Robert F</Typography>
         </ListItemText>
       </ListItem>

      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
      Shortlisted
      </TableCell>
                </TableRow>

                <TableRow hover className="bordernewcollumn">
                 
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
 <Typography variant="body1" style={{fontSize:"14px", marginTop:16,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
Senior Developer
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
IT Dep
</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
Hirng Team


</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:16,}}>Robert F</Typography>
  </ListItemText>
</ListItem>

</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">
Shortlisted
</TableCell>
         </TableRow>

              
          </TableBody>
        </Table>
      </TableContainer>
     </Scrollbars>
    </Box>
   

</Grid>
       
        </main>
       </>
    )
}

export default MyApprovals

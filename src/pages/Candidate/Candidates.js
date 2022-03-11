import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Typography, Box, ListItem, TableRow, ListItemText, Popover, Checkbox, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import FilterListIcon from "@material-ui/icons/FilterList";
import DownloadIcon from '@mui/icons-material/Download';
import AvatarGroup from '@mui/material/AvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Scrollbars from "react-custom-scrollbars";
import SearchComponent from "../../component/SearchComponent";
import DropDownHiring from "../../component/DropDownHiring";

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderSpacing:"2px 20px",
      borderCollapse:'inherit'
  
     
    }
   });

   
function Candidates() {
    const classes = useStyles();
 
    const [initialMount, setInitialMount] = useState(true);
    const [selectByStatus, setSelectByStatus] = useState("Map Activity");
    return (
        <main>
        <Grid className="top_tabs">
         <Box className="start-flex mainheadingall"><Typography variant="h2" style={{fontSize:18}}>Candidates</Typography></Box> 
        <Grid item align = "center" justify = "center" alignItems = "center" >
        <NavLink exact className="menuneww" activeClassName="active_class" to="/Candidates">Assigned</NavLink>
         <NavLink exact className="menuneww" activeClassName="active_class" to="/UnassignCandidates">Unassigned</NavLink>
         
          </Grid>
    
        </Grid>
      

<Grid className="allcssmain">
<Box className="w-100 flex-between-center mb-20">
            <Typography variant="h2">Assigned </Typography>
            <div className="flex-center">
            <Box className="mr-20">
               <SearchComponent/>
              </Box>

              <Box  className="icon-cover flex-center mr-20">
                  <DownloadIcon className="header-icon" />
                </Box>

                <Box  className="icon-cover flex-center mr-20">
                  <DownloadIcon className="header-icon" />
                </Box>


            <Box  className="icon-cover flex-center mr-20"
                  // onClick={() => setopenDrawer(!openDrawer)}
                >
                  <FilterListIcon className="header-icon" />
                </Box>

                
             
              <Box >
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                 >
                  Add New
                </Button>
              </Box>
            </div>
          </Box>
    
    
   

     
         <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Name</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Jobs Applied</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Step</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Status</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Added On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Updated On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Source</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow className="bordernewcollumn">
                 
                        <TableCell >
                        <ListItem alignItems="flex-start" style={{padding:0}}>
                      
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}>
        <Link to="/CandidatesDetails"  underline="none"> Sahud Khan</Link></Typography>
         <Typography variant="body1"  >khansahud@gmail.com</Typography>
         <Typography  variant="body1">+91-99999 09876</Typography>
         </ListItemText>
      </ListItem>
      </TableCell>

      <TableCell className="tablebody-14-roboto border-bottom-tab">
      <DropDownHiring
                            width={165}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Quality Analyst", "UI Designer", "Front End Developer"]}
                          />
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Hiring Team Screen</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Pending</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">21 Sep, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">24 May, 2020 </TableCell>
     <TableCell  className="tablebody-14-roboto border-bottom-tab">Linkedin</TableCell>
     
                   
                  </TableRow>

                
              
          </TableBody>
        </Table>
      </TableContainer>
     </Scrollbars>
    </Box>
   
  
    

    
</Grid>
       
        </main>
    )
}

export default Candidates

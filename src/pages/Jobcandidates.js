import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, ListItem, TableRow, ListItemText, Checkbox, Popover, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@mui/icons-material/List';
import FilterListIcon from "@material-ui/icons/FilterList";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchComponent from "../component/SearchComponent";
import CustomDropDown from "../component/CustomDropDown";
import FitlerDrawer from "../component/FitlerDrawer";
import Scrollbars from "react-custom-scrollbars";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderSpacing:"2px 20px",
    borderCollapse:'inherit'

   
  }
 });


function Jobcandidates() {
  const classes = useStyles();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [filter, setfilter] = useState({});
  const [openDrawer, setopenDrawer] = useState(false);
  const [openFitlerDrawer, setOpenFilterDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Select Next Steps");


    return (
        <>
        <Box className="wh-100 flex-center-start">

<Box
className="css-7551ie h-100"
style={{ width: openDrawer ? "calc(100% - 18.4vw)" : "100%" }}
>
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
                <Typography variant="subtitle1">
          Candidates
        </Typography>
              </Grid>
              <Grid xs={8} sm={7} md={8} className="flex-end-center">
                <Box style={{ marginRight: 20 }}>
               <SearchComponent/>
              </Box>
               
                <Box  className="icon-cover flex-center mr-20">
                  <ListIcon className="header-icon" />
                </Box>
               

                <Box
                  className="icon-cover flex-center mr-20"
                  style={{ marginRight: 20 }}
                  onClick={() => setOpenFilterDrawer(true)}
                >
                   <FilterListIcon className="header-icon" />
                </Box>
               
                <Link to="/CreateJob">
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                 >
                  Add New
                </Button>
                </Link>
              </Grid>
            </Grid>
         <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Name</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Source</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Applied</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Overall Status</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Updated On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Next Stage</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Action</TableCell>
         
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
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}> Sahud Khan</Typography>
         <Typography variant="body1"  >khansahud@gmail.com</Typography>
         <Typography  variant="body1">+91-99999 09876</Typography>
         </ListItemText>
      </ListItem>
      </TableCell>

      <TableCell className="tablebody-14-roboto border-bottom-tab">Linkedin</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">15 May 2021</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Interview 1</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">24 May, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">
     
      <Box className="mr-20">
                <CustomDropDown
                  width={215}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Move to Manager", "Move to Refrence Check"]}
                />
              </Box>
      
      </TableCell>

      <TableCell>
      <Box>
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
               Remove from this job
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
              Mark as withdraw
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
            Reject
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
            Messages
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
            Add to another job
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
            Hold
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </TableCell>
     
                   
                  </TableRow>

                  <TableRow className="bordernewcollumn">
                 
                 <TableCell >
                 <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar>
   <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}> Sahud Khan</Typography>
  <Typography variant="body1"  >khansahud@gmail.com</Typography>
  <Typography  variant="body1">+91-99999 09876</Typography>
  </ListItemText>
</ListItem>
</TableCell>

<TableCell className="tablebody-14-roboto border-bottom-tab">Linkedin</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">15 May 2021</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">Interview 1</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">24 May, 2020</TableCell>
<TableCell className="tablebody-14-roboto border-bottom-tab">

<Box className="mr-20">
         <CustomDropDown
           width={215}
           selectedMenu={selectByStatus}
           updateMenu={(item) => {
             setInitialMount(false);
             setSelectByStatus(item);
           }}
           menuItem={["Move to Manager", "Move to Refrence Check"]}
         />
       </Box>

</TableCell>

<TableCell>
<Box>
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
        Remove from this job
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
       Mark as withdraw
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
     Reject
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
     Messages
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
     Add to another job
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
     Hold
        </ListItemText>
 </ListItem>


 </List>
</Popover>
</Box>
</TableCell>

            
           </TableRow>
              
          </TableBody>
        </Table>
      </TableContainer>

      <Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
>
  <Grid className="maincandibox">
  <Box className="flex-between-center headingmian">
  <Box>
                 <ListItem alignItems="flex-start" >
                 <ListItemText>

                 <Typography variant="h6"><Checkbox {...label} style={{padding:"0px 5px 0px 0px"}}/> Pending for welcome mail</Typography>
                 </ListItemText>
                 </ListItem>
                 </Box>
                 <Box>
   <IconButton 
    onClick={handleClick}
  style={{padding:0}}
   >
     <MoreVertIcon />
   </IconButton>
  
</Box>
  </Box>         

<Grid className="candidatecanva">
<Box className="candipapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:0}}>
          <Checkbox {...label} style={{padding:"0px 5px 0px 0px"}}/>
          </ListItemAvatar>
          <ListItemText>
          <Typography variant="h6" > Rohit Sharma</Typography>
            <Typography variant="body1"  > 
            ronit@zimyo.com
            </Typography>
            </ListItemText>
          </ListItem>
                
                  
                </Box>
                
                 
                  <Box>
                 
   <IconButton 
    onClick={handleClick}
  style={{padding:0, marginTop:'-17px'}}
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
        Remove from this job
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
       Mark as withdraw
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
     Reject
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
     Messages
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
     Add to another job
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
     Hold
        </ListItemText>
 </ListItem>


 </List>
</Popover>
<DragIndicatorIcon/>
</Box>
 </Box>

 <Box className="candipapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:0}}>
          <Checkbox {...label} style={{padding:"0px 5px 0px 0px"}}/>
          </ListItemAvatar>
          <ListItemText>
          <Typography variant="h6" > Rohit Sharma</Typography>
            <Typography variant="body1"  > 
            ronit@zimyo.com
            </Typography>
            </ListItemText>
          </ListItem>
                
                  
                </Box>
                
                 
                  <Box>
                 
   <IconButton 
    onClick={handleClick}
  style={{padding:0, marginTop:'-17px'}}
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
        Remove from this job
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
       Mark as withdraw
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
     Reject
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
     Messages
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
     Add to another job
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
     Hold
        </ListItemText>
 </ListItem>


 </List>
</Popover>
<DragIndicatorIcon/>
</Box>
 </Box>


 <Box className="candipapper">
                  <Box>
                    
                  <ListItem alignItems="flex-start" style={{padding:0}}>
          <ListItemAvatar style={{minWidth:'18px', marginTop:0}}>
          <Checkbox {...label} style={{padding:"0px 5px 0px 0px"}}/>
          </ListItemAvatar>
          <ListItemText>
          <Typography variant="h6" > Rohit Sharma</Typography>
            <Typography variant="body1"  > 
            ronit@zimyo.com
            </Typography>
            </ListItemText>
          </ListItem>
                
                  
                </Box>
                
                 
                  <Box>
                 
   <IconButton 
    onClick={handleClick}
  style={{padding:0, marginTop:'-17px'}}
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
        Remove from this job
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
       Mark as withdraw
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
     Reject
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
     Messages
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
     Add to another job
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
     Hold
        </ListItemText>
 </ListItem>


 </List>
</Popover>
<DragIndicatorIcon/>
</Box>
 </Box>
</Grid>
  </Grid>
 

</Grid>
     </Scrollbars>
    </Box>
   
   </Box>
  {openFitlerDrawer ? (
          <FitlerDrawer
            width="260px"
            // style={{ width: "250px !important" }}
            openFilter={openFitlerDrawer}
            closeFilter={(e) => {
              e.preventDefault();
              setOpenFilterDrawer(false);
            }}
            filterKey="jobs"
            filter={filter}
            updateFilterList={(val) => setfilter({ ...val })}
            // filterList={formFieldValue}
          />
        ) : null}
     
        </Box>
           
        </>
    )
}

export default Jobcandidates

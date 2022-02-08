import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { ListItemText, List, ListItem, Popover,  Grid, Card, Badge, Avatar, TablePagination, Button, Typography, Box, Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from "@material-ui/icons/FilterList";
import { useTheme } from "@material-ui/core/styles";
import FilterList from "@material-ui/icons/FilterList";
import DownloadIcon from '@mui/icons-material/Download';
import AvatarGroup from '@mui/material/AvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomDropDown from "../component/CustomDropDown";
import SearchComponent from "../component/SearchComponent";
import FitlerDrawer from "../component/FitlerDrawer";


function Myjobs() {
  const theme = useTheme();
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
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [filter, setfilter] = useState({});
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Expired");
  const [selectTriggerType, setSelectTriggerType] = useState("All");
 
    return (

      <main>
        <Grid className="top_tabs">
        <Box className="start-flex mainheadingall"><Typography variant="h2" style={{fontSize:18}}>Jobs</Typography></Box> 
        <Grid item align = "center" justify = "center" alignItems = "center" >
        <NavLink exact className="menuneww" activeClassName="active_class" to="/Myjobs">My Jobs</NavLink>
          <NavLink exact className="menuneww" activeClassName="active_class" to="/alljobs">All Jobs</NavLink>
         
          </Grid>
    
        </Grid>
      

        <Box className="wh-100 flex-center-start">

          <Box
          className="calcendar-page h-100"
          style={{ width: openDrawer ? "calc(100% - 18.4vw)" : "100%" }}
        >
         
          <Grid className="wh-100 flex-between-start flex-column">
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
                 <Typography variant="h2">My Jobs</Typography>
              </Grid>
              <Grid xs={8} sm={7} md={8} className="flex-end-center">
                <Box style={{ marginRight: 20 }}>
               <SearchComponent/>
              </Box>
               
                <Box  className="icon-cover flex-center mr-20">
                  <DownloadIcon className="header-icon" />
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
                  Create New
                </Button>
                </Link>
              </Grid>
            </Grid>
          <Card className="cardbox">
         <Grid container>
          <Grid item xs={8}>
          <Typography variant="h6" style={{fontSize:"18px"}}>Front End Developer (React)</Typography>
          <Typography variant="body1" className="mt-10" >Job Id : #12310074</Typography>
          </Grid>
           <Grid item xs={4} >
           <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} >
           <Box className="mr-20">
           <AvatarGroup max={3} direction="row">
      <Avatar alt="Naukri" src="/img/naukri.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Glassdor" src="/img/glass.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Linkedin" src="/img/linkedin.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
   
    </AvatarGroup>
    </Box>

           <Box className="mr-20">
                <CustomDropDown
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Active", "Inactive"]}
                />
              </Box>
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
               Edit
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
               >View</ListItemText> 
        </ListItem>
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >Delete</ListItemText> 
        </ListItem>
        </List>
      </Popover>
      </Box>
      </Box>
       </Grid>

        </Grid>
        <Divider className="spacem" />
        <Grid container>
       
        <Grid item xs={7}>
         
      <Box 
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
           <Box>
           <Typography variant="body1" >All Active </Typography>
           <Typography variant="h6" className="numberjobs">200</Typography>
           </Box>

           <Box>
          
 <Typography variant="body1" >New </Typography>
 <Typography variant="h6" className="numberjobs">80</Typography>
       
           </Box>

           <Box>
           <Typography variant="body1" >In Progress </Typography>
           <Typography variant="h6" className="numberjobs">100</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >On Hold </Typography>
           <Typography variant="h6" className="numberjobs">29</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Selected </Typography>
           <Typography variant="h6" className="numberjobs">44</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Hired </Typography>
           <Typography variant="h6" className="numberjobs">555</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Rejected </Typography>
           <Typography variant="h6" className="numberjobs">700</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Withdrawn </Typography>
           <Typography variant="h6" className="numberjobs">222</Typography>
           </Box>



        </Box>
          </Grid>

       <Grid item xs={5} >
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
           
          <Box>
          <Typography variant="body1" >Position Closed</Typography>
          <Typography variant="body1" color="subtitle1"  className="numberjobs2">200/2000</Typography>

          </Box>


          <Box>
          <Typography variant="body1" >Expiring On</Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Feb 24, 2021</Typography>

       </Box>

        <Box>
        <Typography variant="body1">Created By </Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Sahud khan</Typography>

        </Box>

        </Box>

</Grid>
       </Grid>
      </Card>

    
    
       {/* Card 2 */}

       <Card className="cardbox">
         <Grid container>
          <Grid item xs={8}>
          <Typography variant="h6" style={{fontSize:"18px"}}> <Link to="/JobDetails">Front End Developer (React)</Link></Typography>
          <Typography variant="body1" className="mt-10" >Job Id : #12310074</Typography>
          </Grid>
           <Grid item xs={4} >
           <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} >
           <Box className="mr-20">
           <AvatarGroup max={3} direction="row">
      <Avatar alt="Naukri" src="/img/naukri.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Glassdor" src="/img/glass.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Linkedin" src="/img/linkedin.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
   
    </AvatarGroup>
    </Box>

           <Box className="mr-20">
                <CustomDropDown
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Active", "Inactive"]}
                />
              </Box>
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
               Edit
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
               >View</ListItemText> 
        </ListItem>
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >Delete</ListItemText> 
        </ListItem>
        </List>
      </Popover>
      </Box>
      </Box>
       </Grid>

        </Grid>
        <Divider className="spacem" />
        <Grid container>
       
        <Grid item xs={7}>
         
      <Box 
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
           <Box>
           <Typography variant="body1" >All Active </Typography>
           <Typography variant="h6" className="numberjobs">200</Typography>
           </Box>

           <Box>
          
 <Typography variant="body1" >New </Typography>
 <Typography variant="h6" className="numberjobs">80</Typography>
       
           </Box>

           <Box>
           <Typography variant="body1" >In Progress </Typography>
           <Typography variant="h6" className="numberjobs">100</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >On Hold </Typography>
           <Typography variant="h6" className="numberjobs">29</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Selected </Typography>
           <Typography variant="h6" className="numberjobs">44</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Hired </Typography>
           <Typography variant="h6" className="numberjobs">555</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Rejected </Typography>
           <Typography variant="h6" className="numberjobs">700</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Withdrawn </Typography>
           <Typography variant="h6" className="numberjobs">222</Typography>
           </Box>



        </Box>
          </Grid>

       <Grid item xs={5} >
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
           
          <Box>
          <Typography variant="body1" >Position Closed</Typography>
          <Typography variant="body1" color="subtitle1"  className="numberjobs2">200/2000</Typography>

          </Box>


          <Box>
          <Typography variant="body1" >Expiring On</Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Feb 24, 2021</Typography>

       </Box>

        <Box>
        <Typography variant="body1">Created By </Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Sahud khan</Typography>

        </Box>

        </Box>

</Grid>
       </Grid>
      </Card>
    
    {/* card 3 */}

    <Card className="cardbox">
         <Grid container>
          <Grid item xs={8}>
          <Typography variant="h6" style={{fontSize:"18px"}}>Front End Developer (React)</Typography>
          <Typography variant="body1" className="mt-10" >Job Id : #12310074</Typography>
          </Grid>
           <Grid item xs={4} >
           <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} >
           <Box className="mr-20">
           <AvatarGroup max={3} direction="row">
      <Avatar alt="Naukri" src="/img/naukri.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Glassdor" src="/img/glass.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Linkedin" src="/img/linkedin.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
   
    </AvatarGroup>
    </Box>

           <Box className="mr-20">
                <CustomDropDown
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Active", "Inactive"]}
                />
              </Box>
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
               Edit
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
               >View</ListItemText> 
        </ListItem>
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >Delete</ListItemText> 
        </ListItem>
        </List>
      </Popover>
      </Box>
      </Box>
       </Grid>

        </Grid>
        <Divider className="spacem" />
        <Grid container>
       
        <Grid item xs={7}>
         
      <Box 
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
           <Box>
           <Typography variant="body1" >All Active </Typography>
           <Typography variant="h6" className="numberjobs">200</Typography>
           </Box>

           <Box>
          
 <Typography variant="body1" >New </Typography>
 <Typography variant="h6" className="numberjobs">80</Typography>
       
           </Box>

           <Box>
           <Typography variant="body1" >In Progress </Typography>
           <Typography variant="h6" className="numberjobs">100</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >On Hold </Typography>
           <Typography variant="h6" className="numberjobs">29</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Selected </Typography>
           <Typography variant="h6" className="numberjobs">44</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Hired </Typography>
           <Typography variant="h6" className="numberjobs">555</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Rejected </Typography>
           <Typography variant="h6" className="numberjobs">700</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Withdrawn </Typography>
           <Typography variant="h6" className="numberjobs">222</Typography>
           </Box>



        </Box>
          </Grid>

       <Grid item xs={5} >
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
           
          <Box>
          <Typography variant="body1" >Position Closed</Typography>
          <Typography variant="body1" color="subtitle1"  className="numberjobs2">200/2000</Typography>

          </Box>


          <Box>
          <Typography variant="body1" >Expiring On</Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Feb 24, 2021</Typography>

       </Box>

        <Box>
        <Typography variant="body1">Created By </Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Sahud khan</Typography>

        </Box>

        </Box>

</Grid>
       </Grid>
      </Card>
    
    {/* card 4 */}

    <Card className="cardbox">
         <Grid container>
          <Grid item xs={8}>
          <Typography variant="h6" style={{fontSize:"18px"}}>Front End Developer (React)</Typography>
          <Typography variant="body1" className="mt-10" >Job Id : #12310074</Typography>
          </Grid>
           <Grid item xs={4} >
           <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }} >
           <Box className="mr-20">
           <AvatarGroup max={3} direction="row">
      <Avatar alt="Naukri" src="/img/naukri.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Glassdor" src="/img/glass.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
      <Avatar alt="Linkedin" src="/img/linkedin.svg" style={{ width: 24, height: 24, background:"#f0f0f0", marginRight:'15px', padding:5 }}/>
   
    </AvatarGroup>
    </Box>

           <Box className="mr-20">
                <CustomDropDown
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Active", "Inactive"]}
                />
              </Box>
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
               Edit
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
               >View</ListItemText> 
        </ListItem>
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >Delete</ListItemText> 
        </ListItem>
        </List>
      </Popover>
      </Box>
      </Box>
       </Grid>

        </Grid>
        <Divider className="spacem" />
        <Grid container>
       
        <Grid item xs={7}>
         
      <Box 
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
           <Box>
           <Typography variant="body1" >All Active </Typography>
           <Typography variant="h6" className="numberjobs">200</Typography>
           </Box>

           <Box>
          
 <Typography variant="body1" >New </Typography>
 <Typography variant="h6" className="numberjobs">80</Typography>
       
           </Box>

           <Box>
           <Typography variant="body1" >In Progress </Typography>
           <Typography variant="h6" className="numberjobs">100</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >On Hold </Typography>
           <Typography variant="h6" className="numberjobs">29</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Selected </Typography>
           <Typography variant="h6" className="numberjobs">44</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Hired </Typography>
           <Typography variant="h6" className="numberjobs">555</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Rejected </Typography>
           <Typography variant="h6" className="numberjobs">700</Typography>
           </Box>

           <Box>
           <Typography variant="body1" >Withdrawn </Typography>
           <Typography variant="h6" className="numberjobs">222</Typography>
           </Box>



        </Box>
          </Grid>

       <Grid item xs={5} >
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
           
          <Box>
          <Typography variant="body1" >Position Closed</Typography>
          <Typography variant="body1" color="subtitle1"  className="numberjobs2">200/2000</Typography>

          </Box>


          <Box>
          <Typography variant="body1" >Expiring On</Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Feb 24, 2021</Typography>

       </Box>

        <Box>
        <Typography variant="body1">Created By </Typography>
        <Typography variant="body1" color="subtitle1"  className="numberjobs2">Sahud khan</Typography>

        </Box>

        </Box>

</Grid>
       </Grid>
      </Card>
    

        {/* <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    /> */}
  </Grid>
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
       
        </main>
    )
}

export default Myjobs

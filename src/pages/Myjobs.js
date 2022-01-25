import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Paper, Divider, Grid, Tab, Card, TablePagination, Button, Typography, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomDropDown from "../component/CustomDropDown";
import SearchComponent from "../component/SearchComponent";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
     
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

function Myjobs() {
    const classes = useStyles();
    const [initialMount, setInitialMount] = useState(true);
    const [selectByStatus, setSelectByStatus] = useState("All Requests");
    const [selectTriggerType, setSelectTriggerType] = useState("All");
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

 
    return (

      <main>
        <div className="top_tabs">
        
        <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        
        onChange={handleChange}
        centered
      >
        <Tab className="menuneww" exact label="All Jobs" component={Link} to="/alljobs"/>
        <Tab className="menuneww" exact label="My Jobs" component={Link} to="/Myjobs" />
       
      </Tabs>
    
</div>
      

<div className="allcssmain">
<Box className="w-100 flex-between-center mt-15">
            <Typography variant="h2">My Requests</Typography>
            <div className="flex-center">
             
              <Box className="mr-20">
                <CustomDropDown
                  width={150}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["All Requests", "Pending", "Approved", "Rejected"]}
                />
              </Box>
              <Box className="mr-20">
               <SearchComponent/>
              </Box>
              <Box className="mr-15">
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  
                >
                  Apply New
                </Button>
              </Box>
            </div>
          </Box>
        <div className={classes.root}>
      <Paper className={classes.paper}>


        <Grid container>
          <Grid item xs={10}>
          <Typography variant="h6" component="h6"> Business analyst111</Typography>
          <Typography variant="body2" color="textSecondary">Job Id : #12310074</Typography>
          </Grid>
           <Grid item xs={2} align = "right" justify = "flex-end" alignItems = "flex-end">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
       </Grid>

        </Grid>
        <Grid container  spacing={3}>
       
        <Grid item xs={7}>
         
      <Box 
         sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
           <Box>
           <Typography variant="body2" color="textSecondary">All Active </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">New </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">In Progress </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">On Hold </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">Selected </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">Hired </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">Rejected </Typography>
           <Typography variant="h6">80</Typography>
           </Box>

           <Box>
           <Typography variant="body2" color="textSecondary">Withdrawn </Typography>
           <Typography variant="h6">80</Typography>
           </Box>



        </Box>
          </Grid>

          <Grid item xs={5} >
          <Grid item xs container > 
          <Grid item xs={3}>
          <Typography variant="body2"  color="textSecondary">Published On</Typography>
         <Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>

     </Grid>

<Grid item xs={3}>
<Typography variant="body2" color="textSecondary">Published On</Typography>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>

</Grid>


          <Grid item xs={3}>
          <Typography variant="body2" color="textSecondary">Published On</Typography>
        <Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>

</Grid>

<Grid item xs={3}>
<Typography variant="body2" color="textSecondary">Published On</Typography>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>

</Grid>

</Grid>

</Grid>
</Grid>
      </Paper>
    
        </div>

        <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
</div>
       
        </main>
    )
}

export default Myjobs

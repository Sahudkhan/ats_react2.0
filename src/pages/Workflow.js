import { Grid, Tab, Tabs, Box, Typography, List, ListItem  } from "@material-ui/core";
import { lazy, Suspense, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import UiLoader from "../component/app/loader";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Workflow = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
   
    <Grid container className="main-screen">
    
      
      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        sm={3}
        style={{ padding: "3.68vh 20px 0px 55px", minHeight:"100%" }}
      >
          <Typography variant="h2" style={{fontSize:18}}>Pipeline</Typography>

          <ListItem className="boxlistnew mb-20">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">All Jobs</Typography>
          <Typography variant="body1" >Total: 30</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>

      <Typography variant="h2" style={{fontSize:16}}>More Jobs</Typography>

      <List>
      <ListItem className="boxlistnew">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">User Interface Designer</Typography>
          <Typography variant="body1" >#0001</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className="boxlistnew">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">Product Designer</Typography>
          <Typography variant="body1" >#0001</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className="boxlistnew">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">Product Designer</Typography>
          <Typography variant="body1" >#0001</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>


      <ListItem className="boxlistnew">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">Product Designer</Typography>
          <Typography variant="body1" >#0001</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem className="boxlistnew">
        <ListItemButton className="listbox">
         <ListItemText>
          <Typography variant="h6" className="mb-7">Product Designer</Typography>
          <Typography variant="body1" >#0001</Typography>
        </ListItemText>
        </ListItemButton>
      </ListItem>
   
    </List>
      </Grid>
      <Grid
        item
        xl={9}
        lg={9}
        md={9}
        sm={9}
        style={{ borderLeft: "1px solid #ebecf0" }}
      >
        <div className="css-1yqw6cw h-100">
        <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="h2">All Jobs </Typography>
            <Grid className="flex-center">
                <Typography>Total: 30</Typography>
                </Grid>
                </Grid>
      
<Grid className="pipilinee">
    <Grid className="w-100">
     <Box className="pipe1top">91</Box>  
     <Typography className="textcenter">All Active</Typography> 
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">01</Box>  
    <Typography className="textcenter">New</Typography> 
     </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">150</Box>  
    <Typography className="textcenter">In Progress</Typography>
    
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">201</Box>  
    <Typography className="textcenter">Hired</Typography>
    
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">101</Box>  
    <Typography className="textcenter">Reject</Typography>
    
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">301</Box>  
    <Typography className="textcenter"> On Hold</Typography>
   
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">100</Box>  
    <Typography className="textcenter">Selected</Typography>
    
    </Grid>

    <Grid className="w-100">
    <Box className="pipe1top">70</Box>  
    <Typography className="textcenter">Withdraw</Typography>
    
    </Grid>
</Grid>

        </div>
      </Grid>
    </Grid>
    </>
  );
};


export default Workflow

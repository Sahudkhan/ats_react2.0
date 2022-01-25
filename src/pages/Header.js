import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Logout from '@mui/icons-material/Logout';
import { ListItemIcon, Tooltip, Grid, Menu, MenuItem, LinearProgress, Typography, Box } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    
    },

  
  
  }));
const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
<div className={classes.root} >
     <AppBar className="css-7551ie" style={{ position:"static", backgroundColor:"white", color:"black", boxShadow:"rgb(0 0 0 / 12%) 0rem 0.125rem 0.125rem"}}>
        <Toolbar>
        <Grid container>
        <Grid item md={2}>
           <Typography variant="h6" className={classes.title}>
           <img src="/img/logo.png" width="130"></img>
          </Typography>
         
        </Grid>

       
         
          <Grid item md={8}  align = "center" justify = "center" alignItems = "center" >
          {/* <NavLink exact activeClassName="active_class" to="/Dashboard">Dashboard</NavLink>
          <NavLink exact activeClassName="active_class" to="/jobs/Myjobs">Jobs</NavLink>
          <NavLink exact activeClassName="active_class" to="/Candidates">Candidates</NavLink>
          <NavLink exact activeClassName="active_class" to="/Workflow">Workflow</NavLink>
          <NavLink exact activeClassName="active_class" to="/Analytics">Analytics</NavLink>
          <NavLink exact activeClassName="active_class" to="/Requisition">Requisition</NavLink>
          <NavLink exact activeClassName="active_class" to="/Interview">Interview</NavLink>
          <NavLink exact activeClassName="active_class" to="/Settings">Settings</NavLink> */}
         
         
      {/* <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        
      >
        <Tab className="menuneww" exact label="Dashboard" component={Link} to="/Dashboard"/>
        <Tab className="menuneww" exact label="Jobs" component={Link} to="/Myjobs" />
        <Tab className="menuneww" label="Candidates" component={Link} to="/Candidates"/>
        <Tab className="menuneww" label="Workflow" component={Link} to="/Workflow"/>
        <Tab className="menuneww" label="Analytics" component={Link} to="/Analytics"/>
        <Tab className="menuneww" label="Requisition" component={Link} to="/Requisition"/>
        <Tab className="menuneww" label="Interview" component={Link} to="/Interview"/>
        <Tab className="menuneww" label="Settings" component={Link} to="/Settings"/>
      </Tabs> */}
    

          <Button  className="menuneww" component={Link} to="/Dashboard">Dashboard</Button>
          <Button  className="menuneww" component={Link} to="/Myjobs">Jobs</Button>
          <Button  className="menuneww" component={Link} to="/Candidates">Candidates</Button>
          <Button  className="menuneww" component={Link} to="/Workflow">Workflow</Button>
          <Button  className="menuneww" component={Link} to="/Analytics">Analytics</Button>
          <Button  className="menuneww" component={Link} to="/Requisition">Requisition</Button>
          <Button  className="menuneww" component={Link} to="/Interview">Interview</Button>
          <Button  className="menuneww" component={Link} to="/Settings">Settings</Button>
          </Grid>

          <Grid item md={2} className = {classes.root} align = "right" justify = "flex-end" alignItems = "flex-end">
          <Grid item>
           
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            style={{marginTop:10}}
          >
            <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
          </IconButton>
        </Tooltip>
                         
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                                    </Grid>
 </Grid>
 </Grid>
        </Toolbar>
        </AppBar>
     
        </div>
    )
}

export default Header

import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { styled } from '@mui/system';
import {Popover, List, Divider, Grid, ListItem, Card, MenuItem, ListItemText, Typography, Box,} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Overview from '../Candidate/Overview';
import Activities from '../Candidate/Activities';
import Timelinecandi from './Timelinecandi';


const Tab = styled(TabUnstyled)`
font-family: 'Poppins';
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: transparent;
  padding: 20px 0px;
  margin: 0px 15px;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  border-bottom:2px solid #fff;

    
  }

  &.${tabUnstyledClasses.selected} {
    background-color:#fff;
    color: #335AFF;
    border-bottom:2px solid #335AFF;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
  
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color:#fff;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
`;
function CandidatesDetails() {
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
         <Box className='w-100 flex-column'>
        <TabsUnstyled defaultValue={0}>
          
       <Grid className="flex-between-center css-7551ie" style={{borderBottom:"1px solid #EBECF0"}}>
       <Box className='start-flex mt-10'>
       <Link to="/Candidates" style={{textDecoration:'none'}} ><ArrowBackIcon style={{fontSize:'21px'}}/></Link>
       <Typography variant="h6" style={{fontSize:'16px', fontWeight:'600', marginLeft:'7px', marginTop:'1px'}} >
       Candidates Details</Typography>
        </Box>
      <TabsList>
        <Tab>Overview</Tab>
        <Tab>Activities</Tab>
        <Tab>Timeline</Tab>
      </TabsList>
     
      <Grid className='flex-end-center'>
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
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>

  
      <TabPanel value={0}>
     
      <Overview/>
   
      </TabPanel>
      <TabPanel value={1}>
        <Activities/>
      </TabPanel>
      <TabPanel value={2}><Timelinecandi/></TabPanel>
     
  
      
    
    </TabsUnstyled>
           
   
        </Box>
           
        </>
    )
}

export default CandidatesDetails

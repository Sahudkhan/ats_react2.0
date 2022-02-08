import * as React from 'react';
import { styled } from '@mui/system';
import { TextField, Paper, Divider, Grid, CardContent, Card, MenuItem, LinearProgress, Typography, Box } from '@material-ui/core';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
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
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border-bottom:1px solid #eee;
`;
function JobDetails() {
  
    return (
        <>
         <Box className='w-100 flex-column'>
       <TabsUnstyled defaultValue={0}>
            <Grid className="w-100  flex-between-center css-7551ie">
            <Grid container>
          <Grid item md={2}>
            <Typography variant="h2">My Jobs</Typography>
            </Grid>
            <Grid item md={8}>
      <TabsList>
        <Tab>Candidates</Tab>
        <Tab>Timeline</Tab>
        <Tab>Job details</Tab>
        <Tab>Hiring Process</Tab>
        <Tab>Sourcing</Tab>
      </TabsList>
      </Grid>
      <Grid item md={2}>sadasdsad</Grid>
      </Grid>
      </Grid>
      <TabPanel value={0}>First content</TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
      <TabPanel value={3}>Third content</TabPanel>
      <TabPanel value={4}>Third content</TabPanel>
    </TabsUnstyled>
           
        
        </Box>
           
        </>
    )
}

export default JobDetails

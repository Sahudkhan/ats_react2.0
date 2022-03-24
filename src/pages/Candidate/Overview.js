import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Typography, Box, ListItem, TableRow, Popover, LinearProgress, List, ListItemText, ListItemAvatar, TableHead, TableContainer, Table, TableCell, TableBody, Grid} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Scrollbars from "react-custom-scrollbars";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DropDownHiring from "../../component/DropDownHiring";
const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'
 },

 });

 const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#EBECF0",
    height: 2,
    borderRadius: 6,
    marginBottom:5
  },
  barColorPrimary: {
    backgroundColor: "#335AFF"
  }
})(LinearProgress);


function Overview() {
  const classes = useStyles();
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Map Activity");
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
 

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
     


    <Grid container spacing={3} className="main-screen">
      <Grid item xs={2} style={{ padding: "3.68vh 0px 0px 64px", minHeight:"100%" }}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" className="sahudd" aria-label="main mailbox folders" style={{borderLeft:'1px solid #EBECF0'}}>
        <ListItemButton
        className="leftbutn"
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Details" />
        </ListItemButton>
        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Emails" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Calls" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Notes" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Attachments" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Interviews" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemText primary="Reviews" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemText primary="Tags" />
        </ListItemButton>

        <ListItemButton
         className="leftbutn"
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemText primary="Feedback" />
        </ListItemButton>
      </List>
   
    </Box>
        </Grid>
      
      <Grid item xs={10}>
        <Grid className="analyticmain">
      <Typography variant="subtitle1" className="mb-20">
                Profile
        </Typography>
    
        <Grid container spacing={2}>
       <Grid item xs={4} >
         <Grid className="boxpapperteam">
  <Box>
            <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:5,}}> Sahud Khan</Typography>
         <Typography variant="body1">alma.lawson@example.com</Typography>
         <Typography variant="body1">+91-99999 09876</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>

      <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0, marginTop:9}}
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
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>

      <Grid item xs={8} >
         <Grid className="candiboxnew">
         <Box item xs={12} marginBottom={1}>
         <DropDownHiring
                            width={165}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Quality Analyst", "UI Designer", "Front End Developer"]}
                          />
                          </Box>

<Box item xs={12}>
<StyledLinearProgress variant="determinate" value={40}/>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>In Progress</Typography>
             <Typography variant='body1'>Source: Linkdin</Typography>
             </Grid>
           
             </Box>

        </Grid> 
      </Grid>

    
       </Grid>

       <Grid className="w-100 flex-between-center mt-30">
            <Typography variant="body2">Details </Typography>
            <Grid className="flex-center">
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

<Grid className="detailbox">
        <Typography variant="body1" style={{color:"#757575", marginBottom:15}}>About</Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. </Typography>

        <Divider style={{margin:'30px 0px 20px 0px'}}/>

        <Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Experience</Typography>
        
        <Grid className="w-100 start-flex mt-30">
<Box>
  <Typography>Design Studio</Typography>
  <Typography>Senior UI UX Designer</Typography>
  <Typography>Jan 2020 - Mar 2021</Typography>
</Box>
<Box>
  <Typography>Design Studio</Typography>
  <Typography>Senior UI UX Designer</Typography>
  <Typography>Jan 2020 - Mar 2021</Typography>
</Box>

          </Grid>

          <Divider style={{margin:'30px 0px 20px 0px'}}/>    
<Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Education</Typography>
<TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Bachlore Of Commerce</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">68%</TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">Diploma in Animation and Gaming </TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                          </TableRow>
                          </TableBody>
                          </Table>
                          </TableContainer>

  <Divider style={{margin:'30px 0px 20px 0px'}}/>
  <Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Others</Typography>
<TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
         
          <TableBody>
           
          <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">10th </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">68%</TableCell>
             </TableRow>

                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">12th</TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                  </TableRow>

                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">Graduation</TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                  </TableRow>
                          </TableBody>
                          </Table>
                          </TableContainer>
        </Grid>

      </Grid>
      </Grid>
      </Grid>
 
           
        </>
    )
}

export default Overview

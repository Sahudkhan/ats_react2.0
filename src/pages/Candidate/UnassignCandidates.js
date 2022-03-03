import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { Typography, Box, ListItem, Checkbox, TableRow, Drawer, ListItemText, Popover, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import ToggleButton from '@mui/material/ToggleButton';
import FolderIcon from '@mui/icons-material/Folder';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Scrollbars from "react-custom-scrollbars";
import IconButton from '@material-ui/core/IconButton';
import SearchComponent from "../../component/SearchComponent";
import DropDownHiring from "../../component/DropDownHiring";
import FullDrawerModal from "../../component/fullDrawerModal";

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderSpacing:"2px 20px",
      borderCollapse:'inherit'
  
     
    }
   });

   
function UnassignCandidates() {
    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [alignment, setAlignment] = React.useState('Candidate');
    const [initialMount, setInitialMount] = useState(true);
    const [selectByStatus, setSelectByStatus] = useState("Map Activity");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

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
            <Typography variant="h2">Unassigned </Typography>
            <div className="flex-center">
            <Box className="mr-20">
               <SearchComponent/>
              </Box>

                <Box  className="mr-20">
                <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Candidate">Candidate</ToggleButton>
      <ToggleButton value="Folder">Folders</ToggleButton>
    </ToggleButtonGroup>
                </Box>

             
              <Box >
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                 >
                   New Folder
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
             <TableCell className="tablehead-14-roboto border-bottom-tab">Added On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Updated On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Source</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow className="bordernewcollumn">
                 
                        <TableCell >
                        <ListItem alignItems="flex-start" style={{padding:0}}>
                        <Checkbox {...label} style={{padding:'4px 10px 0px 0px'}} />
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:8}}> Sahud Khan</Typography>
         <Typography variant="body1"  >khansahud@gmail.com</Typography>
         <Typography  variant="body1">+91-99999 09876</Typography>
         </ListItemText>
      </ListItem>
      </TableCell>

  
      <TableCell className="tablebody-14-roboto border-bottom-tab">21 Sep, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">24 May, 2020 </TableCell>
     <TableCell  className="tablebody-14-roboto border-bottom-tab">Linkedin</TableCell>
     
                   
                  </TableRow>

                
              
          </TableBody>
        </Table>
      </TableContainer>
<Grid container spacing={3}>
      <Grid item xs={4}>

      <Box className="folderbox" onClick={() => setOpenDrawer(true)} >
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
<ListItemAvatar style={{minWidth:'15px', margin:'0px 10px 0px 0px', color:'#F3AF00'}}>
          <FolderIcon/>
          </ListItemAvatar>
 <ListItemText><Typography variant="h6"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}>
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
 <ListItem className="list-item flex-start-center" >
   <ListItemText
     
         primaryTypographyProps={{
           style: {
             fontWeight: 500,
             color: "inherit",
           },
         }}
        >
      Bulk Mail
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
        >
     Delete
        </ListItemText>
 </ListItem>


 </List>
</Popover>
</Box>
    </ListItemAvatar> 
</Box>
</Box>
</Grid>

<Grid item xs={4}>

<Box className="folderbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
<ListItemAvatar style={{minWidth:'15px', margin:'0px 10px 0px 0px', color:'#F3AF00'}}>
    <FolderIcon/>
    </ListItemAvatar>
<ListItemText><Typography variant="h6"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
<Box>     
<ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}>
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
<ListItem className="list-item flex-start-center"    onClick={() => setOpenAdd(true)}>
<ListItemText

   primaryTypographyProps={{
     style: {
       fontWeight: 500,
       color: "inherit",
     },
   }}
  >
Bulk Mail
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
  >
Delete
  </ListItemText>
</ListItem>


</List>
</Popover>
</Box>
</ListItemAvatar> 
</Box>
</Box>
</Grid>


<Grid item xs={4}>

<Box className="folderbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
<ListItemAvatar style={{minWidth:'15px', margin:'0px 10px 0px 0px', color:'#F3AF00'}}>
    <FolderIcon/>
    </ListItemAvatar>
<ListItemText><Typography variant="h6"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
<Box>     
<ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}>
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
<ListItem className="list-item flex-start-center"    onClick={() => setOpenAdd(true)}>
<ListItemText

   primaryTypographyProps={{
     style: {
       fontWeight: 500,
       color: "inherit",
     },
   }}
  >
Bulk Mail
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
  >
Delete
  </ListItemText>
</ListItem>


</List>
</Popover>
</Box>
</ListItemAvatar> 
</Box>
</Box>
</Grid>
</Grid>
     </Scrollbars>
    </Box>
   
  
    

    
</Grid>
       

<Drawer
        anchor="bottom"
       
        open={openDrawer}
        
          onClose={
            () => {
              setOpenDrawer(false)
            }
          }
          confirmClicked={
            () => {
              setOpenDrawer(false)
            }
          }
          
        >
          <div className="drawer-open">
          <div className="flex-between-center mb-30 cashrequest" style={{padding:'10px'}} >
            <div class="requestHeader ">
        <div className="title">
        <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
        Alex D (Z0001)
          </Typography>
        </div>
        </div>

            </div>
            <div className="">
              
              sdsads
            </div>
            </div>
        </Drawer>


        </main>
    )
}

export default UnassignCandidates

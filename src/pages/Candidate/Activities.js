import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, List, ListItem, TableRow, ListItemText, LinearProgress, Popover, ListItemAvatar, TableHead, TableContainer, Table, TableCell, TableBody, Grid} from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Scrollbars from "react-custom-scrollbars";
import DropDownHiring from "../../component/DropDownHiring";

const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'

   
  }
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



function Activities() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Map Activity");
 



    return (
        <>
        <Box className="wh-100 flex-center-start">

<Box
className="css-7551ie h-100 w-100"

>
         <Grid
              container
              justify="space-between"
              alignItems="center"
              className="title-bar mb-20"
            >
              <Grid
                xs={12}
                sm={12}
                md={12}
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="subtitle1">
                Activities
        </Typography>
              </Grid>
            
            </Grid>
         <Box sx={{ width: '100%', overflow: 'hidden' }}>
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
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Stages</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Status</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Completed Date</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Acted By</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Ratings</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Action</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
          <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">Screening</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Completed </TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">Brooklyn Simmons</TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">
          <Button><StarIcon style={{height:'20px', color:'#e4d908', marginRight:4}}/> 4 <ArrowForwardIosIcon style={{ height:'14px', color:'#000'}}/></Button></TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">-</TableCell>

       </TableRow>

       <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">Screening</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Completed </TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">Brooklyn Simmons</TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">
          <Button><StarIcon style={{height:'20px', color:'#999',}}/><ArrowForwardIosIcon style={{ height:'14px', color:'#000'}}/></Button></TableCell>
          <TableCell className="tablebody-14-roboto border-bottom-tab">
          <Button className="ss">Schdule</Button>  
          </TableCell>

       </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
     </Scrollbars>
    </Box>
   
   </Box>
 
     
        </Box>
           
        </>
    )
}

export default Activities

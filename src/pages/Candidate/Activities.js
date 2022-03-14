import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, ListItem, TableRow, ListItemText, ListItemAvatar, TableHead, TableContainer, Table, TableCell, TableBody, Grid} from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Scrollbars from "react-custom-scrollbars";

const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'

   
  }
 });


function Activities() {
  const classes = useStyles();
  const [filter, setfilter] = useState({});
  const [openFitlerDrawer, setOpenFilterDrawer] = useState(false);

 



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

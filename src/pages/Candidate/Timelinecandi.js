import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, ListItem, TableRow, ListItemText, ListItemAvatar, TableHead, TableContainer, Table, TableCell, TableBody, Grid} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';


import Scrollbars from "react-custom-scrollbars";

const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'

   
  }
 });


function Timelinecandi() {
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
                Timeline
        </Typography>
              </Grid>
            
            </Grid>
         <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>

      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableBody>
           
         <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">05 Jan, 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">14:00:PM </TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">Candidate Added in Job</TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">Bessie Cooper</TableCell>

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

export default Timelinecandi

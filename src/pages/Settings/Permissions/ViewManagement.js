import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Radio , 
FormControl,
RadioGroup, 
FormControlLabel, 
InputLabel, 
Box,
TableCell,
TableContainer,
TableHead,
TableRow,
Table,
Paper,
TableBody,
Avatar,
ListItem,
ListItemAvatar,
ListItemText,
Popover, 
List,
Checkbox
 } from "@material-ui/core";
import FormBuilder, { MyTable } from "../../../component/formBuilder";
import IconButton from '@material-ui/core/IconButton';
import Scrollbars from "react-custom-scrollbars";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
  fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'
  }
 });

function ViewManagement() {
  const classes = useStyles();    

    return (
       <>
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
         View Management
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
 
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Name </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Hiring Manager</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Interviewer</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Recruiter</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Executive</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Coordinator</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
         <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">Job Visibility</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="self" control={<Radio />} label="Self" />
        <FormControlLabel value="all" control={<Radio />} label="All" />

      </RadioGroup>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="self" control={<Radio />} label="Self" />
        <FormControlLabel value="all" control={<Radio />} label="All" />

      </RadioGroup>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="self" control={<Radio />} label="Self" />
        <FormControlLabel value="all" control={<Radio />} label="All" />

      </RadioGroup>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="self" control={<Radio />} label="Self" />
        <FormControlLabel value="all" control={<Radio />} label="All" />

      </RadioGroup>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="self" control={<Radio />} label="Self" />
        <FormControlLabel value="all" control={<Radio />} label="All" />

      </RadioGroup>
        </TableCell>

       </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
     </Scrollbars>
    </Box>

      </Grid>
    </Grid>
       </Grid>
       </>
    )
}

export default ViewManagement

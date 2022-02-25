import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Select, 
FormControl,
Button, 
MenuItem, 
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

function JobsPrefix() {
  const classes = useStyles();    
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
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
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
          Jobs Prefix Configure
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
      <Box style={{ minWidth: 120, marginTop:20, marginBottom:30 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Generate Prefix On</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={age}
          label="Generate Prefix On"
          onChange={handleChange}
        >
          <MenuItem value={10}>Entity</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Entity </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Prefix</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Starting From</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">&nbsp;</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
         <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">Behavioural skills</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">ZDPG</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Behavioural skills</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab" style={{textAlign:"right"}}>
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

export default JobsPrefix

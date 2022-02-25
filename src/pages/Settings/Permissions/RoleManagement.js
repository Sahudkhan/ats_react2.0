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


function RoleManagement() {


    return (
       <>
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
          Role Management
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
     
<Typography>Coming Soon...</Typography>

      </Grid>
    </Grid>
       </Grid>
       </>
    )
}

export default RoleManagement

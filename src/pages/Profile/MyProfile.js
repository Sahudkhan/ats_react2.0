import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Select, 
TextField,
FormControl,
Button, 
MenuItem, 
InputLabel, 
Box,
Paper,
Avatar,
ListItem,
ListItemAvatar,
ListItemText,
Popover, 
List,
Checkbox
 } from "@material-ui/core";
import FormBuilder, { MyTable } from "../../component/formBuilder";
import IconButton from '@material-ui/core/IconButton';
import Scrollbars from "react-custom-scrollbars";


function JobsPrefix() {


    return (
       <>
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
        My Profile
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      </Grid>
    </Grid>
       </Grid>
       </>
    )
}

export default JobsPrefix

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


function MyProfile() {
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    if (e.target.value !== values[e.target.name]) {
      let newValues={...values}
      newValues={ ...values, [e.target.name]: e.target.value }
      setValues(newValues);
    }
  }


    return (
       <>
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
        My Profile
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
      <FormBuilder size="md" fields={[
              
              { type: 'input', name: 'firstName', label: 'First Name', required: true },
              { type: 'input', name: 'lastName', label: 'Last Name', required: true },
              { type: 'input', name: 'mobileNUmber', label: 'Mobile No.', required: true },
              { type: 'input', name: 'position', label: 'Position', required: true },
            
              

             
            ]} values={values} inputHandler={handleChange} />

      </Grid>
    </Grid>
       </Grid>
       </>
    )
}

export default MyProfile

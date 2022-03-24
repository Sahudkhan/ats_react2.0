import React, { useState, useEffect } from "react";
import { Grid, TextField, Box, Checkbox, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, Input, Chip, MenuItem, ListItemText, Divider, ListItemAvatar, Avatar, CardMedia, Typography, Button, IconButton, Popover, List, ListItem } from "@material-ui/core"; 
import FormBuilder, { MyTable } from "../../component/formBuilder";



function LogPassword() {
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
       <div className="css-1yqw6cw">
       <div container>
      <div className="flex-between-center mb-20 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
         Login Password
          </Typography>
        
          </div>
          <Grid className="w-100 flex-column " style={{height:"77vh"}}>
          <Grid container spacing={3}>
      
      <Grid item xs={6}>
      <FormBuilder size="xs" fields={[
              
              { type: 'input', name: 'firstName', label: 'Email ID used as login', required: true },
              { type: 'input', name: 'lastName', label: 'Current password', required: true },
              { type: 'input', name: 'mobileNUmber', label: 'New password', required: true },
              { type: 'input', name: 'position', label: 'Confirm password', required: true },
            
              

             
            ]} values={values} inputHandler={handleChange} />
        </Grid>
      <Grid item xs={6}>
zxcdcd
        </Grid>
        </Grid>

     

      </Grid>
     


     
    </div>
       </div>
       </>
    )
}

export default LogPassword

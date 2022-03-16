import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
ListItem,
Avatar,
ListItemAvatar,
ListItemText,
Popover, 
List,
 } from "@material-ui/core";
 import Switch from '@mui/material/Switch';
 import IconButton from '@material-ui/core/IconButton';
 import Scrollbars from "react-custom-scrollbars";
 import MoreVertIcon from '@material-ui/icons/MoreVert';
 import FormBuilder, { MyTable } from "../component/formBuilder";
 import { CKEditor } from '@ckeditor/ckeditor5-react';
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function WizardAdvanceDetails() {
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
       <div className="w-100">
     <Box sx={{ padding: '20px', overflow: 'hidden' }}>
      <Grid className=" mb-20 mt-4" >
          <Typography variant="subtitle1">
          Advance Details
          </Typography>
       <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
      </Grid>
     
    </Box>


    
       </div>
       </>
    )
}

export default WizardAdvanceDetails

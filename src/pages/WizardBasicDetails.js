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
function WizardBasicDetails() {
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
      <Grid className="flex-between-center mb-20 mt-4" >
          <Typography variant="subtitle1" style={{fontSize:16}}>
          Basic Details
          </Typography>
       
      </Grid>
         <FormBuilder size="md" fields={[
              
              { type: 'input', name: 'Job_Title', label: 'Job Title', required: true },
              { type: 'select', name: 'Department', label: 'Department', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'select', name: 'Designation', label: 'Designation', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'select', name: 'Business_Unit', label: 'Business Unit', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'select', name: 'Entity', label: 'Entity', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'select', name: 'Number_Position', label: 'Number Of Position', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'select', name: 'Location', label: 'Location', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'inputdate', name: 'Opening', label: 'Opening Valid Till Date', min: 25550, max: 0, },
              { type: 'select', name: 'Industry', label: 'Industry', options:[{id:1,name:"Automobiles"}], required: true },
              { type: 'select', name: 'Function', label: 'Function', options:[{id:1,name:"Analyst"}], required: true },
              { type: 'select', name: 'TotalExperience', label: 'Total Experience', options:[{id:1,name:"Automobiles"}], required: true },
              { type: 'select', name: 'RelevantExperience ', label: 'Relevant Experience ', options:[{id:1,name:"Automobiles"}], required: true },
              { type: 'select', name: 'EmployeeType', label: 'Employee Type', options:[{id:1,name:"Automobiles"}], required: true },
              

             
            ]} values={values} inputHandler={handleChange} />

               <Grid className="mt-30">
               <Typography variant="body2">About Company</Typography>   
                  <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
             </Grid>

               <Grid className="mt-30">
               <Typography variant="body2">Job Description</Typography>   
                  <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
             </Grid>   
    </Box>


    
       </div>
       </>
    )
}

export default WizardBasicDetails

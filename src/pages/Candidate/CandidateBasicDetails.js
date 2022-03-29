import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
ListItem,
Button,
Avatar,
ListItemAvatar,
ListItemText,
Popover, 
Chip,
TextField,
List,
 } from "@material-ui/core";
 import Stack from '@mui/material/Stack';
 import FormBuilder, { MyTable } from "../../component/formBuilder";

function CandidateBasicDetails() {
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    if (e.target.value !== values[e.target.name]) {
      let newValues={...values}
      newValues={ ...values, [e.target.name]: e.target.value }
      setValues(newValues);
    }
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


    return (
       <>
       <div className="w-100">
     <Box sx={{ padding: '20px', overflow: 'hidden' }}>
       <Grid className="detailbox">
      <Grid className="flex-between-center mb-20 mt-4" >
          <Typography variant="h6" style={{fontSize:16}}>
          Basic Details
          </Typography>
       
      </Grid>
         <FormBuilder size="md" fields={[
              
              { type: 'input', name: 'first', label: 'First Name', required: true },
              { type: 'input', name: 'Last', label: 'Last Name', required: true },
              { type: 'input', name: 'number', label: 'Phone Number', required: true },
              { type: 'input', name: 'email', label: 'Email', required: true },
              { type: 'input', name: 'Job_Title', label: 'Website or social network', required: true },
              { type: 'select', name: 'source', label: 'Source', options:[{id:1,name:"Linkedin"},{id:2,name:"Facebook"}], required: true },
              { type: 'select', name: 'Designation', label: 'Designation', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
              { type: 'inputdate', name: 'Opening', label: 'Date of birth', min: 25550, max: 0, },
              { type: 'select', name: 'test', label: 'Test', options:[{id:1,name:"1"},{id:2,name:"2"}], required: true },
              { type: 'select', name: 'zimyo', label: 'Zimyo', options:[{id:1,name:"Test 1"},{id:2,name:"Test 2"}], required: true },
              { type: 'select', name: 'job', label: 'Job', options:[{id:1,name:"React Developer"},{id:2,name:"Ui Designer"}], required: true },
         
            ]} values={values} inputHandler={handleChange} />
</Grid>

<Grid className="detailbox">
<Grid className="flex-between-center mb-20 mt-4" >
          <Typography variant="h6" style={{fontSize:16}}>
          Experience
          </Typography>
          <Button
                  variant="contained"
                  style={{height:'35px', background:"transparent", color:"#335AFF", boxShadow:"none"}}
                  // onClick={() => setOpenAdd(true)}
                 >
                 + Add
                </Button>
      </Grid>
             <FormBuilder size="md" fields={[
              
              { type: 'input', name: 'first', label: 'Prev Company Name', required: true },
              { type: 'input', name: 'Last', label: 'Job Title', required: true },
              { type: 'inputdate', name: 'from', label: 'From Date', min: 25550, max: 0, },
              { type: 'inputdate', name: 'to', label: 'To Date', min: 25550, max: 0, },
              { type: 'input', name: 'jobdescription', label: 'Job Description', required: true },
              { type: 'inputdate', name: 'lastworkingday', label: 'Last Working Day', min: 25550, max: 0, },
            ]} values={values} inputHandler={handleChange} />

</Grid>

<Grid className="detailbox">
              <Grid className="flex-between-center mb-20 mt-4" >
              <Typography variant="h6" style={{fontSize:16}}>
          Education
          </Typography>

          <Button
                  variant="contained"
                  style={{height:'35px', background:"transparent", color:"#335AFF", boxShadow:"none"}}
                  // onClick={() => setOpenAdd(true)}
                 >
                 + Add
                </Button>
       
      </Grid>
      <FormBuilder size="md" fields={[

              { type: 'input', name: 'school', label: 'School Name', required: true },
              { type: 'input', name: 'degree', label: 'Degree Diploma', required: true },
              { type: 'input', name: 'fieldofstudy', label: 'Field Of Study', required: true },
              { type: 'inputdate', name: 'year', label: 'Year Of Completion', min: 25550, max: 0, },
              
            ]} values={values} inputHandler={handleChange} />

</Grid>



             <Grid className="detailbox">
             <Grid item xs={12}><Typography variant="h6" className="mb-20" style={{fontSize:16}}>Tags</Typography> </Grid> 
<Grid item xs={6}>
<TextField id="outlined-basic" label="Add tags" variant="outlined" className="w-100 mb-20" />
</Grid>

<Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>

      </Grid>

                
    </Box>


    
       </div>
       </>
    )
}

export default CandidateBasicDetails

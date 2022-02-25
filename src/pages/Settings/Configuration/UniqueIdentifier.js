import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
 } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";
import FormBuilder, { MyTable } from "../../../component/formBuilder";

function UniqueIdentifier() {
  const [values, setValues] = useState({});
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleChange = (e) => {
    console.log("target", e.target)
  }

    return (
       <>
       <div className="css-1yqw6cw">
       <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1">
          Unique Identifier
          </Typography>
       
      </Grid>



      <Grid
              container
              justify="space-between"
           
            >
           
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
         <Grid className="uniquebox">
                   <Grid className="flex-between-center" >
                   <FormBuilder size="sm"  fields={[
              { type: 'switch2', name: 'name', label: ' Name', },
              { type: 'switch2', name: 'email', label: ' Email', },
              { type: 'switch2', name: 'phone', label: ' Phone Number', },
              { type: 'switch2', name: 'employee', label: ' Employee ID', },
              { type: 'switch2', name: 'aadhar', label: ' Aadhar Card', },
             ]} values={values} inputHandler={handleChange} />

              </Grid>
              
          
           
                </Grid>
     </Scrollbars>
    </Box>


</Grid>

    
       </div>
       </>
    )
}

export default UniqueIdentifier

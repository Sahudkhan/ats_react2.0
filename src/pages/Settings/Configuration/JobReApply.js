import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Box,
Button
 } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";
import FormBuilder, { MyTable } from "../../../component/formBuilder";

function JobReApply() {
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
          Job Re-Apply Days
          </Typography>
       
      </Grid>



      <Grid
              container
              justify="space-between"
           
            >
                  <Grid
                xs={12}
                sm={12}
                md={12}
                justify="flex-start"
                alignItems="center"
              >
           
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
         <Scrollbars style={{ height: "60vh" }}>
        
                   <Grid className="flex-between-center p-5" >
                   <FormBuilder  fields={[
              { type: 'input', name: 'name', label: ' Candidate Reapply after in days', },
             
             ]} values={values} inputHandler={handleChange} />

              </Grid>
              
          
     </Scrollbars>

     <Box
                className="w-100"
                style={{
                  paddingTop: "20px",
                  borderTop: "1px solid lightgrey",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <Button
                  variant="contained"
                  style={{ height:"35px", fontFamily:"Roboto" }}
                >
                Cancel
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#335AFF", color: "#fff", height:"35px", fontFamily:"Roboto" }}
                 
                >
                Save
                </Button>
              </Box>
    </Box>
    </Grid>

</Grid>

    
       </div>
       </>
    )
}

export default JobReApply

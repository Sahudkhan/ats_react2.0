import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Checkbox, 
Button, 
Box,
ListItem,
ListItemAvatar,
ListItemText,
Popover, 
List,

 } from "@material-ui/core";
 import ToggleButton from '@mui/material/ToggleButton';
 import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloseIcon from '@mui/icons-material/Close';
import Scrollbars from "react-custom-scrollbars";
import DropDownHiring from "../../../component/DropDownHiring";
import FormBuilder, { MyTable } from "../../../component/formBuilder";
import CustomModal from "../../../component/customModal"

function HiringProccess() {   
const [openAdd, setOpenAdd] = useState(false);
const [values, setValues] = useState({});
const [initialMount, setInitialMount] = useState(true);
const [selectByStatus, setSelectByStatus] = useState("Map Activity");
const [selectTriggerType, setSelectTriggerType] = useState("All");
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [alignment, setAlignment] = React.useState('web');
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
// const handleChange = (e) => {
//     console.log("target", e.target)
//   }
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  

const submitForm = (e) => {
    setOpenAdd(false)
   }

  

    return (
       <>
       <div className="css-1yqw6cw">
       <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1">
          Manage Workflow
          </Typography>
          <Grid className="flex-start-center ">
          <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web">Workflow Steps</ToggleButton>
      <ToggleButton value="android">Default Hiring Process</ToggleButton>
    </ToggleButtonGroup>


          </Grid>
      
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
         <Scrollbars style={{ height: "45vh" }}>
<Grid className="workflowmanage">
<Grid className="flex-between-center mb-20 " >
          <Typography variant="body1">Workflow Steps</Typography>
          <Grid className="flex-start-center ">
          <Button
                  variant="contained"
                  style={{height:'35px', background:"transparent", color:"#335AFF", boxShadow:"none"}}
                  onClick={() => setOpenAdd(true)}
                 >
                 + Add
                </Button>
            </Grid>
            </Grid>

<Box className="workbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemText><Typography variant="body1"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}><CloseIcon/></ListItemAvatar> 
</Box>
</Box>

<Box className="workbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemText><Typography variant="body1"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}><CloseIcon/></ListItemAvatar> 
</Box>
</Box>

<Box className="workbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemText><Typography variant="body1"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
 <Box>     
  <ListItemAvatar style={{minWidth:'18px', height:"22px", cursor:"pointer"}}><CloseIcon/></ListItemAvatar> 
</Box>
</Box>




</Grid>

</Scrollbars>


<Scrollbars style={{ height: "30vh" }}>
<Grid className="workflowmanage">
<Grid className="flex-between-center mb-20 " >
          <Typography variant="body1">Default Hiring Process</Typography>
          <Grid className="flex-start-center ">
            <div className="dropdmenu">
          <DropDownHiring
                            width={135}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Resume Screening", "Email /Notification", "Approved / Reject", "Schedule Interview", "Move to Onboarding"]}
                          />

</div>
          <Button
                  variant="contained"
                  style={{height:'35px', background:"transparent", color:"#335AFF", boxShadow:"none"}}
                  onClick={() => setOpenAdd(true)}
                 >
                 + Add
                </Button>
            </Grid>
            </Grid>

<Box className="workbox">
<Box>
<ListItem alignItems="flex-start" style={{padding:0}}>
<ListItemAvatar style={{minWidth:'15px', marginTop:5}}>
          <DragIndicatorIcon/>
          </ListItemAvatar>

 <ListItemText><Typography variant="body1" className="mt-5"> Hiring Team Screen</Typography></ListItemText>
</ListItem>
</Box>
<Box> <Typography variant="body1"  > 
            <DropDownHiring
                            width={135}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Resume Screening", "Email /Notification", "Approved / Reject", "Schedule Interview", "Move to Onboarding"]}
                          />
            </Typography></Box>
 <Box>     
 <Checkbox {...label} />
</Box>
</Box>





</Grid>

</Scrollbars>
</Box>
</Grid>


</Grid>

      <CustomModal
          open={openAdd}
          cancelClicked={
            () => {
              setOpenAdd(false)
            }
          }
          confirmClicked={
            submitForm
          }
          width="380px"
          confirmText="Submit"
          name= "New Workflow Step">
          <div className="">
          <FormBuilder size="sm" fields={[
           { type: 'input', name: 'RULE_NAME', label: 'Step Name', required: false },
          
         
            ]} values={values} inputHandler={handleChange} />
            
            </div>
        </CustomModal>
      
       </div>
       </>
    )
}

export default HiringProccess

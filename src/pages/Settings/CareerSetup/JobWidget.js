import React, { useState, useEffect } from "react";
import { TwitterPicker } from 'react-color'
import { useDispatch } from "react-redux";
import {render} from "react-router-dom";
import { Grid, TextField, Box, Checkbox, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, Input, Chip, MenuItem, ListItemText, Divider, ListItemAvatar, Avatar, CardMedia, Typography, Button, IconButton, Popover, List, ListItem } from "@material-ui/core";
import copy from "copy-to-clipboard";  
import { Heading, Input1, Textarea, Container } from '../../../component/Styles'
import FormBuilder, { MyTable } from "../../../component/formBuilder";
import CustomModal from "../../../component/customModal"
import CustomDropDown from "../../../component/CustomDropDown";


function JobWidget() {
    const [values, setValues] = useState({});
    const [openAdd, setOpenAdd] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [color, setColor] = useState("lightblue");
    const [hidden, setHidden] = useState({});
    const [initialMount, setInitialMount] = useState(true);
    const [selectByStatus, setSelectByStatus] = useState("Choose Type");
 
    const [copyText, setCopyText] = useState('');
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(copyText);
    //    alert(`You have copied "${copyText}"`);
    }
    const handleChange = (e, color) => {
        console.log("target", e.target)
      }

      
      const submitForm = (e) => {
        setOpenAdd(false)
        if(isEdit){
      
       }
     
       }
       
      


    
  
    return (
       <>
       <div className="css-1yqw6cw">
       <div container>
      <div className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
          Job Widget
          </Typography>
        
      
      </div>


     
      <div className="w-100 flex-column " style={{height:"77vh"}}>
    <Typography  variant="body2" style={{fontSize:'14px', fontWeight:500, fontFamily:"Poppins", marginTop:29, marginBottom:15}}>How do I use this widget?</Typography>
    <Typography variant="body1">
    Copy the code below and paste it into your website where you’d like jobs to appear on. 
    When you’re adding the code, make sure it’s placed just before the end of the tag. 
    You can also add it to your site footer.
    </Typography>

    <Box className="widgettheme">
          <Input1 
            type="text" 
              value={copyText} 
                onChange={handleCopyText} 
                  >

    <div id="job-listing"></div>
<script type="text/javascript">
  var USERID=1040;
</script>
<script src="https://ats.zimyo.com/assets/js/jobwidget.js"></script>
</Input1>


          <Button onClick={copyToClipboard}>
               Copy to Clipboard
          </Button>
    
         
        </Box>

<Box className="widgettheme">
   <Typography variant="body2" style={{fontSize:'14px', fontFamily:"Poppins", fontWeight:500, marginBottom:15}}>Widget Theme</Typography> 
<Grid container spacing={3}>
    <Grid item xs={4}>
    <div className="colorpickers">
        <Typography style={{padding:15}}>Choose Colour</Typography>
        <div style={{background: color}} className="pickemain" onClick={() => setHidden(!hidden)}></div>
        {hidden && (
        <TwitterPicker
        color={color}
        onChange={updatedColor => setColor(updatedColor.hex)}
        />
        )}


      </div>
    </Grid>
    <Grid item xs={6}>
    <CustomDropDown
                  width={350}
                  height={50}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["Type A", "Type B", "Type C"]}
                />
    </Grid>
</Grid>
<Button className="preve" variant="contained" onClick={() => setOpenAdd(true)}>Preview</Button>
</Box>
  

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
          confirmText={isEdit? 'Update'  : "Submit"}
          name= {isEdit? 'Update Expense Type'  : "New Expense Type"}>
          <div className="">
            <FormBuilder size="sm" fields={[
              
              { type: 'input', name: 'EXTYPE_NAME', label: 'Name', required: true },
              { type: 'switch2', name: 'EXPENSE_STATUS', label: ' Status', },
             
            ]} values={values} inputHandler={handleChange} />
            
            </div>
        </CustomModal>
      
      </div>
    </div>
       </div>
       </>
    )
}

export default JobWidget

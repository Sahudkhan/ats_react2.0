import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Select, 
FormControl,
Button, 
MenuItem, 
InputLabel, 
Box,
TableCell,
TableContainer,
TableHead,
TableRow,
Table,
Paper,
TableBody,
Avatar,
ListItem,
ListItemAvatar,
ListItemText,
Popover, 
List,
 } from "@material-ui/core";
 import IconButton from '@material-ui/core/IconButton';
 import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Scrollbars from "react-custom-scrollbars";
import SearchComponent from "../../../component/SearchComponent";
import FormBuilder, { MyTable } from "../../../component/formBuilder";
import CustomModal from "../../../component/customModal"

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderCollapse:'inherit'
  
     
    }
   });
function JobLibrary() {
const classes = useStyles();    
const [openAdd, setOpenAdd] = useState(false);
const [values, setValues] = useState({});
const [initialMount, setInitialMount] = useState(true);
const [selectByStatus, setSelectByStatus] = useState("Interviewer");

const handleChange = (e) => {
    console.log("target", e.target)
  }

const submitForm = (e) => {
    setOpenAdd(false)
   }

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

    return (
       <>
       <div className="css-1yqw6cw">
       <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1">
          Job Description Library
          </Typography>
          <Grid className="flex-start-center ">
          <Grid className="select-component mr-20">
               <SearchComponent/>
                </Grid>

<Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                  onClick={() => setOpenAdd(true)}
                 >
                  Create New
                </Button>
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
         <Scrollbars style={{ height: "60vh" }}>
      <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Title </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">&nbsp;</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
         <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">Behavioural skills</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab" style={{textAlign:"right"}}>
         <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0}}
          >
            <MoreVertIcon />
          </IconButton>
          <Popover
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <List className="list-popover">
        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >
               Edit
               </ListItemText>
        </ListItem>

        <ListItem className="list-item flex-start-center">
          <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color: "inherit",
                  },
                }}
               >
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
         </TableCell>

       </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
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
          name= "New Review Card">
          <div className="">
          <FormBuilder size="sm" fields={[
           { type: 'input', name: 'RULE_NAME', label: 'Attribute Name', required: false },
           { type: 'input', name: 'RULE_NAME', label: 'Applicable To', required: false },
         
            ]} values={values} inputHandler={handleChange} />
            
            </div>
        </CustomModal>
      
       </div>
       </>
    )
}

export default JobLibrary

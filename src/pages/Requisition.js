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
Link,
TableBody,
Avatar,
ListItem,
ListItemAvatar,
ListItemText,
Popover, 
List,
Checkbox
 } from "@material-ui/core";
 import IconButton from '@material-ui/core/IconButton';
 import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Scrollbars from "react-custom-scrollbars";
import CustomDropDown from "../component/CustomDropDown";
import SearchComponent from"../component/SearchComponent";
import FormBuilder, { MyTable } from "../component/formBuilder";
import CustomModal from "../component/customModal"

const useStyles = makeStyles({
    table: {
  fontSize:12,
      margin: "auto",
      borderCollapse:'inherit'
  
     
    }
   });
function Requisition() {
const classes = useStyles();    
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [openAdd, setOpenAdd] = useState(false);
const [values, setValues] = useState({});
const [initialMount, setInitialMount] = useState(true);
const [selectByStatus, setSelectByStatus] = useState("All Status");

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
          Requisition List
        </Typography>
          <Grid className="flex-start-center ">
          <Grid className=" mr-20">
              <SearchComponent/>
              </Grid>
          <Grid className="select-component">
          <CustomDropDown
                  width={220}
                  height={35}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={["All Status", "Candidate"]}
                />
                </Grid>


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
            <TableCell className="tablebody-14-roboto border-bottom-tab"><Checkbox {...label} style={{padding:'0px'}} /></TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Requisition ID</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Created By</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Created On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Updated On</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Action Date</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Gender</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Hiring Type</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Replacement Type</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Replacement For</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">No.of Position</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Experience</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Description</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Status</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">&nbsp;</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
           
         <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Checkbox {...label} style={{padding:'0px'}} /></TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Z0001</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{margin:0}}>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Aug 12, 2020 9:37 AM</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">15 Jan 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Male</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Part Time</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Courtney Henry</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">10</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Link href="#" color="inherit" > View More</Link>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Link component="button"  variant="body1" className="published"> Published</Link> 
        </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
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
               Publish Now
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

       <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Checkbox {...label} style={{padding:'0px'}} /></TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Z0001</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{margin:0}}>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Aug 12, 2020 9:37 AM</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">15 Jan 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Male</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Part Time</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Courtney Henry</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">10</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Link href="#" color="inherit" > View More</Link>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Typography variant="body1" className="approved"> Approved</Typography> 
        </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
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
               Publish Now
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

       <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Checkbox {...label} style={{padding:'0px'}} /></TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Z0001</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{margin:0}}>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Aug 12, 2020 9:37 AM</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">15 Jan 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Male</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Part Time</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Courtney Henry</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">10</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Link href="#" color="inherit" > View More</Link>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Typography variant="body1" className="Pending"> Pending</Typography> 
        </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
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
               Publish Now
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


       <TableRow className="bordernewcollumn">
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Checkbox {...label} style={{padding:'0px'}} /></TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Z0001</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{margin:0}}>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">12 Jun 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Aug 12, 2020 9:37 AM</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">15 Jan 2021</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Male</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Part Time</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">Courtney Henry</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">10</TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Link href="#" color="inherit" > View More</Link>
         </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
         <Typography variant="body1" className="rejected"> Rejected</Typography> 
        </TableCell>
         <TableCell className="tablebody-14-roboto border-bottom-tab">
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
               Publish Now
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


export default Requisition

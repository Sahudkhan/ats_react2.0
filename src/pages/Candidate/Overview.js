import React, { useState, useRef } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, ListItem, TableRow, Button, TextField, Chip, Accordion, AccordionSummary, AccordionDetails, Popover, LinearProgress, List, ListItemText, ListItemAvatar, TableHead, TableContainer, Table, TableCell, TableBody, Grid} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Scrollbars from "react-custom-scrollbars";
import SendIcon from '@mui/icons-material/Send';
// import ScrollSpy from "react-ui-scrollspy";
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Scrollspy from 'react-scrollspy';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DropDownHiring from "../../component/DropDownHiring";
import FormBuilder, { MyTable } from "../../component/formBuilder";
import CustomModal from "../../component/customModal"
import CustomModalfullwidth from "../../component/customModalfullwidth";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const useStyles = makeStyles({
  table: {
fontSize:12,
    margin: "auto",
    borderCollapse:'inherit'
 },

 });

 const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#EBECF0",
    height: 2,
    borderRadius: 6,
    marginBottom:5
  },
  barColorPrimary: {
    backgroundColor: "#335AFF"
  }
})(LinearProgress);


function Overview(props){
  const classes = useStyles();
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState("Map Activity");
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  const [isEdit, setisEdit] = useState(false);
  const [openAdd2, setOpenAdd2] = useState(false)
  const [openAdd, setOpenAdd] = useState(false);
  const [OpenAddRating, setOpenAddRating] = useState(false);

  const [openLog, setOpenLog] = useState(false);
  
  const [values, setValues] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

 
  const submitForm = (e) => {
    setOpenAdd(false)
   }
  const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  
    return (
      <>
        <TableRow {...otherProps}>
          <TableCell padding="checkbox">
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {children}
        </TableRow>
        {isExpanded && (
          <TableRow>
            <TableCell padding="checkbox" />
            {expandComponent}
          </TableRow>
        )}
      </>
    );
  };
    return (
        <>
     
    <Grid container spacing={3} className="main-screen">









      <Grid item xs={2} style={{ padding: "3.68vh 0px 0px 64px", minHeight:"100%" }}>
      <div className="sahudd" style={{borderLeft:'1px solid #EBECF0'}}>
      <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9'] } currentClassName="is-current">
      
    
        
  <li ><a href="#section-1">Details</a></li>
  <li><a href="#section-2">Emails</a></li>
  <li><a href="#section-3">Calls</a></li>
  <li ><a href="#section-4">Notes</a></li>
  <li><a href="#section-5">Attachment</a></li>
  <li><a href="#section-6">Interviews</a></li>
  <li ><a href="#section-7">Reviews</a></li>
  <li><a href="#section-8">Tags</a></li>
  <li><a href="#section-9">Feedback</a></li>

     
  
</Scrollspy>

</div>
      
        </Grid>
      
      <Grid item xs={10}>
        <Grid className="analyticmain">
        <section id="section-1">
      <Typography variant="subtitle1" className="mb-20">
                Profile
        </Typography>
    
        <Grid container spacing={2}>
       <Grid item xs={4} >
         <Grid className="boxpapperteam">
  <Box>
            <ListItem alignItems="flex-start" style={{padding:0}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:5,}}> Sahud Khan</Typography>
         <Typography variant="body1">alma.lawson@example.com</Typography>
         <Typography variant="body1">+91-99999 09876</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>

      <Box>
          <IconButton 
           onClick={handleClick}
         style={{padding:0, marginTop:9}}
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
               Delete
               </ListItemText>
        </ListItem>
      
       
        </List>
      </Popover>
      </Box>
      </Grid>
      </Grid>

      <Grid item xs={8} >
         <Grid className="candiboxnew">
         <Box item xs={12} marginBottom={1}>
         <DropDownHiring
                            width={165}
                            selectedMenu={selectByStatus}
                            updateMenu={(item) => {
                              setInitialMount(false);
                              setSelectByStatus(item);
                            }}
                            menuItem={["Quality Analyst", "UI Designer", "Front End Developer"]}
                          />
                          </Box>

<Box item xs={12}>
<StyledLinearProgress variant="determinate" value={40}/>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>In Progress</Typography>
             <Typography variant='body1'>Source: Linkdin</Typography>
             </Grid>
           
             </Box>

        </Grid> 
      </Grid>

    
       </Grid>

<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mt-30">
            <Typography variant="body2">Details </Typography>
            <Grid className="flex-center">
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
      
       
        </List>
      </Popover>
      </Box>
 </Grid>
</Grid>

<Grid className="detailbox">
        <Typography variant="body1" style={{color:"#757575", marginBottom:15}}>About</Typography>
        <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. </Typography>

        <Divider style={{margin:'30px 0px 20px 0px'}}/>

        <Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Experience</Typography>
        
        <Grid className="w-100 start-flex mt-30">
<Box className="borderleftnew">
  <Typography>Design Studio</Typography>
  <Typography>Senior UI UX Designer</Typography>
  <Typography>Jan 2020 - Mar 2021</Typography>
</Box>
<Box className="borderleftnew">
  <Typography>Design Studio</Typography>
  <Typography>Senior UI UX Designer</Typography>
  <Typography>Jan 2020 - Mar 2021</Typography>
</Box>

          </Grid>

          <Divider style={{margin:'30px 0px 20px 0px'}}/>    
<Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Education</Typography>
<TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Bachlore Of Commerce</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">68%</TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">Diploma in Animation and Gaming </TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                          </TableRow>
                          </TableBody>
                          </Table>
                          </TableContainer>

  <Divider style={{margin:'30px 0px 20px 0px'}}/>
  <Typography variant="body1"  style={{color:"#757575", marginBottom:15}}>Others</Typography>
<TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small" className={classes.table}>
         
          <TableBody>
           
          <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">10th </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">68%</TableCell>
             </TableRow>

                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">12th</TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                  </TableRow>

                  <TableRow>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">Graduation</TableCell>
                  <TableCell className="tablehead-14-roboto border-bottom-tab">78%</TableCell>
                  </TableRow>
                          </TableBody>
                          </Table>
                          </TableContainer>
        </Grid>

        </Grid>
        </section>

        <section id="section-2">
        <Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Emails </Typography>
            <Grid className="flex-center">
            <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                  disableRipple={true}
                  style={{height:'35px'}}
                  className="preve"
                  onClick={() => setOpenAdd(true)}
                 >
                 Compose
                </Button>
 </Grid>
</Grid>
        <Accordion style={{boxShadow:'0px 2px 1px 1px #eee'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
         
        >
         
          <Typography
           className="flex-between-center w-100"
          >
            Pre-Boarding Form Link !!
         <span>Dec 01, 2021, 11:42 AM | 22 days ago</span>
           
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails style={{display:'block'}}>
          <Typography>
          Dear ALOKSRIVASTAVA,
          </Typography>

          <Typography> Kindly fill the following Pre-boarding form provided in the link given below to 
          proceed with your hiring process. Once you fill all details required as per the form, 
          we will cross check the details and verify the details provided at our end and will update 
          you if we require any further information.Please find the form link as mentioned. </Typography>
          <Typography>
          Form Link :https://demo-ats.zimyo.com/candidate_fill_details&amp;id=NzQ0OS01MTY-

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:'0px 2px 1px 1px #eee'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
         
        >
         
          <Typography
           className="flex-between-center w-100"
          >
            Pre-Boarding Form Link !!
         <span>Dec 01, 2021, 11:42 AM | 22 days ago</span>
           
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails style={{display:'block'}}>
          <Typography>
          Dear ALOKSRIVASTAVA,
          </Typography>

          <Typography> Kindly fill the following Pre-boarding form provided in the link given below to 
          proceed with your hiring process. Once you fill all details required as per the form, 
          we will cross check the details and verify the details provided at our end and will update 
          you if we require any further information.Please find the form link as mentioned. </Typography>
          <Typography>
          Form Link :https://demo-ats.zimyo.com/candidate_fill_details&amp;id=NzQ0OS01MTY-

          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
</section>


<section id="section-3">
      <Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Calls </Typography>
            <Grid className="flex-center">
            <Button
                  variant="contained"
                  className="btnlintype"
                  onClick={() => setOpenLog(true)}
                 >
                + Call Log
                </Button>
 </Grid>
</Grid>
<Grid className="detailbox">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox"/>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Job Title</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Call</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Response</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Date	</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Time from</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Time to</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <ExpandableTableRow
             
              expandComponent={<TableCell colSpan="6">
                <Typography>
                Extremely satisfied mollit non deserunt ullamco est sit aliqua dolor do amet sint
                ullamco est sit aliqua dolor do amet sin...
                </Typography>
              </TableCell>}
            >
              <TableCell className="tablehead-14-roboto border-bottom-tab">Data Scientist</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Devteam</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">connected</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">2022-03-24</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">09:54:00</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">09:54:00</TableCell>
            </ExpandableTableRow>
         
        </TableBody>
      </Table>
      </Grid>
</Grid>
</section>

<section id="section-4">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Notes </Typography>
           
</Grid>
<Grid className="detailbox">
    
      <Box>
            <ListItem alignItems="flex-start" style={{padding:0, marginBottom:10}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:2,}}> Sahud Khan</Typography>
         <Typography variant="body1">alma.lawson@example.com</Typography>
        
         </ListItemText>
         
      </ListItem>  
      <Typography  className="mb-20">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
       has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
       took a galley of type and scrambled it to make a type specimen book. 
      </Typography> 
      </Box>
      <CKEditor
                    editor={ ClassicEditor }
                    data=""
                   
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


<Box className="mt-20 text-right">
<Button variant="outlined"><SendIcon sx={{ color:'#335AFF' }} /></Button></Box>
      </Grid>
</Grid>
</section>

<section id="section-5">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Attachment </Typography>
            <Grid className="flex-center">
            <Button
                  variant="contained"
                  className="btnlintype"
                  onClick={() => setOpenAdd2(true)}
                 >
                + Add
                </Button>
 </Grid>
</Grid>
<Grid className="detailbox">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Documents </TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Upload Date </TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">	Upload By</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">&nbsp;	</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
         
              <TableCell className="tablehead-14-roboto border-bottom-tab">
                <Box style={{display:'flex', alignItems:'center'}}><PictureAsPdfIcon style={{color:'#ff0000', marginRight:'10'}}/> 2022_01_11_02:53:54_NirajCv-10-12-2021.pdf </Box></TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">	Jan 11, 2022</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Manisha Singh</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">
              <Grid className="start-flex">
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
               View
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
               Download
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
 </Grid>
              </TableCell>
         
         
        </TableBody>
      </Table>
      </Grid>
</Grid>
</section>

<section id="section-6">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Interviews </Typography>
           
</Grid>
<Grid className="detailbox">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Scheduled Interview</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">	Interview Type </TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Interviewer</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Hiring Manager</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Coordinator</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Scheduled By</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
         
              <TableCell className="tablehead-14-roboto border-bottom-tab">
              <Typography>Feb 23, 2022</Typography>          
              <Typography style={{fontSize:12, marginTop:5}}>16:30 To 17:30</Typography>
                              
              </TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Hiring Team Screen</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">
              <AvatarGroup max={4} className="start-flex">
      <Avatar alt="Remy Sharp" src="/img/bitmap.png" />
      <Avatar alt="Travis Howard" src="/img/bitmap2.png" />
      <Avatar alt="Cindy Baker" src="/img/bitmap.png" />
      <Avatar alt="Agnes Walker" src="/img/bitmap2.png" />
      <Avatar alt="Trevor Henderson" src="/img/bitmap.png" />
    </AvatarGroup>
</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Sahud khan</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Manisha Singh</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">
              <ListItem alignItems="flex-start" style={{padding:0}}>
 <ListItemAvatar style={{margin:0}}>
 <Avatar alt="Travis Howard" src="/img/bitmap.png" />
 </ListItemAvatar>
 <ListItemText>
 <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Robert F</Typography>
  </ListItemText>
</ListItem>
               </TableCell>
         
         
        </TableBody>
      </Table>
      </Grid>
</Grid>
</section>

<section id="section-7">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Reviews </Typography>
           
</Grid>
<Grid className="detailbox">

<Box>
            <ListItem alignItems="flex-start" style={{padding:0, marginBottom:'10px'}}>
        <ListItemAvatar className="m-0">
        <Avatar alt="Travis Howard" src="/img/bitmap.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography variant="h6" style={{fontSize:"16px", marginBottom:2,}}> Sahud Khan</Typography>
         <Typography variant="body1">alma.lawson@example.com</Typography>
        
         </ListItemText>
      </ListItem>   
      </Box>
      <Divider/>
      <Box className="w-100 flex-between-center mt-10">
          <Typography>Overall Rating</Typography> 
            <div className="flex-center">
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StarRateIcon style={{color:'#F3AF00'}}/>
      <Box>05</Box>
    </Box>
           </div>
      </Box>
      
     
      </Grid>
</Grid>
</section>

<section id="section-9">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">Tags </Typography>
           
</Grid>
<Grid className="detailbox">

<Grid item xs={6}>
<TextField id="outlined-basic" label="Add tags" variant="outlined" className="w-100 mb-20" />
</Grid>

<Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>

      </Grid>
</Grid>
</section>

<section id="section-8">
<Grid className="maincanidbox">
       <Grid className="w-100 flex-between-center mb-20">
            <Typography variant="body2">FeedBack </Typography>
           
</Grid>
<Grid className="detailbox">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Job Title </TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Department </TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Entity</TableCell>
            <TableCell className="tablehead-14-roboto border-bottom-tab">Ratings</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
         
              <TableCell className="tablehead-14-roboto border-bottom-tab">Web Designer</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Hr</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">Manisha Singh</TableCell>
              <TableCell className="tablehead-14-roboto border-bottom-tab">
              <Button onClick={() => setOpenAddRating(true)}><StarRateIcon style={{height:'20px', color:'#e4d908', marginRight:4}}/> 4 <ArrowForwardIosIcon style={{ height:'14px', color:'#000'}}/></Button>
              </TableCell>
         
         
        </TableBody>
      </Table>
      </Grid>
</Grid>
</section>

      </Grid>
      </Grid>
      </Grid>
 




 
      <CustomModalfullwidth
          open={openAdd}
          cancelClicked={
            () => {
              setOpenAdd(false)
            }
          }
          confirmClicked={
            submitForm
          }
          // width="700px"
          confirmText="Send"
          name= "New Mail">
          <div className="newmailid">
          <Grid item xs={7} style={{margin:'auto'}}>
          <FormBuilder size="xs" fields={[
           { type: 'select', name: 'template', label: 'Select Template', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
           { type: 'input', name: 'To', label: 'To', required: false },
           { type: 'input', name: 'CC', label: 'cc', required: false },
           { type: 'input', name: 'BCC', label: 'Bcc', required: false },
           { type: 'input', name: 'Subject', label: 'Subject', required: false },
         
            ]} values={values} inputHandler={handleChange} />
            
            <Box  className="mt-30">
            <CKEditor
                    editor={ ClassicEditor }
                   
                    data=""
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
                </Box>

            </Grid></div>
        </CustomModalfullwidth>



        <CustomModalfullwidth
          open={openLog}
          cancelClicked={
            () => {
              setOpenLog(false)
            }
          }
          confirmClicked={
            submitForm
          }
          // width="700px"
          confirmText="Send"
          name= "Call Log">
          <div className="newmailid">
          <Grid item xs={7} style={{margin:'auto'}}>
          <FormBuilder size="lg" fields={[
           { type: 'select', name: 'template', label: 'Select Job', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
           { type: 'select', name: 'response', label: 'Select Response', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
           { type: 'date', name: 'Date', label: 'Select Date', required: false },
           { type: 'time', name: 'time', label: 'start Time', required: false },
           { type: 'time', name: 'time', label: 'End Time', required: false },
         
         
            ]} values={values} inputHandler={handleChange} />
            
            <Box  className="mt-30">
            <CKEditor
                    editor={ ClassicEditor }
                   
                    data=""
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
                </Box>

            </Grid></div>
        </CustomModalfullwidth>


        <CustomModalfullwidth
          open={OpenAddRating}
          cancelClicked={
            () => {
              setOpenAddRating(false)
            }
          }
          confirmClicked={
            submitForm
          }
          // width="700px"
          confirmText="Submit"
          name= "Ratings">
           <div className="newmailid">
              <Grid item xs={8} style={{margin:'auto'}}>
          <div className="p-5">

           <Grid className="mb-20">
          <Box className="w-100 flex-between-center mb-15">
          <Typography>Overall Rating</Typography> 
            <div className="flex-center">
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StarRateIcon style={{color:'#F3AF00'}}/>
      <Box>05</Box>
    </Box>
           </div>
          </Box>

      <TextField
          id="outlined-multiline-static"
          label="Remarks*"
          variant="outlined"
          disabled="isDisabled"
          multiline
          rows={4}
          fullWidth
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
</Grid> 
       

<Grid className="mb-20">
          <Box className="w-100 flex-between-center mb-15">
          <Typography>All Checks</Typography> 
            <div className="flex-center">
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StarOutlineIcon/>
      <Box>0</Box>
    </Box>
           </div>
          </Box>

      <TextField
          id="outlined-multiline-static"
          label="Remarks*"
          variant="outlined"
          multiline
          disabled="isDisabled"
          rows={4}
          fullWidth
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
</Grid>

<Grid className="mb-20">
          <Box className="w-100 flex-between-center mb-15">
          <Typography>Final</Typography> 
            <div className="flex-center">
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StarOutlineIcon/>
      <Box>0</Box>
    </Box>
           </div>
          </Box>

      <TextField
          id="outlined-multiline-static"
          label="Remarks*"
          variant="outlined"
          multiline
          disabled="isDisabled"
          rows={4}
          fullWidth
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
</Grid>
            
            </div>
            </Grid>
            </div>
        </CustomModalfullwidth>



        <CustomModal
          open={openAdd2}
          cancelClicked={
            () => {
              setOpenAdd2(false)
            }
          }
          confirmClicked={
            submitForm
          }
          width="380px"
          confirmText="Upload"
          name= "New Attachment">
          <div className="">
            <FormBuilder size="sm" fields={[
              
              { type: 'select', name: 'Department', label: 'Department', options:[{id:1,name:"Design"},{id:2,name:"Software"}], required: true },
             
             
            ]} values={values} inputHandler={handleChange} />
            
            </div>
        </CustomModal>
           
        </>
    )
}

export default Overview

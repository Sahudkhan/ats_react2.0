import * as React from 'react';
import {BrowserRouter as Link,} from "react-router-dom";
import {TextField, Divider, Switch, Button, Grid, FormControlLabel, ListItem, Card, MenuItem, ListItemText, Typography, Box,} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';




function ScheduleInterview() {
  const [age, setAge] = React.useState(null);
  const [meet, setMeet] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const top100Films = [
    { title: 'Alex D'},
    { title: 'Rohit Sharma'},
    { title: 'Arun Jain'},
    { title: 'Ajay Kadyan'},
    { 
      title: 'Sahud Khan', 
    },
    
  ];

 
  
    return (
        <>
         <Box className='w-100 flex-column'>
     
       <Grid className="flex-between-center" style={{borderBottom:"1px solid #EBECF0", padding:'20px 64px 12px 64px'}}>
         <Box className='start-flex'>
       <Link to="/CandidatesDetails" style={{textDecoration:'none'}} ><ArrowBackIcon style={{fontSize:'21px'}}/></Link>
       <Typography variant="h6" style={{fontSize:'16px', fontWeight:'600', marginLeft:'7px', marginTop:'1px'}} >
        Schedule First Round</Typography>
        </Box>
     </Grid>

     <div className="newmailid">
              <Grid item xs={7} style={{margin:'20px auto'}}>
                <Grid container spacing={3}>
      <Grid item xs={6}> <TextField id="outlined-basic" label="Title Name" fullWidth variant="outlined" /></Grid>            
      <Grid item xs={6}>
     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Interview Step</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Refrence Check</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      <Autocomplete
        fullWidth
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Interviewers"
            placeholder=""
            variant="outlined"
          />
        )}
      />
      </Grid>

      <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Select Date"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField fullWidth variant='outlined' {...params} />}
  />
</LocalizationProvider>
      </Grid>

      <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid className="start-flex">
      <TimePicker
        label="Time From"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField variant='outlined' {...params} />}
      />

<TimePicker
 style={{marginLeft:7}}
        label="Time To"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField variant='outlined' {...params} />}
      />
      </Grid> 
    </LocalizationProvider>
      </Grid>

      <Grid item xs={6}>
      <TextField id="outlined-basic" label="Interview Duration" fullWidth variant="outlined" />
      
      </Grid>

      <Grid item xs={6}>
     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label2">Choose Place</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={meet}
          label="meet"
          onChange={handleChange}
        >
          <MenuItem value={1}>Google Meet</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={6}>
        
      <TextField id="outlined-basic" label="" placeholder='https://meet.google.com/yjb-uwag-yqt' fullWidth variant="outlined" />
      </Grid>

      <Grid item xs={6}>
      <FormControlLabel
      className='m-0'
          value="start"
          control={<Switch color="primary" />}
          label="Candidate Message"
          labelPlacement="start"
        />
        </Grid>

        <Grid item xs={12}>
       <Box className='mb-20'><TextField id="outlined-basic" label="Subject" fullWidth variant="outlined" /></Box> 

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

        </Grid>

        <Grid item xs={12}>
      <FormControlLabel
      className='m-0'
          value="start"
          control={<Switch color="primary" />}
          label="Interviewer Message"
          labelPlacement="start"
        />
        </Grid>
      </Grid>
    </Grid>
   

   </div>
   
   <Grid item xs={7} className='footer_popup'>
   <Button
                  variant="contained"
                 
                  className="button-custom-modal"
                >
                 Cancel
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button
                  variant="contained"
                  color="primary"
                  // style={{ backgroundColor: "#335AFF", color: "#fff" }}
                 
                  className="button-custom-modal button-confirm"
                >
                 Send
                </Button>
   </Grid>
        </Box>
           
        </>
    )
}

export default ScheduleInterview

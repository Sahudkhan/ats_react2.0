import React, { useState, useEffect } from "react";
import { 
Grid, 
Typography, 
Select, 
FormControl, 
MenuItem, 
InputLabel, 
Box,
TableCell,
TableContainer,
TableHead,
TableRow,
Table,
Paper,
TableBody


 } from "@material-ui/core";
import FormBuilder, { MyTable } from "../../../component/formBuilder";



function JobsPrefix() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
       <>
       <Grid className="css-1yqw6cw">
       <Grid container>
      <Grid className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
          Jobs Prefix Configure
          </Typography>
        
      
      </Grid>


     
      <Grid className="w-100 flex-column " style={{height:"77vh"}}>
      <Box style={{ minWidth: 120, marginTop:20, marginBottom:30 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Generate Prefix On</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={age}
          label="Generate Prefix On"
          onChange={handleChange}
        >
          <MenuItem value={10}>Entity</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow component="th" scope="row">
            <TableCell>Entity</TableCell>
            <TableCell>Prefix</TableCell>
            <TableCell>Starting From</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell>ZDPG</TableCell>
              <TableCell>ZDPG</TableCell>
              <TableCell>sdasd</TableCell>
              <TableCell align="right">ssa</TableCell>

            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>

      </Grid>
    </Grid>
       </Grid>
       </>
    )
}

export default JobsPrefix

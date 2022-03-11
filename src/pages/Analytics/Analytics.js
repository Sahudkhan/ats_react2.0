import React, { useState, useEffect } from "react";
import { Typography, Box, ListItem, TableRow, ListItemText, Avatar, TextField, MenuItem, Popover, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import FormBuilder, { MyTable } from "../../component/formBuilder";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Scrollbars from "react-custom-scrollbars";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../../component/NavbarElements';

const sourcetype = [
  {
      value: 'linkedin',
      label: 'Linkedin'
  },
  {
      value: 'naukri',
      label: 'Naukri'
  }
];


function Analytics() {
  const [value, setValue] = React.useState('linkedin');
    return (
       <>
        <Grid className="top_tabs">
    <Box className="start-flex mainheadingall"><Typography variant="h2" style={{fontSize:18}}>Analysis</Typography></Box> 
    <Grid item align = "center" justify = "center" alignItems = "center" >    
    <NavMenu>
      <NavLink exact activeStyle to="/Analytics">Analytics</NavLink>
      <NavLink exact activeStyle to="/CandidateDashboards">Reports</NavLink>
 </NavMenu>
     
      </Grid>

    </Grid>

       <Grid className="analyticmain">
       
      <Grid className="flex-between-center mb-20 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
          Analytics
          </Typography>
        
        </Grid>


        <Grid container  spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Time-to-Fill</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table" hover>
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Opening</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">No.of positions</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Days</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">
     Human Resource
      </TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Time-to-Hire</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table" size="small">
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Candidate</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Opening</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Days</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
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
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Age of Job</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Opening</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">No.of positions</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Time to fill in Days </TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Publish Date</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Expiry Date</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Delays</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Oct 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">Nov 12, 2020</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30 Days</TableCell>
     </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
          <Grid container alignContent="center" justifyContent="space-between">
                                   
                                 <Typography variant="h2" component="div" style={{padding:16, fontSize:'16px'}} >Recruiter’s Performance </Typography>
                                   
                                 <Grid className="flex-center p-5">
                                 <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {sourcetype.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                        
                                    </Grid>
                                </Grid>
                                <Scrollbars style={{height:'calc(100% - 75px)'}}>
                            <Grid style={{padding:'10px 20px'}}>
                              
                                <Grid className="perforbox" container direction="column">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                            <ListItem alignItems="flex-start" style={{padding:0}}>
                                          <ListItemAvatar style={{margin:0}}>
                                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                                          </ListItemAvatar>
                                          <ListItemText>
                                          <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Application</Typography>
                                            </ListItemText>
                                          </ListItem>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45 Hired
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                 

                                  
                                </Grid>

                                <Grid className="perforbox" container direction="column">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                            <ListItem alignItems="flex-start" style={{padding:0}}>
                                          <ListItemAvatar style={{margin:0}}>
                                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                                          </ListItemAvatar>
                                          <ListItemText>
                                          <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Application</Typography>
                                            </ListItemText>
                                          </ListItem>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45 Hired
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                 

                                  
                                </Grid>


                                <Grid className="perforbox" container direction="column">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                            <ListItem alignItems="flex-start" style={{padding:0}}>
                                          <ListItemAvatar style={{margin:0}}>
                                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                                          </ListItemAvatar>
                                          <ListItemText>
                                          <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Application</Typography>
                                            </ListItemText>
                                          </ListItem>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45 Hired
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                 

                                  
                                </Grid>

                                <Grid className="perforbox" container direction="column">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                            <ListItem alignItems="flex-start" style={{padding:0}}>
                                          <ListItemAvatar style={{margin:0}}>
                                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                                          </ListItemAvatar>
                                          <ListItemText>
                                          <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Application</Typography>
                                            </ListItemText>
                                          </ListItem>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45 Hired
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                 

                                  
                                </Grid>

                                <Grid className="perforbox" container direction="column">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                            <ListItem alignItems="flex-start" style={{padding:0}}>
                                          <ListItemAvatar style={{margin:0}}>
                                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                                          </ListItemAvatar>
                                          <ListItemText>
                                          <Typography variant="body1" style={{fontSize:"14px", marginTop:10,}}>Application</Typography>
                                            </ListItemText>
                                          </ListItem>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45 Hired
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                 

                                  
                                </Grid>
                             
                            </Grid>
                            </Scrollbars>
                         </Box>
          </Grid>



          
          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
          <Grid container alignContent="center" justifyContent="space-between">
                                   
                                 <Typography variant="h2" component="div" style={{padding:16, fontSize:'16px'}} >Overall Recruitment Cycle </Typography>
                                   
                                 <Grid className="flex-center p-5">
                                 <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {sourcetype.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                        
                                    </Grid>
                                </Grid>
                                
                            <Grid style={{padding:'10px 20px'}} container spacing={2} >
                            <Grid item xs={4}>
                              <div className="recriut1">
                                <Typography variant="body2" style={{fontSize:30, color:'#335AFF', fontWeight:400, marginBottom:4}}>200</Typography>
                                <Typography style={{color:'#335AFF'}}>Total Position</Typography>
                                </div>
                             </Grid>

                             <Grid item xs={4}>
                             <div className="recriut2">
                                <Typography variant="body2" style={{fontSize:30, color:'#36B37E', fontWeight:400, marginBottom:4}}>350</Typography>
                                <Typography style={{color:'#36B37E'}}>Hired</Typography>
                                </div>
                             </Grid>

                             <Grid item xs={4}>
                             <div className="recriut3">
                                <Typography variant="body2" style={{fontSize:30, color:'#FFAE09', fontWeight:400, marginBottom:4}}>100</Typography>
                                <Typography style={{color:'#FFAE09'}}>Pending</Typography>
                                </div>
                             </Grid>

                            </Grid>
                           
                         </Box>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Job Status</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
           </Scrollbars>
           </Box>
           </Grid>

          <Grid item xs={8} sm={8} md={8}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Interview Per Candidate</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Job Opening</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Candidate Apply</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Interview Schedule</TableCell>
             <TableCell className="tablehead-14-roboto border-bottom-tab">Average</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">0.5</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">0.5</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">0.5</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">0.5</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablebody-14-roboto border-bottom-tab">Human Resource</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">0.5</TableCell>

     </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>

          </Grid>
       </Grid>
       </>
    )
}

export default Analytics

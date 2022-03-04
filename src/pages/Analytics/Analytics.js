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
                            <Grid className="p-5">
                              
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



          </Grid>
       </Grid>
       </>
    )
}

export default Analytics

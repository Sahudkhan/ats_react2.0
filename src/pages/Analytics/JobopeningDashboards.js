import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider, LinearProgress, CardContent, Card, TableRow, ListItemText, Popover, Checkbox, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import FormBuilder, { MyTable } from "../../component/formBuilder";
import Scrollbars from "react-custom-scrollbars";
import SearchComponent from "../../component/SearchComponent";
import Requisitionchart from '../../component/Requisitionchart'

const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "rgba(116, 72, 202, 0.05)",
    height: 6,
    borderRadius: 5,
    marginTop:3
  },
  barColorPrimary: {
    backgroundColor: "#7448CA"
  }
})(LinearProgress);

function JobopeningDashboards() {
 const handleChange = (e) => {
        console.log("target", e.target)
      }

 return (
       <>
       <div className="analyticmain">
       <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h2">Job Opening Dashboards</Typography>
            <div className="flex-center">
            <Box>
               <SearchComponent/>
              </Box>

                
            </div>
          </Box>


       <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Position Of Current Headcount</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
           <Grid style={{padding:'0px 20px'}}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">UI UX Designer</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">50 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                              
                                </Grid>
         </Scrollbars>
          </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Requisition Status</Typography>
         <Grid style={{padding:'0px 20px'}}>
         <Requisitionchart/>
         </Grid>
          </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Position Of Current Headcount</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <Grid style={{padding:'0px 20px'}}>
         <Box item xs={12} marginBottom={2}>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>1-3 Years</Typography>
             <Typography variant='body1'>100</Typography>
             </Grid>
             <StyledLinearProgress variant="determinate" value={80}/>
             </Box>

             <Box item xs={12} marginBottom={2}>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>4-8 Years</Typography>
             <Typography variant='body1'>80</Typography>
             </Grid>
             <StyledLinearProgress variant="determinate" value={70} />
             </Box>

             <Box item xs={12} marginBottom={2}>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>8-12 Years</Typography>
             <Typography variant='body1'>60</Typography>
             </Grid>
             <StyledLinearProgress variant="determinate" value={60} />
             </Box>

             <Box item xs={12} marginBottom={2}>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>12-18 Years</Typography>
             <Typography variant='body1'>40</Typography>
             </Grid>
             <StyledLinearProgress variant="determinate" value={40} />
             </Box>

             <Box item xs={12}>
             <Grid container alignContent="center" justifyContent="space-between">
             <Typography variant='body1'>18-20 Years</Typography>
             <Typography variant='body1'>80</Typography>
             </Grid>
             <StyledLinearProgress variant="determinate" value={20} />
             </Box>

          </Grid>
         </Scrollbars>
          </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Vacancies By Employment Type</Typography>
        
      
         <Grid  style={{padding:'10px 20px'}} container spacing={2}>
            <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">20</Typography>
            <Typography variant="body1">Fresher</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">35</Typography>
            <Typography variant="body1">Internship</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">500</Typography>
            <Typography variant="body1">Remote</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">10</Typography>
            <Typography variant="body1">Part Time</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">30</Typography>
            <Typography variant="body1">Contractors</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className="Boxnew">
            <CardContent>
            <Typography className="headingbox">10000+</Typography>
            <Typography variant="body1">Permanent</Typography>
            </CardContent>
            </Card>
           </Grid>



    </Grid>
       
          </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Vacancies By Location</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
                            <Grid style={{padding:'0px 20px'}}>
                              
                                       <Grid className="perforbox">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                        <Typography variant="body1">Rajasthan</Typography>
                                        <Typography variant="body1" color="inherit">4500</Typography>
                                        </Grid>
                                         </Grid>

                                         <Grid className="perforbox">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                        <Typography variant="body1">Kolkata</Typography>
                                        <Typography variant="body1" color="inherit">45</Typography>
                                        </Grid>
                                         </Grid>

                                         <Grid className="perforbox">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                        <Typography variant="body1">Mumbai</Typography>
                                        <Typography variant="body1" color="inherit">45</Typography>
                                        </Grid>
                                         </Grid>

                                         <Grid className="perforbox">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                        <Typography variant="body1">Delhi</Typography>
                                        <Typography variant="body1" color="inherit">450</Typography>
                                        </Grid>
                                         </Grid>

                                         <Grid className="perforbox">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                        <Typography variant="body1">Gurgaon</Typography>
                                        <Typography variant="body1" color="inherit">45</Typography>
                                        </Grid>
                                         </Grid>


                            </Grid>
                            </Scrollbars>
          </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Vacancies By Department</Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
           <Grid style={{padding:'0px 20px'}}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Operations</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">50 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                <Divider className="divider" />

                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                         <Typography variant="body1" color="inherit">Internet Security Assistant</Typography>
                                         <Typography variant="body1" className="numberbg" color="inherit">30 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                              
                                </Grid>
         </Scrollbars>
          </Box>
          </Grid>

    </Grid>
       </div>
       </>
    )
}

export default JobopeningDashboards

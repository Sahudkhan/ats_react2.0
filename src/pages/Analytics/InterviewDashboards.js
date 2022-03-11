import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography, Box, Divider, LinearProgress, CardContent, Card, TableRow, ListItemText, Popover, Checkbox, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import FormBuilder, { MyTable } from "../../component/formBuilder";
import Scrollbars from "react-custom-scrollbars";
import SearchComponent from "../../component/SearchComponent";
import Requisitionchart from '../../component/Requisitionchart';
import Sourcechart from '../../component/Sourcechart';


function JobopeningDashboards() {

 return (
       <>
       <div className="analyticmain">
       <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h2">Interview Dashboards</Typography>
            <div className="flex-center">
            <Box>
               <SearchComponent/>
              </Box>

                
            </div>
          </Box>


       <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={6}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Interview by Job</Typography>
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
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Interview By Status </Typography>
         <Grid style={{padding:'0px 20px'}}>
         <Requisitionchart/>
         </Grid>
          </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
          <Box className="dashbox_anayl">
         <Typography variant="h2" style={{padding:16, fontSize:'16px'}}>Interview By Pannel </Typography>
         <Scrollbars style={{height:'calc(100% - 75px)'}}>
         <Grid  style={{padding:'0px 20px'}}>
         <Sourcechart/>
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

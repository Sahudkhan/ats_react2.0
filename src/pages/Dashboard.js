import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Paper, Divider, Grid, CardContent, Card, MenuItem, LinearProgress, Typography, Box } from '@material-ui/core';
import SearchComponent from "../component/SearchComponent";
import Sourcechart from '../component/Sourcechart'; 
import Locationchart from '../component/Locationchart'
import Requisitionchart from '../component/Requisitionchart'
// assets
 
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

const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "rgba(116, 72, 202, 0.05)",
      height: 6,
      borderRadius: 5,
      marginTop:3
    },
    barColorPrimary: {
      backgroundColor: "#F3AF00"
    }
  })(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paperBox: {
     borderRadius:"6px",
      margin: 'auto',
      boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.2)",
      border:'1px solid #EBECF0',
      position:"relative",
      paddingBottom:'10px'
     
    },
   
    divider: {
        marginTop: '12px',
        marginBottom: '12px',
        backgroundColor:"#f8f8f8"
    },
   
    numberbg:{
        backgroundColor:"#F8F8F8",
        padding:"0px 8px",
        borderRadius:'4px',
        height:"32px",
        lineHeight:"32px",
        textAlign:"center"
        

    },

    numberbg22:{
        backgroundColor:"#F8F8F8",
        padding:"10px",
        borderRadius:'4px',
        marginBottom:"15px"

    },

    mainheading:{
        fontSize:"16px",
        fontFamily:"Poppins",
        fontWeight:"600",
        color:"#172B4D",
    },
    dashboardscroll:{
        height:"220px",
        overflow:"auto",
        padding:"0px 20px"
    },
    headtext:{
        padding:"20px"
    },
  
    Boxnew:{
backgroundColor:"#F8F8F8",
height:"90px",
border:"none"
       },

    headingbox:{
        fontSize: "27px",
        color:" #172B4D"},

  
  }));
 
function Dashboard() {

    const classes = useStyles();
    const [value, setValue] = React.useState('linkedin');
  
    return (
        <main>
                  
       <Grid className="allcssmain">
        <Grid className={classes.root}>
        <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h2">Dashboard</Typography>
            <div className="flex-center">
              <Box className="mr-0">
               <SearchComponent/>
              </Box>
             
            </div>
          </Box>

        <Grid container  spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Source Type</Typography>
                                    </Grid>
                                    <Grid item>

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
                            </Grid>
                           
             <Grid className={classes.dashboardscroll}> <Sourcechart/></Grid>
          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Entity</Typography>
                                    </Grid>
                                    <Grid item>

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
                           
                            <Grid className={classes.dashboardscroll}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Application
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                New
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            20
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                In Review
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            10
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Job Portal
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                               


                            </Grid>
                       
                    
                   
                


          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Department</Typography>
                                    </Grid>
                                    <Grid item>

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
                           
                            <Grid className={classes.dashboardscroll}>
                                <Grid container direction="column" className={classes.numberbg22} >
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Application
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            45
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                               
                                <Grid container direction="column" className={classes.numberbg22}>
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                New
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            500
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                
                                <Grid container direction="column" className={classes.numberbg22}>
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                In Review
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1"  color="inherit">
                                                            1000
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                               
                                <Grid container direction="column" className={classes.numberbg22}>
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Job Portal
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" color="inherit">
                                                            150
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                
                              
                            </Grid>
                       
                    
                   
                


          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Location</Typography>
                                    </Grid>
                                    <Grid item>

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
                            </Grid>
                           
             <Grid className={classes.dashboardscroll}> <Locationchart/></Grid>
          </Paper>
          </Grid>

          </Grid>


          <Grid container  spacing={3}>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
                  <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Position Of Current Headcount</Typography>
                                    </Grid>
                                 
                                </Grid>
                           
                            <Grid className={classes.dashboardscroll}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                UI UX Designer
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Internet Security Assistant
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Freshers
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="body1" color="inherit">
                                                Senior Manager
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="body1" className={classes.numberbg} color="inherit">
                                                            30
                                                        </Typography>
                                                    </Grid>
                                                   
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                               


                            </Grid>
                       
                    
                   
                


          </Paper>
          </Grid>

         

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Requisition Status</Typography>
                                    </Grid>
                                    
                                </Grid>
                                <Grid className={classes.dashboardscroll}> 
          <Requisitionchart/>
          </Grid>

          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Vacancies By Experience</Typography>
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
                           
             <Grid className={classes.dashboardscroll}> 
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
          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paperBox}>
          <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between" className={classes.headtext}>
                                    <Grid item>
                                 <Typography variant="" className={classes.mainheading} component="div" >Vacancies By Employment Type</Typography>
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
                           
             <Grid className={classes.dashboardscroll}> 
             <Grid container spacing={2}>
            <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>20</Typography>
            <Typography variant="body1">Fresher</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>35</Typography>
            <Typography variant="body1">Internship</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>500</Typography>
            <Typography variant="body1">Remote</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>10</Typography>
            <Typography variant="body1">Part Time</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>30</Typography>
            <Typography variant="body1">Contractors</Typography>
            </CardContent>
            </Card>
           </Grid>

           <Grid item xs={4}>
            <Card variant="outlined" className={classes.Boxnew}>
            <CardContent>
            <Typography className={classes.headingbox}>10000+</Typography>
            <Typography variant="body1">Permanent</Typography>
            </CardContent>
            </Card>
           </Grid>



    </Grid>
             </Grid>
          </Paper>
          </Grid>

          </Grid>
          
          </Grid>
          </Grid>
        </main>
    )
}

export default Dashboard

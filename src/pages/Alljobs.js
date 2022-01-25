import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TablePagination from '@material-ui/core/TablePagination';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
     
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

function Alljobs() {
    const classes = useStyles();


  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

 
    return (

      <main>
        <div className="container">
        
        <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
        
      >
        <Tab className="menuneww" exact label="All Jobs" component={Link} to="/alljobs"/>
        <Tab className="menuneww" exact label="My Jobs" component={Link} to="/Myjobs" />
       
      </Tabs>
    

      

        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container  spacing={2}>
          <Grid item xs={3}>
         
            <Typography variant="h6" component="h6">
            Business analyst111
</Typography>
<Typography variant="body2" color="textSecondary">
Job Id : #12310074
                </Typography>
          </Grid>
          
          <Grid item xs={4}>
            <Grid item xs container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">
                  300
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                  All Active
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6">
                  80
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                  New
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6">
                  220
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                In Progress
                </Typography>
              </Grid>
             
            </Grid>

            <Grid item xs container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">
                  10
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                Withdraw
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6">
                  200
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                Reject
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6">
                  3000
                </Typography>
               
                <Typography variant="body2" color="textSecondary">
                 Hired
                </Typography>
              </Grid>
             
            </Grid>
           
          </Grid>

          <Grid item xs={3} >
          <Grid item xs container spacing={7} > 
          <Grid item xs={6}>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>
<Typography variant="body2" color="textSecondary">Published On</Typography>
</Grid>

<Grid item xs={6}>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>
<Typography variant="body2" color="textSecondary">Published On</Typography>
</Grid>

</Grid>
<Grid item xs container spacing={7}> 
          <Grid item xs={6}>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>
<Typography variant="body2" color="textSecondary">Published On</Typography>
</Grid>

<Grid item xs={6}>
<Typography variant="body2" color="subtitle1">Feb 24, 2021</Typography>
<Typography variant="body2" color="textSecondary">Published On</Typography>
</Grid>

</Grid>

</Grid>


       <Grid item xs={2} align = "right" justify = "flex-end" alignItems = "flex-end">
         
      <IconButton>
        <MoreVertIcon />
      </IconButton>
      

       </Grid>

        </Grid>
      </Paper>
    
        </div>

        <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

        </div>
        </main>
    )
}

export default Alljobs

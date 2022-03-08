import React, { useState, useEffect } from "react";
import { Typography, Box, ListItem, TableRow, ListItemText, Popover, Checkbox, List, ListItemAvatar, TableHead, TableContainer, TablePagination, Table,  Paper, TableCell, TableBody, Grid, Button} from '@material-ui/core';
import FormBuilder, { MyTable } from "../../component/formBuilder";
import Scrollbars from "react-custom-scrollbars";
import SearchComponent from "../../component/SearchComponent";
import ListIcon from '@mui/icons-material/List';
import DownloadIcon from '@mui/icons-material/Download';
function CandidateDashboards() {
 const handleChange = (e) => {
        console.log("target", e.target)
      }

 return (
       <>
       <div className="analyticmain">
       <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h2"> Candidate Dashboards </Typography>
            <div className="flex-center">
            <Box className="mr-20">
               <SearchComponent/>
              </Box>


            <Box  className="icon-cover flex-center"
                  // onClick={() => setopenDrawer(!openDrawer)}
                >
                  <ListIcon className="header-icon" />
                </Box>

                
            </div>
          </Box>


       <div container>
   

      <Grid item xs={12} sm={12} md={12} className="mb-20">
      <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h6">Source Type </Typography>
            <div className="flex-center">
      
            <Box  className="icon-cover flex-center">
                  <DownloadIcon className="header-icon" />
                </Box>

                
            </div>
          </Box>
          <Box className="dashbox_anayl">
         

        <Scrollbars style={{height:'calc(100% - 5px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
             <TableCell className="tablehead2-14-roboto border-bottom-tab">Name</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Applications</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">In Review</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Interview</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Offer</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Hired</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Rejected</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Withdrawn</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Unassigned</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Naukri</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Linkedin</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Job Portal</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Facebook</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Hirist</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
      <Box className="w-100 flex-between-center mb-20">
            <Typography variant="h6">Entity </Typography>
            <div className="flex-center">
      
            <Box  className="icon-cover flex-center">
                  <DownloadIcon className="header-icon" />
                </Box>

                
            </div>
          </Box>
          <Box className="dashbox_anayl">
         

        <Scrollbars style={{height:'calc(100% - 5px)'}}>
         <TableContainer className="table-container-default table-container">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
             <TableCell className="tablehead2-14-roboto border-bottom-tab">Name</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Applications</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">New</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">In Review</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Interview</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Offer</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Hired</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Rejected</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Withdrawn</TableCell>
             <TableCell className="tablebody-14-roboto border-bottom-tab">Unassigned</TableCell>
             
         
            </TableRow>
          </TableHead>
          <TableBody>
           
      <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Naukri</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Linkedin</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Job Portal</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Facebook</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>

     <TableRow>        
      <TableCell className="tablehead2-14-roboto border-bottom-tab">Hirist</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">2</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">30</TableCell>
      <TableCell className="tablebody-14-roboto border-bottom-tab">56</TableCell>

     </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
         </Scrollbars>
          </Box>
          </Grid>
          


     
    </div>
       </div>
       </>
    )
}

export default CandidateDashboards

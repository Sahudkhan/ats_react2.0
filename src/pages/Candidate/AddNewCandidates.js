import React, { useState, useEffect } from "react";
import {BrowserRouter as Link,} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Paper, Divider, Select, InputLabel, MenuItem, Grid, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel, Typography, Box } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Scrollbars from "react-custom-scrollbars";
import CandidateBasicDetails from './CandidateBasicDetails';
import CandidateAdvanceDetails from './CandidateAdvanceDetails';

const steps = ['Basic Details', 'Advance Details'];
function getStepContent(step) {
  
  switch (step) {
    case 0:
      return (
        <CandidateBasicDetails/>
      );
   
    default:
      return (
        <CandidateAdvanceDetails/>
        );
  }
}
function AddNewCandidates() {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

    return (
        <>

<Grid className="flex-between-center" style={{borderBottom:"1px solid #EBECF0", padding:'18px 64px 16px 64px'}}>
 <Typography variant="h6" style={{fontSize:'18px', fontWeight:'600',}} >
 Create New Candidate</Typography>

        <Box className="flex-center">
          <Link to="/Candidates">
        <IconButton
                  size="small"
                  color="primary"
                  
                >
                  <Clear />
                </IconButton>
                </Link>
        </Box>
        
     </Grid>
 <Grid className="steppermain">

   <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography style={{marginBottom:'20px'}}> <Scrollbars style={{height:'71vh'}}>  {getStepContent(activeStep)}</Scrollbars></Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', borderTop:'1px solid #EBECF0', pt: 2 }}>
           
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
            <Button
             
            variant="contained"
            className="backbtn"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Previous
          </Button>
            )}



            <Button variant="contained" className="nexttbtn" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Preview & Publish' : 'Create'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Grid>

        </>
    )
}

export default AddNewCandidates

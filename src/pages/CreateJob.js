import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Paper, Divider, Select, InputLabel, MenuItem, Grid, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel, Typography, Box } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Scrollbars from "react-custom-scrollbars";
import WizardBasicDetails from './WizardBasicDetails';
import WizardAdvanceDetails from './WizardAdvanceDetails';
import WizardHiringProccess from './WizardHiringProccess';
import WizardPublish from './WizardPublish';
const steps = ['Basic Details', 'Advance Details', 'Hiring Process', 'Publish'];
function getStepContent(step) {
  
  switch (step) {
    case 0:
      return (
        <WizardBasicDetails/>
      );
    case 1:
      return (
        <WizardAdvanceDetails/>
      );
    case 2:
      return (
      <WizardHiringProccess/>
      );
    default:
      return (
        <WizardPublish/>
        );
  }
}
function CreateJob() {
  
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
              <Button color="inherit" onClick={handleSkip} style={{ textTransform:'capitalize', fontSize:'14px', marginRight:'10px' }}>
                Skip
              </Button>
            )}

<Button
             
              variant="contained"
              className="backbtn"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Previous
            </Button>

            <Button variant="contained" className="nexttbtn" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Preview & Publish' : 'Proceed'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Grid>

        </>
    )
}

export default CreateJob

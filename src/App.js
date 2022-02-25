
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react';
import './App.css';

import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import Myjobs from './pages/Myjobs';
import Alljobs from './pages/Alljobs';
import Workflow from './pages/Workflow';
import Analytics from './pages/Analytics';
import Requisition from './pages/Requisition';
import Interview from './pages/Interview';
import JobWidget from './pages/Settings/CareerSetup/index';
import ReviewCard from './pages/Settings/Configuration/index';
import Authentication from './pages/Settings/Integrations/index'
import UserManagement from './pages/Settings/Permissions/index'
import CreateJob from "./pages/CreateJob";
import JobDetails from "./pages/JobDetails";

import { createTheme, ThemeProvider, alpha } from "@material-ui/core/styles";
const secondaryColor = "rgba(51, 90, 255, 1)";
const Custumtheme = createTheme({
  components: {
    MuiAvatarGroup:{
      styleOverrides: {
        avatar: {
          width: "inherit",
          height: "inherit",
          fontSize: "inherit"
        },
        root: {
          width: "inherit",
          height: "inherit",
          fontSize: "inherit"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#ED3833",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(51, 90, 255, 0.05)",
            // backgroundColor: alpha(secondaryColor, 0.05),
            color: "inherit",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "inherit",
          "&:hover": {
            color: secondaryColor,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
          color: "#EBECF0",
          "&:checked": {
            color: secondaryColor,
          },
          "&:indeterminate": {
            color: "#757575",
          },
          "&:hover": {
            color: "#BDBDBD",
          },
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          letterSpacing: 0,
          "&:foucs .MuiInputLabel-root": {
            color: `${secondaryColor} !important`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#BDBDBD",
          letterSpacing: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: 50,
          letterSpacing: 0,
          // paddingLeft: 14,
          "&:hover .MuiInputLabel-root": {
            color: "#172B4D",
          },
        },
        notchedOutline: {
          borderColor: "#EBECF0",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#EBECF0",
            height: 35,
          },
        },
        {
          props: { variant: "contained", disabled: true },
          style: {
            color: "#fff !important",
            height: 35,
          },
        },
        {
          props: { variant: "text", color: "secondary" },
          style: {
            backgroundColor: alpha(secondaryColor, 0.05),
            height: 35,
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "#172B4D",
            backgroundColor: "#EBECF0",
            height: 35,
            "&:hover": {
              backgroundColor: "#EBECF0",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          height: 35,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: 60,
        },
        labelIcon: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.125,
          color: "#172B4D",
          letterSpacing: 0,
        },
      },
    },
  },
  spacing: (factor) => factor * 10,
  palette: {
    primary: {
      main: "#172B4D",
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#fff",
    },
    info: {
      main: "#EBECF0",
    },
    success: {
      main: "#00CD37",
    },
    text: {
      primary: "#172B4D",
      secondary: secondaryColor,
    },
    divider: "#EBECF0",
    action: {
      disabledBackground: alpha(secondaryColor, 0.5),
    },
  },
  mixins: {
    toolbar: {
      height: 60,
      background: "#fff",
      color: "#172B4D",
      boxShadow: "0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.12)",
    },
  },
  typography: {
    subtitle1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      fontSize: "1.25rem",
      lineHeight: 1.125,
      color: "#172B4D",
    },
    subtitle2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.125,
      color: "#172B4D",
      letterSpacing: 0,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.125,
      color: "#172B4D",
      letterSpacing: 0,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#172B4D",
      lineHeight: 1.125,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "0.6875rem",
      lineHeight: 1.125,
      color: "#828282",
      opacity: 0.8,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.125,
      color: "#172B4D",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.125,
      color: "#172B4D",
      letterSpacing: 0,
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.125,
      color: "#172B4D",
      letterSpacing: 0,
    },
    caption: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.125,
      color: "#757575",
      letterSpacing: 0,
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.125,
      color: "#fff",
      textTransform: "capitalize",
      letterSpacing: 0,
    },
    pxToRem: (size) => `${size / 16}rem`,
  },
});


export default function App() {
 
  return (
    <ThemeProvider theme={Custumtheme}>
    <Router>      
<Header />
<Switch>
      
      <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Candidates" component={Candidates} />
        <Route path="/Myjobs" component={Myjobs} />
        <Route path="/Alljobs" component={Alljobs} />
        <Route path="/Workflow" component={Workflow} />
        <Route path="/Analytics" component={Analytics} />
        <Route path="/Requisition" component={Requisition} /> 
        <Route path="/Interview" component={Interview} />
        <Route path="/JobWidget" component={JobWidget} />
        <Route path="/ReviewCard" component={ReviewCard} />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/UserManagement" component={UserManagement}/>
        <Route path="/CreateJob" component={CreateJob} />
        <Route path="/JobDetails" component={JobDetails} />
       
        <Route path="/" exact component={Dashboard} />
      </Switch>
</Router>
</ThemeProvider>
   
  );

}



import { Grid, Tab, Tabs, Box, Typography,  } from "@material-ui/core";
import { lazy, Suspense, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import UiLoader from "../../component/app/loader";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../../component/NavbarElements';

const component = [
  lazy(() => import("./MyProfile")),
  lazy(() => import("./LogPassword")),

];

const Settings = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
    <Grid className="top_tabs">
    <Box className="start-flex mainheadingall"><Typography variant="h2" style={{fontSize:18}}>User Profile</Typography></Box> 
    <Grid item align = "center" justify = "center" alignItems = "center" >    
    <NavMenu>
      
      <NavLink exact activeStyle to="/MyProfile">My Account</NavLink>

      </NavMenu>
     
      </Grid>

    </Grid>
    <Grid container className="main-screen">
    
      
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        sm={2}
        style={{ padding: "3.68vh 20px 0px 55px", minHeight:"100%" }}
      >
        <Tabs
          orientation="vertical"
          value={selected}
          className="leftTabnew"
          onChange={(e, newValue) => setSelected(newValue)}
          
        >
          <Tab label="My Profile" />
          <Tab label="Login & Password" />
        </Tabs>
      </Grid>
      <Grid
        item
        xl={10}
        lg={10}
        md={10}
        sm={10}
        style={{ borderLeft: "1px solid #ebecf0" }}
      >
        <div value={selected} index={0} className="w-100 h-100">
          <Suspense fallback={UiLoader}>
            <Switch>
              <Route path="/" component={component[selected]} />
            </Switch>
          </Suspense>
        </div>
      </Grid>
    </Grid>
    </>
  );
};

export default Settings;

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
  lazy(() => import("./CandidateDashboards")),


];

const Settings = (props) => {
  const [selected, setSelected] = useState(0);
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
    <Grid container className="main-screen">
    
      
      <Grid
        item
        xl={3}
        lg={3}
        md={3}
        sm={3}
        style={{ padding: "3.68vh 20px 0px 55px", minHeight:"100%" }}
      >
        <Tabs
          orientation="vertical"
          value={selected}
          className="leftTabnew"
          onChange={(e, newValue) => setSelected(newValue)}
          
        >
          <Tab label="Candidate Dashboards" className="minw-100" />
          <Tab label="Job Opening Dashboards" className="minw-100" />
          <Tab label="Interview Dashboards" className="minw-100" />
          <Tab label="Custom Reports" className="minw-100" />
        
        </Tabs>
      </Grid>
      <Grid
        item
        xl={9}
        lg={9}
        md={9}
        sm={9}
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

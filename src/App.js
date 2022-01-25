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
import Settings from './pages/Settings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function App() {
 
  return (
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
        <Route path="/Settings" component={Settings} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
</Router>

   
  );

}



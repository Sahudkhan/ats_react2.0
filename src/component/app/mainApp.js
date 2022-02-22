/* eslint-disable */
import React, { useState, useEffect } from "react";
import Routes from "../../routes";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';

const MainApp = props => {
  const { match } = props;
  const  auth = useSelector(state => state.auth);
  return (
    <div className="layout">
      <Routes match={match} socket={props.socket} />
    </div>
  );
};


export default MainApp;

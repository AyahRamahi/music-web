import React, { Component } from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './App.css';
import Logo from './assets/logo.png';
import Profile from './assets/profile.png';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand pl-5" href="/">
          <img src={Logo} width="120" height="50" alt="logo" />
        </a>
        <a className="row ml-auto pr-5" href="#">
            <h5> PROFILE </h5>
            <img src={Profile} width="40" height="25" alt="profile icon" />
        </a>
      </nav>
    );
  }
}

export default NavigationBar;

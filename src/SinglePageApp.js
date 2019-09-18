import React, { Component } from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './App.css';
import HitIt from './assets/hitit.png';
import White from './assets/white.png';

class SinglePageApp extends Component {
  render() {
    return (
      <div className="SinglePageApp">
        <div className="artists py-5 px-5 text-white w-100">
          <div className="row">
            <div className="col-md-3 ml-4 mt-5 pt-4">
              <h1 className="mb-0"> AMP UP </h1> <h1 className="mt-0">THOSE DBS</h1>
              <h5> MAKE MUSIC ON THE GO</h5>
              <br/>
              <img src={HitIt} className="img-fluid hitit float-left" />
            </div>

            <div className="col-md-8 pl-auto">
              <div className="thumbnail d-flex justify-content-between flex-wrap">
                <img src="..." alt="..."/>
                <img src="..." alt="..."/>
                <img src="..." alt="..."/>
                <img src="..." alt="..."/>
                <img src="..." alt="..."/>
                <img src="..." alt="..."/>
              </div>
            </div>
          </div>
        </div>

        <div className="details mx-5 py-5 my-5 pl-3">
          <h2> GET PRODUCIN WITH MUSICDB </h2>
          <br/>
          <h4 className="mb-0"> PICK YOUR PREFERRED INSTRUMENT </h4>
          <h6> PICK THE INSTRUMENTS YOU NEED TO COMPOSE YOUR PIECE </h6>
          <br/>
          <a href=""> START COMPOSING </a>
          <br/><br/><br/>
        </div>


        <footer className="page-footer font-small pt-5 pl-4 text-white">
          <div className="container-fluid text-center text-md-left mb-5">
            <div className="row">

              <div className="col-md-1 mx-4">
                <img src={White} className="img-fluid"/>
              </div>

              <div className="col-md-3 mx-4 mt-4">
                <ul className="list-unstyled">
                  <li> PROFILE </li>
                  <li> SIGN IN </li>
                  <li> MUSIC </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright mx-5 small py-3">
            <ul className="list-unstyled">
              <div className="d-flex justify-content-start">
                <li className="mx-2"> LEGAL</li>
                <li className="mx-2"> PRIVACY CENTER</li>
                <li className="mx-2"> PRIVACY POLICY</li>
                <li className="mx-2"> COOKIES</li>
                <li className="mx-2"> ABOUT ADS</li>
                <li className="ml-auto">© 2019 MUSICDB</li>
              </div>
            </ul>
          </div>


        </footer>
      </div>
    );
  }
}

export default SinglePageApp;

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './App.css';

const FEED_QUERY = gql`
  {
    songs {
      artist
    }
  }
`;

class Albums extends Component {
  render() {
    return (
      <div>
        <h3>Artist: {this.props.match.params.artist}</h3>
      </div>
    );
  }
}
export default Albums;

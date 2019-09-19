import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './App.css';

class Songs extends Component {
  render() {
    const FEED_QUERY = gql`
      {
        song (album: "${this.props.match.params.album}")
      }
    `;
    return (
      <div>
        <h3>Album: {this.props.match.params.album}</h3>
        <Query query={FEED_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <div> Loading... </div>
            if (error) return <div> Error! </div>
            
            return (
              <div className="content">
                {data.song.map (songName => (
                  <h4> {songName} </h4>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default Songs;

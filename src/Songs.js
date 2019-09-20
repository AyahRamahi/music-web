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
    // <h3>Album: {this.props.match.params.album}</h3>
    return (
      <div>

        <Query query={FEED_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <div> Loading... </div>
            if (error) return <div> Error! </div>

            return (
              <div className="content col">
                <ul className="list-group">
                  <li className="list-group-item list-subject mb-4 red-background"> Songs </li>
                  {data.song.map (songName => (
                    <li className="list-group-item list-group-item-action mb-2"> {songName} </li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default Songs;

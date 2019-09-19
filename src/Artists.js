import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Albums from './Albums.js';
import './App.css';

const FEED_QUERY = gql`
  {
    songs {
      artist
    }
  }
`;


class Artists extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div> Loading </div>;
          if (error) return <div> Error </div>;

          return (
            <BrowserRouter>
              <div className="content">
                {data.songs.map (song=> (
                  <NavLink replace exact to={song.artist}> {song.artist} </NavLink>
                ))}
                <Route path="/:artist" component={Albums}/>
              </div>
            </BrowserRouter>
          );
        }}
      </Query>
    )
  }
}

export default Artists;

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
    artists
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
              <div className="content row w-100 h-100 py-2 px-5">
                <div className="col-4">
                  <ul className="list-group">
                    <li className="list-group-item list-subject mb-4 red-background"> Artists </li>
                    {data.artists.map (artist => (
                      <NavLink replace exact to={artist}>
                        <li className="list-group-item list-group-item-action mb-2">
                         {artist}
                         </li>
                      </NavLink>
                    ))}
                  </ul>
                </div>

                <div className="col">
                  <Route path="/:artist" component={Albums}/>
                </div>
              </div>
            </BrowserRouter>
          );
        }}
      </Query>
    )
  }
}

export default Artists;

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Songs from './Songs.js';
import './App.css';

class Albums extends Component {
  render() {
    const FEED_QUERY = gql`
      {
        albums (artist: "${this.props.match.params.artist}")
      }
    `;
    return (
      <div>

        <Query query={FEED_QUERY} fetchPolicy='network-only'>
          {({loading, error, data}) => {
            if (loading) return <div> Loading... </div>
            if (error) return <div> Error! </div>

            return (
              <BrowserRouter>
                <div className="content row w-100 h-100">
                  <div className="col-6">
                    <ul className="list-group">
                      <li className="list-group-item list-subject mb-4 red-background"> Albums </li>
                      {data.albums.map (album => (
                        <NavLink replace exact to={album}>
                          <li className="list-group-item list-group-item-action mb-2">
                            {album}
                           </li>
                        </NavLink>
                      ))}
                      </ul>
                    </div>

                  <div className="col">
                    <Route path="/:album" component={Songs} />
                  </div>
                </div>
              </BrowserRouter>
            )
          }}
        </Query>
      </div>
    );
  }
}
export default Albums;

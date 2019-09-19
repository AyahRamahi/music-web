import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import './App.css';

class Songs extends Component{
  render(){
    return <h1> testing songs </h1>;
  }
}

class Albums extends Component {
  render() {
    const FEED_QUERY = gql`
      {
        albums (artist: "${this.props.match.params.artist}")
      }
    `;
    return (
      <div>
        <h3>Artist: {this.props.match.params.artist}</h3>
        <Query query={FEED_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <div> Loading... </div>
            if (error) return <div> Error! </div>

            return (
              <BrowserRouter>
                <div className="content">
                  {data.albums.map (album => (
                    <NavLink replace exact to={album}> {album} </NavLink>
                  ))}
                  <Route path="/:song" component={Songs} />
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

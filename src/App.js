import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import SinglePageApp from './SinglePageApp.js';
import NavigationBar from './NavigationBar.js';
import Artists from './Artists.js';
import './App.css';


// gql gets the plain string that contains the graphql code
const FEED_QUERY = gql`
    {
      songs {
        id
        album
        artist
        songName
      }
    }
  `;

  /*
  return a series oh h1s that has the album, artist, and song name
  <div>
    <Query query={FEED_QUERY}>
      {({loading, error, data}) => {
        if (loading) return <div>Loading</div>
        if (error) return <div>Error</div>

        // should use map to get the whole list printed
        return(
          <div>
            {data.songs.map (song =>(
              <h1 key={song.id}> Album:{song.album}, Artist:{song.artist}, Name:{song.songName} </h1>
            ))}
          </div>
        )
      }}
    </Query>
  </div>
  */


class App extends Component {
  render() {
    // if this return doesn't exist, you will get instance.render error
    return (
      <BrowserRouter>
        <div className="content">
          <NavigationBar />
          <Route exact path="/" component={SinglePageApp} />
          <Route exact path="/artists" component={Artists} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

class App extends Component {
  render() {
    // if this return doesn't exist, you will get instance.render error
    return (
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
    )
  }
}

export default App;

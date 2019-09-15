import React, { Component } from 'react';

class App extends Component {
  state = {
    songs: []
  };
  async componentDidMount(){
      try {
        fetch('http://127.0.0.1:8000/')
        .then(res => res.json())
        .then ( (data) => {
          this.setState({songs:data})
        })
      } catch(e){
        console.log(e);
      }
    }
  render(){
    return (
      <div className="App">
        {this.state.songs.map( (song) =>(
          <h3> {song.album}, {song.artist}, {song.song_name} </h3>
        ))}
      </div>
    );
  }
}

export default App;

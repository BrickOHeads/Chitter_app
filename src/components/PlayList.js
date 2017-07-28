import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';
import '../styles/playlistitem.css';

export default class PlayList extends Component {
  constructor (props){
  super(props);
  this.state = {
    songs: []
  }
}

componentDidMount(){
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({songs: data});
        console.log("state: ", this.state.songs);
      })
}
fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
render() {
  let listOfSongs;
  if(this.props.songs) {
   listOfSongs = this.props.songs.map(song => {
    console.log(song)
  return (
   <PlayListItem key={song.title} song={song} />
  );
  });
}
  return (
  <div className="playListContainer">
    <button type="submit" className="updateButton" onClick={this.fetchData}>
      Update List
    </button>
  {listOfSongs}
   <PlayListItem songs={this.state.songs} />
  </div>
  )
  }
}

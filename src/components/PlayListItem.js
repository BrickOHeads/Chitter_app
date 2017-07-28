import React, { Component } from 'react';
import '../styles/playlistitem.css';

export default class PlayListItem extends Component {
  constructor(props){
  super(props);
  }
  render(){
    let songList = this.props.songs.map((song, _id) =>{
      return (
      <li key={_id} className="songs">
        <div className="songData">
          <h4 className="name">Username: {song.username}</h4>
          <h5 className="gender">Artist/Band: {song.artist}</h5>
          <h5 className="eyes">Title: {song.title}</h5>
          <h5>Notes: {song.notes}</h5>
        </div>
      </li>
    )
    })
    return (
      <div className="songsList">
        <ul className="songUl">
          {songList}
        </ul>
      </div>
    )
  }
}

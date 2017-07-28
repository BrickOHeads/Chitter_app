import React, { Component } from 'react';
import '../styles/playlistform.css';

export default class PlayListForm extends Component {
   constructor(props) {
      super(props);
      this.handleName = this.handleName.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleNotes = this.handleNotes.bind(this);

      this.state = {
         songs:[],
         username: '',
         artist: '',
         title: '',
         notes: ''
      }

   }
   handleName(event){
   this.setState({username: event.target.value});
   }
   handleArtist(event){
   this.setState({artist: event.target.value});
   }
   handleTitle(event){
   this.setState({title: event.target.value});
   }
   handleNotes(event){
   this.setState({notes: event.target.value});
   }

   addToList = (e) => {
       e.preventDefault();
       this.setState({username: e.target.value, title: e.target.value, artist: e.target.value, notes: e.target.value});
       let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
         method: "POST",
         body: listItem,
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
     })
     .then(response => {
       console.log(response, "yay");
     }).catch(err => {
       console.log(err, "boo!");
     });
     this.setState({username: '', notes: '', artist: '', title:''});
   }

  render() {
    return (
      <div className= "formContainer">
         <form className="addToPlayList">
            <div>
               <label htmlFor="user">User Name:</label>
               <input  onChange={this.handleName}
                       type="text"
                       className="form-control"
                       id="user"
                       placeholder="Name or User Name"
                       value={this.state.username}/>
            </div>
            <div>
               <label htmlFor="artist">Artist/Band:</label>
               <input  onChange={this.handleArtist}
                       type="text"
                       className="form-control"
                       id="artist"
                       placeholder="Name or User Name"
                       value={this.state.artist}/>
            </div>
            <div>
               <label htmlFor="title">Song Title:</label>
               <input  onChange={this.handleTitle}
                       type="text"
                       className="form-control"
                       id="title"
                       placeholder="Name or User Name"
                       value={this.state.title}/>
            </div>
            <div>
               <label htmlFor="notes">Notes about Song:</label>
               <input  onChange={this.handleNotes}
                       type="text"
                       className="form-control"
                       id="notes"
                       placeholder="Name or User Name"
                       value={this.state.notes}/>
            </div>
            <div>
               <input className="infoSubButton" type="submit" value="Submit" onClick={this.addToList} />
            </div>
         </form>
      </div>

    )
  }
}

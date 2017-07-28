import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import PlaylistItem from './PlayListItem.js';

class App extends Component {
  constructor() {
      super();
      this.state = {
         playlist: [
            {
               username: '',
               artist: '',
               title: '',
               notes:''
            }
         ]
      }
    }
  render() {
  return (
    <div className="App">

      <NavBar />

      <div className= "contentContainer">
        <PlayListForm />
        <PlayList playlist= {this.state.playlist}/>
      </div>

    </div>
   );
  }
}

export default App;

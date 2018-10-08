import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlbumPanel from './components/album/AlbumPanel';
require ('./styles/album.css');

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumPanel></AlbumPanel>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
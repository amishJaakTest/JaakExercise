import React, { Component } from 'react';
import AlbumService from './albumService.js';
import Artist from './../artist/Artist.jsx';


class AlbumPanel extends Component {
  constructor() {
    super();
    this.state = {
      albums: null
    };
  }

  componentDidMount() {
    AlbumService.getAlbums()
      .then((response) => {
        this.setState(
          {
            albums: response
          },
          () => {
            
          }
        );
      })
      .catch(() => {
        this.setState({ albums: null });
      });
  }


  render() {
    if (this.state.albums == null) {
      return null;
    }
    const albums =  JSON.parse(this.state.albums);
    const artist =  albums.data.lookup.artist;
    return (
        <div className="panel">
        <h1>This is to display all of Pink Floyd's albums. </h1>
          <Artist
            name={artist.name}
            periodStart={artist.lifeSpan.begin}
            periodEnd={artist.lifeSpan.end}
            releases={artist.releaseGroups.edges}
          />
        </div>
    );
  };
}

export default AlbumPanel;

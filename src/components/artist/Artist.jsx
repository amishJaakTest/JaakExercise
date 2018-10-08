
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReleasePropTypes from './releasePropType';
import Release from './../release/Release.jsx';

class Artist extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      periodStart: PropTypes.string,
      periodEnd: PropTypes.string,
      releases: PropTypes.arrayOf(PropTypes.shape(ReleasePropTypes))
    };
  }

  render() {
    return(
    <div>
        <div className="row">
            Name: {this.props.name}
        </div>
        <div className="row">
            Period: {this.props.periodStart} - {this.props.periodEnd}
        </div>
        <div className="row">
            Album Releases:
        </div>
        
        <div className="row">
            {this.props.releases.map(release => 
              <Release id={release.node.id}
              title={release.node.title}
              firstReleaseDate = {release.node.firstReleaseDate}
              key = {release.node.id}
              coverArtArchive = {release.node.coverArtArchive.front}
              />  
              )}
        </div>
    </div>
    )}

}

export default Artist;
  
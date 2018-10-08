
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Release extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  static get propTypes() {
    return {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        firstReleaseDate: PropTypes.string.isRequired,
        coverArtArchive : PropTypes.string.isRequired
    };
  }

  render() {
    return(
        <div className="releaseRow">
        <div>
           Title: {this.props.title}
        </div>
        <div>
            First Release Date: {this.props.firstReleaseDate}
        </div>
        <div>
            <img src={this.props.coverArtArchive} ></img>
        </div>
    </div>
    )}

}

export default Release;
  
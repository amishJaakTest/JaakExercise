import PropTypes from 'prop-types';

export default {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        firstReleaseDate: PropTypes.string.isRequired,
        coverArtArchive: PropTypes.shape({
            front:  PropTypes.string.isRequired
        })
    })
};

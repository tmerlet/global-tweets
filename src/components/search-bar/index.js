import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@atlaskit/css-reset';
import './styles.scss';

export class SearchBar extends Component {
  state = { queery: '', tweets: [] };

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search Twitter"
          onChange={this.props.onChange}
          value={this.props.queery}
          className="search-input"
        />
        <button type="submit" className="submit">
          <span role="img" aria-label="Search" className="image">
            &#128269;
          </span>
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  queery: PropTypes.string.isRequired
};

export default SearchBar;

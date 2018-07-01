import React from 'react';
import PropTypes from 'prop-types';

import './RepoCard.css';

const propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    fork: PropTypes.bool,
    stargazers_count: PropTypes.number,
    updated_at: PropTypes.string,
    language: PropTypes.string,
  }),
};

class RepoCard extends React.Component {
  render() {
    const {
      name,
      description,
      fork,
      stargazers_count,
      updated_at,
      language,
    } = this.props.cardData;

    return (
      <div className="repo-card-root">
        <div className="top-bar">
          <div className="name">
            {name}
          </div>
          <div className="language">
            {language}
          </div>
          <div className="stars">
            {stargazers_count}
          </div>
          <div className="update_date">
            {new Date(updated_at).toLocaleString()}
          </div>
        </div>
        <div className="bottom-bar">
          <div>
            {description}
          </div>
          <div>
            Stars: {stargazers_count}
          </div>
        </div>
      </div>
    );
  }
}

RepoCard.propTypes = propTypes;

export default RepoCard;
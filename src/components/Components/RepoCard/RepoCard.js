import React from 'react';

import './RepoCard.css';

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
          {description}
        </div>
      </div>
    );
  }
}

export default RepoCard;
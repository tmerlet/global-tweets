import React from 'react';
import './styles.scss';

const TweetTile = ({ tweet }) => {
  const tweetDate = new Date(tweet.createdAt).toLocaleDateString();

  console.log('tweetDate', tweetDate);

  return (
    <div className="tweet-tile">
      <div className="image">
        <img src={tweet.user.profileImageUrlHttps} alt="user" />
      </div>
      <div className="details-container">
        <div className="title">
          <span className="name">{tweet.user.name}</span>
          <span className="handle">{`@${tweet.user.screenName}`}</span>
          <span className="date">{tweetDate}</span>
        </div>
        <div className="tweet">{tweet.text}</div>
      </div>
      <br />
    </div>
  );
};

export default TweetTile;

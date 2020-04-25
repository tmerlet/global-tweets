import React from 'react';
import TweetTile from '../tweet-tile';
import './styles.scss';

const TweetContainer = ({ tweets = [] }) => {
  console.log('tweets: ', tweets);
  return (
    <div className="tweet-container">
      {tweets.map((tweet) => (
        <TweetTile tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetContainer;

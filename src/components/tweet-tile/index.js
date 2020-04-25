import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles.scss';

const TweetTile = ({ tweet, id, index }) => {
  const tweetDate = new Date(tweet.createdAt).toLocaleDateString();

  console.log('tweetDate', tweetDate);

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <div
          className="tweet-tile"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default TweetTile;

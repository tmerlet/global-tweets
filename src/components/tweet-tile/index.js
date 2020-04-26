import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles.scss';

const TweetTile = ({ tweet, id, index }) => {
  const tweetDate = new Date(tweet.createdAt).toLocaleDateString();

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided, snapshot) => (
        <div
          className={`${snapshot.isDragging ? 'is-dragging' : ''} tweet-tile`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="image">
            <img src={tweet.user.profileImageUrlHttps} alt="user" />
          </div>
          <div className="details-container">
            <div className="title">
              <div>
                <span className="name">{tweet.user.name}</span>
                <span className="handle">{`@${tweet.user.screenName}`}</span>
              </div>
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

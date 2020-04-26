import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import './styles.scss';

const TweetTile = ({ tweet, id, index }) => {
  const tweetDate = new Date(tweet.createdAt).toLocaleDateString();

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided, snapshot) => (
        <article
          className={`${snapshot.isDragging ? 'is-dragging' : ''} tweet-tile`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <aside className="image">
            <img src={tweet.user.profileImageUrlHttps} alt="user" />
          </aside>
          <div className="details-container">
            <header className="title">
              <div>
                <span className="name">{tweet.user.name}</span>
                <span className="handle">{`@${tweet.user.screenName}`}</span>
              </div>
              <span className="date">{tweetDate}</span>
            </header>
            <p className="tweet">{tweet.text}</p>
          </div>
          <br />
        </article>
      )}
    </Draggable>
  );
};

TweetTile.propTypes = {
  tweet: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default TweetTile;

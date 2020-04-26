import React from 'react';
import { PropTypes } from 'prop-types';
import TweetTile from '../tweet-tile';
import { Droppable } from 'react-beautiful-dnd';
import './styles.scss';

const TweetContainer = ({ tweets = [], droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          className="tweet-container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tweets.map((tweet, index) => (
            <TweetTile
              key={tweet.id}
              id={tweet.id}
              tweet={tweet}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TweetContainer.propTypes = {
  tweets: PropTypes.array.isRequired,
  droppableId: PropTypes.string.isRequired
};

export default TweetContainer;

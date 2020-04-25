import React from 'react';
import TweetTile from '../tweet-tile';
import { Droppable } from 'react-beautiful-dnd';
import './styles.scss';

const TweetContainer = ({ tweets = [], droppableId }) => {
  console.log('tweets: ', tweets);
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

export default TweetContainer;

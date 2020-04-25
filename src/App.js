import React, { Component } from 'react';
import Header from './components/header';
import TweetsWrapper from './components/tweets-wrapper';
import TweetContainer from './components/tweet-container';
import { testData } from './test-data';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: testData.tweets,
      savedTweets: []
    };
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const tweet = this.state.tweets.find(
      (tweet) => tweet.id === parseInt(draggableId)
    );

    const newTweets = [...this.state.tweets];
    newTweets.splice(source.index, 1);
    newTweets.splice(destination.index, 0, tweet);

    const newState = {
      ...this.state,
      tweets: newTweets
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TweetsWrapper>
            <TweetContainer tweets={this.state.tweets} droppableId="tweets" />
            <TweetContainer
              tweets={this.state.savedTweets}
              droppableId="savedTweets"
            />
          </TweetsWrapper>
        </DragDropContext>
      </div>
    );
  }
}

export default App;

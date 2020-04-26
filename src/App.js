import React, { Component } from 'react';
import Header from './components/header';
import TweetContainer from './components/tweet-container';
import SearchBar from './components/search-bar';
import { DragDropContext } from 'react-beautiful-dnd';
import fetch from 'node-fetch';
import './App.scss';

class App extends Component {
  state = {
    tweets: [],
    savedTweets: [],
    searchQueery: ''
  };

  componentDidMount() {
    if (localStorage.hasOwnProperty('savedTweets')) {
      let value = localStorage.getItem('savedTweets');
      value = JSON.parse(value);
      this.setState({ savedTweets: value });
    }
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const tweet = this.state[source.droppableId].find(
      (tweet) => tweet.id === parseInt(draggableId)
    );

    const newState = { ...this.state };
    newState[source.droppableId].splice(source.index, 1);
    newState[destination.droppableId].splice(destination.index, 0, tweet);

    this.setState(newState);
    localStorage.setItem('savedTweets', JSON.stringify(newState.savedTweets));
  };

  handleSearchChange = (e) => {
    this.setState({ searchQueery: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!this.state.searchQueery) {
      return;
    }
    fetch(
      `https://cors-anywhere.herokuapp.com/http://tweetsaver.herokuapp.com/?q=${this.state.searchQueery}&count=10`
    )
      .then((res) => res.json())
      .then((json) => this.setState({ searchQueery: '', tweets: json.tweets }))
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="columns-container">
            <div className="column">
              <SearchBar
                onChange={this.handleSearchChange}
                onSubmit={this.handleSearchSubmit}
                queery={this.state.searchQueery}
              />
              <TweetContainer tweets={this.state.tweets} droppableId="tweets" />
            </div>
            <div className="column">
              <h4 className="column-title">Saved Tweets</h4>
              <TweetContainer
                tweets={this.state.savedTweets}
                droppableId="savedTweets"
              />
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default App;

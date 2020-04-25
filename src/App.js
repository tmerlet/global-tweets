import React, { Component } from 'react';
import Header from './components/header';
import TweetsWrapper from './components/tweets-wrapper';
import TweetContainer from './components/tweet-container';
import { testData } from './test-data';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = testData;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TweetsWrapper>
          <TweetContainer tweets={testData.tweets} />
          <TweetContainer />
        </TweetsWrapper>
      </div>
    );
  }
}

export default App;

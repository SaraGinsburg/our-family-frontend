import React, { Component } from 'react';
import Siblings from './Siblings';
import './App.css';

class App extends React.Component {
  state = {
    siblings: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/siblings')
      .then(response => response.json())
      .then(siblings => console.log(siblings))
    .catch(error => console.log('Authorization failed : ' + error.message));
    // .then(siblings => this.setState({ siblings }))
      // .then(res => res.text())          // convert to plain text
      // .then(text => console.log(text))  // then log it out
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Siblings siblings={this.state.siblings} />
      </div>
    );
  }
}

export default App;

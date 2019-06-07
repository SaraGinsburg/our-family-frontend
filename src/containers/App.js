import React, { Component } from 'react';
import Siblings from './Siblings';
import './App.css';

class App extends React.Component {
  state = {
    siblings: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/API/V1/siblings', {
      mode: 'cors',
        credentials: 'include'
    })
      .then(response => response.json())
      .then(siblings => this.setState({ siblings }))
    .catch(error => console.log('Authorization failed : ' + error.message));
    // .then(siblings => console.log(siblings))
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

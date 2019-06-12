import React, { Component } from 'react';
import Siblings from './Siblings';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      siblings: []
    }
  }

  componentDidMount() {
    fetch(`$(API_URL)/siblings`,  {mode: 'cors'})
      .then(response => response.json())
      .then(siblings => this.setState({ siblings }))
    .catch(error => console.log('Authorization failed : ' + error.message));
    // .then(siblings => console.log(siblings))
    // .then(res => res.text())          // convert to plain text
    // .then(text => console.log(text))  // then log it out
  }

  render() {
    return (
      <div className="App">
        <Siblings siblings={this.state.siblings} />
      </div>
    );
  }
}

export default App;

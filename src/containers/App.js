import React from 'react';
import './App.css';
import Siblings from './Siblings';;

class App extends React.Component {

  state = {
    siblings: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/siblings')
      .then(response => response.json())
      .then(siblings => this.setState({ siblings }))
  }

  render(){

    console.log(this.state)
    return (
      <div className="App">
        <Siblings siblings={this.state.siblings} />
      </div>
    );
  }
}


export default App;

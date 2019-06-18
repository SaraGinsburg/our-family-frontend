import React  from 'react';
import './App.css';
import Login from  '../components/Login'
import Logout from  '../components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Logout /> : <Login />
      // <div className="App">
      //   <Users users={this.state.users} />
      // </div>
    );
  }
}

export default App;

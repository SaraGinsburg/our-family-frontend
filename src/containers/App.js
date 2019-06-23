import React  from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import  NavBar  from '../components/NavBar'
import  Login  from '../components/Login'
import Logout from '../components/Logout'
import Users from '../components/Users'
// import MainContainer from '../components/MainContainer'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Logout/>
        <NavBar/>
          <Router>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/users' component={Users}/>
          </Router>
      </div>
    );
  }
}



export default connect(null, {getCurrentUser})(App);

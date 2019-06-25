import React  from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import  NavBar  from '../components/NavBar'
import  Login  from '../components/Login'
import Logout from '../components/Logout'
import Welcome from '../components/Welcome'
import Users from '../components/Users'
import MainContainer from '../components/MainContainer'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="App">
        {this.props.currentUser ?   <Logout/> : <Login/> }


        <Welcome/>
          <Router>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/users' component={Users}/>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(App);

import React  from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import  NavBar  from '../components/NavBar'
import  Login  from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import MyMilestones from '../components/MyMilestones'
import Welcome from '../components/Welcome'
import Users from '../components/Users'
import MainContainer from '../components/MainContainer'
import { Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    console.log("in App.js", this.props.currentUser)
    return (
      <div className="App">
        {this.props.currentUser ?   <Logout/> : <Login/> }
        <NavBar/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/my-milestones' component={MyMilestones}/>
          <Route exact path='/signup' component={Signup}/>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps, {getCurrentUser})(App);

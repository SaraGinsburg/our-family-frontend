import React  from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import  NavBar  from '../components/NavBar'
import Home from '../components/Home'
import  Login  from '../components/Login'
import Logout from '../components/Logout'
import Signup from '../components/Signup'
import MyMilestones from '../components/MyMilestones'
import NewMilestoneForm from '../components/NewMilestoneForm'
// import Welcome from '../components/Welcome'
// import Users from '../components/Users'
import MainContainer from '../components/MainContainer'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import UserCard from '../components/UserCard'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    // const { loggedIn } = this.props
    return (
      // <div className="App">
        // { //loggedIn ?  <NavBar location={this.props.location}/>  : <Home/> }

          <UserCard user= {this.props.currentUser} />
          //<//MyMilestones />
        // <Switch>
        //   <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
        //   <Route exact path='/login' component={Login}/>
        //   <Route exact path='/milestones' component={MyMilestones}/>
        //   <Route exact path='/milestones/new' component={NewMilestoneForm}/>
        // </Switch>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));

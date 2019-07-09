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
import MilestoneForm from '../components/MilestoneForm'
import MilestoneCard from '../components/MilestoneCard'
// import Welcome from '../components/Welcome'
// import Users from '../components/Users'
import MainContainer from '../components/MainContainer'
import NewMilestoneFormWrapper from '../components/NewMilestoneFormWrapper'
import EditMilestoneFormWrapper from '../components/EditMilestoneFormWrapper'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { setFormDataForEdit } from '../actions/milestoneForm'

import UserCard from '../components/UserCard'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, milestones, setFormDataForEdit } = this.props
    return (
      <div className="App">
       { loggedIn ?  <NavBar location={this.props.location}/>  : <Home/> }

          <UserCard user= {this.props.currentUser} />

        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/milestones' component={MyMilestones}/>
          <Route exact path='/milestones/new' component={NewMilestoneFormWrapper}/>
          <Route exact path='/milestones/:id' render={props=> {
            const milestone = milestones.find(milestone => milestone.id === props.match.params.id)
            console.log(milestone)
            return <MilestoneCard milestone={milestone} {...props}/>}}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser,
    milestones: state.MyMilestones
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, setFormDataForEdit})(App));

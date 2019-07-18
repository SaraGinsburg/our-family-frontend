import React  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import  NavBar  from '../components/NavBar'
import Home from '../components/Home'
import  Login  from '../components/Login'
import Signup from '../components/Signup'
import MyMilestones from '../components/MyMilestones'
import MilestoneCard from '../components/MilestoneCard'
import NewMilestoneFormWrapper from '../components/NewMilestoneFormWrapper'
import EditMilestoneFormWrapper from '../components/EditMilestoneFormWrapper'
import { Route, Switch, withRouter } from 'react-router-dom'
import UserCard from '../components/UserCard'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, milestones } = this.props
    return (
      <div className="App">
       { loggedIn ?  <NavBar location={this.props.location}/>  : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/milestones' component={MyMilestones}/>
          <Route exact path='/milestones/new' component={NewMilestoneFormWrapper}/>
          <Route exact path='/milestones/:id/edit' render={props=> {
            const milestone = milestones.find(milestone => milestone.id === props.match.params.id)
            return <EditMilestoneFormWrapper milestone={milestone} {...props}/>}}/>
          <Route exact path='/milestones/:id/' render={props => {
            const milestone = milestones.find(milestone => milestone.id === props.match.params.id)
            console.log(milestone)
            return <MilestoneCard milestone={milestone} {...props}/>
          }}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser,
    milestones: state.myMilestones
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));

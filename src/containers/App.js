import React  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { getUsers } from '../actions/users'
import  NavBar  from '../components/NavBar'
import Home from '../components/Home'
import Users from '../components/Users'
import  Login  from '../components/Login'
import Signup from '../components/Signup'
import MyMilestones from '../components/MyMilestones'
import MilestoneCard from '../components/MilestoneCard'
import NewMilestoneFormWrapper from '../components/NewMilestoneFormWrapper'
import EditMilestoneFormWrapper from '../components/EditMilestoneFormWrapper'

import MyKindWords from '../components/MyKindWords'
import KindWordCard from '../components/KindWordCard'
import NewKindWordFormWrapper from '../components/NewKindWordFormWrapper'
import EditKindWordFormWrapper from '../components/EditKindWordFormWrapper'

import MilestoneContainer from '../components/MilestoneContainer'
import NiceDeedContainer from '../components/NiceDeedContainer'
import KindWordContainer from '../components/KindWordContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import UserCard from '../components/UserCard'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getUsers()
  }

  render() {
    const { loggedIn, milestones, currentUser, kindWords } = this.props
    return (
      <div className="App">
       { loggedIn ?
         <>
           <NavBar location={this.props.location}/>
           <UserCard user= {currentUser} />
           <MilestoneContainer loggedIn={loggedIn} location={this.props.location}/>
           <NiceDeedContainer loggedIn={loggedIn} location={this.props.location}/>
           <KindWordContainer loggedIn={loggedIn} location={this.props.location}/>
         </>
         :
         <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/users' component={Users}/>
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

          <Route exact path='/kindWords' component={MyKindWords}/>
          <Route exact path='/kindWords/new' component={NewKindWordFormWrapper}/>
          <Route exact path='/kindWords/:id/edit' render={props=> {
            const kindWord = kindWords.find(kindWord => kindWord.id === props.match.params.id)
            return <EditKindWordFormWrapper kindWord={kindWord} {...props}/>}}/>
          <Route exact path='/kindWords/:id/' render={props => {
            const kindWord = kindWords.find(kindWord => kindWord.id === props.match.params.id)
            console.log(kindWord)
            return <KindWordCard kindWord={kindWord} {...props}/>
          }}/>

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
    milestones: state.myMilestones,
    kindWords: state.MyKindWords,
    users: state.users
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getUsers})(App));

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

import MyNiceDeeds from '../components/MyNiceDeeds'
import NiceDeedCard from '../components/NiceDeedCard'
import NewNiceDeedFormWrapper from '../components/NewNiceDeedFormWrapper'
import EditNiceDeedFormWrapper from '../components/EditNiceDeedFormWrapper'

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
    const { loggedIn, milestones, currentUser, kindWords, niceDeeds, users} = this.props
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
            // The library passes in a prop called match into every route that is rendered.
            // Inside this match object is another object called params . This holds all matching params where the key is the name we
            // specified when creating the route and the value is the actual value in the URL.
            console.log(milestone)
            return <MilestoneCard milestone={milestone} {...props}/>
          }}/>

          <Route exact path='/kindWords' component={MyKindWords}/>
          <Route exact path='/kindWords/new' component={NewKindWordFormWrapper}/>

          <Route exact path='/kindWords/:id/edit' render={props=> {
            const kindWord = kindWords.find(kindWord => kindWord.id === props.match.params.id)
            return <EditKindWordFormWrapper kindWord={kindWord} {...props}/>            
          }}/>
          <Route exact path='/kindWords/:id/' render={props => {
            const kindWord = kindWords.find(kindWord => kindWord.id === props.match.params.id)
            // console.log("kindword", kindWord["attributes"])
            // console.log("kindword", kindWord, "who is the kind child?", "kindWord.id", kindWord["attributes"]["who"])
            // console.log("users - who are you?", users)
            // const who = users.find(user => user.id ===  kindWord.attributes.who)
            // console.log("who", dataToBeSent.who)
            //
            // <UserCard user={who} />
            //
            console.log("props in App.js", props)
            return (
              <>
                <KindWordCard kindWord={kindWord} {...props}/>

              </>
            )

          }}/>

          <Route exact path='/niceDeeds' component={MyNiceDeeds}/>
          <Route exact path='/niceDeeds/new' component={NewNiceDeedFormWrapper}/>
          <Route exact path='/niceDeeds/:id/edit' render={props=> {
            const niceDeed = niceDeeds.find(niceDeed => niceDeed.id === props.match.params.id)
            return <EditNiceDeedFormWrapper niceDeed={niceDeed} {...props}/>}}/>
          <Route exact path='/niceDeeds/:id/' render={props => {
            const niceDeed = niceDeeds.find(niceDeed => niceDeed.id === props.match.params.id)
            return <NiceDeedCard niceDeed={niceDeed} {...props}/>
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
    kindWords: state.myKindWords,
    niceDeeds: state.myNiceDeeds,
    users: state.users.users
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getUsers})(App));

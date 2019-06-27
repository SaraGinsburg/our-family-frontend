import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'


const  NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser ? <strong>Welcome, {currentUser.attributes.first_name}</strong> : "" }
      { currentUser ? <Logout/> : <Login/>}
      
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
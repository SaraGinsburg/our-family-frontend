import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

const Logout = ({logout}) => {
  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out" />
    </form>
  )
}


// because of connect, logout is passed as props
export default connect(null, { logout } )(Logout)

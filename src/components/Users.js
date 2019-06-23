import React from 'react'
import UserCard from './UserCard'
import { connect } from 'react-redux'

const Users = props => {
  const UserCards = props.users.length > 0 ?
  props.users.map(u => <UserCard user={u} key={u.id}/>) :
  null

  return (
    UserCards
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(Users)

import React from 'react'
import KindWordForm from './KindWordForm'
import { createKindWord } from '../actions/myKindWords'
import { getUsers } from '../actions/users'

import { connect } from 'react-redux'
import UserCard from './UserCard'


const NewKindWordFormWrapper = ({ history, createKindWord, who}) => {

  const handleSubmit = (formData, userId) => {
    console.log("in NewKindWordFormWrapper userId", userId)
    createKindWord({
      ...formData,
      userId
    }, history)
  }

  return (

    <div>
      <KindWordForm history={history} handleSubmit={handleSubmit} />
      {this.props.whoId === "" ? "" : <UserCard user = {users.find(user => user.id === this.props.whoId)} />}

    </div>
  )
}

const mapStateToProps = state => {
  const whoId = state.KindWordForm.who ? state.KindWordForm.who : ""

  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps, { createKindWord, getUsers })(NewKindWordFormWrapper);

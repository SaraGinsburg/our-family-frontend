import React from 'react'
import KindWordForm from './KindWordForm'
import { createKindWord } from '../actions/myKindWords'
import { getUsers } from '../actions/users'

import { connect } from 'react-redux'
import UserCard from './UserCard'


const NewKindWordFormWrapper = ({ history, createKindWord, who, whoId, users}) => {

  const handleSubmit = (formData, userId, whoId) => {
    createKindWord({
      ...formData,
      userId,
      whoId
    }, history)
  }

  return (

    <div>
      <KindWordForm history={history} handleSubmit={handleSubmit} />
      {whoId === "" ? "" : <UserCard user = {users.find(user => user.id === whoId)} />}

    </div>
  )
}

const mapStateToProps = state => {

  return {
    users: state.users.users,
    whoId: state.kindWordForm.who
  }
}

export default connect(mapStateToProps, { createKindWord, getUsers })(NewKindWordFormWrapper);

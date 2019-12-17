import React from 'react'
import KindWordForm from './KindWordForm'
import { createKindWord } from '../actions/myKindWords'
import { getUsers } from '../actions/users'

import { connect } from 'react-redux'
import UserCard from './UserCard'
import

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
      {whoId == "" ? "" : <UserCard user= {who} />}

    </div>
  )
}

const mapStateToProps = state => {
  const whoId = state.KindWordForm.who ? state.KindWordForm.who : ""
  const who = Users.find(user => user.id === whoId)

  return {
    who
  }
}

export default connect(mapStateToProps, { createKindWord, getUsers })(NewKindWordFormWrapper);

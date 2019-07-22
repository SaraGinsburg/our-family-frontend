import React from 'react'
import KindWordForm from './KindWordForm'
import { createKindWord } from '../actions/myKindWords'
import { connect } from 'react-redux'

const NewKindWordFormWrapper = ({ history, createKindWord }) => {

  const handleSubmit = (formData, userId) => {
    console.log("in NewKindWordFormWrapper userId", userId)
    createKindWord({
      ...formData,
      userId
    }, history)
  }

  return <KindWordForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createKindWord })(NewKindWordFormWrapper);
